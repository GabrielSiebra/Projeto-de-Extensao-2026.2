import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { Cog, Plus, Wrench } from "lucide-react";
import { AppShell } from "../../components/platform/AppShell";
import { getOwnerNav } from "../../components/platform/navItems";
import { Panel } from "../../components/platform/primitives";
import { useApp } from "../../context/app";
import { ownerVenueId } from "../../mocks";
import type { FieldStatus } from "../../types";

export const Route = createFileRoute("/proprietario/campos")({
  component: OwnerFields,
});

const statusMeta: Record<FieldStatus, { label: string; className: string }> = {
  available: { label: "Disponível", className: "badge-success" },
  occupied: { label: "Ocupado", className: "badge-danger" },
  maintenance: { label: "Manutenção", className: "badge-warning" },
};

const cycle: Record<FieldStatus, FieldStatus> = {
  available: "occupied",
  occupied: "maintenance",
  maintenance: "available",
};

function OwnerFields() {
  const { ownerNotifications, venueById, updateVenue } = useApp();
  const unread = ownerNotifications.filter((item) => !item.read).length;
  const venue = venueById(ownerVenueId);

  if (!venue) return null;

  const setStatus = (fieldId: string, status: FieldStatus) => {
    updateVenue(venue.id, {
      fields: venue.fields.map((field) => (field.id === fieldId ? { ...field, status } : field)),
    });
    toast.info(`Status atualizado para "${statusMeta[status].label}"`);
  };

  const updatePrice = (fieldId: string, price: number) => {
    updateVenue(venue.id, {
      fields: venue.fields.map((field) =>
        field.id === fieldId ? { ...field, pricePerHour: price } : field,
      ),
    });
  };

  return (
    <AppShell
      role="owner"
      active="/proprietario/campos"
      title="Campos"
      subtitle={`${venue.name} · ${venue.fields.length} campos`}
      nav={getOwnerNav(unread)}
    >
      <div className="grid-cards">
        {venue.fields.map((field) => {
          const meta = statusMeta[field.status];
          return (
            <article key={field.id} className="panel" style={{ boxShadow: "none" }}>
              <div className="panel-body" style={{ display: "grid", gap: 14 }}>
                <div className="row-between">
                  <span className="icon-tile" style={{ width: 46, height: 46 }} aria-hidden="true">
                    <Cog size={20} />
                  </span>
                  <span className={`badge ${meta.className}`}>{meta.label}</span>
                </div>
                <div>
                  <h3 style={{ margin: 0, color: "var(--forest-depths)", fontSize: 19 }}>
                    {field.name}
                  </h3>
                  <span style={{ color: "var(--lichen-sage)", fontSize: 13 }}>
                    {field.type} · até {field.capacity} jogadores
                  </span>
                </div>

                <div>
                  <label className="field-label" htmlFor={`price-${field.id}`}>
                    Preço por hora (R$)
                  </label>
                  <input
                    id={`price-${field.id}`}
                    type="number"
                    min={50}
                    className="input"
                    defaultValue={field.pricePerHour}
                    onBlur={(event) => updatePrice(field.id, Number(event.target.value))}
                    onChange={(event) => updatePrice(field.id, Number(event.target.value))}
                  />
                </div>

                <div className="arena-foot">
                  <button
                    type="button"
                    className="chip chip-ghost"
                    onClick={() => setStatus(field.id, cycle[field.status])}
                  >
                    <Wrench size={14} aria-hidden="true" /> Alterar status
                  </button>
                  <span style={{ fontSize: 12, color: "var(--lichen-sage)" }}>
                    disponível → ocupado → manutenção
                  </span>
                </div>
              </div>
            </article>
          );
        })}

        <button
          type="button"
          className="panel"
          style={{
            minHeight: 240,
            display: "grid",
            placeItems: "center",
            cursor: "pointer",
            borderStyle: "dashed",
            background: "var(--pure-white)",
            color: "var(--lichen-sage)",
          }}
          onClick={() =>
            toast.info("Novo campo (simulado)", {
              description: "O cadastro de campos será liberado em breve.",
            })
          }
        >
          <span style={{ display: "grid", gap: 8, justifyItems: "center", fontSize: 14 }}>
            <Plus size={24} aria-hidden="true" />
            Adicionar campo
          </span>
        </button>
      </div>

      <Panel title="Como funciona">
        <p style={{ margin: 0, color: "var(--lichen-sage)", fontSize: 13.5, lineHeight: 1.6 }}>
          O status dos campos alimenta a agenda e a disponibilidade exibida para os clientes. As
          alterações acontecem apenas no estado local desta demonstração.
        </p>
      </Panel>
    </AppShell>
  );
}
