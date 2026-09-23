import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Repeat, Q as CreditCard, R as LoaderCircle, T as QrCode, Tt as ArrowLeft, a as UserRound, ct as CircleCheck, d as Ticket, dt as Check, gt as CalendarDays, i as UsersRound, r as Wallet, wt as ArrowRight } from "../_libs/lucide-react.mjs";
import { A as useApp, E as toISODate, a as Panel, b as initialsOf, c as Rating, f as addDaysISO, r as Avatar, s as PublicHeader, y as formatDateLong } from "./AppShell-deypX_no.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as SlotPicker } from "./SlotPicker-DMZCEmsG.mjs";
import { t as Route } from "./reserva-2hFs2M1T.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reserva--q6yhtzZ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Stepper({ steps, current }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "stepper",
		"aria-label": "Etapas da reserva",
		children: steps.map((label, index) => {
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: `stepper-item ${index < current ? "done" : index === current ? "current" : ""}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "stepper-dot",
					"aria-hidden": "true",
					children: index < current ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 14 }) : index + 1
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label })]
			}, label);
		})
	});
}
var steps = [
	"Areninha",
	"Data",
	"Horário",
	"Conta",
	"Resumo",
	"Pagamento"
];
var paymentMethods = [
	{
		id: "pix",
		label: "PIX",
		hint: "Aprovação imediata (simulada)",
		icon: QrCode
	},
	{
		id: "card",
		label: "Cartão",
		hint: "Crédito ou débito (simulado)",
		icon: CreditCard
	},
	{
		id: "other",
		label: "Outro método",
		hint: "Vale, convênio ou combinação",
		icon: Wallet
	}
];
function ReservaPage() {
	const search = Route.useSearch();
	const navigate = useNavigate();
	const { venueById, getSlots, createReservation, session, teams, myTeamId } = useApp();
	const venue = venueById(search.arena ?? "arena-central");
	const [step, setStep] = (0, import_react.useState)(search.time ? 3 : search.date ? 2 : 0);
	const [date, setDate] = (0, import_react.useState)(search.date ?? addDaysISO(0));
	const [time, setTime] = (0, import_react.useState)(search.time ?? "");
	const [fieldId, setFieldId] = (0, import_react.useState)(search.campo ?? venue?.fields[0]?.id ?? "");
	const [accountType, setAccountType] = (0, import_react.useState)(session?.role === "time" ? "time" : "individual");
	const [paymentMethod, setPaymentMethod] = (0, import_react.useState)("pix");
	const [recurring, setRecurring] = (0, import_react.useState)(Boolean(search.recorrente));
	const [coupon, setCoupon] = (0, import_react.useState)("");
	const [appliedCoupon, setAppliedCoupon] = (0, import_react.useState)(null);
	const [payState, setPayState] = (0, import_react.useState)("idle");
	const [confirmed, setConfirmed] = (0, import_react.useState)(null);
	const timers = (0, import_react.useRef)([]);
	(0, import_react.useEffect)(() => () => {
		timers.current.forEach((timer) => window.clearTimeout(timer));
	}, []);
	const days = (0, import_react.useMemo)(() => Array.from({ length: 14 }, (_, index) => addDaysISO(index)), []);
	const slots = venue ? getSlots(venue.id, date) : [];
	const field = venue?.fields.find((item) => item.id === fieldId) ?? venue?.fields[0];
	const myTeam = teams.find((team) => team.id === myTeamId);
	const amount = field?.pricePerHour ?? venue?.pricePerHour ?? 140;
	const discount = appliedCoupon ? Math.round(amount * .1) : 0;
	const base = amount - discount;
	const fees = Math.round(base * .05);
	const total = base + fees;
	const recurringDates = (0, import_react.useMemo)(() => {
		if (!recurring) return [];
		const start = /* @__PURE__ */ new Date(date + "T12:00:00");
		return Array.from({ length: 13 }, (_, index) => {
			const occurrence = new Date(start);
			occurrence.setDate(occurrence.getDate() + index * 7);
			return toISODate(occurrence);
		});
	}, [recurring, date]);
	if (!venue) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "public-page",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PublicHeader, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			className: "container",
			style: { padding: "60px 0" },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "panel",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "empty-state",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Areninha inválida" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Volte para a busca para escolher uma areninha." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "button p-button button-primary",
							onClick: () => navigate({ to: "/buscar" }),
							children: "Ir para a busca"
						})
					]
				})
			})
		})]
	});
	if (confirmed) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "public-page",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PublicHeader, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			className: "container",
			style: {
				padding: "56px 0 90px",
				maxWidth: 720
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				bodyClass: "panel-body",
				title: "",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							textAlign: "center",
							padding: "18px 6px 6px"
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "success-burst",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
									size: 42,
									"aria-hidden": "true"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								style: {
									margin: "22px 0 8px",
									color: "var(--forest-depths)",
									fontSize: 30
								},
								children: "🎉 Reserva confirmada!"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								style: {
									margin: "0 0 26px",
									color: "var(--lichen-sage)"
								},
								children: "Tudo certo. Enviamos a confirmação para sua central de notificações."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							display: "grid",
							gap: 10,
							padding: 20,
							borderRadius: 18,
							background: "var(--bone-white)",
							textAlign: "left"
						},
						children: [[
							["Código da reserva", confirmed.code],
							["Areninha", venue.name],
							["Campo", confirmed.fieldName],
							["Data", formatDateLong(confirmed.date)],
							["Horário", `${confirmed.time} — ${String(Number(confirmed.time.slice(0, 2)) + 1).padStart(2, "0")}:00`],
							["Valor", confirmed.total.toLocaleString("pt-BR", {
								style: "currency",
								currency: "BRL"
							})]
						].map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "row-between",
							style: { fontSize: 14 },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: { color: "var(--lichen-sage)" },
								children: label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								style: { color: "var(--forest-depths)" },
								children: value
							})]
						}, label)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "row-between",
							style: { fontSize: 14 },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: { color: "var(--lichen-sage)" },
								children: "Status"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "badge badge-success",
								children: "Confirmada"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							display: "flex",
							flexWrap: "wrap",
							gap: 12,
							justifyContent: "center",
							marginTop: 26
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "button p-button button-dark",
							style: { width: "auto" },
							onClick: () => navigate({ to: "/app/reservas" }),
							children: "Ver minha reserva"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "button p-button button-outline",
							style: { width: "auto" },
							onClick: () => navigate({ to: "/" }),
							children: "Voltar para início"
						})]
					})
				]
			})
		})]
	});
	const canAdvance = () => {
		if (step === 0) return Boolean(venue);
		if (step === 1) return Boolean(date);
		if (step === 2) return Boolean(time);
		if (step === 3) return true;
		if (step === 4) return true;
		return true;
	};
	const handlePay = () => {
		setPayState("processing");
		const first = window.setTimeout(() => {
			setPayState("approved");
			const second = window.setTimeout(() => {
				const reservation = createReservation({
					venueId: venue.id,
					fieldId: field?.id ?? `${venue.id}-campo-1`,
					date,
					time,
					accountType,
					paymentMethod,
					...recurring ? { recurring: true } : {}
				});
				setConfirmed(reservation);
				toast.success("Pagamento aprovado", { description: `Reserva ${reservation.code} confirmada com sucesso.` });
			}, 1e3);
			timers.current.push(second);
		}, 1500);
		timers.current.push(first);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "public-page",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PublicHeader, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "container",
			style: {
				padding: "30px 0 90px",
				maxWidth: 980
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "eyebrow",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), "Nova reserva · demonstração"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					style: {
						margin: "0 0 6px",
						color: "var(--forest-depths)",
						fontSize: "clamp(28px,3.4vw,40px)"
					},
					children: "Reserve seu horário em 6 passos"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					style: {
						margin: "0 0 26px",
						color: "var(--lichen-sage)"
					},
					children: "Nenhum pagamento real é processado — todo o fluxo roda no navegador."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						style: { marginBottom: 28 },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stepper, {
							steps,
							current: step
						})
					}),
					step === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							display: "grid",
							gap: 16
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								style: {
									margin: 0,
									color: "var(--forest-depths)",
									fontSize: 19
								},
								children: "Etapa 1 · Areninha"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: {
									display: "flex",
									flexWrap: "wrap",
									gap: 16,
									alignItems: "center",
									padding: 18,
									borderRadius: 18,
									border: "1.5px solid var(--deep-verdant)",
									background: "var(--sprout-wash)"
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
										initials: initialsOf(venue.name),
										size: "lg"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										style: {
											flex: 1,
											minWidth: 200
										},
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												style: {
													display: "block",
													color: "var(--forest-depths)",
													fontSize: 17
												},
												children: venue.name
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												style: {
													color: "var(--lichen-sage)",
													fontSize: 13
												},
												children: [
													venue.neighborhood,
													" · ",
													venue.address
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												style: { marginTop: 6 },
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rating, {
													value: venue.rating,
													count: venue.reviewCount
												})
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
										style: { color: "var(--forest-depths)" },
										children: [amount.toLocaleString("pt-BR", {
											style: "currency",
											currency: "BRL"
										}), "/hora"]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: {
									display: "flex",
									flexWrap: "wrap",
									gap: 8
								},
								children: venue.fields.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									className: `chip ${item.id === fieldId ? "active" : ""}`,
									onClick: () => setFieldId(item.id),
									children: [
										item.name,
										" · ",
										item.type
									]
								}, item.id))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "chip chip-ghost",
								style: { alignSelf: "flex-start" },
								onClick: () => navigate({ to: "/buscar" }),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
									size: 14,
									"aria-hidden": "true"
								}), " Trocar areninha"]
							})
						]
					}),
					step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							display: "grid",
							gap: 16
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								style: {
									margin: 0,
									color: "var(--forest-depths)",
									fontSize: 19
								},
								children: "Etapa 2 · Data"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "date-strip",
								style: { gridTemplateColumns: "repeat(7, 1fr)" },
								children: days.slice(0, 7).map((day) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => {
										setDate(day);
										setTime("");
									},
									style: {
										padding: "12px 4px",
										borderRadius: 12,
										border: "1px solid",
										cursor: "pointer",
										borderColor: day === date ? "var(--forest-depths)" : "var(--mist-green)",
										background: day === date ? "var(--forest-depths)" : "var(--pure-white)",
										color: day === date ? "var(--pure-white)" : "var(--lichen-sage)"
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										style: {
											display: "block",
											fontSize: 10,
											marginBottom: 4
										},
										children: (/* @__PURE__ */ new Date(day + "T12:00:00")).toLocaleDateString("pt-BR", { weekday: "short" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										style: { fontSize: 15 },
										children: day.slice(8)
									})]
								}, day))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "field-label",
								htmlFor: "data-reserva",
								children: "Ou escolha outra data"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "data-reserva",
								type: "date",
								className: "input",
								style: { maxWidth: 260 },
								min: toISODate(/* @__PURE__ */ new Date()),
								value: date,
								onChange: (event) => {
									setDate(event.target.value);
									setTime("");
								}
							})
						]
					}),
					step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							display: "grid",
							gap: 16
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								style: {
									margin: 0,
									color: "var(--forest-depths)",
									fontSize: 19
								},
								children: "Etapa 3 · Horário"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								style: {
									color: "var(--lichen-sage)",
									fontSize: 13.5,
									display: "inline-flex",
									gap: 7,
									alignItems: "center"
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, {
										size: 15,
										"aria-hidden": "true"
									}),
									" ",
									formatDateLong(date)
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlotPicker, {
								slots,
								venueId: venue.id,
								date,
								selectedTime: time,
								onSelect: (slot) => setTime(slot.time)
							})
						]
					}),
					step === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							display: "grid",
							gap: 16
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								style: {
									margin: 0,
									color: "var(--forest-depths)",
									fontSize: 19
								},
								children: "Etapa 4 · Conta"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								style: {
									margin: 0,
									color: "var(--lichen-sage)",
									fontSize: 14
								},
								children: "Para quem é esta reserva?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "account-grid",
								style: { gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									className: "account-card",
									style: accountType === "individual" ? {
										borderColor: "var(--electric-sprout)",
										background: "var(--moss-shadow)"
									} : void 0,
									onClick: () => setAccountType("individual"),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "account-icon",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, {
												size: 22,
												"aria-hidden": "true"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Conta individual" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
											"Reservar no seu nome (",
											session?.name ?? "Rafael Mendonça",
											") para uma pelada casual ou jogo com amigos."
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "account-cta",
											children: [
												accountType === "individual" ? "Selecionada" : "Selecionar",
												" ",
												accountType === "individual" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
													size: 14,
													"aria-hidden": "true"
												})
											]
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									className: "account-card",
									style: accountType === "time" ? {
										borderColor: "var(--electric-sprout)",
										background: "var(--moss-shadow)"
									} : void 0,
									onClick: () => setAccountType("time"),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "account-icon",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UsersRound, {
												size: 22,
												"aria-hidden": "true"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Conta de time" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
											"Reservar para ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: myTeam?.name ?? "seu time" }),
											" com",
											" ",
											myTeam?.players.length ?? 0,
											" jogadores no elenco."
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "account-cta",
											children: [
												accountType === "time" ? "Selecionada" : "Selecionar",
												" ",
												accountType === "time" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
													size: 14,
													"aria-hidden": "true"
												})
											]
										})
									]
								})]
							})
						]
					}),
					step === 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							display: "grid",
							gap: 16
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								style: {
									margin: 0,
									color: "var(--forest-depths)",
									fontSize: 19
								},
								children: "Etapa 5 · Resumo"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: {
									display: "grid",
									gap: 10
								},
								children: [[
									["Areninha", venue.name],
									["Campo", field?.name ?? "Campo 01"],
									["Data", formatDateLong(date)],
									["Horário", `${time} — ${String(Number(time.slice(0, 2)) + 1).padStart(2, "0")}:00`],
									["Duração", "1 hora"],
									["Conta", accountType === "time" ? `Time · ${myTeam?.name ?? ""}` : "Individual"],
									["Valor da hora", amount.toLocaleString("pt-BR", {
										style: "currency",
										currency: "BRL"
									})],
									...appliedCoupon ? [["Cupom SEXTA10", `− ${discount.toLocaleString("pt-BR", {
										style: "currency",
										currency: "BRL"
									})}`]] : [],
									["Taxas (5%)", fees.toLocaleString("pt-BR", {
										style: "currency",
										currency: "BRL"
									})]
								].map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "row-between",
									style: {
										padding: "11px 0",
										borderBottom: "1px dashed var(--mist-green)",
										fontSize: 14.5
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										style: { color: "var(--lichen-sage)" },
										children: label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										style: { color: "var(--forest-depths)" },
										children: value
									})]
								}, label)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "row-between",
									style: {
										paddingTop: 8,
										fontSize: 18
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										style: { color: "var(--forest-depths)" },
										children: "Total"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										style: { color: "var(--deep-verdant)" },
										children: total.toLocaleString("pt-BR", {
											style: "currency",
											currency: "BRL"
										})
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: {
									display: "flex",
									flexWrap: "wrap",
									gap: 10,
									alignItems: "center"
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: "input",
										style: { maxWidth: 220 },
										placeholder: "Cupom (ex.: SEXTA10)",
										value: coupon,
										onChange: (event) => setCoupon(event.target.value.toUpperCase()),
										disabled: Boolean(appliedCoupon)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										className: "chip",
										disabled: Boolean(appliedCoupon),
										onClick: () => {
											if (coupon.trim().toUpperCase() === "SEXTA10") {
												setAppliedCoupon("SEXTA10");
												toast.success("Cupom aplicado: 10% OFF");
											} else toast.error("Cupom inválido", { description: "Tente SEXTA10 para a demo." });
										},
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ticket, {
											size: 14,
											"aria-hidden": "true"
										}), " Aplicar cupom"]
									}),
									appliedCoupon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "chip chip-ghost",
										onClick: () => {
											setAppliedCoupon(null);
											setCoupon("");
										},
										children: "Remover"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: {
									padding: 18,
									borderRadius: 18,
									border: recurring ? "1.5px solid var(--deep-verdant)" : "1px dashed var(--mist-green)",
									background: recurring ? "var(--sprout-wash)" : "var(--bone-white)"
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "row-between",
									style: {
										flexWrap: "wrap",
										gap: 10
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										style: {
											display: "flex",
											gap: 10,
											alignItems: "center"
										},
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Repeat, {
											size: 18,
											"aria-hidden": "true",
											style: { color: "var(--deep-verdant)" }
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											style: {
												display: "block",
												color: "var(--forest-depths)",
												fontSize: 14.5
											},
											children: "Reserva recorrente"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											style: {
												color: "var(--lichen-sage)",
												fontSize: 12.5
											},
											children: "Mesmo horário toda semana durante 3 meses"
										})] })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: `chip ${recurring ? "active" : ""}`,
										onClick: () => setRecurring((value) => !value),
										children: recurring ? "Ativada" : "Ativar"
									})]
								}), recurring && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: { marginTop: 14 },
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
											style: {
												fontSize: 13,
												color: "var(--forest-depths)"
											},
											children: [
												"Toda",
												" ",
												(/* @__PURE__ */ new Date(date + "T12:00:00")).toLocaleDateString("pt-BR", { weekday: "long" }),
												" ",
												"· ",
												time,
												" — ",
												String(Number(time.slice(0, 2)) + 1).padStart(2, "0"),
												":00 durante 3 meses · ",
												recurringDates.length,
												" sessões"
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											style: {
												display: "flex",
												flexWrap: "wrap",
												gap: 6,
												marginTop: 10
											},
											children: [recurringDates.slice(0, 6).map((occurrence) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "badge badge-success",
												style: { fontWeight: 600 },
												children: [
													occurrence.slice(8),
													"/",
													occurrence.slice(5, 7)
												]
											}, occurrence)), recurringDates.length > 6 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "badge badge-neutral",
												children: [
													"+",
													recurringDates.length - 6,
													" datas"
												]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											style: {
												margin: "10px 0 0",
												fontSize: 12.5,
												color: "var(--lichen-sage)"
											},
											children: "Resumo simulado — apenas a primeira sessão é criada nesta demonstração."
										})
									]
								})]
							})
						]
					}),
					step === 5 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							display: "grid",
							gap: 16
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								style: {
									margin: 0,
									color: "var(--forest-depths)",
									fontSize: 19
								},
								children: "Etapa 6 · Pagamento simulado"
							}),
							payState === "idle" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid-cards",
									style: { gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" },
									children: paymentMethods.map((method) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										className: "stat-card",
										style: {
											textAlign: "left",
											cursor: "pointer",
											borderColor: paymentMethod === method.id ? "var(--deep-verdant)" : void 0,
											background: paymentMethod === method.id ? "var(--sprout-wash)" : void 0
										},
										onClick: () => setPaymentMethod(method.id),
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "row-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "stat-icon",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(method.icon, {
														size: 19,
														"aria-hidden": "true"
													})
												}), paymentMethod === method.id && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
													size: 18,
													style: { color: "var(--deep-verdant)" }
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												style: {
													color: "var(--forest-depths)",
													fontSize: 16
												},
												children: method.label
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "stat-hint",
												children: method.hint
											})
										]
									}, method.id))
								}),
								paymentMethod === "card" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										display: "grid",
										gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
										gap: 12,
										padding: 18,
										borderRadius: 18,
										background: "var(--bone-white)"
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											style: { gridColumn: "1 / -1" },
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "field-label",
												htmlFor: "card-number",
												children: "Número do cartão"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												id: "card-number",
												className: "input",
												placeholder: "4242 4242 4242 4242",
												inputMode: "numeric"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "field-label",
											htmlFor: "card-name",
											children: "Nome impresso"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											id: "card-name",
											className: "input",
											placeholder: "RAFAEL M MENDONCA"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "field-label",
											htmlFor: "card-valid",
											children: "Validade"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											id: "card-valid",
											className: "input",
											placeholder: "12/29"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "field-label",
											htmlFor: "card-cvv",
											children: "CVV"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											id: "card-cvv",
											className: "input",
											placeholder: "123"
										})] })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										display: "flex",
										flexWrap: "wrap",
										gap: 14,
										alignItems: "center",
										justifyContent: "space-between",
										padding: 18,
										borderRadius: 18,
										background: "var(--forest-depths)",
										color: "var(--pure-white)"
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										style: {
											color: "var(--lichen-sage)",
											fontSize: 12
										},
										children: "Total a pagar"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										style: {
											display: "block",
											fontSize: 26,
											color: "var(--electric-sprout)"
										},
										children: total.toLocaleString("pt-BR", {
											style: "currency",
											currency: "BRL"
										})
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "button p-button button-primary button-large",
										style: { width: "auto" },
										onClick: handlePay,
										children: "Pagar agora"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									style: {
										margin: 0,
										fontSize: 12.5,
										color: "var(--lichen-sage)",
										textAlign: "center"
									},
									children: "Simulação de checkout — nenhum dado de cartão é enviado ou armazenado."
								})
							] }),
							payState !== "idle" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: {
									textAlign: "center",
									padding: "40px 20px"
								},
								children: payState === "processing" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
										size: 44,
										"aria-hidden": "true",
										className: "animate-spin",
										style: { color: "var(--deep-verdant)" }
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										style: {
											margin: "18px 0 6px",
											color: "var(--forest-depths)"
										},
										children: "Processando pagamento..."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										style: {
											margin: 0,
											color: "var(--lichen-sage)"
										},
										children: [
											"Validando o método",
											" ",
											paymentMethods.find((m) => m.id === paymentMethod)?.label,
											" (simulado)."
										]
									})
								] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "success-burst",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
											size: 40,
											"aria-hidden": "true"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										style: {
											margin: "18px 0 6px",
											color: "var(--forest-depths)"
										},
										children: "Pagamento aprovado"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										style: {
											margin: 0,
											color: "var(--lichen-sage)"
										},
										children: "Reserva confirmada — preparando seu comprovante..."
									})
								] })
							})
						]
					}),
					step < 5 && payState === "idle" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							display: "flex",
							justifyContent: "space-between",
							gap: 12,
							marginTop: 30,
							paddingTop: 20,
							borderTop: "1px solid var(--mist-green)"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "button p-button button-outline",
							style: { width: "auto" },
							disabled: step === 0,
							onClick: () => setStep((current) => Math.max(0, current - 1)),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
								size: 16,
								"aria-hidden": "true"
							}), " Voltar"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "button p-button button-dark",
							style: { width: "auto" },
							disabled: !canAdvance(),
							onClick: () => setStep((current) => Math.min(5, current + 1)),
							children: [
								step === 4 ? "Ir para pagamento" : "Continuar",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
									size: 16,
									"aria-hidden": "true"
								})
							]
						})]
					})
				] })
			]
		})]
	});
}
//#endregion
export { ReservaPage as component };
