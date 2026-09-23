import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="footer" id="sobre">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a className="wordmark" href="#inicio"><span className="wordmark-mark" aria-hidden="true"><span /></span>ARENA</a>
          <p>Organize sua partida. Escolha o horário. Monte seu time. Jogue.</p>
        </div>
        <div><h3>Navegação</h3><a href="#inicio">Início</a><a href="#como-funciona">Como funciona</a><a href="#funcionalidades">Funcionalidades</a><a href="#sobre">Sobre o projeto</a></div>
        <div><h3>Projeto de Extensão</h3><p>Curso de Análise e Desenvolvimento de Sistemas.</p><span>Integrantes do grupo: a definir</span><span>Contato: a definir</span></div>
        <div><h3>Institucional</h3><span>Links institucionais: a definir</span><a href="#inicio">Voltar ao topo <ArrowUpRight size={14} aria-hidden="true" /></a></div>
      </div>
      <div className="container footer-bottom"><span>© 2026 Meu Campo</span><span>Primeira etapa visual do projeto</span></div>
    </footer>
  );
}