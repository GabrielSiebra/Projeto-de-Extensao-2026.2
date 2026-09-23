import { CalendarX2, Check } from "lucide-react";
import { toast } from "sonner";
import type { DaySlot, SlotStatus } from "../../types";
import { useApp } from "../../context/app";
import { EmptyState } from "./primitives";

const legend: Array<{ color: string; label: string }> = [
  { color: "var(--st-success)", label: "Disponível" },
  { color: "var(--st-warning)", label: "Reservado" },
  { color: "var(--st-danger)", label: "Ocupado" },
  { color: "var(--st-live)", label: "Em jogo" },
  { color: "var(--st-neutral)", label: "Indisponível" },
];

const slotCopy: Record<SlotStatus, string> = {
  available: "Disponível",
  reserved: "Reservado",
  occupied: "Ocupado",
  live: "Em jogo",
  unavailable: "Indisponível",
};

const dotColor: Record<SlotStatus, string> = {
  available: "var(--st-success)",
  reserved: "var(--st-warning)",
  occupied: "var(--st-danger)",
  live: "var(--st-live)",
  unavailable: "var(--st-neutral)",
};

export function SlotLegend() {
  return (
    <div className="slot-legend" aria-label="Legenda de horários">
      {legend.map((item) => (
        <span key={item.label}>
          <i style={{ background: item.color }} aria-hidden="true" />
          {item.label}
        </span>
      ))}
    </div>
  );
}

export function SlotPicker({
  slots,
  venueId,
  date,
  onSelect,
  selectedTime,
}: {
  slots: DaySlot[];
  venueId: string;
  date: string;
  onSelect: (slot: DaySlot) => void;
  selectedTime?: string | undefined;
}) {
  const { inWaitlist, joinWaitlist } = useApp();

  if (slots.length === 0) {
    return (
      <EmptyState
        icon={<CalendarX2 size={26} aria-hidden="true" />}
        title="Nenhum horário para esta data"
        description="Escolha outra data na barra de dias para ver a disponibilidade da areninha."
      />
    );
  }

  return (
    <>
      <SlotLegend />
      <div className="slot-grid" style={{ marginTop: 16 }} role="radiogroup" aria-label="Horários">
        {slots.map((slot) => {
          const selectable = slot.status === "available";
          const waiting = inWaitlist(venueId, date, slot.time);
          return (
            <button
              key={slot.time}
              type="button"
              role="radio"
              aria-checked={selectedTime === slot.time}
              className={`slot-card slot-${slot.status} ${selectedTime === slot.time ? "selected" : ""}`}
              disabled={!selectable && slot.status !== "unavailable" && slot.status !== "reserved"}
              style={
                selectedTime === slot.time
                  ? { borderColor: "var(--deep-verdant)", background: "var(--sprout-wash)" }
                  : undefined
              }
              onClick={() => {
                if (selectable) onSelect(slot);
                else if (slot.status === "reserved" || slot.status === "unavailable") {
                  if (!waiting) {
                    joinWaitlist({ venueId, date, time: slot.time });
                    toast.success("Você entrou na lista de espera deste horário.", {
                      description: `${date} · ${slot.time} — avisaremos se um horário liberar.`,
                    });
                  }
                }
              }}
            >
              <strong>
                {slot.time} — {String(slot.hour + 1).padStart(2, "0")}:00
              </strong>
              <small>
                <i style={{ background: dotColor[slot.status] }} aria-hidden="true" />
                {selectable ? (
                  <>
                    {selectedTime === slot.time && <Check size={12} aria-hidden="true" />}
                    {slot.status === "available" && waiting ? "Na lista" : slotCopy[slot.status]}
                  </>
                ) : (
                  slotCopy[slot.status]
                )}
              </small>
            </button>
          );
        })}
      </div>
    </>
  );
}
