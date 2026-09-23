import { useEffect, useState } from "react";
import { Button } from "primereact/button";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Funcionalidades", href: "#funcionalidades" },
  { label: "Encontrar areninha", to: "/buscar" as const },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  const goToBooking = () => {
    document.querySelector("#agendamento")?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Navegação principal">
        <a className="wordmark" href="#inicio" aria-label="Meu Campo, ir ao início">
          <span className="wordmark-mark" aria-hidden="true">
            <span />
          </span>
          MEU CAMPO
        </a>
        <div className="nav-links" aria-label="Seções da página">
          {links.map((link) =>
            "to" in link ? (
              <Link key={link.to} to={link.to}>
                {link.label}
              </Link>
            ) : (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ),
          )}
        </div>
        <Link to="/login" className="button p-button button-primary nav-cta no-underline">
          Entrar
        </Link>
        <Button className="button button-primary nav-cta" onClick={goToBooking}>
          Agendar agora
        </Button>
        <Button
          className="menu-button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </Button>
        {open && (
          <div className="mobile-menu" id="mobile-navigation">
            {links.map((link) =>
              "to" in link ? (
                <Link key={link.to} to={link.to} onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              ) : (
                <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              ),
            )}
            <Link to="/login" onClick={() => setOpen(false)}>
              Entrar na plataforma
            </Link>
            <Button className="button button-primary" onClick={goToBooking}>
              Agendar agora
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
}
