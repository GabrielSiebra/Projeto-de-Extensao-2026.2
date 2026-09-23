import { steps } from "../../data/landing";

export function HowItWorks() {
  return (
    <section className="section process-section" id="como-funciona">
      <div className="container">
        <div className="process-intro">
          <p className="eyebrow eyebrow-dark"><span />Como funciona</p>
          <h2>Da ideia ao apito inicial.</h2>
          <p>Uma sequência simples para reunir os jogadores e organizar cada detalhe antes da bola rolar.</p>
        </div>
        <ol className="steps-list">
          {steps.map(({ number, icon: Icon, title, description }) => (
            <li key={number}>
              <div className="step-marker"><Icon size={20} aria-hidden="true" /></div>
              <span className="step-number">{number}</span>
              <h3>{title}</h3><p>{description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}