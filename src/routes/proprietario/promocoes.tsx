import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { Megaphone, Percent, Plus, Tag } from "lucide-react";
import { AppShell } from "../../components/platform/AppShell";
import { getOwnerNav } from "../../components/platform/navItems";
import { Panel } from "../../components/platform/primitives";
import { useApp } from "../../context/app";
import type { Promotion } from "../../types";

export const Route = createFileRoute("/proprietario/promocoes")({
  component: OwnerPromotions,
});

const kindLabel: Record<Promotion["kind"], string> = {
  percent: "Desconto",
  "happy-hour": "Horário promocional",
  "new-client": "Novo cliente",
};

function OwnerPromotions() {
  const { ownerNotifications, promotions, addPromotion, togglePromotion } = useApp();
  const unread = ownerNotifications.filter((item) => !item.read).length;
  const [form, setForm] = useState({
    code: "",
    label: "",
    discount: 10,
    kind: "percent" as Promotion["kind"],
    schedule: "",
  });

  const create = () => {
    const code = form.code.trim().toUpperCase();
    if (code.length < 4) {
      toast.error("Código muito curto", { description: "Use ao menos 4 caracteres." });
      return;
    }
    addPromotion({
      code,
      label: form.label.trim() || `${form.discount}% OFF`,
      discount: form.discount,
      kind: form.kind,
      ...(form.kind === "happy-hour" && form.schedule ? { schedule: form.schedule } : {}),
      active: true,
    });
    toast.success(`Cupom ${code} criado`, { description: "Já disponível na simulação." });
    setForm({ code: "", label: "", discount: 10, kind: "percent", schedule: "" });
  };

  return (
    <AppShell
      role="owner"
      active="/proprietario/promocoes"
      title="Promoções"
      subtitle="Cupons e campanhas gerenciadas localmente"
      nav={getOwnerNav(unread)}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 18,
        }}
      >
        <Panel title="Criar promoção">
          <div style={{ display: "grid", gap: 14 }}>
            <div>
              <label className="field-label" htmlFor="promo-code">
                Código do cupom
              </label>
              <input
                id="promo-code"
                className="input"
                placeholder="EX.: QUARTA15"
                value={form.code}
                onChange={(event) =>
                  setForm((current) => ({ ...current, code: event.target.value.toUpperCase() }))
                }
              />
            </div>
            <div>
              <label className="field-label" htmlFor="promo-label">
                Descrição exibida
              </label>
              <input
                id="promo-label"
                className="input"
                placeholder="15% OFF nas quartas"
                value={form.label}
                onChange={(event) =>
                  setForm((current) => ({ ...current, label: event.target.value }))
                }
              />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <div>
                <label className="field-label" htmlFor="promo-kind">
                  Tipo
                </label>
                <select
                  id="promo-kind"
                  className="select"
                  value={form.kind}
                  onChange={(event) =>
                    setForm((current) => ({
                      ...current,
                      kind: event.target.value as Promotion["kind"],
                    }))
                  }
                >
                  <option value="percent">Desconto</option>
                  <option value="happy-hour">Horário promocional</option>
                  <option value="new-client">Novo cliente</option>
                </select>
              </div>
              <div>
                <label className="field-label" htmlFor="promo-disc">
                  Desconto (%)
                </label>
                <input
                  id="promo-disc"
                  type="number"
                  min={1}
                  max={90}
                  className="input"
                  value={form.discount}
                  onChange={(event) =>
                    setForm((current) => ({ ...current, discount: Number(event.target.value) }))
                  }
                />
              </div>
            </div>
            {form.kind === "happy-hour" && (
              <div>
                <label className="field-label" htmlFor="promo-sched">
                  Horário promocional
                </label>
                <input
                  id="promo-sched"
                  className="input"
                  placeholder="Seg a Sex · 07:00 — 11:00"
                  value={form.schedule}
                  onChange={(event) =>
                    setForm((current) => ({ ...current, schedule: event.target.value }))
                  }
                />
              </div>
            )}
            <button type="button" className="button p-button button-dark" onClick={create}>
              <Plus size={16} aria-hidden="true" /> Criar promoção
            </button>
            <span style={{ fontSize: 12, color: "var(--lichen-sage)" }}>
              Exemplo válido na demo de reserva: <strong>SEXTA10</strong> (10% OFF).
            </span>
          </div>
        </Panel>

        <div style={{ display: "grid", gap: 18, alignContent: "start" }}>
          <Panel title="Promoções ativas e rascunhos">
            <div style={{ display: "grid", gap: 12 }}>
              {promotions.map((promo) => (
                <div
                  key={promo.id}
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 12,
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: 16,
                    borderRadius: 16,
                    background: promo.active ? "var(--sprout-wash)" : "var(--bone-white)",
                    border: `1px solid ${promo.active ? "color-mix(in oklab, var(--deep-verdant) 40%, white)" : "var(--mist-green)"}`,
                  }}
                >
                  <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                    <span className="icon-tile">
                      {promo.kind === "percent" ? <Percent size={18} /> : <Tag size={18} />}
                    </span>
                    <div>
                      <strong
                        style={{
                          display: "block",
                          color: "var(--forest-depths)",
                          letterSpacing: "0.06em",
                          fontSize: 15,
                        }}
                      >
                        {promo.code}
                      </strong>
                      <span style={{ color: "var(--lichen-sage)", fontSize: 13 }}>
                        {promo.label} · {kindLabel[promo.kind]}
                        {promo.schedule ? ` · ${promo.schedule}` : ""}
                      </span>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                    <span className={`badge ${promo.active ? "badge-success" : "badge-neutral"}`}>
                      {promo.active ? "Ativa" : "Inativa"}
                    </span>
                    <button
                      type="button"
                      className="chip"
                      onClick={() => {
                        togglePromotion(promo.id);
                        toast.info(`${promo.code} ${promo.active ? "desativada" : "ativada"}`);
                      }}
                    >
                      {promo.active ? "Desativar" : "Ativar"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </Panel>

          <Panel title="Resumo">
            <p
              style={{
                margin: 0,
                display: "flex",
                gap: 10,
                alignItems: "center",
                color: "var(--lichen-sage)",
                fontSize: 13.5,
              }}
            >
              <Megaphone size={16} aria-hidden="true" style={{ color: "var(--deep-verdant)" }} />
              Alterações valem apenas no estado local desta demonstração.
            </p>
          </Panel>
        </div>
      </div>
    </AppShell>
  );
}
