import type { ReactNode } from "react";
import { Star } from "lucide-react";
import type { ReservationStatus, SlotStatus } from "../../types";

export function Panel({
  title,
  action,
  children,
  dark = false,
  bodyClass = "panel-body",
}: {
  title?: string | undefined;
  action?: ReactNode;
  children: ReactNode;
  dark?: boolean;
  bodyClass?: string;
}) {
  return (
    <section className={`panel ${dark ? "panel-dark" : ""}`}>
      {title && (
        <div className="panel-head">
          <h3>{title}</h3>
          {action}
        </div>
      )}
      <div className={bodyClass}>{children}</div>
    </section>
  );
}

export function StatCard({
  label,
  value,
  hint,
  icon,
  accent = false,
}: {
  label: string;
  value: string;
  hint?: string | undefined;
  icon?: ReactNode;
  accent?: boolean;
}) {
  return (
    <article className={`stat-card ${accent ? "accent" : ""}`}>
      <div className="row-between">
        <span className="stat-label">{label}</span>
        {icon && <span className="stat-icon">{icon}</span>}
      </div>
      <strong className="stat-value">{value}</strong>
      {hint && <span className="stat-hint">{hint}</span>}
    </article>
  );
}

const reservationBadge: Record<ReservationStatus, { label: string; className: string }> = {
  pending: { label: "Aguardando", className: "badge-warning" },
  confirmed: { label: "Confirmada", className: "badge-success" },
  live: { label: "Em jogo", className: "badge-live" },
  finished: { label: "Finalizada", className: "badge-neutral" },
  cancelled: { label: "Cancelada", className: "badge-danger" },
};

const slotBadge: Record<SlotStatus, { label: string; className: string }> = {
  available: { label: "Disponível", className: "badge-success" },
  reserved: { label: "Reservado", className: "badge-warning" },
  occupied: { label: "Ocupado", className: "badge-danger" },
  live: { label: "Em jogo", className: "badge-live" },
  unavailable: { label: "Indisponível", className: "badge-neutral" },
};

export function StatusBadge({ status }: { status: ReservationStatus | SlotStatus }) {
  const config =
    status in reservationBadge
      ? reservationBadge[status as ReservationStatus]
      : slotBadge[status as SlotStatus];
  return <span className={`badge ${config.className}`}>{config.label}</span>;
}

export function EmptyState({
  icon,
  title,
  description,
  action,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  action?: ReactNode;
}) {
  return (
    <div className="empty-state">
      <span className="empty-icon">{icon}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      {action}
    </div>
  );
}

export function SkeletonCard() {
  return (
    <div className="arena-card" aria-hidden="true">
      <div className="skeleton" style={{ height: 170, borderRadius: 0 }} />
      <div className="arena-body">
        <div className="skeleton" style={{ height: 18, width: "70%" }} />
        <div className="skeleton" style={{ height: 12, width: "45%" }} />
        <div className="skeleton" style={{ height: 12, width: "85%" }} />
        <div className="skeleton" style={{ height: 36, width: "100%", marginTop: 10 }} />
      </div>
    </div>
  );
}

export function Rating({ value, count }: { value: number; count?: number | undefined }) {
  return (
    <span className="rating" aria-label={`Nota ${value} de 5`}>
      <Star size={14} aria-hidden="true" />
      {value.toFixed(1)}
      {count !== undefined && (
        <span style={{ color: "var(--lichen-sage)", fontWeight: 600 }}>({count})</span>
      )}
    </span>
  );
}

export function Avatar({ initials, size = "md" }: { initials: string; size?: "sm" | "md" | "lg" }) {
  return (
    <span className={`avatar ${size === "md" ? "" : size}`} aria-hidden="true">
      {initials}
    </span>
  );
}

export function Progress({ value }: { value: number }) {
  return (
    <div
      className="progress-track"
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div className="progress-fill" style={{ width: `${Math.min(value, 100)}%` }} />
    </div>
  );
}

export function initialsOf(name: string): string {
  return name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}
