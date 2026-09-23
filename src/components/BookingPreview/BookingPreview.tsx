import { useState } from "react";
import { Button } from "primereact/button";
import { CalendarDays, Check, ChevronLeft, ChevronRight, Clock3, MapPin } from "lucide-react";
import { schedule, venue } from "../../data/landing";

export function BookingPreview() {
  const [selected, setSelected] = useState("20:00");
  const [confirmed, setConfirmed] = useState(false);

  return (
    <section className="section booking-section" id="agendamento">
      <div className="container booking-layout">
        <div className="booking-copy">
          <p className="eyebrow">
            <span />
            Prévia do agendamento
          </p>
          <h2>
            Seu horário,
            <br />
            sem complicação.
          </h2>
          <p>
            Veja como será fácil encontrar uma areninha e escolher o melhor horário para a sua
            turma.
          </p>
          <div className="notice">
            <CalendarDays size={19} aria-hidden="true" />
            <span>Esta é uma demonstração visual. Nenhuma reserva será realizada.</span>
          </div>
        </div>

        <div className="booking-window">
          <div className="window-bar">
            <span />
            <span />
            <span />
            <small>meucampo.app/agendar</small>
          </div>
          <div className="booking-content">
            <div className="booking-title">
              <div>
                <p>Escolha seu horário</p>
                <h3>{venue.name}</h3>
                <span>
                  <MapPin size={14} aria-hidden="true" /> {venue.location}
                </span>
              </div>
              <div className="day-control">
                <Button className="icon-button" aria-label="Dia anterior">
                  <ChevronLeft />
                </Button>
                <strong>{venue.day}</strong>
                <Button className="icon-button" aria-label="Próximo dia">
                  <ChevronRight />
                </Button>
              </div>
            </div>
            <div className="date-strip" aria-label="Datas disponíveis">
              {[
                { d: "SEG", n: "14" },
                { d: "TER", n: "15" },
                { d: "QUA", n: "16", active: true },
                { d: "QUI", n: "17" },
                { d: "SEX", n: "18" },
              ].map((date) => (
                <div className={date.active ? "active" : ""} key={date.n}>
                  <span>{date.d}</span>
                  <strong>{date.n}</strong>
                </div>
              ))}
            </div>
            <div className="schedule-list" role="radiogroup" aria-label="Horários de hoje">
              {schedule.map((slot) => (
                <button
                  type="button"
                  key={slot.time}
                  className={`${selected === slot.time ? "selected" : ""} ${!slot.available ? "unavailable" : ""}`}
                  disabled={!slot.available}
                  role="radio"
                  aria-checked={selected === slot.time}
                  onClick={() => {
                    setSelected(slot.time);
                    setConfirmed(false);
                  }}
                >
                  <span className="slot-time">
                    <Clock3 size={16} aria-hidden="true" />
                    {slot.time}
                  </span>
                  <span className="slot-status">
                    {selected === slot.time && slot.available && (
                      <Check size={14} aria-hidden="true" />
                    )}
                    {slot.status}
                  </span>
                </button>
              ))}
            </div>
            <Button
              className="button button-dark booking-button"
              onClick={() => setConfirmed(true)}
            >
              {confirmed ? (
                <>
                  <Check size={18} aria-hidden="true" /> Horário selecionado: {selected}
                </>
              ) : (
                "Selecionar horário"
              )}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
