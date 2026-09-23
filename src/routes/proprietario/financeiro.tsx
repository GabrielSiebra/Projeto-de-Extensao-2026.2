import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Banknote, CircleDollarSign, HandCoins, Landmark, Loader2 } from "lucide-react";
import { AppShell } from "../../components/platform/AppShell";
import { getOwnerNav } from "../../components/platform/navItems";
import { ConfirmModal } from "../../components/platform/ConfirmModal";
import { Panel, StatCard } from "../../components/platform/primitives";
import { useApp } from "../../context/app";
import { financeStats, occupancyByHour, revenueByMonth } from "../../mocks";
import { formatCurrency } from "../../lib/format";

export const Route = createFileRoute("/proprietario/financeiro")({
  component: OwnerFinance,
});

const tooltipStyle = {
  background: "var(--forest-depths)",
  border: "1px solid var(--moss-shadow)",
  borderRadius: 12,
  color: "var(--pure-white)",
  fontSize: 12.5,
};

function OwnerFinance() {
  const { ownerNotifications, balance, pendingBalance, withdrawals, requestWithdrawal } = useApp();
  const unread = ownerNotifications.filter((item) => !item.read).length;
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState(1000);

  const submit = () => {
    if (amount <= 0 || amount > balance) {
      toast.error("Valor inválido", { description: "Informe um valor até o saldo disponível." });
      return;
    }
    requestWithdrawal(amount);
    setOpen(false);
    toast.success("Solicitação de saque realizada.", {
      description: `${formatCurrency(amount)} entrou na fila de processamento (simulada).`,
    });
  };

  return (
    <AppShell
      role="owner"
      active="/proprietario/financeiro"
      title="Financeiro"
      subtitle="Faturamento, saldo e saques — dados simulados"
      nav={getOwnerNav(unread)}
    >
      <div style={{ display: "grid", gap: 18 }}>
        <div className="grid-stats">
          <StatCard
            label="Faturamento hoje"
            value={formatCurrency(financeStats.today)}
            hint="12 reservas pagas"
            icon={<CircleDollarSign size={19} aria-hidden="true" />}
          />
          <StatCard
            label="Faturamento da semana"
            value={formatCurrency(financeStats.week)}
            hint="+8% vs. semana anterior"
            icon={<Banknote size={19} aria-hidden="true" />}
          />
          <StatCard
            label="Faturamento do mês"
            value={formatCurrency(financeStats.month)}
            hint="Meta de R$ 20.000"
            icon={<Landmark size={19} aria-hidden="true" />}
            accent
          />
          <StatCard
            label="Saldo disponível"
            value={formatCurrency(balance)}
            hint="Pronto para saque"
            icon={<HandCoins size={19} aria-hidden="true" />}
          />
          <StatCard
            label="Saldo pendente"
            value={formatCurrency(pendingBalance)}
            hint="Liberação em até 2 dias úteis (simulado)"
            icon={<Loader2 size={19} aria-hidden="true" />}
          />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 18,
          }}
        >
          <Panel title="Faturamento mensal (2026)">
            <div className="chart-box">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={revenueByMonth}
                  margin={{ top: 8, right: 8, left: -14, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="rev" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="oklch(0.84 0.22 137)" stopOpacity={0.7} />
                      <stop offset="100%" stopColor="oklch(0.58 0.21 137)" stopOpacity={0.05} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="var(--mist-green)"
                    vertical={false}
                  />
                  <XAxis dataKey="month" tick={{ fontSize: 11, fill: "var(--lichen-sage)" }} />
                  <YAxis tick={{ fontSize: 11, fill: "var(--lichen-sage)" }} />
                  <Tooltip
                    contentStyle={tooltipStyle}
                    formatter={(value) => formatCurrency(Number(value))}
                  />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="var(--deep-verdant)"
                    strokeWidth={2.5}
                    fill="url(#rev)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Panel>

          <Panel title="Ocupação por horário">
            <div className="chart-box">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={occupancyByHour}
                  margin={{ top: 8, right: 8, left: -14, bottom: 0 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="var(--mist-green)"
                    vertical={false}
                  />
                  <XAxis dataKey="hour" tick={{ fontSize: 11, fill: "var(--lichen-sage)" }} />
                  <YAxis tick={{ fontSize: 11, fill: "var(--lichen-sage)" }} unit="%" />
                  <Tooltip contentStyle={tooltipStyle} formatter={(value) => `${value}%`} />
                  <Bar dataKey="value" fill="var(--forest-depths)" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Panel>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 18,
          }}
        >
          <Panel
            title="Solicitar saque"
            action={
              <span style={{ fontSize: 12.5, color: "var(--lichen-sage)" }}>
                Disponível:{" "}
                <strong style={{ color: "var(--deep-verdant)" }}>{formatCurrency(balance)}</strong>
              </span>
            }
          >
            <div style={{ display: "grid", gap: 14 }}>
              <p style={{ margin: 0, color: "var(--moss-shadow)", fontSize: 14, lineHeight: 1.6 }}>
                Saldo disponível:{" "}
                <strong style={{ fontSize: 18, color: "var(--forest-depths)" }}>
                  {formatCurrency(balance)}
                </strong>
              </p>
              <div>
                <label className="field-label" htmlFor="saque-valor">
                  Valor do saque
                </label>
                <input
                  id="saque-valor"
                  type="number"
                  min={50}
                  className="input"
                  value={amount}
                  onChange={(event) => setAmount(Number(event.target.value))}
                />
              </div>
              <button
                type="button"
                className="button p-button button-dark"
                onClick={() => setOpen(true)}
                disabled={balance <= 0}
              >
                <HandCoins size={17} aria-hidden="true" /> Solicitar saque
              </button>
              <span style={{ fontSize: 12, color: "var(--lichen-sage)" }}>
                Simulação apenas — nenhuma operação bancária é realizada.
              </span>
            </div>
          </Panel>

          <Panel title="Histórico de saques">
            <div style={{ display: "grid", gap: 10 }}>
              {withdrawals.map((item) => (
                <div
                  key={item.id}
                  className="row-between"
                  style={{
                    padding: "12px 14px",
                    borderRadius: 14,
                    background: "var(--bone-white)",
                  }}
                >
                  <div>
                    <strong
                      style={{ display: "block", fontSize: 14, color: "var(--forest-depths)" }}
                    >
                      {formatCurrency(item.amount)}
                    </strong>
                    <span style={{ color: "var(--lichen-sage)", fontSize: 12.5 }}>{item.date}</span>
                  </div>
                  <span
                    className={`badge ${item.status === "done" ? "badge-success" : "badge-warning"}`}
                  >
                    {item.status === "done" ? "Concluído" : "Processando"}
                  </span>
                </div>
              ))}
            </div>
          </Panel>
        </div>
      </div>

      <ConfirmModal
        open={open}
        title="Confirmar solicitação de saque"
        description={`${formatCurrency(amount)} · conta final 4471 (dados fictícios)`}
        confirmLabel="Confirmar saque"
        onCancel={() => setOpen(false)}
        onConfirm={submit}
      >
        <p style={{ margin: 0, color: "var(--moss-shadow)", fontSize: 14, lineHeight: 1.6 }}>
          Esta é uma demonstração de interface. Nenhum valor será transferido e nenhum dado bancário
          é utilizado.
        </p>
      </ConfirmModal>
    </AppShell>
  );
}
