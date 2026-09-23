import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { CalendarX2, MapPin, Ticket } from "lucide-react";
import { AppShell } from "../../components/platform/AppShell";
import { getClientNav } from "../../components/platform/navItems";
import { ConfirmModal } from "../../components/platform/ConfirmModal";
import { EmptyState, Panel, StatusBadge } from "../../components/platform/primitives";
import { useApp } from "../../context/app";
import { formatDate, formatCurrency } from "../../lib/format";
import type { Reservation } from "../../types";

export const Route = createFileRoute("/app/reservas")({
  component: ClientReservations,
});

export default function ClientReservations() {
  const { session, reservations, venueById, notifications, updateReservationStatus } = useApp();
  const [tab, setTab] = useState<"upcoming" | "history">("upcoming");
  const [toCancel, setToCancel] = useState<Reservation | null>(null);
  const name = session?.name ?? "Rafael Mendonça";
  const unread = notifications.filter((item) => !item.read).length;
  const today = new Date().toISOString().slice(0, 10);

  const mine = useMemo(
    () =>
      reservations
        .filter((item) => item.clientName === name || item.clientName === "Rafael Mendonça")
        .sort((a, b) => b.date.localeCompare(a.date)),
    [reservations, name],
  );

  const upcoming = mine.filter(
    (item) => item.date >= today && (item.status === "confirmed" || item.status === "pending"),
  );
  const history = mine.filter(
    (item) => !upcoming.some((upcomingItem) => upcomingItem.id === item.id),
  );
  const list = tab === "upcoming" ? upcoming : history;

  const handleCancel = () => {
    if (!toCancel) return;
    updateReservationStatus(toCancel.id, "cancelled");
    toast.success("Reserva cancelada", {
      description: `A reserva ${toCancel.code} foi cancelada nesta demonstração.`,
    });
    setToCancel(null);
  };

  return (
    <AppShell
      role="client"
      active="/app/reservas"
      title="Minhas reservas"
      subtitle="Acompanhe partidas futuras e o histórico completo"
      nav={getClientNav(unread)}
    >
      <div style={{ display: "grid", gap: 18 }}>
        <div style={{ display: "flex", gap: 8 }}>
          <button
            type="button"
            className={`chip ${tab === "upcoming" ? "active" : ""}`}
            onClick={() => setTab("upcoming")}
          >
            Próximas ({upcoming.length})
          </button>
          <button
            type="button"
            className={`chip ${tab === "history" ? "active" : ""}`}
            onClick={() => setTab("history")}
          >
            Histórico ({history.length})
          </button>
        </div>

        {list.length === 0 ? (
          <Panel>
            <EmptyState
              icon={<CalendarX2 size={26} aria-hidden="true" />}
              title={tab === "upcoming" ? "Nenhuma reserva futura" : "Nenhum registro no histórico"}
              description={
                tab === "upcoming"
                  ? "Quando você reservar um horário, ela aparece aqui com status em tempo real da demo."
                  : "Reservas finalizadas e canceladas serão listadas aqui."
              }
              action={
                <Link
                  to="/buscar"
                  className="button p-button button-primary no-underline"
                  style={{ width: "auto" }}
                >
                  Encontrar areninha
                </Link>
              }
            />
          </Panel>
        ) : (
          <div className="grid-cards">
            {list.map((item) => (
              <article key={item.id} className="panel" style={{ boxShadow: "none" }}>
                <div className="panel-body" style={{ display: "grid", gap: 12 }}>
                  <div className="row-between">
                    <strong style={{ color: "var(--forest-depths)", fontSize: 16 }}>
                      {venueById(item.venueId)?.name ?? "Areninha"}
                    </strong>
                    <StatusBadge status={item.status} />
                  </div>
                  <div
                    style={{ display: "grid", gap: 7, fontSize: 13.5, color: "var(--moss-shadow)" }}
                  >
                    <span style={{ display: "flex", gap: 8, alignItems: "center" }}>
                      <MapPin size={14} aria-hidden="true" /> {formatDate(item.date)} · {item.time}{" "}
                      · {item.fieldName}
                    </span>
                    <span style={{ display: "flex", gap: 8, alignItems: "center" }}>
                      <Ticket size={14} aria-hidden="true" /> Código {item.code}
                      {item.recurring ? " · recorrente" : ""}
                    </span>
                    <span style={{ display: "flex", gap: 8, alignItems: "center" }}>
                      <span className="badge badge-neutral" style={{ fontWeight: 600 }}>
                        {item.accountType === "time"
                          ? `Time · ${item.teamName ?? ""}`
                          : "Individual"}
                      </span>
                      <strong style={{ color: "var(--forest-depths)" }}>
                        {formatCurrency(item.total)}
                      </strong>
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 4 }}>
                    <Link
                      to="/arena/$arenaId"
                      params={{ arenaId: item.venueId }}
                      className="chip"
                      style={{ textDecoration: "none" }}
                    >
                      Ver areninha
                    </Link>
                    {item.status === "confirmed" && item.date >= today && (
                      <button
                        type="button"
                        className="chip chip-ghost"
                        onClick={() => setToCancel(item)}
                      >
                        Cancelar
                      </button>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      <ConfirmModal
        open={Boolean(toCancel)}
        title="Cancelar esta reserva?"
        description={`${toCancel ? `${toCancel.code} · ${formatDate(toCancel.date)} às ${toCancel.time}` : ""}. A ação altera apenas o estado da demonstração.`}
        confirmLabel="Cancelar reserva"
        tone="danger"
        onCancel={() => setToCancel(null)}
        onConfirm={handleCancel}
      />
    </AppShell>
  );
}
