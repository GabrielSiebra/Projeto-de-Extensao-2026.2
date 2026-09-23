import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { MapPin, Navigation } from "lucide-react";
import type { Venue } from "../../types";
import { Rating } from "./primitives";

export function MockMap({
  venues,
  selectedId,
  onSelect,
}: {
  venues: Venue[];
  selectedId?: string;
  onSelect?: (venueId: string) => void;
}) {
  const [internalSelected, setInternalSelected] = useState<string | undefined>(venues[0]?.id);
  const navigate = useNavigate();
  const activeId = selectedId ?? internalSelected;
  const active = venues.find((venue) => venue.id === activeId) ?? venues[0];

  const handleSelect = (venueId: string) => {
    setInternalSelected(venueId);
    onSelect?.(venueId);
  };

  return (
    <div className="mock-map" role="img" aria-label="Mapa ilustrativo com areninhas próximas">
      <span className="map-me" title="Sua localização" aria-hidden="true" />
      {venues.map((venue) => (
        <button
          key={venue.id}
          type="button"
          className={`map-marker ${venue.id === active?.id ? "active" : ""}`}
          style={{ left: `${venue.mapX}%`, top: `${venue.mapY}%` }}
          aria-label={` selecionar ${venue.name}`}
          onClick={() => handleSelect(venue.id)}
        >
          <MapPin size={17} aria-hidden="true" />
        </button>
      ))}

      {active && (
        <div
          className="panel"
          style={{
            position: "absolute",
            zIndex: 4,
            left: 20,
            bottom: 20,
            width: "min(340px, calc(100% - 40px))",
            padding: 18,
          }}
        >
          <div className="row-between">
            <strong style={{ color: "var(--forest-depths)", fontSize: 15 }}>{active.name}</strong>
            <Rating value={active.rating} />
          </div>
          <p
            style={{
              margin: "8px 0 14px",
              color: "var(--lichen-sage)",
              fontSize: 12.5,
              display: "flex",
              gap: 6,
              alignItems: "center",
            }}
          >
            <Navigation size={13} aria-hidden="true" />
            {active.neighborhood} · {active.distanceKm.toFixed(1)} km de você
          </p>
          <div className="row-between">
            <strong style={{ color: "var(--forest-depths)" }}>
              {active.pricePerHour.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
              <small style={{ color: "var(--lichen-sage)", fontWeight: 500 }}> /hora</small>
            </strong>
            <button
              type="button"
              className="chip active"
              onClick={() => navigate({ to: "/arena/$arenaId", params: { arenaId: active.id } })}
            >
              Ver detalhes
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
