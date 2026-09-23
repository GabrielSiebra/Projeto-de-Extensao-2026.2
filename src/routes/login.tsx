import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Building2, UserRound, UsersRound, ArrowRight, ShieldCheck } from "lucide-react";
import { useApp } from "../context/app";
import type { AccountType } from "../types";

export const Route = createFileRoute("/login")({
  component: LoginPage,
});

const accounts: Array<{
  role: AccountType;
  icon: typeof UserRound;
  title: string;
  description: string;
  cta: string;
}> = [
  {
    role: "individual",
    icon: UserRound,
    title: "Conta Individual",
    description:
      "Reserve horários, acompanhe suas partidas, favorite areninhas e gerencie seus pagamentos.",
    cta: "Acessar como jogador",
  },
  {
    role: "time",
    icon: UsersRound,
    title: "Conta de Time",
    description:
      "Gerencie elenco, reserve para o time inteiro e acompanhe partidas e pagamentos do grupo.",
    cta: "Acessar como time",
  },
  {
    role: "owner",
    icon: Building2,
    title: "Minha Areninha",
    description:
      "Agenda, reservas, financeiro, clientes e relatórios da sua areninha em um só painel.",
    cta: "Acessar painel do proprietário",
  },
];

export default function LoginPage() {
  const { login } = useApp();
  const navigate = useNavigate();

  const handleLogin = (role: AccountType) => {
    login(role);
    if (role === "owner") navigate({ to: "/proprietario" });
    else if (role === "time") navigate({ to: "/app/time" });
    else navigate({ to: "/app" });
  };

  return (
    <div className="login-page">
      <div className="hero-orb" aria-hidden="true" />
      <div className="login-card">
        <p className="eyebrow eyebrow-dark" style={{ justifyContent: "center" }}>
          <span />
          Acesso demonstrativo
        </p>
        <h1>Como você deseja acessar?</h1>
        <p>
          Escolha o tipo de conta para entrar na plataforma. Esta demonstração é 100% de front-end —
          nenhum dado real é coletado ou enviado.
        </p>

        <div className="account-grid">
          {accounts.map((account) => (
            <button
              key={account.role}
              type="button"
              className="account-card"
              onClick={() => handleLogin(account.role)}
            >
              <span className="account-icon">
                <account.icon size={24} aria-hidden="true" />
              </span>
              <h3>{account.title}</h3>
              <p>{account.description}</p>
              <span className="account-cta">
                {account.cta} <ArrowRight size={15} aria-hidden="true" />
              </span>
            </button>
          ))}
        </div>

        <p
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            marginTop: 32,
            color: "var(--lichen-sage)",
            fontSize: 13,
          }}
        >
          <ShieldCheck size={15} aria-hidden="true" />
          Login simulado no navegador — sem senha, sem backend, sem envio de dados.
        </p>
      </div>
    </div>
  );
}
