import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Bell,
  CalendarCheck,
  Clock3,
  Heart,
  MapPin,
  Search,
  Trophy,
} from "lucide-react";
import { AppShell } from "../../components/platform/AppShell";
import { getClientNav } from "../../components/platform/navItems";
import {
  Avatar,
  Panel,
  StatCard,
  StatusBadge,
  initialsOf,
} from "../../components/platform/primitives";
import { useApp } from "../../context/app";
import { formatDateLong, toISODate } from "../../lib/format";

export const Route = createFileRoute("/app/")({
  component: ClientDashboard,
});

export default function ClientDashboard() {
  const { session, notifications, favorites, reservations, venueById, teams, myTeamId } = useApp();
  const name = session?.name ?? "Rafael Mendonça";
  const today = toISODate(new Date());
  const unread = notifications.filter((item) => !item.read).length;
  const myReservations = reservations.filter((item) => item.clientName === name);
  const upcoming = myReservations
    .filter(
      (item) => item.date >= today && (item.status === "confirmed" || item.status === "pending"),
    )
    .sort((a, b) => `${a.date}${a.time}`.localeCompare(`${b.date}${b.time}`));
  const nextMatch = upcoming[0];
  const myTeam = teams.find((team) => team.id === myTeamId);

  return (
    <AppShell
      role="client"
      active="/app"
      title={`Olá, ${name.split(" ")[0]}!`}
      subtitle="Aqui está o resumo da sua semana na areninha"
      nav={getClientNav(unread)}
    >
      <div style={{ display: "grid", gap: 18 }}>
        <div className="grid-stats">
          <StatCard
            label="Próximas reservas"
            value={String(upcoming.length)}
            hint="Confirmadas e aguardando"
            icon={<CalendarCheck size={19} aria-hidden="true" />}
          />
          <StatCard
            label="Areninhas favoritas"
            value={String(favorites.length)}
            hint="Salvas para comparar"
            icon={<Heart size={19} aria-hidden="true" />}
          />
          <StatCard
            label="Notificações"
            value={String(unread)}
            hint="Não lidas"
            icon={<Bell size={19} aria-hidden="true" />}
          />
          <StatCard
            label="Meu time"
            value={myTeam?.initials ?? "—"}
            hint={`${myTeam?.players.length ?? 0} jogadores no elenco`}
            icon={<Trophy size={19} aria-hidden="true" />}
            accent
          />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 18,
          }}
        >
          <section
            className="panel panel-dark"
            style={{
              background: "var(--forest-depths)",
              color: "var(--pure-white)",
              overflow: "hidden",
            }}
          >
            <div className="panel-body">
              <div className="row-between">
                <span
                  style={{
                    color: "var(--lichen-sage)",
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  Próxima partida
                </span>
                <span className="live-dot" style={{ color: "var(--electric-sprout)" }}>
                  {nextMatch ? "Agendada" : "Sem jogos"}
                </span>
              </div>
              {nextMatch ? (
                <>
                  <div style={{ display: "flex", gap: 12, alignItems: "center", margin: "18px 0" }}>
                    <span className="icon-tile">
                      <MapPin size={20} aria-hidden="true" />
                    </span>
                    <div>
                      <strong style={{ display: "block", fontSize: 18 }}>
                        {venueById(nextMatch.venueId)?.name ?? "Areninha"}
                      </strong>
                      <small style={{ color: "var(--lichen-sage)" }}>
                        {formatDateLong(nextMatch.date)} · {nextMatch.time}
                      </small>
                    </div>
                  </div>
                  <div className="mini-pitch" aria-hidden="true">
                    <span className="center-line" />
                    <span className="center-circle" />
                    <span className="player-dot dot-a" />
                    <span className="player-dot dot-b" />
                    <span className="player-dot dot-c" />
                    <span className="player-dot dot-d" />
                    <span className="player-dot dot-e" />
                    <span className="player-dot dot-f" />
                  </div>
                  <div className="row-between" style={{ marginTop: 16 }}>
                    <span style={{ color: "var(--lichen-sage)", fontSize: 13 }}>
                      <Clock3 size={14} aria-hidden="true" /> {nextMatch.fieldName} · código{" "}
                      {nextMatch.code}
                    </span>
                    <Link
                      to="/app/reservas"
                      className="button p-button button-primary no-underline"
                      style={{ minHeight: 38, width: "auto" }}
                    >
                      Ver reserva <ArrowRight size={15} aria-hidden="true" />
                    </Link>
                  </div>
                </>
              ) : (
                <div style={{ padding: "26px 0" }}>
                  <strong style={{ display: "block", fontSize: 18, marginBottom: 6 }}>
                    Nenhuma partida marcada
                  </strong>
                  <span style={{ color: "var(--pale-fern)", fontSize: 14 }}>
                    Encontre uma areninha livre e coloque a bola pra rolar.
                  </span>
                  <div style={{ marginTop: 18 }}>
                    <Link
                      to="/buscar"
                      className="button p-button button-primary no-underline"
                      style={{ width: "auto" }}
                    >
                      <Search size={16} aria-hidden="true" /> Encontrar areninha
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </section>

          <div style={{ display: "grid", gap: 18, alignContent: "start" }}>
            <Panel
              title="Próximas reservas"
              action={
                <Link
                  to="/app/reservas"
                  style={{ fontSize: 13, fontWeight: 650, color: "var(--deep-verdant)" }}
                >
                  Ver todas
                </Link>
              }
            >
              {upcoming.length === 0 ? (
                <p style={{ margin: 0, color: "var(--lichen-sage)", fontSize: 14 }}>
                  Nenhuma reserva futura. Que tal agendar a próxima pelada?
                </p>
              ) : (
                <div style={{ display: "grid", gap: 10 }}>
                  {upcoming.slice(0, 3).map((item) => (
                    <div
                      key={item.id}
                      className="row-between"
                      style={{
                        padding: "12px 14px",
                        borderRadius: 14,
                        background: "var(--bone-white)",
                      }}
                    >
                      <div>
                        <strong
                          style={{ display: "block", fontSize: 14, color: "var(--forest-depths)" }}
                        >
                          {venueById(item.venueId)?.name ?? "Areninha"}
                        </strong>
                        <span style={{ color: "var(--lichen-sage)", fontSize: 12.5 }}>
                          {item.date.split("-").reverse().join("/")} · {item.time} ·{" "}
                          {item.fieldName}
                        </span>
                      </div>
                      <StatusBadge status={item.status} />
                    </div>
                  ))}
                </div>
              )}
            </Panel>

            <Panel
              title="Notificações recentes"
              action={
                <Link
                  to="/app/notificacoes"
                  style={{ fontSize: 13, fontWeight: 650, color: "var(--deep-verdant)" }}
                >
                  Central
                </Link>
              }
            >
              <div style={{ display: "grid", gap: 12 }}>
                {notifications.slice(0, 3).map((item) => (
                  <div key={item.id} style={{ display: "flex", gap: 12 }}>
                    <Avatar initials={initialsOf(item.title)} size="sm" />
                    <div>
                      <strong
                        style={{ display: "block", fontSize: 13.5, color: "var(--forest-depths)" }}
                      >
                        {item.title}
                      </strong>
                      <span
                        style={{ color: "var(--lichen-sage)", fontSize: 12.5, lineHeight: 1.5 }}
                      >
                        {item.message}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Panel>
          </div>
        </div>

        <Panel title="Acessos rápidos">
          <div
            className="grid-cards"
            style={{ gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))" }}
          >
            {[
              { to: "/buscar", label: "Encontrar areninha", icon: <Search size={19} /> },
              { to: "/app/reservas", label: "Minhas reservas", icon: <CalendarCheck size={19} /> },
              { to: "/app/time", label: "Meu time", icon: <Trophy size={19} /> },
              { to: "/app/favoritos", label: "Favoritos", icon: <Heart size={19} /> },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="button p-button button-outline no-underline"
                style={{ justifyContent: "flex-start", minHeight: 56 }}
              >
                {item.icon} {item.label}
              </Link>
            ))}
          </div>
        </Panel>
      </div>
    </AppShell>
  );
}
