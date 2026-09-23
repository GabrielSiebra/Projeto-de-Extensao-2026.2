import { Button } from "primereact/button";
import { Link } from "@tanstack/react-router";
import { ArrowDownRight, Check, Clock3, MapPin, UsersRound } from "lucide-react";

export function Hero() {
  const scrollTo = (selector: string) =>
    document.querySelector(selector)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="hero" id="inicio">
      <div className="hero-orb" aria-hidden="true" />
      <div className="container hero-layout">
        <div className="hero-copy reveal">
          <p className="eyebrow eyebrow-dark">
            <span />A partida começa aqui
          </p>
          <h1>
            Seu jogo começa com <em>um horário.</em>
          </h1>
          <p className="hero-lead">
            Encontre horários, organize sua partida e monte seu time de forma simples em um só
            lugar.
          </p>
          <div className="hero-actions">
            <Link to="/buscar" className="button p-button button-primary button-large no-underline">
              Agendar uma areninha <ArrowDownRight size={18} aria-hidden="true" />
            </Link>
            <Button
              className="button button-ghost button-large"
              onClick={() => scrollTo("#como-funciona")}
            >
              Como funciona
            </Button>
          </div>
          <div className="hero-proof">
            <span>
              <Check size={15} aria-hidden="true" /> Horários em um só lugar
            </span>
            <span>
              <Check size={15} aria-hidden="true" /> Times organizados
            </span>
          </div>
        </div>

        <div className="hero-product" aria-label="Prévia visual da plataforma de agendamento">
          <div className="float-card venue-card">
            <div className="mockup-topline">
              <span>Próxima partida</span>
              <span className="live-dot">Confirmada</span>
            </div>
            <div className="venue-title-row">
              <div className="icon-tile">
                <MapPin size={20} aria-hidden="true" />
              </div>
              <div>
                <strong>Areninha Central</strong>
                <small>Hoje · 20:00</small>
              </div>
            </div>
            <div className="mini-pitch" aria-hidden="true">
              <span className="center-line" />
              <span className="center-circle" />
              <span className="player-dot dot-a" />
              <span className="player-dot dot-b" />
              <span className="player-dot dot-c" />
              <span className="player-dot dot-d" />
              <span className="player-dot dot-e" />
              <span className="player-dot dot-f" />
            </div>
          </div>
          <div className="float-card time-card">
            <div className="time-icon">
              <Clock3 size={19} aria-hidden="true" />
            </div>
            <span>Horário selecionado</span>
            <strong>20:00</strong>
            <small>Disponível para reserva</small>
          </div>
          <div className="float-card squad-card">
            <div className="squad-heading">
              <UsersRound size={18} aria-hidden="true" />
              <span>Seu time</span>
              <b>8/10</b>
            </div>
            <div className="avatar-row" aria-label="Oito jogadores confirmados">
              {["JM", "RL", "AV", "TS", "GP"].map((name) => (
                <span key={name}>{name}</span>
              ))}
              <i>+3</i>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-marquee" aria-hidden="true">
        <span>ESCOLHA O HORÁRIO</span>
        <i>•</i>
        <span>MONTE SEU TIME</span>
        <i>•</i>
        <span>JOGUE</span>
      </div>
    </section>
  );
}
