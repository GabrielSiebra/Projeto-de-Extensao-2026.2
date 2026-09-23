import { Link } from "@tanstack/react-router";
import { Heart, MapPin, Star, Clock3 } from "lucide-react";
import type { Venue } from "../../types";
import { useApp } from "../../context/app";
import { Rating } from "./primitives";

export function ArenaCover({
  venue,
  showFavorite = true,
  fill = false,
}: {
  venue: Venue;
  showFavorite?: boolean;
  fill?: boolean;
}) {
  const { isFavorite, toggleFavorite } = useApp();
  const favorite = isFavorite(venue.id);
  const initials = venue.name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  return (
    <div
      className="arena-cover"
      style={{
        filter: `hue-rotate(${venue.coverHue - 137}deg)`,
        height: fill ? "100%" : undefined,
      }}
    >
      <span className="cover-center" aria-hidden="true" />
      <span className="cover-initials" aria-hidden="true">
        {initials}
      </span>
      {venue.popular && <span className="cover-badge">Popular</span>}
      {showFavorite && (
        <button
          type="button"
          className={`fav-button ${favorite ? "on" : ""}`}
          aria-label={favorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            toggleFavorite(venue.id);
          }}
        >
          <Heart size={17} fill={favorite ? "currentColor" : "none"} aria-hidden="true" />
        </button>
      )}
    </div>
  );
}

export function ArenaCard({ venue }: { venue: Venue }) {
  return (
    <article className="arena-card">
      <ArenaCover venue={venue} />
      <div className="arena-body">
        <div className="row-between">
          <h3>{venue.name}</h3>
          <Rating value={venue.rating} count={venue.reviewCount} />
        </div>
        <div className="arena-meta">
          <span>
            <MapPin size={13} aria-hidden="true" />
            {venue.neighborhood} · {venue.distanceKm.toFixed(1)} km
          </span>
          <span>
            <Clock3 size={13} aria-hidden="true" />
            {venue.nextAvailability}
          </span>
        </div>
        <div className="arena-tags">
          {venue.structure.slice(0, 3).map((tag) => (
            <em key={tag}>{tag}</em>
          ))}
        </div>
        <div className="arena-foot">
          <div className="arena-price">
            <strong>
              {venue.pricePerHour.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
            </strong>
            <small> /hora</small>
          </div>
          <Link
            to="/arena/$arenaId"
            params={{ arenaId: venue.id }}
            className="button p-button button-dark no-underline"
            style={{ minHeight: 40, padding: "8px 18px", width: "auto" }}
          >
            Ver detalhes
          </Link>
        </div>
      </div>
    </article>
  );
}

export function InlineStars({ value }: { value: number }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
      <Star size={13} style={{ color: "var(--electric-sprout)", fill: "var(--electric-sprout)" }} />
      <b style={{ fontSize: 12.5 }}>{value.toFixed(1)}</b>
    </span>
  );
}
