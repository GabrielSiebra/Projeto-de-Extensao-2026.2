import { useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import { Camera, Save, Trash2 } from "lucide-react";
import { AppShell } from "../../components/platform/AppShell";
import { getOwnerNav } from "../../components/platform/navItems";
import { ArenaCover } from "../../components/platform/ArenaCard";
import { Panel } from "../../components/platform/primitives";
import { useApp } from "../../context/app";
import { ownerVenueId } from "../../mocks";

export const Route = createFileRoute("/proprietario/areninha")({
  component: OwnerVenueSettings,
});

const allStructures = [
  "Estacionamento",
  "Vestiário",
  "Iluminação LED",
  "Churrasqueira",
  "Bebidas",
  "Lanchonete",
  "Wi-Fi",
  "Bar",
];

const openHours = ["06:00", "07:00", "08:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"];

function OwnerVenueSettings() {
  const { ownerNotifications, venueById, updateVenue } = useApp();
  const navigate = useNavigate();
  const unread = ownerNotifications.filter((item) => !item.read).length;
  const venue = venueById(ownerVenueId);

  const [form, setForm] = useState({
    name: venue?.name ?? "",
    neighborhood: venue?.neighborhood ?? "",
    address: venue?.address ?? "",
    description: venue?.description ?? "",
    price: venue?.pricePerHour ?? 140,
    structure: venue?.structure ?? [],
    opening: "06:00",
    closing: "23:00",
  });

  if (!venue) return null;

  const toggleStructure = (tag: string) => {
    setForm((current) => ({
      ...current,
      structure: current.structure.includes(tag)
        ? current.structure.filter((item) => item !== tag)
        : [...current.structure, tag],
    }));
  };

  const save = () => {
    updateVenue(venue.id, {
      name: form.name.trim() || venue.name,
      neighborhood: form.neighborhood,
      address: form.address,
      description: form.description,
      pricePerHour: Number(form.price),
      structure: form.structure,
    });
    toast.success("Areninha atualizada", { description: "As alterações já valem para a busca." });
  };

  return (
    <AppShell
      role="owner"
      active="/proprietario/areninha"
      title="Minha areninha"
      subtitle="Informações públicas exibidas para os clientes"
      nav={getOwnerNav(unread)}
    >
      <div style={{ display: "grid", gap: 18 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 14,
          }}
        >
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              style={{
                height: 140,
                borderRadius: 20,
                overflow: "hidden",
                filter: `hue-rotate(${index * 14 - 10}deg)`,
              }}
            >
              <ArenaCover
                venue={{ ...venue, id: `${venue.id}-pic-${index}`, popular: index === 0 }}
                showFavorite={false}
                fill
              />
            </div>
          ))}
          <button
            type="button"
            className="panel"
            style={{
              height: 140,
              display: "grid",
              placeItems: "center",
              cursor: "pointer",
              borderStyle: "dashed",
              color: "var(--lichen-sage)",
              background: "var(--pure-white)",
            }}
            onClick={() =>
              toast.info("Upload simulado", { description: "Nenhum arquivo é enviado nesta demo." })
            }
          >
            <span style={{ display: "grid", gap: 8, justifyItems: "center", fontSize: 13 }}>
              <Camera size={22} aria-hidden="true" />
              Adicionar foto
            </span>
          </button>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 18,
          }}
        >
          <Panel title="Informações">
            <div style={{ display: "grid", gap: 14 }}>
              <div>
                <label className="field-label" htmlFor="venue-name">
                  Nome
                </label>
                <input
                  id="venue-name"
                  className="input"
                  value={form.name}
                  onChange={(event) =>
                    setForm((current) => ({ ...current, name: event.target.value }))
                  }
                />
              </div>
              <div>
                <label className="field-label" htmlFor="venue-hood">
                  Bairro
                </label>
                <input
                  id="venue-hood"
                  className="input"
                  value={form.neighborhood}
                  onChange={(event) =>
                    setForm((current) => ({ ...current, neighborhood: event.target.value }))
                  }
                />
              </div>
              <div>
                <label className="field-label" htmlFor="venue-addr">
                  Endereço
                </label>
                <input
                  id="venue-addr"
                  className="input"
                  value={form.address}
                  onChange={(event) =>
                    setForm((current) => ({ ...current, address: event.target.value }))
                  }
                />
              </div>
              <div>
                <label className="field-label" htmlFor="venue-desc">
                  Descrição
                </label>
                <textarea
                  id="venue-desc"
                  className="textarea"
                  value={form.description}
                  onChange={(event) =>
                    setForm((current) => ({ ...current, description: event.target.value }))
                  }
                />
              </div>
            </div>
          </Panel>

          <div style={{ display: "grid", gap: 18, alignContent: "start" }}>
            <Panel title="Preços e horários">
              <div style={{ display: "grid", gap: 14 }}>
                <div>
                  <label className="field-label" htmlFor="venue-price">
                    Preço por hora (R$)
                  </label>
                  <input
                    id="venue-price"
                    type="number"
                    min={50}
                    className="input"
                    value={form.price}
                    onChange={(event) =>
                      setForm((current) => ({ ...current, price: Number(event.target.value) }))
                    }
                  />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  <div>
                    <label className="field-label" htmlFor="venue-open">
                      Abertura
                    </label>
                    <select
                      id="venue-open"
                      className="select"
                      value={form.opening}
                      onChange={(event) =>
                        setForm((current) => ({ ...current, opening: event.target.value }))
                      }
                    >
                      {openHours.map((hour) => (
                        <option key={hour}>{hour}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="field-label" htmlFor="venue-close">
                      Fechamento
                    </label>
                    <select
                      id="venue-close"
                      className="select"
                      value={form.closing}
                      onChange={(event) =>
                        setForm((current) => ({ ...current, closing: event.target.value }))
                      }
                    >
                      {openHours.map((hour) => (
                        <option key={hour}>{hour}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <span style={{ fontSize: 12.5, color: "var(--lichen-sage)" }}>
                  Horários de bloqueio manual são feitos na página de Campos.
                </span>
              </div>
            </Panel>

            <Panel title="Estrutura">
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {allStructures.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    className={`chip ${form.structure.includes(tag) ? "active" : ""}`}
                    onClick={() => toggleStructure(tag)}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </Panel>

            <Panel title="Campos cadastrados">
              <div style={{ display: "grid", gap: 8 }}>
                {venue.fields.map((field) => (
                  <div
                    key={field.id}
                    className="row-between"
                    style={{
                      padding: "10px 12px",
                      borderRadius: 12,
                      background: "var(--bone-white)",
                      fontSize: 13.5,
                    }}
                  >
                    <span>
                      <strong style={{ color: "var(--forest-depths)" }}>{field.name}</strong> ·{" "}
                      {field.type}
                    </span>
                    <button
                      type="button"
                      className="chip chip-ghost"
                      onClick={() => navigate({ to: "/proprietario/campos" })}
                    >
                      Gerenciar
                    </button>
                  </div>
                ))}
              </div>
            </Panel>
          </div>
        </div>

        <div style={{ display: "flex", gap: 10, justifyContent: "flex-end" }}>
          <button
            type="button"
            className="button p-button button-outline"
            style={{ width: "auto" }}
            onClick={() => toast.info("Alterações descartadas")}
          >
            <Trash2 size={16} aria-hidden="true" /> Descartar
          </button>
          <button
            type="button"
            className="button p-button button-dark"
            style={{ width: "auto" }}
            onClick={save}
          >
            <Save size={16} aria-hidden="true" /> Salvar alterações
          </button>
        </div>
      </div>
    </AppShell>
  );
}
