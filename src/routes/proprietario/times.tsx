import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarCheck, Crown, Trophy, UsersRound } from "lucide-react";
import { AppShell } from "../../components/platform/AppShell";
import { getOwnerNav } from "../../components/platform/navItems";
import { Avatar, Panel, initialsOf } from "../../components/platform/primitives";
import { useApp } from "../../context/app";
import { ownerVenueId } from "../../mocks";
import { formatDate, toISODate } from "../../lib/format";

export const Route = createFileRoute("/proprietario/times")({
  component: OwnerTeams,
});

function OwnerTeams() {
  const { ownerNotifications, teams, reservations } = useApp();
  const unread = ownerNotifications.filter((item) => !item.read).length;
  const today = toISODate(new Date());

  return (
    <AppShell
      role="owner"
      active="/proprietario/times"
      title="Times"
      subtitle="Times que já reservaram na sua areninha"
      nav={getOwnerNav(unread)}
    >
      <div className="grid-cards">
        {teams.map((team) => {
          const teamReservations = reservations.filter(
            (item) => item.venueId === ownerVenueId && item.teamId === team.id,
          );
          const played = teamReservations.filter(
            (item) => item.status === "finished" || item.date < today,
          );
          const next = teamReservations
            .filter((item) => item.date >= today && item.status === "confirmed")
            .sort((a, b) => a.date.localeCompare(b.date))[0];
          const last = [...teamReservations]
            .filter((item) => item.date < today)
            .sort((a, b) => b.date.localeCompare(a.date))[0];

          return (
            <article key={team.id} className="panel" style={{ boxShadow: "none" }}>
              <div className="panel-body" style={{ display: "grid", gap: 14 }}>
                <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
                  <Avatar initials={team.initials} size="lg" />
                  <div>
                    <strong
                      style={{ display: "block", color: "var(--forest-depths)", fontSize: 17 }}
                    >
                      {team.name}
                    </strong>
                    <span
                      style={{
                        display: "inline-flex",
                        gap: 6,
                        color: "var(--lichen-sage)",
                        fontSize: 13,
                      }}
                    >
                      <Crown size={13} aria-hidden="true" /> {team.captain}
                    </span>
                  </div>
                </div>

                <div className="arena-tags">
                  <em>
                    <UsersRound size={12} aria-hidden="true" /> {team.players.length} jogadores
                  </em>
                  <em>
                    <CalendarCheck size={12} aria-hidden="true" /> {teamReservations.length}{" "}
                    reservas
                  </em>
                  <em>
                    <Trophy size={12} aria-hidden="true" /> {played.length} partidas
                  </em>
                </div>

                <div style={{ display: "grid", gap: 6, fontSize: 13 }}>
                  <span style={{ color: "var(--lichen-sage)" }}>
                    Último jogo:{" "}
                    <strong style={{ color: "var(--moss-shadow)" }}>
                      {last ? formatDate(last.date) : "—"}
                    </strong>
                  </span>
                  <span style={{ color: "var(--lichen-sage)" }}>
                    Próximo jogo:{" "}
                    <strong style={{ color: "var(--deep-verdant)" }}>
                      {next ? `${formatDate(next.date)} · ${next.time}` : "sem agendamento"}
                    </strong>
                  </span>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {team.players.slice(0, 6).map((player) => (
                    <span
                      key={player.id}
                      className="chip"
                      style={{ padding: "5px 10px", fontSize: 11.5 }}
                    >
                      {player.name.split(" ")[0]}
                    </span>
                  ))}
                  {team.players.length > 6 && (
                    <span
                      className="chip chip-ghost"
                      style={{ padding: "5px 10px", fontSize: 11.5 }}
                    >
                      +{team.players.length - 6}
                    </span>
                  )}
                </div>

                <div className="arena-foot">
                  <span style={{ color: "var(--lichen-sage)", fontSize: 12.5 }}>
                    Elenco de {initialsOf(team.captain)}
                  </span>
                  <Link
                    to="/proprietario/agenda"
                    className="chip active"
                    style={{ textDecoration: "none" }}
                  >
                    Ver na agenda
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <Panel title="Observação" bodyClass="panel-body">
        <p style={{ margin: 0, color: "var(--lichen-sage)", fontSize: 13.5 }}>
          Os elencos são geridos na área do time (painel do cliente) e refletem aqui em tempo real
          nesta demonstração.
        </p>
      </Panel>
    </AppShell>
  );
}
