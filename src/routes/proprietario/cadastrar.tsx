import { useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Check,
  CheckCircle2,
  ImagePlus,
  MapPin,
  Tag,
} from "lucide-react";
import { AppShell } from "../../components/platform/AppShell";
import { getOwnerNav } from "../../components/platform/navItems";
import { Panel } from "../../components/platform/primitives";
import { useApp } from "../../context/app";
import type { Venue } from "../../types";

export const Route = createFileRoute("/proprietario/cadastrar")({
  component: VenueWizard,
});

const stepLabels = [
  "Informações",
  "Localização",
  "Estrutura",
  "Fotos",
  "Horários",
  "Preços",
  "Revisão",
];

const structureList = [
  "Estacionamento",
  "Vestiário",
  "Iluminação LED",
  "Churrasqueira",
  "Bebidas",
  "Lanchonete",
  "Wi-Fi",
  "Bar",
];

function VenueWizard() {
  const { ownerNotifications, addVenue } = useApp();
  const navigate = useNavigate();
  const unread = ownerNotifications.filter((item) => !item.read).length;
  const [step, setStep] = useState(0);
  const [done, setDone] = useState<Venue | null>(null);

  const [form, setForm] = useState({
    name: "",
    description: "",
    neighborhood: "",
    city: "Fortaleza",
    address: "",
    structure: ["Estacionamento", "Vestiário", "Iluminação LED"],
    opening: "06:00",
    closing: "23:00",
    price: 120,
    fieldsCount: 2,
    photos: 3,
  });

  const patch = (partial: Partial<typeof form>) =>
    setForm((current) => ({ ...current, ...partial }));

  const canNext = () => {
    if (step === 0) return form.name.trim().length > 2 && form.description.trim().length > 10;
    if (step === 1) return form.neighborhood.trim() !== "" && form.address.trim() !== "";
    return true;
  };

  const finish = () => {
    const id = `nova-${Date.now()}`;
    const venue: Venue = {
      id,
      name: form.name.trim(),
      neighborhood: form.neighborhood.trim(),
      city: form.city,
      address: form.address.trim(),
      distanceKm: 5,
      rating: 5,
      reviewCount: 0,
      pricePerHour: Number(form.price),
      structure: form.structure,
      rules: ["Chegue 10 minutos antes do horário", "Cancelamento gratuito até 12 horas antes"],
      description: form.description.trim(),
      nextAvailability: "Hoje",
      popular: false,
      coverHue: 137,
      mapX: 50,
      mapY: 50,
      closedHours: [6, 23],
      blockedHours: [],
      fields: Array.from({ length: Math.max(1, form.fieldsCount) }, (_, index) => ({
        id: `${id}-campo-${index + 1}`,
        venueId: id,
        name: `Campo ${String(index + 1).padStart(2, "0")}`,
        type: "Society 5x5",
        capacity: 10,
        pricePerHour: Number(form.price),
        status: "available" as const,
      })),
    };
    addVenue(venue);
    setDone(venue);
    toast.success("Areninha cadastrada com sucesso!");
  };

  if (done) {
    return (
      <AppShell
        role="owner"
        active="/proprietario/cadastrar"
        title="Cadastro concluído"
        nav={getOwnerNav(unread)}
      >
        <Panel>
          <div style={{ textAlign: "center", padding: "28px 12px" }}>
            <span className="success-burst">
              <CheckCircle2 size={42} aria-hidden="true" />
            </span>
            <h2 style={{ margin: "22px 0 8px", color: "var(--forest-depths)", fontSize: 28 }}>
              Areninha cadastrada com sucesso!
            </h2>
            <p style={{ margin: "0 auto 26px", color: "var(--lichen-sage)", maxWidth: 460 }}>
              <strong>{done.name}</strong> já está disponível na busca (estado local da
              demonstração).
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <button
                type="button"
                className="button p-button button-dark"
                style={{ width: "auto" }}
                onClick={() => navigate({ to: "/proprietario" })}
              >
                Ir para o dashboard
              </button>
              <button
                type="button"
                className="button p-button button-outline"
                style={{ width: "auto" }}
                onClick={() => navigate({ to: "/buscar" })}
              >
                Ver na busca
              </button>
            </div>
          </div>
        </Panel>
      </AppShell>
    );
  }

  return (
    <AppShell
      role="owner"
      active="/proprietario/cadastrar"
      title="Cadastrar areninha"
      subtitle="Assistente em 7 etapas — tudo simulado, sem envio de dados"
      nav={getOwnerNav(unread)}
    >
      <div style={{ display: "grid", gap: 18 }}>
        <div className="wizard-nav">
          {stepLabels.map((label, index) => (
            <button
              key={label}
              type="button"
              className={index === step ? "active" : index < step ? "done" : ""}
              onClick={() => setStep(index)}
            >
              {index < step ? <Check size={13} aria-hidden="true" /> : index + 1} {label}
            </button>
          ))}
        </div>

        <Panel title={`${step + 1}. ${stepLabels[step]}`}>
          <div style={{ display: "grid", gap: 14 }}>
            {step === 0 && (
              <>
                <div>
                  <label className="field-label" htmlFor="wiz-name">
                    Nome da areninha
                  </label>
                  <input
                    id="wiz-name"
                    className="input"
                    placeholder="Ex.: Arena do Cocó Society"
                    value={form.name}
                    onChange={(event) => patch({ name: event.target.value })}
                  />
                </div>
                <div>
                  <label className="field-label" htmlFor="wiz-desc">
                    Descrição
                  </label>
                  <textarea
                    id="wiz-desc"
                    className="textarea"
                    placeholder="Conte os diferenciais da sua estrutura..."
                    value={form.description}
                    onChange={(event) => patch({ description: event.target.value })}
                  />
                </div>
                {!canNext() && (
                  <span style={{ fontSize: 12.5, color: "var(--st-danger)" }}>
                    Preencha o nome e uma descrição com pelo menos 10 caracteres.
                  </span>
                )}
              </>
            )}

            {step === 1 && (
              <>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                    gap: 12,
                  }}
                >
                  <div>
                    <label className="field-label" htmlFor="wiz-hood">
                      Bairro
                    </label>
                    <input
                      id="wiz-hood"
                      className="input"
                      placeholder="Ex.: Cocó"
                      value={form.neighborhood}
                      onChange={(event) => patch({ neighborhood: event.target.value })}
                    />
                  </div>
                  <div>
                    <label className="field-label" htmlFor="wiz-city">
                      Cidade
                    </label>
                    <input
                      id="wiz-city"
                      className="input"
                      value={form.city}
                      onChange={(event) => patch({ city: event.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <label className="field-label" htmlFor="wiz-addr">
                    Endereço completo
                  </label>
                  <input
                    id="wiz-addr"
                    className="input"
                    placeholder="Rua, número, complemento"
                    value={form.address}
                    onChange={(event) => patch({ address: event.target.value })}
                  />
                </div>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    gap: 8,
                    alignItems: "center",
                    fontSize: 13,
                    color: "var(--lichen-sage)",
                  }}
                >
                  <MapPin size={14} aria-hidden="true" /> A posição no mapa será aproximada e
                  ilustrativa.
                </p>
              </>
            )}

            {step === 2 && (
              <>
                <p style={{ margin: 0, color: "var(--lichen-sage)", fontSize: 14 }}>
                  Selecione a estrutura disponível:
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {structureList.map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      className={`chip ${form.structure.includes(tag) ? "active" : ""}`}
                      onClick={() =>
                        patch({
                          structure: form.structure.includes(tag)
                            ? form.structure.filter((item) => item !== tag)
                            : [...form.structure, tag],
                        })
                      }
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <p style={{ margin: 0, color: "var(--lichen-sage)", fontSize: 14 }}>
                  Adicione fotos dos campos e da estrutura (simulação).
                </p>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
                    gap: 10,
                  }}
                >
                  {Array.from({ length: form.photos }, (_, index) => (
                    <div
                      key={index}
                      style={{
                        height: 90,
                        borderRadius: 14,
                        background: `linear-gradient(${140 + index * 25}deg, var(--forest-depths), var(--deep-verdant))`,
                        display: "grid",
                        placeItems: "center",
                        color: "var(--electric-sprout)",
                        fontWeight: 700,
                        fontSize: 12,
                      }}
                    >
                      Foto {index + 1}
                    </div>
                  ))}
                  <button
                    type="button"
                    style={{
                      height: 90,
                      borderRadius: 14,
                      border: "1.5px dashed var(--mist-green)",
                      background: "var(--bone-white)",
                      color: "var(--lichen-sage)",
                      cursor: "pointer",
                      display: "grid",
                      placeItems: "center",
                      gap: 4,
                      fontSize: 12,
                    }}
                    onClick={() => patch({ photos: form.photos + 1 })}
                  >
                    <ImagePlus size={18} aria-hidden="true" />
                    Adicionar
                  </button>
                </div>
              </>
            )}

            {step === 4 && (
              <div
                style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, maxWidth: 420 }}
              >
                <div>
                  <label className="field-label" htmlFor="wiz-open">
                    Abertura
                  </label>
                  <select
                    id="wiz-open"
                    className="select"
                    value={form.opening}
                    onChange={(event) => patch({ opening: event.target.value })}
                  >
                    {["05:00", "06:00", "07:00", "08:00"].map((hour) => (
                      <option key={hour}>{hour}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="field-label" htmlFor="wiz-close">
                    Fechamento
                  </label>
                  <select
                    id="wiz-close"
                    className="select"
                    value={form.closing}
                    onChange={(event) => patch({ closing: event.target.value })}
                  >
                    {["22:00", "23:00", "00:00", "01:00"].map((hour) => (
                      <option key={hour}>{hour}</option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            {step === 5 && (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                  gap: 12,
                }}
              >
                <div>
                  <label className="field-label" htmlFor="wiz-price">
                    Preço por hora (R$)
                  </label>
                  <input
                    id="wiz-price"
                    type="number"
                    min={50}
                    className="input"
                    value={form.price}
                    onChange={(event) => patch({ price: Number(event.target.value) })}
                  />
                </div>
                <div>
                  <label className="field-label" htmlFor="wiz-fields">
                    Quantidade de campos
                  </label>
                  <select
                    id="wiz-fields"
                    className="select"
                    value={form.fieldsCount}
                    onChange={(event) => patch({ fieldsCount: Number(event.target.value) })}
                  >
                    {[1, 2, 3, 4].map((count) => (
                      <option key={count} value={count}>
                        {count} campo{count > 1 ? "s" : ""}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            {step === 6 && (
              <div style={{ display: "grid", gap: 10 }}>
                {[
                  [`${form.name || "—"}`, form.description || "Sem descrição"],
                  ["Localização", `${form.address}, ${form.neighborhood} — ${form.city}`],
                  ["Estrutura", form.structure.join(" · ") || "—"],
                  ["Fotos", `${form.photos} fotos simuladas`],
                  ["Horários", `${form.opening} às ${form.closing}`],
                  ["Preços", `R$ ${form.price}/hora · ${form.fieldsCount} campo(s)`],
                ].map(([label, value], index) => (
                  <div
                    key={label}
                    className="row-between"
                    style={{
                      gap: 16,
                      padding: "12px 0",
                      borderBottom: "1px dashed var(--mist-green)",
                    }}
                  >
                    <span style={{ color: "var(--lichen-sage)", fontSize: 13, minWidth: 110 }}>
                      {index === 0 ? "Informações" : label}
                    </span>
                    <strong
                      style={{ color: "var(--forest-depths)", fontSize: 14, textAlign: "right" }}
                    >
                      {value}
                    </strong>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Panel>

        <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
          <button
            type="button"
            className="button p-button button-outline"
            style={{ width: "auto" }}
            disabled={step === 0}
            onClick={() => setStep((current) => Math.max(0, current - 1))}
          >
            <ArrowLeft size={16} aria-hidden="true" /> Voltar
          </button>
          {step < 6 ? (
            <button
              type="button"
              className="button p-button button-dark"
              style={{ width: "auto" }}
              disabled={!canNext()}
              onClick={() => setStep((current) => Math.min(6, current + 1))}
            >
              Continuar <ArrowRight size={16} aria-hidden="true" />
            </button>
          ) : (
            <button
              type="button"
              className="button p-button button-primary"
              style={{ width: "auto" }}
              onClick={finish}
            >
              <Building2 size={16} aria-hidden="true" /> Cadastrar areninha
            </button>
          )}
        </div>

        <p
          style={{
            margin: 0,
            fontSize: 12.5,
            color: "var(--lichen-sage)",
            display: "flex",
            gap: 8,
            alignItems: "center",
          }}
        >
          <Tag size={14} aria-hidden="true" /> Cadastro 100% local: nada é enviado a servidores.
        </p>
      </div>
    </AppShell>
  );
}
