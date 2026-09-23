import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import { Building2, LogOut, Save, ShieldCheck, UserRound } from "lucide-react";
import { AppShell } from "../../components/platform/AppShell";
import { getOwnerNav } from "../../components/platform/navItems";
import { Avatar, Panel, initialsOf } from "../../components/platform/primitives";
import { useApp } from "../../context/app";

export const Route = createFileRoute("/proprietario/configuracoes")({
  component: OwnerSettings,
});

function OwnerSettings() {
  const { ownerNotifications, session, logout, venueById, balance, pendingBalance } = useApp();
  const navigate = useNavigate();
  const unread = ownerNotifications.filter((item) => !item.read).length;
  const owner = session?.role === "owner" ? session.name : "Marina Costa";
  const venue = venueById("arena-central");

  return (
    <AppShell
      role="owner"
      active="/proprietario/configuracoes"
      title="Configurações"
      subtitle="Preferências da conta e da areninha"
      nav={getOwnerNav(unread)}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 18,
        }}
      >
        <Panel title="Conta do proprietário">
          <div style={{ display: "grid", gap: 14 }}>
            <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
              <Avatar initials={initialsOf(owner)} size="lg" />
              <div>
                <strong style={{ display: "block", color: "var(--forest-depths)", fontSize: 17 }}>
                  {owner}
                </strong>
                <span style={{ color: "var(--lichen-sage)", fontSize: 13 }}>
                  Proprietária · {venue?.name ?? "Areninha Central"}
                </span>
              </div>
            </div>
            <div>
              <label className="field-label" htmlFor="cfg-email">
                E-mail
              </label>
              <input
                id="cfg-email"
                className="input"
                defaultValue={session?.email ?? "marina@areninhacentral.com.br"}
              />
            </div>
            <div>
              <label className="field-label" htmlFor="cfg-fone">
                Telefone
              </label>
              <input id="cfg-fone" className="input" defaultValue="(85) 99630-1187" />
            </div>
            <button
              type="button"
              className="button p-button button-dark"
              onClick={() => toast.success("Configurações salvas")}
            >
              <Save size={16} aria-hidden="true" /> Salvar
            </button>
          </div>
        </Panel>

        <div style={{ display: "grid", gap: 18, alignContent: "start" }}>
          <Panel title="Notificações por e-mail (simuladas)">
            <div style={{ display: "grid", gap: 12 }}>
              {[
                ["Nova reserva recebida", true],
                ["Cancelamentos", true],
                ["Resumo financeiro semanal", true],
                ["Novas avaliações", false],
              ].map(([label, checked]) => (
                <label
                  key={label as string}
                  style={{ display: "flex", gap: 10, alignItems: "center", fontSize: 14 }}
                >
                  <input
                    type="checkbox"
                    defaultChecked={checked as boolean}
                    style={{ accentColor: "var(--deep-verdant)" }}
                    onChange={() => toast.info("Preferência atualizada na demo")}
                  />
                  {label}
                </label>
              ))}
            </div>
          </Panel>

          <Panel title="Dados da operação">
            <div style={{ display: "grid", gap: 10, fontSize: 14 }}>
              <div className="row-between">
                <span style={{ color: "var(--lichen-sage)" }}>Saldo disponível</span>
                <strong style={{ color: "var(--deep-verdant)" }}>
                  {balance.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                </strong>
              </div>
              <div className="row-between">
                <span style={{ color: "var(--lichen-sage)" }}>Saldo pendente</span>
                <strong style={{ color: "var(--forest-depths)" }}>
                  {pendingBalance.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                </strong>
              </div>
              <div className="row-between">
                <span style={{ color: "var(--lichen-sage)" }}>Plano</span>
                <span className="badge badge-success">Demo completo</span>
              </div>
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
                Ambiente de demonstração — sem backend.
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
                className="button p-button button-outline"
                onClick={() => navigate({ to: "/proprietario/cadastrar" })}
              >
                <Building2 size={16} aria-hidden="true" /> Cadastrar nova areninha
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
                <LogOut size={16} aria-hidden="true" /> Sair
              </button>
            </div>
          </Panel>
        </div>
      </div>
    </AppShell>
  );
}
