import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";
import { AppShell } from "../../components/platform/AppShell";
import { getOwnerNav } from "../../components/platform/navItems";
import { EmptyState, Panel, StatusBadge } from "../../components/platform/primitives";
import { useApp } from "../../context/app";
import { ownerVenueId } from "../../mocks";
import { addDaysISO, dayNumber, formatDateLong, toISODate, weekdayShort } from "../../lib/format";
import type { Reservation } from "../../types";

export const Route = createFileRoute("/proprietario/agenda")({
  component: OwnerAgenda,
});

const hours = Array.from({ length: 15 }, (_, index) => index + 8);
const weekDays = ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"];

function startOfWeekISO(dateISO: string): string {
  const date = new Date(dateISO + "T12:00:00");
  const day = date.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  date.setDate(date.getDate() + diff);
  return toISODate(date);
}

function OwnerAgenda() {
  const { reservations, ownerNotifications, venueById, teams } = useApp();
  const unread = ownerNotifications.filter((item) => !item.read).length;
  const venue = venueById(ownerVenueId);
  const [view, setView] = useState<"day" | "week" | "month">("week");
  const [selectedDate, setSelectedDate] = useState(addDaysISO(0));
  const [fieldFilter, setFieldFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const filtered = useMemo(
    () =>
      reservations.filter((item) => {
        if (item.venueId !== ownerVenueId) return false;
        if (fieldFilter !== "all" && item.fieldName !== fieldFilter) return false;
        if (statusFilter !== "all" && item.status !== statusFilter) return false;
        return true;
      }),
    [reservations, fieldFilter, statusFilter],
  );

  const forDate = (dateISO: string) =>
    filtered.filter((item) => item.date === dateISO).sort((a, b) => a.time.localeCompare(b.time));

  const dayList = forDate(selectedDate);

  const weekStart = startOfWeekISO(selectedDate);
  const weekDates = Array.from({ length: 7 }, (_, index) => addDaysISOOffset(weekStart, index));

  const monthMatrix = useMemo(() => {
    const base = new Date(selectedDate + "T12:00:00");
    const year = base.getFullYear();
    const month = base.getMonth();
    const first = new Date(year, month, 1);
    const startOffset = (first.getDay() + 6) % 7;
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const cells: Array<{ date: string | null; count: number }> = [];
    for (let i = 0; i < startOffset; i += 1) cells.push({ date: null, count: 0 });
    for (let day = 1; day <= daysInMonth; day += 1) {
      const iso = toISODate(new Date(year, month, day));
      cells.push({ date: iso, count: forDate(iso).length });
    }
    return cells;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDate, filtered]);

  const shift = (delta: number) => {
    const date = new Date(selectedDate + "T12:00:00");
    if (view === "month") date.setMonth(date.getMonth() + delta);
    else if (view === "week") date.setDate(date.getDate() + delta * 7);
    else date.setDate(date.getDate() + delta);
    setSelectedDate(toISODate(date));
  };

  return (
    <AppShell
      role="owner"
      active="/proprietario/agenda"
      title="Agenda"
      subtitle={`${venue?.name ?? ""} · reservas por dia, semana e mês`}
      nav={getOwnerNav(unread)}
    >
      <div style={{ display: "grid", gap: 18 }}>
        <Panel>
          <div className="row-between" style={{ flexWrap: "wrap", gap: 12 }}>
            <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
              <button
                type="button"
                className="chip"
                onClick={() => shift(-1)}
                aria-label="Anterior"
              >
                <ChevronLeft size={15} aria-hidden="true" />
              </button>
              <strong style={{ color: "var(--forest-depths)", fontSize: 15 }}>
                {view === "month"
                  ? new Date(selectedDate + "T12:00:00").toLocaleDateString("pt-BR", {
                      month: "long",
                      year: "numeric",
                    })
                  : formatDateLong(selectedDate)}
              </strong>
              <button type="button" className="chip" onClick={() => shift(1)} aria-label="Próximo">
                <ChevronRight size={15} aria-hidden="true" />
              </button>
              <button
                type="button"
                className="chip chip-ghost"
                onClick={() => setSelectedDate(addDaysISO(0))}
              >
                Hoje
              </button>
            </div>

            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {(["day", "week", "month"] as const).map((item) => (
                <button
                  key={item}
                  type="button"
                  className={`chip ${view === item ? "active" : ""}`}
                  onClick={() => setView(item)}
                >
                  {item === "day" ? "Dia" : item === "week" ? "Semana" : "Mês"}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 16 }}>
            <select
              className="select"
              style={{ maxWidth: 200 }}
              value={fieldFilter}
              onChange={(event) => setFieldFilter(event.target.value)}
            >
              <option value="all">Todos os campos</option>
              {venue?.fields.map((field) => (
                <option key={field.id} value={field.name}>
                  {field.name}
                </option>
              ))}
            </select>
            <select
              className="select"
              style={{ maxWidth: 200 }}
              value={statusFilter}
              onChange={(event) => setStatusFilter(event.target.value)}
            >
              <option value="all">Todos os status</option>
              <option value="pending">Pendentes</option>
              <option value="confirmed">Confirmadas</option>
              <option value="live">Em jogo</option>
              <option value="finished">Finalizadas</option>
              <option value="cancelled">Canceladas</option>
            </select>
          </div>
        </Panel>

        {view === "day" && (
          <Panel title={formatDateLong(selectedDate)}>
            {dayList.length === 0 ? (
              <EmptyState
                icon={<CalendarDays size={26} aria-hidden="true" />}
                title="Dia livre"
                description="Nenhuma reserva corresponde aos filtros nesta data."
              />
            ) : (
              <div style={{ display: "grid", gap: 10 }}>
                {dayList.map((item) => (
                  <AgendaRow key={item.id} reservation={item} />
                ))}
              </div>
            )}
          </Panel>
        )}

        {view === "week" && (
          <Panel title="Semana">
            <div style={{ overflowX: "auto" }}>
              <div className="week-grid">
                <div />
                {weekDates.map((date) => (
                  <div key={date} className="calendar-head">
                    {weekdayShort(date)}
                    <div
                      style={{
                        fontSize: 14,
                        color: date === toISODate(new Date()) ? "var(--deep-verdant)" : "inherit",
                      }}
                    >
                      {dayNumber(date)}
                    </div>
                  </div>
                ))}
                {hours.map((hour) => (
                  <div key={hour} style={{ display: "contents" }}>
                    <div
                      style={{
                        fontSize: 11,
                        color: "var(--lichen-sage)",
                        padding: "6px 4px",
                        textAlign: "right",
                      }}
                    >
                      {String(hour).padStart(2, "0")}h
                    </div>
                    {weekDates.map((date) => {
                      const slot = forDate(date).find(
                        (item) => Number(item.time.slice(0, 2)) === hour,
                      );
                      return (
                        <button
                          key={`${date}-${hour}`}
                          type="button"
                          className={`week-cell ${slot ? "booked" : ""}`}
                          style={{ textAlign: "left", cursor: slot ? "pointer" : "default" }}
                          onClick={() => {
                            if (slot) {
                              setSelectedDate(date);
                              setView("day");
                            }
                          }}
                        >
                          {slot ? (
                            <>
                              {slot.time} · {slot.teamName ?? slot.clientName.split(" ")[0]}
                              <br />
                              {slot.fieldName}
                            </>
                          ) : (
                            ""
                          )}
                        </button>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </Panel>
        )}

        {view === "month" && (
          <Panel
            title={new Date(selectedDate + "T12:00:00").toLocaleDateString("pt-BR", {
              month: "long",
              year: "numeric",
            })}
          >
            <div className="calendar-grid">
              {["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"].map((label) => (
                <div key={label} className="calendar-head">
                  {label}
                </div>
              ))}
              {monthMatrix.map((cell, index) => {
                const todayISO = toISODate(new Date());
                if (!cell.date)
                  return <div key={`blank-${index}`} className="calendar-cell muted" />;
                const reservationsDay = forDate(cell.date);
                return (
                  <button
                    key={cell.date}
                    type="button"
                    className={`calendar-cell ${cell.date === todayISO ? "today" : ""} ${cell.date === selectedDate ? "selected" : ""}`}
                    style={{ textAlign: "left", cursor: "pointer" }}
                    onClick={() => {
                      setSelectedDate(cell.date ?? todayISO);
                      setView("day");
                    }}
                  >
                    <span className="cal-num">{dayNumber(cell.date)}</span>
                    {reservationsDay.slice(0, 2).map((item) => (
                      <span key={item.id} className="cal-chip">
                        {item.time} {item.teamName ?? item.clientName.split(" ")[0]}
                      </span>
                    ))}
                    {cell.count > 2 && <span className="cal-chip">+{cell.count - 2} reservas</span>}
                  </button>
                );
              })}
            </div>
          </Panel>
        )}
      </div>
    </AppShell>
  );
}

function AgendaRow({ reservation }: { reservation: Reservation }) {
  const team = reservation.teamName;
  return (
    <div
      className="row-between"
      style={{
        flexWrap: "wrap",
        gap: 12,
        padding: "14px 16px",
        borderRadius: 16,
        border: "1px solid var(--mist-green)",
        background: "var(--bone-white)",
      }}
    >
      <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
        <strong style={{ color: "var(--forest-depths)", minWidth: 110 }}>
          {reservation.time} — {String(Number(reservation.time.slice(0, 2)) + 1).padStart(2, "0")}
          :00
        </strong>
        <div>
          <strong style={{ display: "block", fontSize: 14, color: "var(--moss-shadow)" }}>
            {reservation.fieldName}
          </strong>
          <span style={{ color: "var(--lichen-sage)", fontSize: 12.5 }}>
            {team ?? reservation.clientName}
          </span>
        </div>
      </div>
      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <span style={{ color: "var(--lichen-sage)", fontSize: 12.5 }}>{reservation.code}</span>
        <StatusBadge status={reservation.status} />
      </div>
    </div>
  );
}

function addDaysISOOffset(dateISO: string, days: number): string {
  const date = new Date(dateISO + "T12:00:00");
  date.setDate(date.getDate() + days);
  return toISODate(date);
}
