import { useEffect, useMemo, useRef, useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  CheckCircle2,
  CreditCard,
  Loader2,
  QrCode,
  Repeat,
  Ticket,
  UserRound,
  UsersRound,
  Wallet,
} from "lucide-react";
import { PublicHeader } from "../components/platform/AppShell";
import { Stepper } from "../components/platform/Stepper";
import { SlotPicker } from "../components/platform/SlotPicker";
import { Avatar, Panel, Rating, initialsOf } from "../components/platform/primitives";
import { useApp } from "../context/app";
import type { AccountType, PaymentMethod, Reservation } from "../types";
import { addDaysISO, formatDateLong, toISODate } from "../lib/format";

interface ReservaSearch {
  arena?: string | undefined;
  date?: string | undefined;
  time?: string | undefined;
  campo?: string | undefined;
  recorrente?: boolean | undefined;
}

const steps = ["Areninha", "Data", "Horário", "Conta", "Resumo", "Pagamento"];

const paymentMethods: Array<{
  id: PaymentMethod;
  label: string;
  hint: string;
  icon: typeof QrCode;
}> = [
  { id: "pix", label: "PIX", hint: "Aprovação imediata (simulada)", icon: QrCode },
  { id: "card", label: "Cartão", hint: "Crédito ou débito (simulado)", icon: CreditCard },
  { id: "other", label: "Outro método", hint: "Vale, convênio ou combinação", icon: Wallet },
];

export const Route = createFileRoute("/reserva")({
  validateSearch: (search: Record<string, unknown>): ReservaSearch => ({
    arena: typeof search["arena"] === "string" ? search["arena"] : undefined,
    date: typeof search["date"] === "string" ? search["date"] : undefined,
    time: typeof search["time"] === "string" ? search["time"] : undefined,
    campo: typeof search["campo"] === "string" ? search["campo"] : undefined,
    recorrente: typeof search["recorrente"] === "boolean" ? search["recorrente"] : undefined,
  }),
  component: ReservaPage,
});

