import { useEffect, useMemo, useState } from "react";
import { Button } from "primereact/button";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import {
  Building2,
  CalendarDays,
  Clock3,
  LayoutGrid,
  Map as MapIcon,
  SearchX,
  SlidersHorizontal,
  Star,
  X,
} from "lucide-react";
import { PublicHeader } from "../components/platform/AppShell";
import { ArenaCard } from "../components/platform/ArenaCard";
import { MockMap } from "../components/platform/MockMap";
import { EmptyState, SkeletonCard } from "../components/platform/primitives";
import { useApp } from "../context/app";
import { addDaysISO, toISODate } from "../lib/format";

const structureOptions = [
  "Estacionamento",
  "Vestiário",
  "Iluminação LED",
  "Churrasqueira",
  "Lanchonete",
  "Bar",
];

const hourOptions = ["Qualquer horário", "Manhã (06h–12h)", "Tarde (12h–18h)", "Noite (18h–23h)"];

export const Route = createFileRoute("/buscar")({
  component: SearchPage,
});

function SearchPage() {
  const { venues, favorites } = useApp();
  const navigate = useNavigate();
  const [view, setView] = useState<"lista" | "mapa">("lista");
  const [query, setQuery] = useState("");
  const [date, setDate] = useState(addDaysISO(0));
  const [period, setPeriod] = useState(hourOptions[0] as string);
  const [maxPrice, setMaxPrice] = useState(200);
  const [minRating, setMinRating] = useState(0);
  const [structures, setStructures] = useState<string[]>([]);
  const [onlyFavorites, setOnlyFavorites] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = window.setTimeout(() => setLoading(false), 450);
    return () => window.clearTimeout(timer);
  }, [query, date, period, maxPrice, minRating, structures, onlyFavorites]);

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return venues.filter((venue) => {
      if (normalized) {
        const haystack = `${venue.name} ${venue.neighborhood} ${venue.city}`.toLowerCase();
        if (!haystack.includes(normalized)) return false;
      }
      if (venue.pricePerHour > maxPrice) return false;
      if (venue.rating < minRating) return false;
      if (onlyFavorites && !favorites.includes(venue.id)) return false;
      if (structures.length > 0 && !structures.every((tag) => venue.structure.includes(tag))) {
        return false;
      }
      if (period === "Manhã (06h–12h)" && venue.closedHours.includes(7)) return false;
      return true;
    });
  }, [venues, query, maxPrice, minRating, structures, onlyFavorites, period, favorites]);

  const toggleStructure = (tag: string) => {
    setStructures((current) =>
      current.includes(tag) ? current.filter((item) => item !== tag) : [...current, tag],
    );
  };

  const clearFilters = () => {
    setQuery("");
    setPeriod(hourOptions[0] ?? "Qualquer horário");
    setMaxPrice(200);
    setMinRating(0);
    setStructures([]);
    setOnlyFavorites(false);
  };

  return (
    <div className="public-page">
      <PublicHeader active="buscar" />
      <main className="container" style={{ padding: "34px 0 80px" }}>
        <p className="eyebrow">
          <span />
          Busca de areninhas
        </p>
        <div className="row-between" style={{ flexWrap: "wrap", gap: 18, marginBottom: 26 }}>
          <div>
            <h2
              style={{
                margin: 0,
                color: "var(--forest-depths)",
                fontSize: "clamp(30px,4vw,44px)",
                lineHeight: 1.05,
              }}
            >
              Encontre uma areninha para jogar
            </h2>
            <p style={{ margin: "10px 0 0", color: "var(--lichen-sage)", maxWidth: 560 }}>
              Compare estrutura, preço e disponibilidade. Todos os dados são demonstrativos.
            </p>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <button
              type="button"
              className={`chip ${view === "lista" ? "active" : ""}`}
              onClick={() => setView("lista")}
            >
              <LayoutGrid size={15} aria-hidden="true" /> Lista
            </button>
            <button
              type="button"
              className={`chip ${view === "mapa" ? "active" : ""}`}
              onClick={() => setView("mapa")}
            >
              <MapIcon size={15} aria-hidden="true" /> Mapa
            </button>
          </div>
        </div>

        <section className="panel" style={{ marginBottom: 26 }}>
          <div className="panel-body" style={{ display: "grid", gap: 18 }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
                gap: 14,
              }}
            >
              <div>
                <label className="field-label" htmlFor="busca-local">
                  Localização
                </label>
                <input
                  id="busca-local"
                  className="input"
                  placeholder="Bairro ou nome da areninha"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                />
              </div>
              <div>
                <label className="field-label" htmlFor="busca-data">
                  Data
                </label>
                <input
                  id="busca-data"
                  type="date"
                  className="input"
                  min={toISODate(new Date())}
                  value={date}
                  onChange={(event) => setDate(event.target.value)}
                />
              </div>
              <div>
                <label className="field-label" htmlFor="busca-periodo">
                  Horário
                </label>
                <select
                  id="busca-periodo"
                  className="select"
                  value={period}
                  onChange={(event) => setPeriod(event.target.value)}
                >
                  {hourOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="field-label" htmlFor="busca-preco">
                  Preço máximo · R$ {maxPrice}
                </label>
                <input
                  id="busca-preco"
                  type="range"
                  min={80}
                  max={200}
                  step={5}
                  value={maxPrice}
                  onChange={(event) => setMaxPrice(Number(event.target.value))}
                  style={{ width: "100%", accentColor: "var(--deep-verdant)" }}
                />
              </div>
              <div>
                <label className="field-label" htmlFor="busca-nota">
                  Avaliação mínima
                </label>
                <select
                  id="busca-nota"
                  className="select"
                  value={minRating}
                  onChange={(event) => setMinRating(Number(event.target.value))}
                >
                  <option value={0}>Qualquer nota</option>
                  <option value={4}>4.0 ou mais</option>
                  <option value={4.5}>4.5 ou mais</option>
                  <option value={4.8}>4.8 ou mais</option>
                </select>
              </div>
            </div>

            <div>
              <span
                className="field-label"
                style={{ display: "flex", alignItems: "center", gap: 7 }}
              >
                <SlidersHorizontal size={14} aria-hidden="true" /> Estrutura
              </span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {structureOptions.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    className={`chip ${structures.includes(tag) ? "active" : ""}`}
                    onClick={() => toggleStructure(tag)}
                  >
                    {tag}
                  </button>
                ))}
                <button
                  type="button"
                  className={`chip ${onlyFavorites ? "active" : ""}`}
                  onClick={() => setOnlyFavorites((value) => !value)}
                >
                  <Star size={14} aria-hidden="true" /> Somente favoritas
                </button>
                <button type="button" className="chip chip-ghost" onClick={clearFilters}>
                  <X size={14} aria-hidden="true" /> Limpar filtros
                </button>
              </div>
            </div>

            <div className="row-between" style={{ flexWrap: "wrap" }}>
              <span style={{ color: "var(--lichen-sage)", fontSize: 13 }}>
                <CalendarDays size={14} aria-hidden="true" />{" "}
                {loading ? "Buscando areninhas..." : `${filtered.length} areninha(s) encontrada(s)`}
              </span>
              <span
                style={{
                  color: "var(--lichen-sage)",
                  fontSize: 13,
                  display: "inline-flex",
                  gap: 6,
                  alignItems: "center",
                }}
              >
                <Clock3 size={14} aria-hidden="true" /> Disponibilidade para{" "}
                {new Date(date + "T12:00:00").toLocaleDateString("pt-BR")}
              </span>
            </div>
          </div>
        </section>

        {view === "mapa" ? (
          <div style={{ display: "grid", gap: 18 }}>
            <MockMap venues={filtered} />
            <p
              style={{
                margin: 0,
                color: "var(--lichen-sage)",
                fontSize: 12.5,
                textAlign: "center",
              }}
            >
              Mapa ilustrativo — sem integração com serviços externos de geolocalização.
            </p>
          </div>
        ) : loading ? (
          <div className="grid-cards" aria-busy="true">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>
        ) : filtered.length === 0 ? (
          <div className="panel">
            <EmptyState
              icon={<SearchX size={26} aria-hidden="true" />}
              title="Nenhuma areninha encontrada"
              description="Tente ampliar a faixa de preço, remover filtros de estrutura ou buscar outro bairro."
              action={
                <Button className="button button-primary" onClick={clearFilters}>
                  Limpar filtros
                </Button>
              }
            />
          </div>
        ) : (
          <div className="grid-cards">
            {filtered.map((venue) => (
              <ArenaCard key={venue.id} venue={venue} />
            ))}
          </div>
        )}

        <section className="panel" style={{ marginTop: 28 }}>
          <div
            className="panel-body"
            style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}
          >
            <span
              className="stat-icon"
              style={{
                display: "grid",
                placeItems: "center",
                width: 44,
                height: 44,
                borderRadius: 14,
                background: "var(--sprout-wash)",
                color: "var(--deep-verdant)",
              }}
            >
              <Building2 size={20} aria-hidden="true" />
            </span>
            <div style={{ flex: 1, minWidth: 220 }}>
              <strong style={{ display: "block", color: "var(--forest-depths)" }}>
                Você é proprietário de uma areninha?
              </strong>
              <span style={{ color: "var(--lichen-sage)", fontSize: 13.5 }}>
                Cadastre sua arena e comece a receber reservas pelo painel completo.
              </span>
            </div>
            <Button
              className="button button-dark"
              style={{ width: "auto" }}
              onClick={() => navigate({ to: "/proprietario/cadastrar" })}
            >
              Cadastrar areninha
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
