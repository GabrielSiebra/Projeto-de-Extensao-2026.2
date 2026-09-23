import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { ClipboardList, Eye, ShieldCheck, XCircle } from "lucide-react";
import { AppShell } from "../../components/platform/AppShell";
import { getOwnerNav } from "../../components/platform/navItems";
import { ConfirmModal } from "../../components/platform/ConfirmModal";
import { EmptyState, Panel, StatusBadge } from "../../components/platform/primitives";
import { useApp } from "../../context/app";
import { ownerVenueId } from "../../mocks";
import { formatCurrency, formatDate } from "../../lib/format";
import type { Reservation, ReservationStatus } from "../../types";

export const Route = createFileRoute("/proprietario/reservas")({
  component: OwnerReservations,
});

const filters: Array<{ id: "all" | ReservationStatus; label: string }> = [
  { id: "all", label: "Todas" },
  { id: "confirmed", label: "Confirmadas" },
  { id: "pending", label: "Pendentes" },
  { id: "live", label: "Em jogo" },
  { id: "finished", label: "Finalizadas" },
  { id: "cancelled", label: "Canceladas" },
];

function OwnerReservations() {
  const { reservations, ownerNotifications, updateReservationStatus, venueById } = useApp();
  const unread = ownerNotifications.filter((item) => !item.read).length;
  const [filter, setFilter] = useState<"all" | ReservationStatus>("all");
  const [viewing, setViewing] = useState<Reservation | null>(null);
  const [cancelling, setCancelling] = useState<Reservation | null>(null);

  const list = useMemo(
    () =>
      reservations
        .filter((item) => item.venueId === ownerVenueId)
        .filter((item) => filter === "all" || item.status === filter)
        .sort((a, b) => b.date.localeCompare(a.date) || b.time.localeCompare(a.time)),
    [reservations, filter],
  );

  const confirm = (reservation: Reservation) => {
    updateReservationStatus(reservation.id, "confirmed");
    toast.success("Reserva confirmada", { description: `Código ${reservation.code}.` });
    setViewing(null);
  };

  const cancel = () => {
    if (!cancelling) return;
    updateReservationStatus(cancelling.id, "cancelled");
    toast.info("Reserva cancelada", { description: `Código ${cancelling.code}.` });
    setCancelling(null);
    setViewing(null);
  };

  return (
    <AppShell
      role="owner"
      active="/proprietario/reservas"
      title="Reservas"
      subtitle="Confirme, cancele e acompanhe todas as reservas da areninha"
      nav={getOwnerNav(unread)}
    >
      <div style={{ display: "grid", gap: 18 }}>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {filters.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`chip ${filter === item.id ? "active" : ""}`}
              onClick={() => setFilter(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <Panel>
          {list.length === 0 ? (
            <EmptyState
              icon={<ClipboardList size={26} aria-hidden="true" />}
              title="Nenhuma reserva neste filtro"
              description="As novas reservas feitas pelo site aparecem aqui automaticamente nesta demonstração."
            />
          ) : (
            <div className="table-wrap" style={{ border: 0 }}>
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Cliente</th>
                    <th>Time</th>
                    <th>Campo</th>
                    <th>Data</th>
                    <th>Horário</th>
                    <th>Valor</th>
                    <th>Status</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {list.map((item) => (
                    <tr key={item.id}>
                      <td data-label="Cliente" className="cell-strong">
                        {item.clientName}
                      </td>
                      <td data-label="Time">{item.teamName ?? "—"}</td>
                      <td data-label="Campo">{item.fieldName}</td>
                      <td data-label="Data">{formatDate(item.date)}</td>
                      <td data-label="Horário">{item.time}</td>
                      <td data-label="Valor">{formatCurrency(item.total)}</td>
                      <td data-label="Status">
                        <StatusBadge status={item.status} />
                      </td>
                      <td data-label="Ações">
                        <div style={{ display: "flex", gap: 6, justifyContent: "flex-end" }}>
                          <button
                            type="button"
                            className="chip"
                            onClick={() => setViewing(item)}
                            aria-label={`Visualizar ${item.code}`}
                          >
                            <Eye size={14} aria-hidden="true" />
                          </button>
                          {item.status === "pending" && (
                            <button
                              type="button"
                              className="chip"
                              onClick={() => confirm(item)}
                              aria-label={`Confirmar ${item.code}`}
                            >
                              <ShieldCheck size={14} aria-hidden="true" />
                            </button>
                          )}
                          {item.status !== "cancelled" && item.status !== "finished" && (
                            <button
                              type="button"
                              className="chip chip-ghost"
                              onClick={() => setCancelling(item)}
                              aria-label={`Cancelar ${item.code}`}
                            >
                              <XCircle size={14} aria-hidden="true" />
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </Panel>
      </div>

      <ConfirmModal
        open={Boolean(viewing)}
        title={`Reserva ${viewing?.code ?? ""}`}
        description={viewing ? `${formatDate(viewing.date)} às ${viewing.time}` : undefined}
        onCancel={() => setViewing(null)}
        {...(viewing && viewing.status === "pending"
          ? {
              confirmLabel: "Confirmar reserva",
              onConfirm: () => confirm(viewing),
            }
          : {})}
      >
        {viewing && (
          <div style={{ display: "grid", gap: 10, fontSize: 14 }}>
            {[
              ["Areninha", venueById(viewing.venueId)?.name ?? "—"],
              ["Campo", viewing.fieldName],
              ["Cliente", viewing.clientName],
              ["Time", viewing.teamName ?? "—"],
              ["Conta", viewing.accountType === "time" ? "Time" : "Individual"],
              ["Duração", `${viewing.durationHours}h`],
              ["Valor", formatCurrency(viewing.amount)],
              ["Taxas", formatCurrency(viewing.fees)],
              ["Total", formatCurrency(viewing.total)],
              [
                "Pagamento",
                viewing.paymentMethod === "pix"
                  ? "PIX"
                  : viewing.paymentMethod === "card"
                    ? "Cartão"
                    : "Outro",
              ],
              ["Recorrente", viewing.recurring ? "Sim" : "Não"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="row-between"
                style={{ paddingBottom: 8, borderBottom: "1px dashed var(--mist-green)" }}
              >
                <span style={{ color: "var(--lichen-sage)" }}>{label}</span>
                <strong style={{ color: "var(--forest-depths)" }}>{value}</strong>
              </div>
            ))}
            <div className="row-between">
              <span style={{ color: "var(--lichen-sage)" }}>Status</span>
              <StatusBadge status={viewing.status} />
            </div>
            {viewing.status !== "cancelled" && viewing.status !== "finished" && (
              <button
                type="button"
                className="button p-button button-danger"
                style={{ marginTop: 10 }}
                onClick={() => setCancelling(viewing)}
              >
                Cancelar reserva
              </button>
            )}
          </div>
        )}
      </ConfirmModal>

      <ConfirmModal
        open={Boolean(cancelling)}
        title="Cancelar esta reserva?"
        description={
          cancelling
            ? `${cancelling.code} · ${cancelling.clientName} · ${formatDate(cancelling.date)}`
            : undefined
        }
        confirmLabel="Sim, cancelar"
        tone="danger"
        onCancel={() => setCancelling(null)}
        onConfirm={cancel}
      />
    </AppShell>
  );
}
