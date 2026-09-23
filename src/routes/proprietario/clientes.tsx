import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Phone, UsersRound } from "lucide-react";
import { AppShell } from "../../components/platform/AppShell";
import { getOwnerNav } from "../../components/platform/navItems";
import { ConfirmModal } from "../../components/platform/ConfirmModal";
import {
  Avatar,
  EmptyState,
  Panel,
  StatusBadge,
  initialsOf,
} from "../../components/platform/primitives";
import { useApp } from "../../context/app";
import { clients as mockClients, ownerVenueId } from "../../mocks";
import { formatCurrency, formatDate } from "../../lib/format";
import type { ClientSummary } from "../../types";

export const Route = createFileRoute("/proprietario/clientes")({
  component: OwnerClients,
});

function OwnerClients() {
  const { ownerNotifications, reservations } = useApp();
  const unread = ownerNotifications.filter((item) => !item.read).length;
  const [selected, setSelected] = useState<ClientSummary | null>(null);

  const history = selected
    ? reservations.filter(
        (item) => item.venueId === ownerVenueId && item.clientName === selected.name,
      )
    : [];

  return (
    <AppShell
      role="owner"
      active="/proprietario/clientes"
      title="Clientes"
      subtitle="Quem já reservou na sua areninha"
      nav={getOwnerNav(unread)}
    >
      <Panel>
        <div className="table-wrap" style={{ border: 0 }}>
          <table className="data-table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Telefone</th>
                <th>Reservas</th>
                <th>Última reserva</th>
                <th>Total gasto</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {mockClients.map((client) => (
                <tr key={client.id}>
                  <td data-label="Nome">
                    <span style={{ display: "inline-flex", gap: 10, alignItems: "center" }}>
                      <Avatar initials={initialsOf(client.name)} size="sm" />
                      <strong className="cell-strong">{client.name}</strong>
                    </span>
                  </td>
                  <td data-label="Telefone">
                    <span style={{ display: "inline-flex", gap: 6, alignItems: "center" }}>
                      <Phone size={13} aria-hidden="true" /> {client.phone}
                    </span>
                  </td>
                  <td data-label="Reservas">{client.reservations}</td>
                  <td data-label="Última reserva">{client.lastBooking}</td>
                  <td data-label="Total gasto" className="cell-strong">
                    {formatCurrency(client.totalSpent)}
                  </td>
                  <td data-label="Ações">
                    <button
                      type="button"
                      className="chip"
                      style={{ marginLeft: "auto" }}
                      onClick={() => setSelected(client)}
                    >
                      Ver histórico
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {mockClients.length === 0 && (
          <EmptyState
            icon={<UsersRound size={26} aria-hidden="true" />}
            title="Nenhum cliente"
            description="Os clientes aparecem após as primeiras reservas."
          />
        )}
      </Panel>

      <ConfirmModal
        open={Boolean(selected)}
        title={selected?.name ?? ""}
        onCancel={() => setSelected(null)}
      >
        {selected && (
          <div style={{ display: "grid", gap: 14 }}>
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <Avatar initials={initialsOf(selected.name)} size="lg" />
              <div>
                <strong style={{ display: "block", color: "var(--forest-depths)" }}>
                  {selected.phone}
                </strong>
                <span style={{ color: "var(--lichen-sage)", fontSize: 13 }}>
                  {selected.reservations} reservas · {formatCurrency(selected.totalSpent)} no total
                </span>
              </div>
            </div>
            <div>
              <strong style={{ fontSize: 13, color: "var(--forest-depths)" }}>
                Histórico nesta areninha
              </strong>
              <div style={{ display: "grid", gap: 8, marginTop: 10 }}>
                {history.length === 0 ? (
                  <p style={{ margin: 0, color: "var(--lichen-sage)", fontSize: 13.5 }}>
                    Sem reservas registradas para este cliente na demo atual.
                  </p>
                ) : (
                  history.map((item) => (
                    <div
                      key={item.id}
                      className="row-between"
                      style={{
                        padding: "10px 12px",
                        borderRadius: 12,
                        background: "var(--bone-white)",
                        fontSize: 13.5,
                      }}
                    >
                      <span style={{ color: "var(--moss-shadow)" }}>
                        {formatDate(item.date)} · {item.time} · {item.fieldName}
                      </span>
                      <StatusBadge status={item.status} />
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}
      </ConfirmModal>
    </AppShell>
  );
}
