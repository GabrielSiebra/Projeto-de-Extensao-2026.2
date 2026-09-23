import { useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import { Building2, LogOut, Save, ShieldCheck, UserRound } from "lucide-react";
import { AppShell } from "../../components/platform/AppShell";
import { getClientNav } from "../../components/platform/navItems";
import { Avatar, Panel, initialsOf } from "../../components/platform/primitives";
import { useApp } from "../../context/app";

export const Route = createFileRoute("/app/perfil")({
  component: ProfilePage,
});

function ProfilePage() {
  const { session, notifications, logout, myTeamId, teams } = useApp();
  const unread = notifications.filter((item) => !item.read).length;
  const navigate = useNavigate();
  const name = session?.name ?? "Rafael Mendonça";
  const [form, setForm] = useState({
    name,
    email: session?.email ?? "rafael.mendonca@email.com",
    phone: "(85) 98812-4471",
    city: "Fortaleza — CE",
    favoriteTeam: teams.find((team) => team.id === myTeamId)?.name ?? "Leão do Aldeota",
  });

  const roleLabel =
    session?.role === "time"
      ? "Conta de time"
      : session?.role === "owner"
        ? "Proprietário"
        : "Conta individual";

  return (
    <AppShell
      role="client"
      active="/app/perfil"
      title="Meu perfil"
      subtitle="Dados da conta usada nesta demonstração"
      nav={getClientNav(unread)}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 18,
        }}
      >
        <Panel title="Dados pessoais">
          <div style={{ display: "grid", gap: 14 }}>
            <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
              <Avatar initials={initialsOf(form.name)} size="lg" />
              <div>
                <strong style={{ display: "block", color: "var(--forest-depths)", fontSize: 17 }}>
                  {form.name}
                </strong>
                <span style={{ color: "var(--lichen-sage)", fontSize: 13 }}>{roleLabel}</span>
              </div>
            </div>

            <div>
              <label className="field-label" htmlFor="perfil-nome">
                Nome completo
              </label>
              <input
                id="perfil-nome"
                className="input"
                value={form.name}
                onChange={(event) =>
                  setForm((current) => ({ ...current, name: event.target.value }))
                }
              />
            </div>
            <div>
              <label className="field-label" htmlFor="perfil-email">
                E-mail
              </label>
              <input
                id="perfil-email"
                type="email"
                className="input"
                value={form.email}
                onChange={(event) =>
                  setForm((current) => ({ ...current, email: event.target.value }))
                }
              />
            </div>
            <div>
              <label className="field-label" htmlFor="perfil-fone">
                Telefone
              </label>
              <input
                id="perfil-fone"
                className="input"
                value={form.phone}
                onChange={(event) =>
                  setForm((current) => ({ ...current, phone: event.target.value }))
                }
              />
            </div>
            <div>
              <label className="field-label" htmlFor="perfil-cidade">
                Cidade
              </label>
              <input
                id="perfil-cidade"
                className="input"
                value={form.city}
                onChange={(event) =>
                  setForm((current) => ({ ...current, city: event.target.value }))
                }
              />
            </div>
            <button
              type="button"
              className="button p-button button-dark"
              onClick={() =>
                toast.success("Perfil atualizado", {
                  description: "Alterações salvas localmente na demo.",
                })
              }
            >
              <Save size={16} aria-hidden="true" /> Salvar alterações
            </button>
          </div>
        </Panel>

        <div style={{ display: "grid", gap: 18, alignContent: "start" }}>
          <Panel title="Preferências">
            <div style={{ display: "grid", gap: 14 }}>
              <div>
                <label className="field-label" htmlFor="perfil-time">
                  Time preferido
                </label>
                <input
                  id="perfil-time"
                  className="input"
                  value={form.favoriteTeam}
                  onChange={(event) =>
                    setForm((current) => ({ ...current, favoriteTeam: event.target.value }))
                  }
                />
              </div>
              <label style={{ display: "flex", gap: 10, alignItems: "center", fontSize: 14 }}>
                <input
                  type="checkbox"
                  defaultChecked
                  style={{ accentColor: "var(--deep-verdant)" }}
                />
                Receber avisos de horários disponíveis
              </label>
              <label style={{ display: "flex", gap: 10, alignItems: "center", fontSize: 14 }}>
                <input
                  type="checkbox"
                  defaultChecked
                  style={{ accentColor: "var(--deep-verdant)" }}
                />
                Lembrete 1 hora antes da partida
              </label>
              <label style={{ display: "flex", gap: 10, alignItems: "center", fontSize: 14 }}>
                <input type="checkbox" style={{ accentColor: "var(--deep-verdant)" }} />
                Novidades de promoções por push
              </label>
            </div>
          </Panel>

          <Panel title="Sessão">
            <div style={{ display: "grid", gap: 12 }}>
              <p
                style={{
                  margin: 0,
                  display: "flex",
                  gap: 8,
                  alignItems: "center",
                  color: "var(--lichen-sage)",
                  fontSize: 13.5,
                }}
              >
                <ShieldCheck
                  size={16}
                  aria-hidden="true"
                  style={{ color: "var(--deep-verdant)" }}
                />
                Login simulado — nenhum dado sai deste navegador.
              </p>
              <button
                type="button"
                className="button p-button button-outline"
                onClick={() => navigate({ to: "/login" })}
              >
                <UserRound size={16} aria-hidden="true" /> Trocar tipo de conta
              </button>
              <button
                type="button"
                className="button p-button button-danger"
                onClick={() => {
                  logout();
                  toast.info("Sessão encerrada");
                  navigate({ to: "/" });
                }}
              >
                <LogOut size={16} aria-hidden="true" /> Sair da conta
              </button>
              <button
                type="button"
                className="button p-button button-outline"
                onClick={() => navigate({ to: "/proprietario" })}
              >
                <Building2 size={16} aria-hidden="true" /> Ir para painel do proprietário
              </button>
            </div>
          </Panel>
        </div>
      </div>
    </AppShell>
  );
}
