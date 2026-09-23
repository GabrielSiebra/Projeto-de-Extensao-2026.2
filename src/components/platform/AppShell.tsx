import { useState, type ReactNode } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Menu, X, Bell, LogOut, ChevronRight } from "lucide-react";
import { useApp } from "../../context/app";
import type { AppPath } from "../../lib/paths";
import { Avatar, initialsOf } from "./primitives";

export interface NavItem {
  label: string;
  to: AppPath;
  icon: ReactNode;
  badge?: number;
}

function Wordmark({ to }: { to: AppPath }) {
  return (
    <Link to={to} className="wordmark" aria-label="Meu Campo, ir ao início">
      <span className="wordmark-mark" aria-hidden="true">
        <span />
      </span>
      MEU CAMPO
    </Link>
  );
}

export function AppShell({
  role,
  active,
  title,
  subtitle,
  nav,
  wide = false,
  children,
}: {
  role: "client" | "owner";
  active: string;
  title: string;
  subtitle?: string;
  nav: NavItem[];
  wide?: boolean;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const { session, logout, notifications, ownerNotifications } = useApp();
  const navigate = useNavigate();
  const unread = (role === "client" ? notifications : ownerNotifications).filter(
    (item) => !item.read,
  ).length;
  const homeTo = role === "client" ? "/app" : "/proprietario";
  const displayName = session?.name ?? (role === "owner" ? "Marina Costa" : "Rafael Mendonça");
  const displayRole = role === "owner" ? "Proprietária · Areninha Central" : "Conta individual";

  const handleLogout = () => {
    logout();
    navigate({ to: "/" });
  };

  return (
    <div className="app-shell">
      {open && <div className="sidebar-scrim" onClick={() => setOpen(false)} aria-hidden="true" />}
      <aside className={`app-sidebar ${open ? "open" : ""}`}>
        <Wordmark to={homeTo} />
        <p className="sidebar-label">{role === "owner" ? "Gestão" : "Minha conta"}</p>
        <nav className="sidebar-nav" aria-label="Menu lateral">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={active === item.to ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {item.icon}
              {item.label}
              {item.badge ? <span className="nav-count">{item.badge}</span> : null}
            </Link>
          ))}
        </nav>
        <div className="sidebar-footer">
          <div className="sidebar-user">
            <Avatar initials={initialsOf(displayName)} size="sm" />
            <div>
              <strong>{displayName}</strong>
              <span>{displayRole}</span>
            </div>
            <button type="button" aria-label="Sair" onClick={handleLogout}>
              <LogOut size={16} aria-hidden="true" />
            </button>
          </div>
        </div>
      </aside>

      <div className="app-main">
        <header className="app-topbar">
          <button
            type="button"
            className="app-burger"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
          <div style={{ flex: 1, minWidth: 0 }}>
            <h1>{title}</h1>
            {subtitle && <div className="topbar-sub">{subtitle}</div>}
          </div>
          <Link
            to={role === "client" ? "/app/notificacoes" : "/proprietario/notificacoes"}
            aria-label="Notificações"
            style={{
              position: "relative",
              display: "grid",
              placeItems: "center",
              width: 42,
              height: 42,
              borderRadius: "50%",
              background: "var(--pure-white)",
              border: "1px solid var(--mist-green)",
              color: "var(--moss-shadow)",
            }}
          >
            <Bell size={18} aria-hidden="true" />
            {unread > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: -4,
                  right: -4,
                  minWidth: 18,
                  height: 18,
                  padding: "0 4px",
                  borderRadius: 999,
                  background: "var(--st-danger)",
                  color: "white",
                  fontSize: 10,
                  fontWeight: 700,
                  display: "grid",
                  placeItems: "center",
                }}
              >
                {unread}
              </span>
            )}
          </Link>
          <Link
            to="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: 13,
              fontWeight: 650,
              color: "var(--moss-shadow)",
            }}
          >
            <span className="hide-sm">Site</span>
            <ChevronRight size={14} aria-hidden="true" />
          </Link>
        </header>

        <main className={`app-content ${wide ? "app-content-wide" : ""}`}>{children}</main>
      </div>

      <nav className="bottom-nav" aria-label="Navegação inferior">
        {nav.slice(0, 5).map((item) => (
          <Link key={item.to} to={item.to} className={active === item.to ? "active" : ""}>
            {item.icon}
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export function PublicHeader({ active }: { active?: string }) {
  const { session } = useApp();
  const homeTo = session?.role === "owner" ? "/proprietario" : "/app";

  return (
    <header className="public-header">
      <nav className="nav-shell" aria-label="Navegação principal">
        <Link to="/" className="wordmark">
          <span className="wordmark-mark" aria-hidden="true">
            <span />
          </span>
          MEU CAMPO
        </Link>
        <div className="nav-links">
          <Link to="/buscar" className={active === "buscar" ? "active" : ""}>
            Encontrar areninha
          </Link>
          <Link to="/buscar">Mapa</Link>
          <Link to="/app/reservas" className={active === "reservas" ? "active" : ""}>
            Minhas reservas
          </Link>
        </div>
        <Link
          to={session ? homeTo : "/login"}
          className="button p-button button-primary no-underline"
          style={{ minHeight: 42, marginLeft: 6 }}
        >
          {session ? "Meu painel" : "Entrar"}
        </Link>
      </nav>
    </header>
  );
}
