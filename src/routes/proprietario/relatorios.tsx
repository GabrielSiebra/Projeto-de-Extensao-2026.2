import { createFileRoute } from "@tanstack/react-router";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { FileBarChart } from "lucide-react";
import { AppShell } from "../../components/platform/AppShell";
import { getOwnerNav } from "../../components/platform/navItems";
import { Panel, Progress, StatCard } from "../../components/platform/primitives";
import { useApp } from "../../context/app";
import {
  cancellationTrend,
  financeStats,
  occupancyByHour,
  reservationsByMonth,
  topClients,
  topHours,
  topTeams,
} from "../../mocks";

export const Route = createFileRoute("/proprietario/relatorios")({
  component: OwnerReports,
});

const tooltipStyle = {
  background: "var(--forest-depths)",
  border: "1px solid var(--moss-shadow)",
  borderRadius: 12,
  color: "var(--pure-white)",
  fontSize: 12.5,
};

function RankList({
  title,
  items,
  unit,
}: {
  title: string;
  items: Array<{ label: string; value: number }>;
  unit: string;
}) {
  const max = Math.max(...items.map((item) => item.value), 1);
  return (
    <Panel title={title}>
      <div style={{ display: "grid", gap: 14 }}>
        {items.map((item) => (
          <div key={item.label} style={{ display: "grid", gap: 6 }}>
            <div className="row-between" style={{ fontSize: 13.5 }}>
              <span style={{ color: "var(--moss-shadow)" }}>{item.label}</span>
              <strong style={{ color: "var(--forest-depths)" }}>
                {item.value} {unit}
              </strong>
            </div>
            <Progress value={(item.value / max) * 100} />
          </div>
        ))}
      </div>
    </Panel>
  );
}

function OwnerReports() {
  const { ownerNotifications } = useApp();
  const unread = ownerNotifications.filter((item) => !item.read).length;

  return (
    <AppShell
      role="owner"
      active="/proprietario/relatorios"
      title="Relatórios"
      subtitle="Indicadores visuais da operação (dados mockados)"
      nav={getOwnerNav(unread)}
    >
      <div style={{ display: "grid", gap: 18 }}>
        <div className="grid-stats">
          <StatCard
            label="Taxa de ocupação"
            value={`${financeStats.occupancyRate}%`}
            hint="Média do mês"
            accent
          />
          <StatCard
            label="Cancelamentos"
            value={String(financeStats.cancellations)}
            hint="No mês atual"
          />
          <StatCard
            label="Ticket médio"
            value={`R$ ${financeStats.averageTicket}`}
            hint="Por reserva"
          />
          <StatCard label="Reservas no mês" value="156" hint="+5% vs. agosto" />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 18,
          }}
        >
          <Panel title="Reservas por mês">
            <div className="chart-box">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={reservationsByMonth}
                  margin={{ top: 8, right: 8, left: -18, bottom: 0 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="var(--mist-green)"
                    vertical={false}
                  />
                  <XAxis dataKey="month" tick={{ fontSize: 11, fill: "var(--lichen-sage)" }} />
                  <YAxis tick={{ fontSize: 11, fill: "var(--lichen-sage)" }} />
                  <Tooltip contentStyle={tooltipStyle} cursor={{ fill: "var(--sprout-wash)" }} />
                  <Bar dataKey="value" fill="var(--electric-sprout)" radius={[7, 7, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Panel>

          <Panel title="Cancelamentos por mês">
            <div className="chart-box">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={cancellationTrend}
                  margin={{ top: 8, right: 8, left: -18, bottom: 0 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="var(--mist-green)"
                    vertical={false}
                  />
                  <XAxis dataKey="month" tick={{ fontSize: 11, fill: "var(--lichen-sage)" }} />
                  <YAxis
                    tick={{ fontSize: 11, fill: "var(--lichen-sage)" }}
                    allowDecimals={false}
                  />
                  <Tooltip contentStyle={tooltipStyle} />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="var(--st-danger)"
                    strokeWidth={2.5}
                    dot={{ r: 4, fill: "var(--st-danger)" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Panel>

          <Panel title="Taxa de ocupação por horário">
            <div className="chart-box">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={occupancyByHour}
                  margin={{ top: 8, right: 8, left: -18, bottom: 0 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="var(--mist-green)"
                    vertical={false}
                  />
                  <XAxis dataKey="hour" tick={{ fontSize: 11, fill: "var(--lichen-sage)" }} />
                  <YAxis tick={{ fontSize: 11, fill: "var(--lichen-sage)" }} unit="%" />
                  <Tooltip contentStyle={tooltipStyle} />
                  <Bar dataKey="value" fill="var(--deep-verdant)" radius={[7, 7, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Panel>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 18,
          }}
        >
          <RankList title="Horários mais utilizados" items={topHours} unit="reservas" />
          <RankList title="Clientes recorrentes" items={topClients} unit="reservas" />
          <RankList title="Times recorrentes" items={topTeams} unit="reservas" />
        </div>

        <Panel title="Como ler estes relatórios">
          <p
            style={{
              margin: 0,
              display: "flex",
              gap: 10,
              alignItems: "flex-start",
              color: "var(--lichen-sage)",
              fontSize: 13.5,
              lineHeight: 1.6,
            }}
          >
            <FileBarChart
              size={17}
              aria-hidden="true"
              style={{ color: "var(--deep-verdant)", flex: "none", marginTop: 2 }}
            />
            Todos os gráficos usam dados fictícios estáticos para demonstração visual. Em uma etapa
            futura com backend, estes módulos serão alimentados por endpoints de métricas.
          </p>
        </Panel>
      </div>
    </AppShell>
  );
}
