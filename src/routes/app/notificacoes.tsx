import { createFileRoute } from "@tanstack/react-router";
import { BellOff, CheckCheck, Info, OctagonAlert, PartyPopper, TriangleAlert } from "lucide-react";
import { toast } from "sonner";
import { AppShell } from "../../components/platform/AppShell";
import { getClientNav } from "../../components/platform/navItems";
import { Avatar, EmptyState, Panel, initialsOf } from "../../components/platform/primitives";
import { useApp } from "../../context/app";
import type { AppNotification } from "../../types";

export const Route = createFileRoute("/app/notificacoes")({
  component: NotificationsPage,
});

const toneStyles: Record<AppNotification["tone"], { icon: typeof Info; color: string }> = {
  success: { icon: PartyPopper, color: "var(--st-success)" },
  info: { icon: Info, color: "var(--st-live)" },
  warning: { icon: TriangleAlert, color: "var(--st-warning)" },
  danger: { icon: OctagonAlert, color: "var(--st-danger)" },
};

export default function NotificationsPage() {
  const { notifications, markAllNotificationsRead } = useApp();
  const unread = notifications.filter((item) => !item.read).length;

  return (
    <AppShell
      role="client"
      active="/app/notificacoes"
      title="Central de notificações"
      subtitle={unread > 0 ? `${unread} não lidas` : "Tudo em dia — nenhuma notificação nova"}
      nav={getClientNav(unread)}
    >
      <Panel
        action={
          <button
            type="button"
            className="chip"
            onClick={() => {
              markAllNotificationsRead("client");
              toast.success("Notificações marcadas como lidas");
            }}
          >
            <CheckCheck size={15} aria-hidden="true" /> Marcar todas como lidas
          </button>
        }
      >
        {notifications.length === 0 ? (
          <EmptyState
            icon={<BellOff size={26} aria-hidden="true" />}
            title="Nenhuma notificação"
            description="Reservas, pagamentos e avisos de horários vão aparecer aqui."
          />
        ) : (
          <div style={{ display: "grid", gap: 4 }}>
            {notifications.map((item) => {
              const tone = toneStyles[item.tone];
              return (
                <article
                  key={item.id}
                  style={{
                    display: "flex",
                    gap: 14,
                    padding: "14px 12px",
                    borderRadius: 16,
                    background: item.read ? "transparent" : "var(--sprout-wash)",
                  }}
                >
                  <span
                    style={{
                      display: "grid",
                      placeItems: "center",
                      width: 42,
                      height: 42,
                      borderRadius: 14,
                      background: "var(--pure-white)",
                      border: "1px solid var(--mist-green)",
                      color: tone.color,
                      flex: "none",
                    }}
                  >
                    <tone.icon size={19} aria-hidden="true" />
                  </span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div className="row-between" style={{ flexWrap: "wrap", gap: 6 }}>
                      <strong style={{ color: "var(--forest-depths)", fontSize: 14.5 }}>
                        {item.title}
                      </strong>
                      <span style={{ color: "var(--lichen-sage)", fontSize: 12 }}>
                        {item.date.split("-").reverse().join("/")}
                      </span>
                    </div>
                    <p
                      style={{
                        margin: "4px 0 0",
                        color: "var(--moss-shadow)",
                        fontSize: 13.5,
                        lineHeight: 1.55,
                      }}
                    >
                      {item.message}
                    </p>
                  </div>
                  {!item.read && (
                    <span
                      aria-label="Não lida"
                      style={{
                        width: 9,
                        height: 9,
                        borderRadius: "50%",
                        background: "var(--st-danger)",
                        marginTop: 6,
                      }}
                    />
                  )}
                  <Avatar initials={initialsOf(item.title)} size="sm" />
                </article>
              );
            })}
          </div>
        )}
      </Panel>
    </AppShell>
  );
}
