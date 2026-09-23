import { features } from "../../data/landing";

export function Features() {
  return (
    <section className="section light-section" id="funcionalidades">
      <div className="container">
        <div className="section-heading">
          <div><p className="eyebrow"><span />Feito para quem joga</p><h2>Menos conversa.<br />Mais bola rolando.</h2></div>
          <p>Da escolha da quadra à divisão dos jogadores, tudo pensado para tirar a organização do grupo e colocar o jogo em campo.</p>
        </div>
        <div className="feature-grid">
          {features.map(({ icon: Icon, index, title, description }) => (
            <article className="feature-card" key={title}>
              <div className="feature-card-top"><span>{index}</span><Icon size={24} aria-hidden="true" /></div>
              <div><h3>{title}</h3><p>{description}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}