import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate, v as useParams } from "../_libs/@tanstack/react-router+[...].mjs";
import { $ as Construction, C as Repeat, I as MapPin, S as Ruler, W as Heart, X as Dumbbell, ct as CircleCheck, et as Coins, gt as CalendarDays, h as ShowerHead, i as UsersRound, ot as CircleParking, p as Star, wt as ArrowRight } from "../_libs/lucide-react.mjs";
import { A as useApp, c as Rating, f as addDaysISO, h as dayNumber, i as EmptyState, j as weekdayShort, s as PublicHeader, y as formatDateLong } from "./AppShell-deypX_no.mjs";
import { n as ArenaCover } from "./ArenaCard-DLRzwOXG.mjs";
import { t as SlotPicker } from "./SlotPicker-DMZCEmsG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/arena._arenaId-BRnaSt0B.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var structureIcons = [
	{
		match: "Estacionamento",
		icon: CircleParking
	},
	{
		match: "Vestiário",
		icon: ShowerHead
	},
	{
		match: "Iluminação",
		icon: Dumbbell
	},
	{
		match: "Churrasqueira",
		icon: Coins
	}
];
function ArenaPage() {
	const { arenaId } = useParams({ from: "/arena/$arenaId" });
	const { venueById, getSlots, isFavorite, toggleFavorite } = useApp();
	const navigate = useNavigate();
	const venue = venueById(arenaId);
	const [date, setDate] = (0, import_react.useState)(addDaysISO(0));
	const [fieldId, setFieldId] = (0, import_react.useState)(venue?.fields[0]?.id ?? "");
	const days = (0, import_react.useMemo)(() => Array.from({ length: 7 }, (_, index) => addDaysISO(index)), []);
	if (!venue) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "public-page",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PublicHeader, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			className: "container",
			style: { padding: "60px 0" },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "panel",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Construction, {
						size: 26,
						"aria-hidden": "true"
					}),
					title: "Areninha não encontrada",
					description: "O endereço informado não existe na demonstração. Volte para a busca e escolha outra areninha.",
					action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "button p-button button-primary",
						onClick: () => navigate({ to: "/buscar" }),
						children: "Voltar à busca"
					})
				})
			})
		})]
	});
	const slots = getSlots(venue.id, date);
	const favorite = isFavorite(venue.id);
	const selectedField = venue.fields.find((field) => field.id === fieldId) ?? venue.fields[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "public-page",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PublicHeader, { active: "buscar" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "container",
			style: { padding: "30px 0 80px" },
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					style: {
						display: "grid",
						gap: 18
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							display: "grid",
							gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
							gap: 14
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							style: {
								gridColumn: "span 2",
								minHeight: 260,
								borderRadius: 24,
								overflow: "hidden",
								position: "relative"
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArenaCover, {
								venue,
								showFavorite: false,
								fill: true
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								display: "grid",
								gap: 14
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: {
									minHeight: 123,
									borderRadius: 24,
									overflow: "hidden",
									position: "relative",
									filter: "hue-rotate(18deg) brightness(1.1)"
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArenaCover, {
									venue: {
										...venue,
										id: `${venue.id}-g2`,
										popular: false
									},
									showFavorite: false,
									fill: true
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: {
									minHeight: 123,
									borderRadius: 24,
									overflow: "hidden",
									position: "relative",
									filter: "hue-rotate(-16deg) brightness(0.92)"
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArenaCover, {
									venue: {
										...venue,
										id: `${venue.id}-g3`,
										popular: false
									},
									showFavorite: false,
									fill: true
								})
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "panel",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "panel-body",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "row-between",
									style: {
										flexWrap: "wrap",
										gap: 14
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "eyebrow",
											style: { marginBottom: 10 },
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
												venue.neighborhood,
												" · ",
												venue.city
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											style: {
												margin: 0,
												color: "var(--forest-depths)",
												fontSize: "clamp(28px,3.6vw,40px)"
											},
											children: venue.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											style: {
												display: "flex",
												flexWrap: "wrap",
												gap: 16,
												marginTop: 12
											},
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rating, {
													value: venue.rating,
													count: venue.reviewCount
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													style: {
														display: "inline-flex",
														alignItems: "center",
														gap: 6,
														color: "var(--lichen-sage)",
														fontSize: 13.5
													},
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
															size: 15,
															"aria-hidden": "true"
														}),
														" ",
														venue.address
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													style: {
														display: "inline-flex",
														alignItems: "center",
														gap: 6,
														color: "var(--lichen-sage)",
														fontSize: 13.5
													},
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
															size: 15,
															"aria-hidden": "true"
														}),
														" ",
														venue.distanceKm.toFixed(1),
														" km de você"
													]
												})
											]
										})
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										className: `chip ${favorite ? "active" : ""}`,
										onClick: () => toggleFavorite(venue.id),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
											size: 15,
											fill: favorite ? "currentColor" : "none",
											"aria-hidden": "true"
										}), favorite ? "Favoritada" : "Favoritar"]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "divider" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									style: {
										margin: 0,
										color: "var(--moss-shadow)",
										lineHeight: 1.7,
										fontSize: 15
									},
									children: venue.description
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									style: {
										display: "flex",
										flexWrap: "wrap",
										gap: 10,
										marginTop: 18
									},
									children: venue.structure.map((tag) => {
										const Icon = structureIcons.find((item) => tag.includes(item.match))?.icon ?? CircleCheck;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											style: {
												display: "inline-flex",
												alignItems: "center",
												gap: 8,
												padding: "9px 14px",
												borderRadius: 12,
												background: "var(--bone-white)",
												color: "var(--moss-shadow)",
												fontSize: 13,
												fontWeight: 600
											},
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
												size: 15,
												"aria-hidden": "true",
												style: { color: "var(--deep-verdant)" }
											}), tag]
										}, tag);
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										display: "grid",
										gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
										gap: 18,
										marginTop: 22
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
										style: {
											margin: "0 0 10px",
											fontSize: 15,
											color: "var(--forest-depths)",
											display: "flex",
											gap: 8,
											alignItems: "center"
										},
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ruler, {
											size: 17,
											"aria-hidden": "true"
										}), " Regras da casa"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										style: {
											margin: 0,
											paddingLeft: 18,
											color: "var(--lichen-sage)",
											fontSize: 13.5,
											lineHeight: 1.7
										},
										children: venue.rules.map((rule) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: rule }, rule))
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
										style: {
											margin: "0 0 10px",
											fontSize: 15,
											color: "var(--forest-depths)",
											display: "flex",
											gap: 8,
											alignItems: "center"
										},
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UsersRound, {
											size: 17,
											"aria-hidden": "true"
										}), " Campos disponíveis"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										style: {
											display: "grid",
											gap: 8
										},
										children: venue.fields.map((field) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "row-between",
											style: {
												padding: "11px 14px",
												border: "1px solid var(--mist-green)",
												borderRadius: 12,
												fontSize: 13.5
											},
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
													style: { color: "var(--forest-depths)" },
													children: field.name
												}),
												" ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													style: { color: "var(--lichen-sage)" },
													children: ["· ", field.type]
												})
											] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												style: { color: "var(--deep-verdant)" },
												children: field.pricePerHour.toLocaleString("pt-BR", {
													style: "currency",
													currency: "BRL"
												})
											})]
										}, field.id))
									})] })]
								})
							]
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "panel",
					style: { marginTop: 22 },
					id: "horarios",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "panel-body",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "row-between",
								style: {
									flexWrap: "wrap",
									gap: 12
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "eyebrow",
									style: { marginBottom: 8 },
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), "Disponibilidade"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									style: {
										margin: 0,
										color: "var(--forest-depths)",
										fontSize: 24
									},
									children: "Escolha sua data e horário"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									style: {
										color: "var(--lichen-sage)",
										fontSize: 13
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, {
											size: 15,
											"aria-hidden": "true"
										}),
										" ",
										formatDateLong(date)
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "date-strip",
								style: {
									gridTemplateColumns: "repeat(7, 1fr)",
									marginTop: 22
								},
								children: days.map((day) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									className: `day-pick ${day === date ? "active" : ""}`,
									onClick: () => setDate(day),
									style: {
										padding: "10px 4px",
										borderRadius: 10,
										border: "1px solid transparent",
										cursor: "pointer",
										background: day === date ? "var(--forest-depths)" : "var(--bone-white)",
										color: day === date ? "var(--pure-white)" : "var(--lichen-sage)"
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										style: {
											display: "block",
											marginBottom: 5,
											fontSize: 10
										},
										children: weekdayShort(day)
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										style: { fontSize: 15 },
										children: dayNumber(day)
									})]
								}, day))
							}),
							venue.fields.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: {
									display: "flex",
									flexWrap: "wrap",
									gap: 8,
									marginTop: 18
								},
								children: venue.fields.map((field) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									className: `chip ${field.id === selectedField?.id ? "active" : ""}`,
									onClick: () => setFieldId(field.id),
									children: [
										field.name,
										" · ",
										field.type
									]
								}, field.id))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: { marginTop: 20 },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlotPicker, {
									slots,
									venueId: venue.id,
									date,
									selectedTime: void 0,
									onSelect: (slot) => navigate({
										to: "/reserva",
										search: {
											arena: venue.id,
											date,
											time: slot.time,
											campo: selectedField?.id
										}
									})
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: {
									display: "flex",
									flexWrap: "wrap",
									gap: 14,
									alignItems: "center",
									justifyContent: "space-between",
									marginTop: 26,
									paddingTop: 20,
									borderTop: "1px dashed var(--mist-green)"
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									style: {
										color: "var(--lichen-sage)",
										fontSize: 13
									},
									children: "Horários reservados ou indisponíveis? Entre na lista de espera com um clique no horário."
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									className: "button p-button button-dark",
									style: { width: "auto" },
									onClick: () => navigate({
										to: "/reserva",
										search: {
											arena: venue.id,
											date,
											time: void 0,
											campo: selectedField?.id,
											recorrente: true
										}
									}),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Repeat, {
										size: 17,
										"aria-hidden": "true"
									}), " Criar reserva recorrente"]
								})]
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					style: {
						marginTop: 22,
						display: "flex",
						flexWrap: "wrap",
						gap: 14,
						alignItems: "center",
						justifyContent: "space-between",
						padding: "22px 26px",
						borderRadius: 22,
						background: "var(--forest-depths)",
						color: "var(--pure-white)"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
						style: {
							display: "block",
							fontSize: 18
						},
						children: ["Pronta disponibilidade: ", venue.nextAvailability]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						style: {
							color: "var(--pale-fern)",
							fontSize: 13.5
						},
						children: "Reserve agora em poucos passos — pagamento 100% simulado."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "button p-button button-primary",
						style: { width: "auto" },
						onClick: () => navigate({
							to: "/reserva",
							search: {
								arena: venue.id,
								date,
								campo: selectedField?.id
							}
						}),
						children: ["Reservar horário ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
							size: 17,
							"aria-hidden": "true"
						})]
					})]
				})
			]
		})]
	});
}
//#endregion
export { ArenaPage as component };
