import { Button } from "primereact/button";
import { ArrowUpRight } from "lucide-react";

export function CTA() {
  return (
    <section className="cta-section">
      <div className="container cta-inner">
        <p className="eyebrow eyebrow-dark">
          <span />O próximo jogo começa aqui
        </p>
        <h2>
          Pronto para organizar
          <br />o próximo jogo?
        </h2>
        <p>
          Tenha mais praticidade para encontrar horários, reunir jogadores e colocar sua partida em
          campo.
        </p>
        <Button
          className="button button-primary button-large"
          onClick={() =>
            document.querySelector("#agendamento")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Começar agora <ArrowUpRight size={18} aria-hidden="true" />
        </Button>
      </div>
    </section>
  );
}
