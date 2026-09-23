import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { CalendarX2, Crown, Plus, Shield, Trash2, UserPlus } from "lucide-react";
import { AppShell } from "../../components/platform/AppShell";
import { getClientNav } from "../../components/platform/navItems";
import { Avatar, Panel, StatusBadge, initialsOf } from "../../components/platform/primitives";
import { useApp } from "../../context/app";
import { formatCurrency, formatDate, toISODate } from "../../lib/format";

export const Route = createFileRoute("/app/time")({
  component: TeamPage,
});

export default function TeamPage() {
  const {
    teams,
    myTeamId,
    addPlayer,
    removePlayer,
    reservations,
    venueById,
    notifications,
    session,
  } = useApp();
  const unread = notifications.filter((item) => !item.read).length;
  const team = teams.find((item) => item.id === myTeamId) ?? teams[0];
  const [name, setName] = useState("");
  const [position, setPosition] = useState("Atacante");
  const [number, setNumber] = useState(14);
  const today = toISODate(new Date());

  if (!team) return null;

  const teamReservations = reservations
    .filter((item) => item.teamId === team.id)
    .sort((a, b) => b.date.localeCompare(a.date));
  const upcoming = teamReservations.filter(
    (item) => item.date >= today && item.status !== "cancelled" && item.status !== "finished",
  );
  const history = teamReservations.filter((item) => !upcoming.includes(item));

  const handleAdd = () => {
    if (!name.trim()) {
      toast.error("Informe o nome do jogador");
      return;
    }
    addPlayer(name.trim(), position, number);
    toast.success(`${name.trim()} adicionado ao elenco`);
    setName("");
    setNumber((value) => value + 1);
  };

  return (
    <AppShell
      role="client"
      active="/app/time"
      title={team.name}
      subtitle={`Elenco, reservas e partidas do time · sessão: ${session?.name ?? "demonstração"}`}
      nav={getClientNav(unread)}
    >
      <div style={{ display: "grid", gap: 18 }}>
        <section
          className="panel panel-dark"
          style={{ background: "var(--forest-depths)", color: "var(--pure-white)" }}
        >
          <div
            className="panel-body"
            style={{ display: "flex", flexWrap: "wrap", gap: 22, alignItems: "center" }}
          >
            <Avatar initials={team.initials} size="lg" />
            <div style={{ flex: 1, minWidth: 220 }}>
              <h2 style={{ margin: 0, fontSize: 26 }}>{team.name}</h2>
              <span style={{ color: "var(--lichen-sage)", fontSize: 13.5 }}>
                Capitão {team.captain} · desde{" "}
                {new Date(team.createdAt + "T12:00:00").toLocaleDateString("pt-BR")} ·{" "}
                {team.players.length} jogadores
              </span>
            </div>
            <div style={{ display: "flex", gap: 26 }}>
              <div>
                <span
                  style={{
                    display: "block",
                    color: "var(--lichen-sage)",
                    fontSize: 11,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  Próximos jogos
                </span>
                <strong style={{ fontSize: 26, color: "var(--electric-sprout)" }}>
                  {upcoming.length}
                </strong>
              </div>
              <div>
                <span
                  style={{
                    display: "block",
                    color: "var(--lichen-sage)",
                    fontSize: 11,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  Partidas no total
                </span>
                <strong style={{ fontSize: 26, color: "var(--electric-sprout)" }}>
                  {teamReservations.length}
                </strong>
              </div>
            </div>
          </div>
        </section>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 18,
          }}
        >
          <Panel title="Elenco">
            <div style={{ display: "grid", gap: 10 }}>
              {team.players.map((player) => (
                <div
                  key={player.id}
                  className="row-between"
                  style={{
                    padding: "10px 12px",
                    borderRadius: 14,
                    background: "var(--bone-white)",
                  }}
                >
                  <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                    <Avatar initials={initialsOf(player.name)} size="sm" />
                    <div>
                      <strong
                        style={{ display: "block", fontSize: 13.5, color: "var(--forest-depths)" }}
                      >
                        {player.name}{" "}
                        {player.captain && (
                          <Crown
                            size={13}
                            aria-hidden="true"
                            style={{ color: "var(--electric-sprout)" }}
                          />
                        )}
                      </strong>
                      <span style={{ color: "var(--lichen-sage)", fontSize: 12 }}>
                        {player.position} · camisa {player.number}
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="modal-close"
                    aria-label={`Remover ${player.name}`}
                    onClick={() => {
                      removePlayer(player.id);
                      toast.info(`${player.name} removido do elenco`);
                    }}
                  >
                    <Trash2 size={14} aria-hidden="true" />
                  </button>
                </div>
              ))}
              {team.players.length === 0 && (
                <p style={{ margin: 0, color: "var(--lichen-sage)", fontSize: 14 }}>
                  Nenhum jogador. Adicione o primeiro abaixo.
                </p>
              )}
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1.4fr 1fr 70px auto",
                gap: 8,
                marginTop: 16,
                alignItems: "end",
              }}
              className="add-player-form"
            >
              <div>
                <label className="field-label" htmlFor="player-name">
                  Nome
                </label>
                <input
                  id="player-name"
                  className="input"
                  placeholder="Ex.: Caio Bezerra"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div>
                <label className="field-label" htmlFor="player-pos">
                  Posição
                </label>
                <select
                  id="player-pos"
                  className="select"
                  value={position}
                  onChange={(event) => setPosition(event.target.value)}
                >
                  {["Goleiro", "Zagueiro", "Lateral", "Volante", "Meia", "Ponta", "Atacante"].map(
                    (option) => (
                      <option key={option}>{option}</option>
                    ),
                  )}
                </select>
              </div>
              <div>
                <label className="field-label" htmlFor="player-num">
                  Nº
                </label>
                <input
                  id="player-num"
                  type="number"
                  min={1}
                  max={99}
                  className="input"
                  value={number}
                  onChange={(event) => setNumber(Number(event.target.value))}
                />
              </div>
              <button
                type="button"
                className="button p-button button-dark"
                style={{ width: "auto" }}
                onClick={handleAdd}
              >
                <Plus size={16} aria-hidden="true" />
              </button>
            </div>
            <p
              style={{
                margin: "12px 0 0",
                fontSize: 12,
                color: "var(--lichen-sage)",
                display: "flex",
                gap: 6,
                alignItems: "center",
              }}
            >
              <UserPlus size={13} aria-hidden="true" /> Alterações valem apenas nesta demonstração.
            </p>
          </Panel>

          <div style={{ display: "grid", gap: 18, alignContent: "start" }}>
            <Panel title="Próximas partidas do time">
              {upcoming.length === 0 ? (
                <div
                  style={{
                    display: "flex",
                    gap: 10,
                    alignItems: "center",
                    color: "var(--lichen-sage)",
                    fontSize: 14,
                  }}
                >
                  <CalendarX2 size={18} aria-hidden="true" /> Nenhuma partida agendada para o time.
                </div>
              ) : (
                <div style={{ display: "grid", gap: 10 }}>
                  {upcoming.map((item) => (
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
                          {venueById(item.venueId)?.name}
                        </strong>
                        <span style={{ color: "var(--lichen-sage)", fontSize: 12.5 }}>
                          {formatDate(item.date)} · {item.time} · {item.fieldName}
                        </span>
                      </div>
                      <StatusBadge status={item.status} />
                    </div>
                  ))}
                </div>
              )}
            </Panel>

            <Panel
              title="Reservas e pagamentos"
              action={
                <Link
                  to="/app/pagamentos"
                  style={{ fontSize: 13, fontWeight: 650, color: "var(--deep-verdant)" }}
                >
                  Ver pagamentos
                </Link>
              }
            >
              {history.length === 0 ? (
                <p style={{ margin: 0, color: "var(--lichen-sage)", fontSize: 14 }}>
                  Sem registros anteriores para este time.
                </p>
              ) : (
                <div style={{ display: "grid", gap: 10 }}>
                  {history.slice(0, 5).map((item) => (
                    <div
                      key={item.id}
                      className="row-between"
                      style={{
                        fontSize: 13.5,
                        paddingBottom: 8,
                        borderBottom: "1px dashed var(--mist-green)",
                      }}
                    >
                      <span style={{ color: "var(--moss-shadow)" }}>
                        <Shield size={13} aria-hidden="true" /> {formatDate(item.date)} ·{" "}
                        {venueById(item.venueId)?.name}
                      </span>
                      <strong style={{ color: "var(--forest-depths)" }}>
                        {formatCurrency(item.total)}
                      </strong>
                    </div>
                  ))}
                </div>
              )}
            </Panel>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
