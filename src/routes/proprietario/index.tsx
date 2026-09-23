import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CalendarCheck,
  CircleDollarSign,
  Clock3,
  Loader2,
  Timer,
  UsersRound,
} from "lucide-react";
import { AppShell } from "../../components/platform/AppShell";
import { getOwnerNav } from "../../components/platform/navItems";
import { EmptyState, Panel, StatCard, StatusBadge } from "../../components/platform/primitives";
import { useApp } from "../../context/app";
import { financeStats, ownerVenueId } from "../../mocks";
import { formatCurrency, toISODate } from "../../lib/format";

export const Route = createFileRoute("/proprietario/")({
  component: OwnerDashboard,
});

function LiveCounter() {
  const [seconds, setSeconds] = useState(34 * 60 + 12);
  useEffect(() => {
    const timer = window.setInterval(() => setSeconds((value) => Math.max(0, value - 1)), 1000);
    return () => window.clearInterval(timer);
  }, []);
  const minutes = Math.floor(seconds / 60);
  const rest = seconds % 60;
  return (
    <strong style={{ fontVariantNumeric: "tabular-nums" }}>
      {String(minutes).padStart(2, "0")}:{String(rest).padStart(2, "0")}
    </strong>
  );
}

function OwnerDashboard() {
  const { reservations, ownerNotifications, venueById, balance } = useApp();
  const unread = ownerNotifications.filter((item) => !item.read).length;
  const venue = venueById(ownerVenueId);
  const today = toISODate(new Date());

  const venueReservations = reservations.filter((item) => item.venueId === ownerVenueId);
  const todayList = venueReservations
    .filter((item) => item.date === today && item.status !== "cancelled")
    .sort((a, b) => a.time.localeCompare(b.time));
  const liveGames = venueReservations.filter((item) => item.status === "live");
  const pending = venueReservations.filter((item) => item.status === "pending");

  return (
    <AppShell
      role="owner"
      active="/proprietario"
      title="Dashboard"
      subtitle={`${venue?.name ?? "Areninha Central"} · visão geral de hoje`}
      nav={getOwnerNav(unread)}
    >
      <div style={{ display: "grid", gap: 18 }}>
        <div className="grid-stats">
          <StatCard
            label="Reservas hoje"
            value={String(financeStats.reservationsToday)}
            hint="+4 vs. ontem"
            icon={<CalendarCheck size={19} aria-hidden="true" />}
            accent
          />
          <StatCard
            label="Em andamento"
            value={String(Math.max(liveGames.length, financeStats.inProgress))}
            hint="Jogos rolando agora"
            icon={<Timer size={19} aria-hidden="true" />}
          />
          <StatCard
            label="Aguardando confirmação"
            value={String(Math.max(pending.length, financeStats.awaitingConfirmation))}
            hint="Requer sua ação"
            icon={<Loader2 size={19} aria-hidden="true" />}
          />
          <StatCard
            label="Faturamento do mês"
            value={formatCurrency(financeStats.month)}
            hint="Meta: R$ 20.000"
            icon={<CircleDollarSign size={19} aria-hidden="true" />}
          />
          <StatCard
            label="Saldo disponível"
            value={formatCurrency(balance)}
            hint="Sujeito a solicitação de saque"
            icon={<CircleDollarSign size={19} aria-hidden="true" />}
          />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 18,
          }}
        >
          <Panel
            title="Jogos em andamento"
            action={
              <Link
                to="/proprietario/agenda"
                style={{ fontSize: 13, fontWeight: 650, color: "var(--deep-verdant)" }}
              >
                Agenda
              </Link>
            }
          >
            {liveGames.length === 0 ? (
              <EmptyState
                icon={<Clock3 size={24} aria-hidden="true" />}
                title="Nenhum jogo em andamento"
                description="Quando uma reserva entrar no horário ativo, ela aparece aqui com o tempo restante."
              />
            ) : (
              <div style={{ display: "grid", gap: 12 }}>
                {liveGames.map((game) => (
                  <div
                    key={game.id}
                    style={{
                      display: "grid",
                      gap: 8,
                      padding: 16,
                      borderRadius: 16,
                      background: "var(--st-live-bg)",
                      border: "1px solid color-mix(in oklab, var(--st-live) 30%, white)",
                    }}
                  >
                    <div className="row-between">
                      <strong style={{ color: "var(--forest-depths)", fontSize: 15 }}>
                        {game.teamName ?? game.clientName}
                      </strong>
                      <span className="badge badge-live">Em jogo</span>
                    </div>
                    <span style={{ color: "var(--moss-shadow)", fontSize: 13 }}>
                      {game.fieldName} · {game.time} · código {game.code}
                    </span>
                    <div className="row-between" style={{ fontSize: 13 }}>
                      <span
                        style={{
                          color: "var(--lichen-sage)",
                          display: "inline-flex",
                          gap: 6,
                          alignItems: "center",
                        }}
                      >
                        <Timer size={14} aria-hidden="true" /> Tempo restante
                      </span>
                      <LiveCounter />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Panel>

          <Panel
            title="Agenda de hoje"
            action={
              <Link
                to="/proprietario/agenda"
                style={{ fontSize: 13, fontWeight: 650, color: "var(--deep-verdant)" }}
              >
                Ver completa
              </Link>
            }
          >
            {todayList.length === 0 ? (
              <p style={{ margin: 0, color: "var(--lichen-sage)", fontSize: 14 }}>
                Sem reservas para hoje.
              </p>
            ) : (
              <div style={{ display: "grid", gap: 8 }}>
                {todayList.map((item) => (
                  <div
                    key={item.id}
                    className="row-between"
                    style={{
                      padding: "11px 13px",
                      borderRadius: 12,
                      background: "var(--bone-white)",
                    }}
                  >
                    <div>
                      <strong
                        style={{ display: "block", fontSize: 13.5, color: "var(--forest-depths)" }}
                      >
                        {item.time} — {String(Number(item.time.slice(0, 2)) + 1).padStart(2, "0")}
                        :00
                        {" · "}
                        {item.fieldName}
                      </strong>
                      <span style={{ color: "var(--lichen-sage)", fontSize: 12.5 }}>
                        {item.teamName ?? item.clientName}
                      </span>
                    </div>
                    <StatusBadge status={item.status} />
                  </div>
                ))}
              </div>
            )}
          </Panel>
        </div>

        <Panel
          title="Reservas aguardando confirmação"
          action={
            <Link
              to="/proprietario/reservas"
              style={{ fontSize: 13, fontWeight: 650, color: "var(--deep-verdant)" }}
            >
              Gerenciar <ArrowRight size={13} aria-hidden="true" />
            </Link>
          }
        >
          {pending.length === 0 ? (
            <p style={{ margin: 0, color: "var(--lichen-sage)", fontSize: 14 }}>
              Tudo confirmado por aqui.
            </p>
          ) : (
            <div className="table-wrap" style={{ border: 0 }}>
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Cliente</th>
                    <th>Time</th>
                    <th>Data</th>
                    <th>Horário</th>
                    <th>Campo</th>
                    <th>Valor</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {pending.map((item) => (
                    <tr key={item.id}>
                      <td data-label="Cliente" className="cell-strong">
                        {item.clientName}
                      </td>
                      <td data-label="Time">{item.teamName ?? "—"}</td>
                      <td data-label="Data">{item.date.split("-").reverse().join("/")}</td>
                      <td data-label="Horário">{item.time}</td>
                      <td data-label="Campo">{item.fieldName}</td>
                      <td data-label="Valor">{formatCurrency(item.total)}</td>
                      <td data-label="Status">
                        <StatusBadge status={item.status} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </Panel>

        <div className="grid-stats">
          <StatCard
            label="Clientes ativos"
            value="128"
            hint="+12 no mês"
            icon={<UsersRound size={19} aria-hidden="true" />}
          />
          <StatCard
            label="Taxa de ocupação"
            value={`${financeStats.occupancyRate}%`}
            hint="Faixa 18h–22h"
            icon={<Clock3 size={19} aria-hidden="true" />}
          />
          <StatCard
            label="Ticket médio"
            value={formatCurrency(financeStats.averageTicket)}
            hint="Por reserva"
            icon={<CircleDollarSign size={19} aria-hidden="true" />}
          />
        </div>
      </div>
    </AppShell>
  );
}
