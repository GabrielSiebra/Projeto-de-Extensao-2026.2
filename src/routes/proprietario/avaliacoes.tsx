import { createFileRoute } from "@tanstack/react-router";
import { MessageSquareHeart, Star } from "lucide-react";
import { AppShell } from "../../components/platform/AppShell";
import { getOwnerNav } from "../../components/platform/navItems";
import {
  Avatar,
  Panel,
  Progress,
  StatCard,
  initialsOf,
} from "../../components/platform/primitives";
import { useApp } from "../../context/app";
import { seedReviews } from "../../mocks";

export const Route = createFileRoute("/proprietario/avaliacoes")({
  component: OwnerReviews,
});

function avg(pick: (review: (typeof seedReviews)[number]) => number): number {
  const total = seedReviews.reduce((sum, review) => sum + pick(review), 0);
  return total / seedReviews.length;
}

function OwnerReviews() {
  const { ownerNotifications } = useApp();
  const unread = ownerNotifications.filter((item) => !item.read).length;
  const overall = avg((review) => review.rating);
  const structure = avg((review) => review.structure);
  const service = avg((review) => review.service);
  const pitch = avg((review) => review.pitch);

  return (
    <AppShell
      role="owner"
      active="/proprietario/avaliacoes"
      title="Avaliações"
      subtitle="O que os clientes dizem sobre a areninha"
      nav={getOwnerNav(unread)}
    >
      <div style={{ display: "grid", gap: 18 }}>
        <div className="grid-stats">
          <StatCard
            label="Nota média"
            value={`${overall.toFixed(1)} ★`}
            hint={`${seedReviews.length} avaliações`}
            accent
            icon={<Star size={19} aria-hidden="true" />}
          />
          <StatCard label="Estrutura" value={structure.toFixed(1)} hint="Média dos clientes" />
          <StatCard label="Atendimento" value={service.toFixed(1)} hint="Média dos clientes" />
          <StatCard label="Gramado" value={pitch.toFixed(1)} hint="Média dos clientes" />
        </div>

        <Panel title="Dimensões">
          <div style={{ display: "grid", gap: 16, maxWidth: 560 }}>
            {[
              ["Estrutura", structure],
              ["Atendimento", service],
              ["Gramado", pitch],
            ].map(([label, value]) => (
              <div key={label as string} style={{ display: "grid", gap: 6 }}>
                <div className="row-between" style={{ fontSize: 13.5 }}>
                  <span style={{ color: "var(--moss-shadow)" }}>{label}</span>
                  <strong style={{ color: "var(--forest-depths)" }}>
                    {(value as number).toFixed(1)}
                  </strong>
                </div>
                <Progress value={((value as number) / 5) * 100} />
              </div>
            ))}
          </div>
        </Panel>

        <div className="grid-cards">
          {seedReviews.map((review) => (
            <article key={review.id} className="panel" style={{ boxShadow: "none" }}>
              <div className="panel-body" style={{ display: "grid", gap: 12 }}>
                <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <Avatar initials={initialsOf(review.author)} size="sm" />
                  <div style={{ flex: 1 }}>
                    <strong
                      style={{ display: "block", fontSize: 14, color: "var(--forest-depths)" }}
                    >
                      {review.author}
                    </strong>
                    <span style={{ color: "var(--lichen-sage)", fontSize: 12 }}>
                      {review.date.split("-").reverse().join("/")}
                    </span>
                  </div>
                  <span className="rating">
                    <Star size={14} aria-hidden="true" /> {review.rating}.0
                  </span>
                </div>
                <p
                  style={{
                    margin: 0,
                    color: "var(--moss-shadow)",
                    fontSize: 13.5,
                    lineHeight: 1.6,
                  }}
                >
                  {review.comment}
                </p>
                <div className="arena-foot">
                  <span className="arena-tags">
                    <em>Estrutura {review.structure}</em>
                    <em>Atendimento {review.service}</em>
                    <em>Gramado {review.pitch}</em>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <Panel title="Resumo">
          <p
            style={{
              margin: 0,
              display: "flex",
              gap: 10,
              color: "var(--lichen-sage)",
              fontSize: 13.5,
              alignItems: "center",
            }}
          >
            <MessageSquareHeart
              size={17}
              aria-hidden="true"
              style={{ color: "var(--deep-verdant)" }}
            />
            Notas ilustrativas com dados fictícios para demonstração do painel.
          </p>
        </Panel>
      </div>
    </AppShell>
  );
}
