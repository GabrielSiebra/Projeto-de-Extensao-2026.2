import { createFileRoute, Link } from "@tanstack/react-router";
import { HeartOff, Heart } from "lucide-react";
import { AppShell } from "../../components/platform/AppShell";
import { getClientNav } from "../../components/platform/navItems";
import { ArenaCard } from "../../components/platform/ArenaCard";
import { EmptyState, Panel } from "../../components/platform/primitives";
import { useApp } from "../../context/app";

export const Route = createFileRoute("/app/favoritos")({
  component: FavoritesPage,
});

export default function FavoritesPage() {
  const { favorites, venues, notifications, toggleFavorite } = useApp();
  const unread = notifications.filter((item) => !item.read).length;
  const favoriteVenues = venues.filter((venue) => favorites.includes(venue.id));

  return (
    <AppShell
      role="client"
      active="/app/favoritos"
      title="Minhas areninhas favoritas"
      subtitle="Compare e acesse rápido as arenas que você mais gosta"
      nav={getClientNav(unread)}
    >
      {favoriteVenues.length === 0 ? (
        <Panel>
          <EmptyState
            icon={<HeartOff size={26} aria-hidden="true" />}
            title="Nenhuma favorita ainda"
            description="Toque no coração de qualquer areninha para salvá-la aqui e receber atalhos rápidos."
            action={
              <Link
                to="/buscar"
                className="button p-button button-primary no-underline"
                style={{ width: "auto" }}
              >
                Explorar areninhas
              </Link>
            }
          />
        </Panel>
      ) : (
        <div className="grid-cards">
          {favoriteVenues.map((venue) => (
            <div key={venue.id} style={{ position: "relative" }}>
              <ArenaCard venue={venue} />
              <button
                type="button"
                className="chip"
                style={{ position: "absolute", top: 12, left: 12, zIndex: 3 }}
                onClick={() => toggleFavorite(venue.id)}
              >
                <Heart size={14} fill="currentColor" aria-hidden="true" /> Remover
              </button>
            </div>
          ))}
        </div>
      )}
    </AppShell>
  );
}