function ReservaPage() {
  const search = Route.useSearch();
  const navigate = useNavigate();
  const { venueById, getSlots, createReservation, session, teams, myTeamId } = useApp();

  const venue = venueById(search.arena ?? "arena-central");
  const [step, setStep] = useState(search.time ? 3 : search.date ? 2 : 0);
  const [date, setDate] = useState(search.date ?? addDaysISO(0));
  const [time, setTime] = useState(search.time ?? "");
  const [fieldId, setFieldId] = useState(search.campo ?? venue?.fields[0]?.id ?? "");
  const [accountType, setAccountType] = useState<Exclude<AccountType, "owner">>(
    session?.role === "time" ? "time" : "individual",
  );
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("pix");
  const [recurring, setRecurring] = useState(Boolean(search.recorrente));
  const [coupon, setCoupon] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [payState, setPayState] = useState<"idle" | "processing" | "approved">("idle");
  const [confirmed, setConfirmed] = useState<Reservation | null>(null);
  const timers = useRef<number[]>([]);

  useEffect(
    () => () => {
      timers.current.forEach((timer) => window.clearTimeout(timer));
    },
    [],
  );

  const days = useMemo(() => Array.from({ length: 14 }, (_, index) => addDaysISO(index)), []);
  const slots = venue ? getSlots(venue.id, date) : [];
  const field = venue?.fields.find((item) => item.id === fieldId) ?? venue?.fields[0];
  const myTeam = teams.find((team) => team.id === myTeamId);
  const amount = field?.pricePerHour ?? venue?.pricePerHour ?? 140;
  const discount = appliedCoupon ? Math.round(amount * 0.1) : 0;
  const base = amount - discount;
  const fees = Math.round(base * 0.05);
  const total = base + fees;

  const recurringDates = useMemo(() => {
    if (!recurring) return [];
    const start = new Date(date + "T12:00:00");
    return Array.from({ length: 13 }, (_, index) => {
      const occurrence = new Date(start);
      occurrence.setDate(occurrence.getDate() + index * 7);
      return toISODate(occurrence);
    });
  }, [recurring, date]);

  if (!venue) {
    return (
      <div className="public-page">
        <PublicHeader />
        <main className="container" style={{ padding: "60px 0" }}>
          <div className="panel">
            <div className="empty-state">
              <h3>Areninha inválida</h3>
              <p>Volte para a busca para escolher uma areninha.</p>
              <button
                type="button"
                className="button p-button button-primary"
                onClick={() => navigate({ to: "/buscar" })}
              >
                Ir para a busca
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (confirmed) {
    return (
      <div className="public-page">
        <PublicHeader />
        <main className="container" style={{ padding: "56px 0 90px", maxWidth: 720 }}>
          <Panel bodyClass="panel-body" title="">
            <div style={{ textAlign: "center", padding: "18px 6px 6px" }}>
              <span className="success-burst">
                <CheckCircle2 size={42} aria-hidden="true" />
              </span>
              <h2 style={{ margin: "22px 0 8px", color: "var(--forest-depths)", fontSize: 30 }}>
                🎉 Reserva confirmada!
              </h2>
              <p style={{ margin: "0 0 26px", color: "var(--lichen-sage)" }}>
                Tudo certo. Enviamos a confirmação para sua central de notificações.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gap: 10,
                padding: 20,
                borderRadius: 18,
                background: "var(--bone-white)",
                textAlign: "left",
              }}
            >
              {[
                ["Código da reserva", confirmed.code],
                ["Areninha", venue.name],
                ["Campo", confirmed.fieldName],
                ["Data", formatDateLong(confirmed.date)],
                [
                  "Horário",
                  `${confirmed.time} — ${String(Number(confirmed.time.slice(0, 2)) + 1).padStart(2, "0")}:00`,
                ],
                [
                  "Valor",
                  confirmed.total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }),
                ],
              ].map(([label, value]) => (
                <div key={label} className="row-between" style={{ fontSize: 14 }}>
                  <span style={{ color: "var(--lichen-sage)" }}>{label}</span>
                  <strong style={{ color: "var(--forest-depths)" }}>{value}</strong>
                </div>
              ))}
              <div className="row-between" style={{ fontSize: 14 }}>
                <span style={{ color: "var(--lichen-sage)" }}>Status</span>
                <span className="badge badge-success">Confirmada</span>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 12,
                justifyContent: "center",
                marginTop: 26,
              }}
            >
              <button
                type="button"
                className="button p-button button-dark"
                style={{ width: "auto" }}
                onClick={() => navigate({ to: "/app/reservas" })}
              >
                Ver minha reserva
              </button>
              <button
                type="button"
                className="button p-button button-outline"
                style={{ width: "auto" }}
                onClick={() => navigate({ to: "/" })}
              >
                Voltar para início
              </button>
            </div>
          </Panel>
        </main>
      </div>
    );
  }

  const canAdvance = () => {
    if (step === 0) return Boolean(venue);
    if (step === 1) return Boolean(date);
    if (step === 2) return Boolean(time);
    if (step === 3) return true;
    if (step === 4) return true;
    return true;
  };

  const handlePay = () => {
    setPayState("processing");
    const first = window.setTimeout(() => {
      setPayState("approved");
      const second = window.setTimeout(() => {
        const reservation = createReservation({
          venueId: venue.id,
          fieldId: field?.id ?? `${venue.id}-campo-1`,
          date,
          time,
          accountType,
          paymentMethod,
          ...(recurring ? { recurring: true } : {}),
        });
        setConfirmed(reservation);
        toast.success("Pagamento aprovado", {
          description: `Reserva ${reservation.code} confirmada com sucesso.`,
        });
      }, 1000);
      timers.current.push(second);
    }, 1500);
    timers.current.push(first);
  };

  return (
    <div className="public-page">
      <PublicHeader />
      <main className="container" style={{ padding: "30px 0 90px", maxWidth: 980 }}>
        <p className="eyebrow">
          <span />
          Nova reserva · demonstração
        </p>
        <h2
          style={{
            margin: "0 0 6px",
            color: "var(--forest-depths)",
            fontSize: "clamp(28px,3.4vw,40px)",
          }}
        >
          Reserve seu horário em 6 passos
        </h2>
        <p style={{ margin: "0 0 26px", color: "var(--lichen-sage)" }}>
          Nenhum pagamento real é processado — todo o fluxo roda no navegador.
        </p>

        <Panel>
          <div style={{ marginBottom: 28 }}>
            <Stepper steps={steps} current={step} />
          </div>

          {step === 0 && (
            <div style={{ display: "grid", gap: 16 }}>
              <h3 style={{ margin: 0, color: "var(--forest-depths)", fontSize: 19 }}>
                Etapa 1 · Areninha
              </h3>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 16,
                  alignItems: "center",
                  padding: 18,
                  borderRadius: 18,
                  border: "1.5px solid var(--deep-verdant)",
                  background: "var(--sprout-wash)",
                }}
              >
                <Avatar initials={initialsOf(venue.name)} size="lg" />
                <div style={{ flex: 1, minWidth: 200 }}>
                  <strong style={{ display: "block", color: "var(--forest-depths)", fontSize: 17 }}>
                    {venue.name}
                  </strong>
                  <span style={{ color: "var(--lichen-sage)", fontSize: 13 }}>
                    {venue.neighborhood} · {venue.address}
                  </span>
                  <div style={{ marginTop: 6 }}>
                    <Rating value={venue.rating} count={venue.reviewCount} />
                  </div>
                </div>
                <strong style={{ color: "var(--forest-depths)" }}>
                  {amount.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}/hora
                </strong>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {venue.fields.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`chip ${item.id === fieldId ? "active" : ""}`}
                    onClick={() => setFieldId(item.id)}
                  >
                    {item.name} · {item.type}
                  </button>
                ))}
              </div>
              <button
                type="button"
                className="chip chip-ghost"
                style={{ alignSelf: "flex-start" }}
                onClick={() => navigate({ to: "/buscar" })}
              >
                <ArrowLeft size={14} aria-hidden="true" /> Trocar areninha
              </button>
            </div>
          )}

          {step === 1 && (
            <div style={{ display: "grid", gap: 16 }}>
              <h3 style={{ margin: 0, color: "var(--forest-depths)", fontSize: 19 }}>
                Etapa 2 · Data
              </h3>
              <div className="date-strip" style={{ gridTemplateColumns: "repeat(7, 1fr)" }}>
                {days.slice(0, 7).map((day) => (
                  <button
                    key={day}
                    type="button"
                    onClick={() => {
                      setDate(day);
                      setTime("");
                    }}
                    style={{
                      padding: "12px 4px",
                      borderRadius: 12,
                      border: "1px solid",
                      cursor: "pointer",
                      borderColor: day === date ? "var(--forest-depths)" : "var(--mist-green)",
                      background: day === date ? "var(--forest-depths)" : "var(--pure-white)",
                      color: day === date ? "var(--pure-white)" : "var(--lichen-sage)",
                    }}
                  >
                    <span style={{ display: "block", fontSize: 10, marginBottom: 4 }}>
                      {new Date(day + "T12:00:00").toLocaleDateString("pt-BR", {
                        weekday: "short",
                      })}
                    </span>
                    <strong style={{ fontSize: 15 }}>{day.slice(8)}</strong>
                  </button>
                ))}
              </div>
              <label className="field-label" htmlFor="data-reserva">
                Ou escolha outra data
              </label>
              <input
                id="data-reserva"
                type="date"
                className="input"
                style={{ maxWidth: 260 }}
                min={toISODate(new Date())}
                value={date}
                onChange={(event) => {
                  setDate(event.target.value);
                  setTime("");
                }}
              />
            </div>
          )}

          {step === 2 && (
            <div style={{ display: "grid", gap: 16 }}>
              <h3 style={{ margin: 0, color: "var(--forest-depths)", fontSize: 19 }}>
                Etapa 3 · Horário
              </h3>
              <span
                style={{
                  color: "var(--lichen-sage)",
                  fontSize: 13.5,
                  display: "inline-flex",
                  gap: 7,
                  alignItems: "center",
                }}
              >
                <CalendarDays size={15} aria-hidden="true" /> {formatDateLong(date)}
              </span>
              <SlotPicker
                slots={slots}
                venueId={venue.id}
                date={date}
                selectedTime={time}
                onSelect={(slot) => setTime(slot.time)}
              />
            </div>
          )}

          {step === 3 && (
            <div style={{ display: "grid", gap: 16 }}>
              <h3 style={{ margin: 0, color: "var(--forest-depths)", fontSize: 19 }}>
                Etapa 4 · Conta
              </h3>
              <p style={{ margin: 0, color: "var(--lichen-sage)", fontSize: 14 }}>
                Para quem é esta reserva?
              </p>
              <div
                className="account-grid"
                style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}
              >
                <button
                  type="button"
                  className="account-card"
                  style={
                    accountType === "individual"
                      ? { borderColor: "var(--electric-sprout)", background: "var(--moss-shadow)" }
                      : undefined
                  }
                  onClick={() => setAccountType("individual")}
                >
                  <span className="account-icon">
                    <UserRound size={22} aria-hidden="true" />
                  </span>
                  <h3>Conta individual</h3>
                  <p>
                    Reservar no seu nome ({session?.name ?? "Rafael Mendonça"}) para uma pelada
                    casual ou jogo com amigos.
                  </p>
                  <span className="account-cta">
                    {accountType === "individual" ? "Selecionada" : "Selecionar"}{" "}
                    {accountType === "individual" && <Check size={14} aria-hidden="true" />}
                  </span>
                </button>
                <button
                  type="button"
                  className="account-card"
                  style={
                    accountType === "time"
                      ? { borderColor: "var(--electric-sprout)", background: "var(--moss-shadow)" }
                      : undefined
                  }
                  onClick={() => setAccountType("time")}
                >
                  <span className="account-icon">
                    <UsersRound size={22} aria-hidden="true" />
                  </span>
                  <h3>Conta de time</h3>
                  <p>
                    Reservar para <strong>{myTeam?.name ?? "seu time"}</strong> com{" "}
                    {myTeam?.players.length ?? 0} jogadores no elenco.
                  </p>
                  <span className="account-cta">
                    {accountType === "time" ? "Selecionada" : "Selecionar"}{" "}
                    {accountType === "time" && <Check size={14} aria-hidden="true" />}
                  </span>
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div style={{ display: "grid", gap: 16 }}>
              <h3 style={{ margin: 0, color: "var(--forest-depths)", fontSize: 19 }}>
                Etapa 5 · Resumo
              </h3>
              <div style={{ display: "grid", gap: 10 }}>
                {[
                  ["Areninha", venue.name],
                  ["Campo", field?.name ?? "Campo 01"],
                  ["Data", formatDateLong(date)],
                  [
                    "Horário",
                    `${time} — ${String(Number(time.slice(0, 2)) + 1).padStart(2, "0")}:00`,
                  ],
                  ["Duração", "1 hora"],
                  ["Conta", accountType === "time" ? `Time · ${myTeam?.name ?? ""}` : "Individual"],
                  [
                    "Valor da hora",
                    amount.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }),
                  ],
                  ...(appliedCoupon
                    ? ([
                        [
                          "Cupom SEXTA10",
                          `− ${discount.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`,
                        ],
                      ] as Array<[string, string]>)
                    : []),
                  [
                    "Taxas (5%)",
                    fees.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }),
                  ],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="row-between"
                    style={{
                      padding: "11px 0",
                      borderBottom: "1px dashed var(--mist-green)",
                      fontSize: 14.5,
                    }}
                  >
                    <span style={{ color: "var(--lichen-sage)" }}>{label}</span>
                    <strong style={{ color: "var(--forest-depths)" }}>{value}</strong>
                  </div>
                ))}
                <div className="row-between" style={{ paddingTop: 8, fontSize: 18 }}>
                  <strong style={{ color: "var(--forest-depths)" }}>Total</strong>
                  <strong style={{ color: "var(--deep-verdant)" }}>
                    {total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                  </strong>
                </div>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center" }}>
                <input
                  className="input"
                  style={{ maxWidth: 220 }}
                  placeholder="Cupom (ex.: SEXTA10)"
                  value={coupon}
                  onChange={(event) => setCoupon(event.target.value.toUpperCase())}
                  disabled={Boolean(appliedCoupon)}
                />
                <button
                  type="button"
                  className="chip"
                  disabled={Boolean(appliedCoupon)}
                  onClick={() => {
                    if (coupon.trim().toUpperCase() === "SEXTA10") {
                      setAppliedCoupon("SEXTA10");
                      toast.success("Cupom aplicado: 10% OFF");
                    } else {
                      toast.error("Cupom inválido", { description: "Tente SEXTA10 para a demo." });
                    }
                  }}
                >
                  <Ticket size={14} aria-hidden="true" /> Aplicar cupom
                </button>
                {appliedCoupon && (
                  <button
                    type="button"
                    className="chip chip-ghost"
                    onClick={() => {
                      setAppliedCoupon(null);
                      setCoupon("");
                    }}
                  >
                    Remover
                  </button>
                )}
              </div>

              <div
                style={{
                  padding: 18,
                  borderRadius: 18,
                  border: recurring
                    ? "1.5px solid var(--deep-verdant)"
                    : "1px dashed var(--mist-green)",
                  background: recurring ? "var(--sprout-wash)" : "var(--bone-white)",
                }}
              >
                <div className="row-between" style={{ flexWrap: "wrap", gap: 10 }}>
                  <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                    <Repeat size={18} aria-hidden="true" style={{ color: "var(--deep-verdant)" }} />
                    <div>
                      <strong
                        style={{ display: "block", color: "var(--forest-depths)", fontSize: 14.5 }}
                      >
                        Reserva recorrente
                      </strong>
                      <span style={{ color: "var(--lichen-sage)", fontSize: 12.5 }}>
                        Mesmo horário toda semana durante 3 meses
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    className={`chip ${recurring ? "active" : ""}`}
                    onClick={() => setRecurring((value) => !value)}
                  >
                    {recurring ? "Ativada" : "Ativar"}
                  </button>
                </div>
                {recurring && (
                  <div style={{ marginTop: 14 }}>
                    <strong style={{ fontSize: 13, color: "var(--forest-depths)" }}>
                      Toda{" "}
                      {new Date(date + "T12:00:00").toLocaleDateString("pt-BR", {
                        weekday: "long",
                      })}{" "}
                      · {time} — {String(Number(time.slice(0, 2)) + 1).padStart(2, "0")}:00 durante
                      3 meses · {recurringDates.length} sessões
                    </strong>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 10 }}>
                      {recurringDates.slice(0, 6).map((occurrence) => (
                        <span
                          key={occurrence}
                          className="badge badge-success"
                          style={{ fontWeight: 600 }}
                        >
                          {occurrence.slice(8)}/{occurrence.slice(5, 7)}
                        </span>
                      ))}
                      {recurringDates.length > 6 && (
                        <span className="badge badge-neutral">
                          +{recurringDates.length - 6} datas
                        </span>
                      )}
                    </div>
                    <p style={{ margin: "10px 0 0", fontSize: 12.5, color: "var(--lichen-sage)" }}>
                      Resumo simulado — apenas a primeira sessão é criada nesta demonstração.
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {step === 5 && (
            <div style={{ display: "grid", gap: 16 }}>
              <h3 style={{ margin: 0, color: "var(--forest-depths)", fontSize: 19 }}>
                Etapa 6 · Pagamento simulado
              </h3>

              {payState === "idle" && (
                <>
                  <div
                    className="grid-cards"
                    style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}
                  >
                    {paymentMethods.map((method) => (
                      <button
                        key={method.id}
                        type="button"
                        className="stat-card"
                        style={{
                          textAlign: "left",
                          cursor: "pointer",
                          borderColor:
                            paymentMethod === method.id ? "var(--deep-verdant)" : undefined,
                          background:
                            paymentMethod === method.id ? "var(--sprout-wash)" : undefined,
                        }}
                        onClick={() => setPaymentMethod(method.id)}
                      >
                        <div className="row-between">
                          <span className="stat-icon">
                            <method.icon size={19} aria-hidden="true" />
                          </span>
                          {paymentMethod === method.id && (
                            <CheckCircle2 size={18} style={{ color: "var(--deep-verdant)" }} />
                          )}
                        </div>
                        <strong style={{ color: "var(--forest-depths)", fontSize: 16 }}>
                          {method.label}
                        </strong>
                        <span className="stat-hint">{method.hint}</span>
                      </button>
                    ))}
                  </div>

                  {paymentMethod === "card" && (
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                        gap: 12,
                        padding: 18,
                        borderRadius: 18,
                        background: "var(--bone-white)",
                      }}
                    >
                      <div style={{ gridColumn: "1 / -1" }}>
                        <label className="field-label" htmlFor="card-number">
                          Número do cartão
                        </label>
                        <input
                          id="card-number"
                          className="input"
                          placeholder="4242 4242 4242 4242"
                          inputMode="numeric"
                        />
                      </div>
                      <div>
                        <label className="field-label" htmlFor="card-name">
                          Nome impresso
                        </label>
                        <input id="card-name" className="input" placeholder="RAFAEL M MENDONCA" />
                      </div>
                      <div>
                        <label className="field-label" htmlFor="card-valid">
                          Validade
                        </label>
                        <input id="card-valid" className="input" placeholder="12/29" />
                      </div>
                      <div>
                        <label className="field-label" htmlFor="card-cvv">
                          CVV
                        </label>
                        <input id="card-cvv" className="input" placeholder="123" />
                      </div>
                    </div>
                  )}

                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 14,
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: 18,
                      borderRadius: 18,
                      background: "var(--forest-depths)",
                      color: "var(--pure-white)",
                    }}
                  >
                    <div>
                      <span style={{ color: "var(--lichen-sage)", fontSize: 12 }}>
                        Total a pagar
                      </span>
                      <strong
                        style={{ display: "block", fontSize: 26, color: "var(--electric-sprout)" }}
                      >
                        {total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                      </strong>
                    </div>
                    <button
                      type="button"
                      className="button p-button button-primary button-large"
                      style={{ width: "auto" }}
                      onClick={handlePay}
                    >
                      Pagar agora
                    </button>
                  </div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: 12.5,
                      color: "var(--lichen-sage)",
                      textAlign: "center",
                    }}
                  >
                    Simulação de checkout — nenhum dado de cartão é enviado ou armazenado.
                  </p>
                </>
              )}

              {payState !== "idle" && (
                <div style={{ textAlign: "center", padding: "40px 20px" }}>
                  {payState === "processing" ? (
                    <>
                      <Loader2
                        size={44}
                        aria-hidden="true"
                        className="animate-spin"
                        style={{ color: "var(--deep-verdant)" }}
                      />
                      <h3 style={{ margin: "18px 0 6px", color: "var(--forest-depths)" }}>
                        Processando pagamento...
                      </h3>
                      <p style={{ margin: 0, color: "var(--lichen-sage)" }}>
                        Validando o método{" "}
                        {paymentMethods.find((m) => m.id === paymentMethod)?.label} (simulado).
                      </p>
                    </>
                  ) : (
                    <>
                      <span className="success-burst">
                        <Check size={40} aria-hidden="true" />
                      </span>
                      <h3 style={{ margin: "18px 0 6px", color: "var(--forest-depths)" }}>
                        Pagamento aprovado
                      </h3>
                      <p style={{ margin: 0, color: "var(--lichen-sage)" }}>
                        Reserva confirmada — preparando seu comprovante...
                      </p>
                    </>
                  )}
                </div>
              )}
            </div>
          )}

          {step < 5 && payState === "idle" && (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: 12,
                marginTop: 30,
                paddingTop: 20,
                borderTop: "1px solid var(--mist-green)",
              }}
            >
              <button
                type="button"
                className="button p-button button-outline"
                style={{ width: "auto" }}
                disabled={step === 0}
                onClick={() => setStep((current) => Math.max(0, current - 1))}
              >
                <ArrowLeft size={16} aria-hidden="true" /> Voltar
              </button>
              <button
                type="button"
                className="button p-button button-dark"
                style={{ width: "auto" }}
                disabled={!canAdvance()}
                onClick={() => setStep((current) => Math.min(5, current + 1))}
              >
                {step === 4 ? "Ir para pagamento" : "Continuar"}{" "}
                <ArrowRight size={16} aria-hidden="true" />
              </button>
            </div>
          )}
        </Panel>
      </main>
    </div>
  );
}
