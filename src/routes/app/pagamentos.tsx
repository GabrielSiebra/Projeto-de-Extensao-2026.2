import { createFileRoute } from "@tanstack/react-router";
import { CreditCard, QrCode, Receipt, Wallet } from "lucide-react";
import { AppShell } from "../../components/platform/AppShell";
import { getClientNav } from "../../components/platform/navItems";
import { EmptyState, Panel, StatCard } from "../../components/platform/primitives";
import { useApp } from "../../context/app";
import { formatCurrency, formatDate } from "../../lib/format";

export const Route = createFileRoute("/app/pagamentos")({
  component: PaymentsPage,
});

const methodLabel: Record<string, string> = {
  pix: "PIX",
  card: "Cartão",
  other: "Outro",
};

const methodIcon: Record<string, typeof QrCode> = {
  pix: QrCode,
  card: CreditCard,
  other: Wallet,
};

export default function PaymentsPage() {
  const { session, reservations, venueById, notifications } = useApp();
  const unread = notifications.filter((item) => !item.read).length;
  const name = session?.name ?? "Rafael Mendonça";
  const payments = reservations
    .filter((item) => item.clientName === name || item.clientName === "Rafael Mendonça")
    .sort((a, b) => b.date.localeCompare(a.date));

  const approved = payments
    .filter((item) => item.paymentStatus === "approved")
    .reduce((sum, item) => sum + item.total, 0);
  const pending = payments
    .filter((item) => item.paymentStatus === "processing")
    .reduce((sum, item) => sum + item.total, 0);

  return (
    <AppShell
      role="client"
      active="/app/pagamentos"
      title="Pagamentos"
      subtitle="Comprovantes e transações simuladas das suas reservas"
      nav={getClientNav(unread)}
    >
      <div style={{ display: "grid", gap: 18 }}>
        <div className="grid-stats">
          <StatCard
            label="Total aprovado"
            value={formatCurrency(approved)}
            hint="Nesta demonstração"
            icon={<Wallet size={19} aria-hidden="true" />}
            accent
          />
          <StatCard
            label="Em processamento"
            value={formatCurrency(pending)}
            hint="Aguardando confirmação"
            icon={<Receipt size={19} aria-hidden="true" />}
          />
          <StatCard
            label="Transações"
            value={String(payments.length)}
            hint="Reservas com pagamento"
            icon={<CreditCard size={19} aria-hidden="true" />}
          />
        </div>

        <Panel title="Extrato de transações">
          {payments.length === 0 ? (
            <EmptyState
              icon={<Receipt size={26} aria-hidden="true" />}
              title="Nenhuma transação"
              description="Quando você concluir uma reserva, o pagamento simulado aparece aqui."
            />
          ) : (
            <div className="table-wrap" style={{ border: 0 }}>
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Código</th>
                    <th>Areninha</th>
                    <th>Data</th>
                    <th>Método</th>
                    <th>Valor</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {payments.map((item) => {
                    const Icon = methodIcon[item.paymentMethod ?? "pix"] ?? QrCode;
                    return (
                      <tr key={item.id}>
                        <td data-label="Código" className="cell-strong">
                          {item.code}
                        </td>
                        <td data-label="Areninha">{venueById(item.venueId)?.name ?? "—"}</td>
                        <td data-label="Data">{formatDate(item.date)}</td>
                        <td data-label="Método">
                          <span style={{ display: "inline-flex", gap: 6, alignItems: "center" }}>
                            <Icon size={14} aria-hidden="true" />{" "}
                            {methodLabel[item.paymentMethod ?? "pix"]}
                          </span>
                        </td>
                        <td data-label="Valor" className="cell-strong">
                          {formatCurrency(item.total)}
                        </td>
                        <td data-label="Status">
                          <span
                            className={`badge ${
                              item.paymentStatus === "approved"
                                ? "badge-success"
                                : item.paymentStatus === "processing"
                                  ? "badge-warning"
                                  : "badge-danger"
                            }`}
                          >
                            {item.paymentStatus === "approved"
                              ? "Aprovado"
                              : item.paymentStatus === "processing"
                                ? "Processando"
                                : "Recusado"}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </Panel>
      </div>
    </AppShell>
  );
}
