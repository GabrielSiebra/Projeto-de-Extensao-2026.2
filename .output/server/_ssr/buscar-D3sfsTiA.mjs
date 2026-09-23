import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { F as Map, I as MapPin, b as SearchX, gt as CalendarDays, j as Navigation, m as SlidersHorizontal, nt as Clock3, p as Star, t as X, vt as Building2, z as LayoutGrid } from "../_libs/lucide-react.mjs";
import { A as useApp, E as toISODate, c as Rating, f as addDaysISO, i as EmptyState, l as SkeletonCard, s as PublicHeader } from "./AppShell-deypX_no.mjs";
import { t as ArenaCard } from "./ArenaCard-DLRzwOXG.mjs";
import { t as Button } from "../_libs/primereact.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/buscar-D3sfsTiA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function MockMap({ venues, selectedId, onSelect }) {
	const [internalSelected, setInternalSelected] = (0, import_react.useState)(venues[0]?.id);
	const navigate = useNavigate();
	const activeId = selectedId ?? internalSelected;
	const active = venues.find((venue) => venue.id === activeId) ?? venues[0];
	const handleSelect = (venueId) => {
		setInternalSelected(venueId);
		onSelect?.(venueId);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mock-map",
		role: "img",
		"aria-label": "Mapa ilustrativo com areninhas próximas",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "map-me",
				title: "Sua localização",
				"aria-hidden": "true"
			}),
			venues.map((venue) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: `map-marker ${venue.id === active?.id ? "active" : ""}`,
				style: {
					left: `${venue.mapX}%`,
					top: `${venue.mapY}%`
				},
				"aria-label": ` selecionar ${venue.name}`,
				onClick: () => handleSelect(venue.id),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
					size: 17,
					"aria-hidden": "true"
				})
			}, venue.id)),
			active && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "panel",
				style: {
					position: "absolute",
					zIndex: 4,
					left: 20,
					bottom: 20,
					width: "min(340px, calc(100% - 40px))",
					padding: 18
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "row-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							style: {
								color: "var(--forest-depths)",
								fontSize: 15
							},
							children: active.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rating, { value: active.rating })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						style: {
							margin: "8px 0 14px",
							color: "var(--lichen-sage)",
							fontSize: 12.5,
							display: "flex",
							gap: 6,
							alignItems: "center"
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, {
								size: 13,
								"aria-hidden": "true"
							}),
							active.neighborhood,
							" · ",
							active.distanceKm.toFixed(1),
							" km de você"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "row-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
							style: { color: "var(--forest-depths)" },
							children: [active.pricePerHour.toLocaleString("pt-BR", {
								style: "currency",
								currency: "BRL"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", {
								style: {
									color: "var(--lichen-sage)",
									fontWeight: 500
								},
								children: " /hora"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "chip active",
							onClick: () => navigate({
								to: "/arena/$arenaId",
								params: { arenaId: active.id }
							}),
							children: "Ver detalhes"
						})]
					})
				]
			})
		]
	});
}
var structureOptions = [
	"Estacionamento",
	"Vestiário",
	"Iluminação LED",
	"Churrasqueira",
	"Lanchonete",
	"Bar"
];
var hourOptions = [
	"Qualquer horário",
	"Manhã (06h–12h)",
	"Tarde (12h–18h)",
	"Noite (18h–23h)"
];
function SearchPage() {
	const { venues, favorites } = useApp();
	const navigate = useNavigate();
	const [view, setView] = (0, import_react.useState)("lista");
	const [query, setQuery] = (0, import_react.useState)("");
	const [date, setDate] = (0, import_react.useState)(addDaysISO(0));
	const [period, setPeriod] = (0, import_react.useState)(hourOptions[0]);
	const [maxPrice, setMaxPrice] = (0, import_react.useState)(200);
	const [minRating, setMinRating] = (0, import_react.useState)(0);
	const [structures, setStructures] = (0, import_react.useState)([]);
	const [onlyFavorites, setOnlyFavorites] = (0, import_react.useState)(false);
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		setLoading(true);
		const timer = window.setTimeout(() => setLoading(false), 450);
		return () => window.clearTimeout(timer);
	}, [
		query,
		date,
		period,
		maxPrice,
		minRating,
		structures,
		onlyFavorites
	]);
	const filtered = (0, import_react.useMemo)(() => {
		const normalized = query.trim().toLowerCase();
		return venues.filter((venue) => {
			if (normalized) {
				if (!`${venue.name} ${venue.neighborhood} ${venue.city}`.toLowerCase().includes(normalized)) return false;
			}
			if (venue.pricePerHour > maxPrice) return false;
			if (venue.rating < minRating) return false;
			if (onlyFavorites && !favorites.includes(venue.id)) return false;
			if (structures.length > 0 && !structures.every((tag) => venue.structure.includes(tag))) return false;
			if (period === "Manhã (06h–12h)" && venue.closedHours.includes(7)) return false;
			return true;
		});
	}, [
		venues,
		query,
		maxPrice,
		minRating,
		structures,
		onlyFavorites,
		period,
		favorites
	]);
	const toggleStructure = (tag) => {
		setStructures((current) => current.includes(tag) ? current.filter((item) => item !== tag) : [...current, tag]);
	};
	const clearFilters = () => {
		setQuery("");
		setPeriod(hourOptions[0] ?? "Qualquer horário");
		setMaxPrice(200);
		setMinRating(0);
		setStructures([]);
		setOnlyFavorites(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "public-page",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PublicHeader, { active: "buscar" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "container",
			style: { padding: "34px 0 80px" },
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "eyebrow",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), "Busca de areninhas"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "row-between",
					style: {
						flexWrap: "wrap",
						gap: 18,
						marginBottom: 26
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						style: {
							margin: 0,
							color: "var(--forest-depths)",
							fontSize: "clamp(30px,4vw,44px)",
							lineHeight: 1.05
						},
						children: "Encontre uma areninha para jogar"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						style: {
							margin: "10px 0 0",
							color: "var(--lichen-sage)",
							maxWidth: 560
						},
						children: "Compare estrutura, preço e disponibilidade. Todos os dados são demonstrativos."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							display: "flex",
							gap: 8
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: `chip ${view === "lista" ? "active" : ""}`,
							onClick: () => setView("lista"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutGrid, {
								size: 15,
								"aria-hidden": "true"
							}), " Lista"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: `chip ${view === "mapa" ? "active" : ""}`,
							onClick: () => setView("mapa"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Map, {
								size: 15,
								"aria-hidden": "true"
							}), " Mapa"]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "panel",
					style: { marginBottom: 26 },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "panel-body",
						style: {
							display: "grid",
							gap: 18
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: {
									display: "grid",
									gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
									gap: 14
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "field-label",
										htmlFor: "busca-local",
										children: "Localização"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "busca-local",
										className: "input",
										placeholder: "Bairro ou nome da areninha",
										value: query,
										onChange: (event) => setQuery(event.target.value)
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "field-label",
										htmlFor: "busca-data",
										children: "Data"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "busca-data",
										type: "date",
										className: "input",
										min: toISODate(/* @__PURE__ */ new Date()),
										value: date,
										onChange: (event) => setDate(event.target.value)
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "field-label",
										htmlFor: "busca-periodo",
										children: "Horário"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
										id: "busca-periodo",
										className: "select",
										value: period,
										onChange: (event) => setPeriod(event.target.value),
										children: hourOptions.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: option }, option))
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "field-label",
										htmlFor: "busca-preco",
										children: ["Preço máximo · R$ ", maxPrice]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "busca-preco",
										type: "range",
										min: 80,
										max: 200,
										step: 5,
										value: maxPrice,
										onChange: (event) => setMaxPrice(Number(event.target.value)),
										style: {
											width: "100%",
											accentColor: "var(--deep-verdant)"
										}
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "field-label",
										htmlFor: "busca-nota",
										children: "Avaliação mínima"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										id: "busca-nota",
										className: "select",
										value: minRating,
										onChange: (event) => setMinRating(Number(event.target.value)),
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: 0,
												children: "Qualquer nota"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: 4,
												children: "4.0 ou mais"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: 4.5,
												children: "4.5 ou mais"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: 4.8,
												children: "4.8 ou mais"
											})
										]
									})] })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "field-label",
								style: {
									display: "flex",
									alignItems: "center",
									gap: 7
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, {
									size: 14,
									"aria-hidden": "true"
								}), " Estrutura"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: {
									display: "flex",
									flexWrap: "wrap",
									gap: 8
								},
								children: [
									structureOptions.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: `chip ${structures.includes(tag) ? "active" : ""}`,
										onClick: () => toggleStructure(tag),
										children: tag
									}, tag)),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										className: `chip ${onlyFavorites ? "active" : ""}`,
										onClick: () => setOnlyFavorites((value) => !value),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
											size: 14,
											"aria-hidden": "true"
										}), " Somente favoritas"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										className: "chip chip-ghost",
										onClick: clearFilters,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
											size: 14,
											"aria-hidden": "true"
										}), " Limpar filtros"]
									})
								]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "row-between",
								style: { flexWrap: "wrap" },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									style: {
										color: "var(--lichen-sage)",
										fontSize: 13
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, {
											size: 14,
											"aria-hidden": "true"
										}),
										" ",
										loading ? "Buscando areninhas..." : `${filtered.length} areninha(s) encontrada(s)`
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									style: {
										color: "var(--lichen-sage)",
										fontSize: 13,
										display: "inline-flex",
										gap: 6,
										alignItems: "center"
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock3, {
											size: 14,
											"aria-hidden": "true"
										}),
										" Disponibilidade para",
										" ",
										(/* @__PURE__ */ new Date(date + "T12:00:00")).toLocaleDateString("pt-BR")
									]
								})]
							})
						]
					})
				}),
				view === "mapa" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						display: "grid",
						gap: 18
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MockMap, { venues: filtered }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						style: {
							margin: 0,
							color: "var(--lichen-sage)",
							fontSize: 12.5,
							textAlign: "center"
						},
						children: "Mapa ilustrativo — sem integração com serviços externos de geolocalização."
					})]
				}) : loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid-cards",
					"aria-busy": "true",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkeletonCard, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkeletonCard, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkeletonCard, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkeletonCard, {})
					]
				}) : filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "panel",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchX, {
							size: 26,
							"aria-hidden": "true"
						}),
						title: "Nenhuma areninha encontrada",
						description: "Tente ampliar a faixa de preço, remover filtros de estrutura ou buscar outro bairro.",
						action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "button button-primary",
							onClick: clearFilters,
							children: "Limpar filtros"
						})
					})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid-cards",
					children: filtered.map((venue) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArenaCard, { venue }, venue.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "panel",
					style: { marginTop: 28 },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "panel-body",
						style: {
							display: "flex",
							gap: 14,
							alignItems: "center",
							flexWrap: "wrap"
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "stat-icon",
								style: {
									display: "grid",
									placeItems: "center",
									width: 44,
									height: 44,
									borderRadius: 14,
									background: "var(--sprout-wash)",
									color: "var(--deep-verdant)"
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, {
									size: 20,
									"aria-hidden": "true"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: {
									flex: 1,
									minWidth: 220
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									style: {
										display: "block",
										color: "var(--forest-depths)"
									},
									children: "Você é proprietário de uma areninha?"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									style: {
										color: "var(--lichen-sage)",
										fontSize: 13.5
									},
									children: "Cadastre sua arena e comece a receber reservas pelo painel completo."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								className: "button button-dark",
								style: { width: "auto" },
								onClick: () => navigate({ to: "/proprietario/cadastrar" }),
								children: "Cadastrar areninha"
							})
						]
					})
				})
			]
		})]
	});
}
//#endregion
export { SearchPage as component };
