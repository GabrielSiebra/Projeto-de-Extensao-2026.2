import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { BellOff, CheckCheck, Info, OctagonAlert, PartyPopper, TriangleAlert } from "lucide-react";
import { AppShell } from "../../components/platform/AppShell";
import { getOwnerNav } from "../../components/platform/navItems";
import { Avatar, EmptyState, Panel, initialsOf } from "../../components/platform/primitives";
import { useApp } from "../../context/app";
import type { AppNotification } from "../../types";

export const Route = createFileRoute("/proprietario/notificacoes")({
  component: OwnerNotificationsPage,
});

const toneStyles: Record<AppNotification["tone"], { icon: typeof Info; color: string }> = {
  success: { icon: PartyPopper, color: "var(--st-success)" },
  info: { icon: Info, color: "var(--st-live)" },
  warning: { icon: TriangleAlert, color: "var(--st-warning)" },
  danger: { icon: OctagonAlert, color: "var(--st-danger)" },
};

function OwnerNotificationsPage() {
  const { ownerNotifications, markAllNotificationsRead } = useApp();
  const unread = ownerNotifications.filter((item) => !item.read).length;

  return (
    <AppShell
      role="owner"
      active="/proprietario/notificacoes"
      title="Notificações"
      subtitle={unread > 0 ? `${unread} não lidas` : "Nenhuma novidade"}
      nav={getOwnerNav(unread)}
    >
      <Panel
        action={
          <button
            type="button"
            className="chip"
            onClick={() => {
              markAllNotificationsRead("owner");
              toast.success("Notificações marcadas como lidas");
            }}
          >
            <CheckCheck size={15} aria-hidden="true" /> Marcar todas como lidas
          </button>
        }
      >
        {ownerNotifications.length === 0 ? (
          <EmptyState
            icon={<BellOff size={26} aria-hidden="true" />}
            title="Nenhuma notificação"
            description="Reservas, saques e avaliações vão aparecer aqui."
          />
        ) : (
          <div style={{ display: "grid", gap: 4 }}>
            {ownerNotifications.map((item) => {
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
