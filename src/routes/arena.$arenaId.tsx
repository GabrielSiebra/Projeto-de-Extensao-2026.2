import { useMemo, useState } from "react";
import { createFileRoute, useNavigate, useParams } from "@tanstack/react-router";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Coins,
  Construction,
  Dumbbell,
  Heart,
  MapPin,
  ParkingCircle,
  Repeat,
  Ruler,
  ShowerHead,
  Star,
  UsersRound,
} from "lucide-react";
import { PublicHeader } from "../components/platform/AppShell";
import { ArenaCover } from "../components/platform/ArenaCard";
import { SlotPicker } from "../components/platform/SlotPicker";
import { EmptyState, Rating } from "../components/platform/primitives";
import { useApp } from "../context/app";
import { addDaysISO, dayNumber, formatDateLong, weekdayShort } from "../lib/format";

export const Route = createFileRoute("/arena/$arenaId")({
  component: ArenaPage,
});

const structureIcons = [
  { match: "Estacionamento", icon: ParkingCircle },
  { match: "Vestiário", icon: ShowerHead },
  { match: "Iluminação", icon: Dumbbell },
  { match: "Churrasqueira", icon: Coins },
];

function ArenaPage() {
  const { arenaId } = useParams({ from: "/arena/$arenaId" });
  const { venueById, getSlots, isFavorite, toggleFavorite } = useApp();
  const navigate = useNavigate();
  const venue = venueById(arenaId);
  const [date, setDate] = useState(addDaysISO(0));
  const [fieldId, setFieldId] = useState(venue?.fields[0]?.id ?? "");

  const days = useMemo(() => Array.from({ length: 7 }, (_, index) => addDaysISO(index)), []);

  if (!venue) {
    return (
      <div className="public-page">
        <PublicHeader />
        <main className="container" style={{ padding: "60px 0" }}>
          <div className="panel">
            <EmptyState
              icon={<Construction size={26} aria-hidden="true" />}
              title="Areninha não encontrada"
              description="O endereço informado não existe na demonstração. Volte para a busca e escolha outra areninha."
              action={
                <button
                  type="button"
                  className="button p-button button-primary"
                  onClick={() => navigate({ to: "/buscar" })}
                >
                  Voltar à busca
                </button>
              }
            />
          </div>
        </main>
      </div>
    );
  }

  const slots = getSlots(venue.id, date);
  const favorite = isFavorite(venue.id);
  const selectedField = venue.fields.find((field) => field.id === fieldId) ?? venue.fields[0];

  return (
    <div className="public-page">
      <PublicHeader active="buscar" />
      <main className="container" style={{ padding: "30px 0 80px" }}>
        <section style={{ display: "grid", gap: 18 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 14,
            }}
          >
            <div
              style={{
                gridColumn: "span 2",
                minHeight: 260,
                borderRadius: 24,
                overflow: "hidden",
                position: "relative",
              }}
            >
              <ArenaCover venue={venue} showFavorite={false} fill />
            </div>
            <div style={{ display: "grid", gap: 14 }}>
              <div
                style={{
                  minHeight: 123,
                  borderRadius: 24,
                  overflow: "hidden",
                  position: "relative",
                  filter: "hue-rotate(18deg) brightness(1.1)",
                }}
              >
                <ArenaCover
                  venue={{ ...venue, id: `${venue.id}-g2`, popular: false }}
                  showFavorite={false}
                  fill
                />
              </div>
              <div
                style={{
                  minHeight: 123,
                  borderRadius: 24,
                  overflow: "hidden",
                  position: "relative",
                  filter: "hue-rotate(-16deg) brightness(0.92)",
                }}
              >
                <ArenaCover
                  venue={{ ...venue, id: `${venue.id}-g3`, popular: false }}
                  showFavorite={false}
                  fill
                />
              </div>
            </div>
          </div>

          <div className="panel">
            <div className="panel-body">
              <div className="row-between" style={{ flexWrap: "wrap", gap: 14 }}>
                <div>
                  <p className="eyebrow" style={{ marginBottom: 10 }}>
                    <span />
                    {venue.neighborhood} · {venue.city}
                  </p>
                  <h2
                    style={{
                      margin: 0,
                      color: "var(--forest-depths)",
                      fontSize: "clamp(28px,3.6vw,40px)",
                    }}
                  >
                    {venue.name}
                  </h2>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 12 }}>
                    <Rating value={venue.rating} count={venue.reviewCount} />
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        color: "var(--lichen-sage)",
                        fontSize: 13.5,
                      }}
                    >
                      <MapPin size={15} aria-hidden="true" /> {venue.address}
                    </span>
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        color: "var(--lichen-sage)",
                        fontSize: 13.5,
                      }}
                    >
                      <Star size={15} aria-hidden="true" /> {venue.distanceKm.toFixed(1)} km de você
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  className={`chip ${favorite ? "active" : ""}`}
                  onClick={() => toggleFavorite(venue.id)}
                >
                  <Heart size={15} fill={favorite ? "currentColor" : "none"} aria-hidden="true" />
                  {favorite ? "Favoritada" : "Favoritar"}
                </button>
              </div>

              <hr className="divider" />

              <p style={{ margin: 0, color: "var(--moss-shadow)", lineHeight: 1.7, fontSize: 15 }}>
                {venue.description}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 18 }}>
                {venue.structure.map((tag) => {
                  const known = structureIcons.find((item) => tag.includes(item.match));
                  const Icon = known?.icon ?? CheckCircle2;
                  return (
                    <span
                      key={tag}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        padding: "9px 14px",
                        borderRadius: 12,
                        background: "var(--bone-white)",
                        color: "var(--moss-shadow)",
                        fontSize: 13,
                        fontWeight: 600,
                      }}
                    >
                      <Icon size={15} aria-hidden="true" style={{ color: "var(--deep-verdant)" }} />
                      {tag}
                    </span>
                  );
                })}
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  gap: 18,
                  marginTop: 22,
                }}
              >
                <div>
                  <h3
                    style={{
                      margin: "0 0 10px",
                      fontSize: 15,
                      color: "var(--forest-depths)",
                      display: "flex",
                      gap: 8,
                      alignItems: "center",
                    }}
                  >
                    <Ruler size={17} aria-hidden="true" /> Regras da casa
                  </h3>
                  <ul
                    style={{
                      margin: 0,
                      paddingLeft: 18,
                      color: "var(--lichen-sage)",
                      fontSize: 13.5,
                      lineHeight: 1.7,
                    }}
                  >
                    {venue.rules.map((rule) => (
                      <li key={rule}>{rule}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3
                    style={{
                      margin: "0 0 10px",
                      fontSize: 15,
                      color: "var(--forest-depths)",
                      display: "flex",
                      gap: 8,
                      alignItems: "center",
                    }}
                  >
                    <UsersRound size={17} aria-hidden="true" /> Campos disponíveis
                  </h3>
                  <div style={{ display: "grid", gap: 8 }}>
                    {venue.fields.map((field) => (
                      <div
                        key={field.id}
                        className="row-between"
                        style={{
                          padding: "11px 14px",
                          border: "1px solid var(--mist-green)",
                          borderRadius: 12,
                          fontSize: 13.5,
                        }}
                      >
                        <span>
                          <strong style={{ color: "var(--forest-depths)" }}>{field.name}</strong>{" "}
                          <span style={{ color: "var(--lichen-sage)" }}>· {field.type}</span>
                        </span>
                        <strong style={{ color: "var(--deep-verdant)" }}>
                          {field.pricePerHour.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          })}
                        </strong>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="panel" style={{ marginTop: 22 }} id="horarios">
          <div className="panel-body">
            <div className="row-between" style={{ flexWrap: "wrap", gap: 12 }}>
              <div>
                <p className="eyebrow" style={{ marginBottom: 8 }}>
                  <span />
                  Disponibilidade
                </p>
                <h3 style={{ margin: 0, color: "var(--forest-depths)", fontSize: 24 }}>
                  Escolha sua data e horário
                </h3>
              </div>
              <span style={{ color: "var(--lichen-sage)", fontSize: 13 }}>
                <CalendarDays size={15} aria-hidden="true" /> {formatDateLong(date)}
              </span>
            </div>

            <div
              className="date-strip"
              style={{ gridTemplateColumns: "repeat(7, 1fr)", marginTop: 22 }}
            >
              {days.map((day) => (
                <button
                  key={day}
                  type="button"
                  className={`day-pick ${day === date ? "active" : ""}`}
                  onClick={() => setDate(day)}
                  style={{
                    padding: "10px 4px",
                    borderRadius: 10,
                    border: "1px solid transparent",
                    cursor: "pointer",
                    background: day === date ? "var(--forest-depths)" : "var(--bone-white)",
                    color: day === date ? "var(--pure-white)" : "var(--lichen-sage)",
                  }}
                >
                  <span style={{ display: "block", marginBottom: 5, fontSize: 10 }}>
                    {weekdayShort(day)}
                  </span>
                  <strong style={{ fontSize: 15 }}>{dayNumber(day)}</strong>
                </button>
              ))}
            </div>

            {venue.fields.length > 1 && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 18 }}>
                {venue.fields.map((field) => (
                  <button
                    key={field.id}
                    type="button"
                    className={`chip ${field.id === selectedField?.id ? "active" : ""}`}
                    onClick={() => setFieldId(field.id)}
                  >
                    {field.name} · {field.type}
                  </button>
                ))}
              </div>
            )}

            <div style={{ marginTop: 20 }}>
              <SlotPicker
                slots={slots}
                venueId={venue.id}
                date={date}
                selectedTime={undefined}
                onSelect={(slot) =>
                  navigate({
                    to: "/reserva",
                    search: {
                      arena: venue.id,
                      date,
                      time: slot.time,
                      campo: selectedField?.id,
                    },
                  })
                }
              />
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 14,
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 26,
                paddingTop: 20,
                borderTop: "1px dashed var(--mist-green)",
              }}
            >
              <span style={{ color: "var(--lichen-sage)", fontSize: 13 }}>
                Horários reservados ou indisponíveis? Entre na lista de espera com um clique no
                horário.
              </span>
              <button
                type="button"
                className="button p-button button-dark"
                style={{ width: "auto" }}
                onClick={() =>
                  navigate({
                    to: "/reserva",
                    search: {
                      arena: venue.id,
                      date,
                      time: undefined,
                      campo: selectedField?.id,
                      recorrente: true,
                    },
                  })
                }
              >
                <Repeat size={17} aria-hidden="true" /> Criar reserva recorrente
              </button>
            </div>
          </div>
        </section>

        <section
          style={{
            marginTop: 22,
            display: "flex",
            flexWrap: "wrap",
            gap: 14,
            alignItems: "center",
            justifyContent: "space-between",
            padding: "22px 26px",
            borderRadius: 22,
            background: "var(--forest-depths)",
            color: "var(--pure-white)",
          }}
        >
          <div>
            <strong style={{ display: "block", fontSize: 18 }}>
              Pronta disponibilidade: {venue.nextAvailability}
            </strong>
            <span style={{ color: "var(--pale-fern)", fontSize: 13.5 }}>
              Reserve agora em poucos passos — pagamento 100% simulado.
            </span>
          </div>
          <button
            type="button"
            className="button p-button button-primary"
            style={{ width: "auto" }}
            onClick={() =>
              navigate({
                to: "/reserva",
                search: { arena: venue.id, date, campo: selectedField?.id },
              })
            }
          >
            Reservar horário <ArrowRight size={17} aria-hidden="true" />
          </button>
        </section>
      </main>
    </div>
  );
}
