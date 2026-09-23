import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { R as LoaderCircle, _t as CalendarCheck, i as UsersRound, nt as Clock3, st as CircleDollarSign, u as Timer, wt as ArrowRight } from "../_libs/lucide-react.mjs";
import { A as useApp, E as toISODate, S as ownerVenueId, _ as formatCurrency, a as Panel, d as StatusBadge, g as financeStats, i as EmptyState, n as AppShell, u as StatCard } from "./AppShell-deypX_no.mjs";
import { n as getOwnerNav } from "./navItems-waG9qci2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/proprietario-Dz1rJ27Z.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LiveCounter() {
	const [seconds, setSeconds] = (0, import_react.useState)(2052);
	(0, import_react.useEffect)(() => {
		const timer = window.setInterval(() => setSeconds((value) => Math.max(0, value - 1)), 1e3);
		return () => window.clearInterval(timer);
	}, []);
	const minutes = Math.floor(seconds / 60);
	const rest = seconds % 60;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
		style: { fontVariantNumeric: "tabular-nums" },
		children: [
			String(minutes).padStart(2, "0"),
			":",
			String(rest).padStart(2, "0")
		]
	});
}
function OwnerDashboard() {
	const { reservations, ownerNotifications, venueById, balance } = useApp();
	const unread = ownerNotifications.filter((item) => !item.read).length;
	const venue = venueById(ownerVenueId);
	const today = toISODate(/* @__PURE__ */ new Date());
	const venueReservations = reservations.filter((item) => item.venueId === ownerVenueId);
	const todayList = venueReservations.filter((item) => item.date === today && item.status !== "cancelled").sort((a, b) => a.time.localeCompare(b.time));
	const liveGames = venueReservations.filter((item) => item.status === "live");
	const pending = venueReservations.filter((item) => item.status === "pending");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
		role: "owner",
		active: "/proprietario",
		title: "Dashboard",
		subtitle: `${venue?.name ?? "Areninha Central"} · visão geral de hoje`,
		nav: getOwnerNav(unread),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			style: {
				display: "grid",
				gap: 18
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid-stats",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							label: "Reservas hoje",
							value: String(financeStats.reservationsToday),
							hint: "+4 vs. ontem",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarCheck, {
								size: 19,
								"aria-hidden": "true"
							}),
							accent: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							label: "Em andamento",
							value: String(Math.max(liveGames.length, financeStats.inProgress)),
							hint: "Jogos rolando agora",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timer, {
								size: 19,
								"aria-hidden": "true"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							label: "Aguardando confirmação",
							value: String(Math.max(pending.length, financeStats.awaitingConfirmation)),
							hint: "Requer sua ação",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
								size: 19,
								"aria-hidden": "true"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							label: "Faturamento do mês",
							value: formatCurrency(financeStats.month),
							hint: "Meta: R$ 20.000",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleDollarSign, {
								size: 19,
								"aria-hidden": "true"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							label: "Saldo disponível",
							value: formatCurrency(balance),
							hint: "Sujeito a solicitação de saque",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleDollarSign, {
								size: 19,
								"aria-hidden": "true"
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
						gap: 18
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
						title: "Jogos em andamento",
						action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/proprietario/agenda",
							style: {
								fontSize: 13,
								fontWeight: 650,
								color: "var(--deep-verdant)"
							},
							children: "Agenda"
						}),
						children: liveGames.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock3, {
								size: 24,
								"aria-hidden": "true"
							}),
							title: "Nenhum jogo em andamento",
							description: "Quando uma reserva entrar no horário ativo, ela aparece aqui com o tempo restante."
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							style: {
								display: "grid",
								gap: 12
							},
							children: liveGames.map((game) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: {
									display: "grid",
									gap: 8,
									padding: 16,
									borderRadius: 16,
									background: "var(--st-live-bg)",
									border: "1px solid color-mix(in oklab, var(--st-live) 30%, white)"
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "row-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											style: {
												color: "var(--forest-depths)",
												fontSize: 15
											},
											children: game.teamName ?? game.clientName
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "badge badge-live",
											children: "Em jogo"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										style: {
											color: "var(--moss-shadow)",
											fontSize: 13
										},
										children: [
											game.fieldName,
											" · ",
											game.time,
											" · código ",
											game.code
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "row-between",
										style: { fontSize: 13 },
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											style: {
												color: "var(--lichen-sage)",
												display: "inline-flex",
												gap: 6,
												alignItems: "center"
											},
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timer, {
												size: 14,
												"aria-hidden": "true"
											}), " Tempo restante"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LiveCounter, {})]
									})
								]
							}, game.id))
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
						title: "Agenda de hoje",
						action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/proprietario/agenda",
							style: {
								fontSize: 13,
								fontWeight: 650,
								color: "var(--deep-verdant)"
							},
							children: "Ver completa"
						}),
						children: todayList.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							style: {
								margin: 0,
								color: "var(--lichen-sage)",
								fontSize: 14
							},
							children: "Sem reservas para hoje."
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							style: {
								display: "grid",
								gap: 8
							},
							children: todayList.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "row-between",
								style: {
									padding: "11px 13px",
									borderRadius: 12,
									background: "var(--bone-white)"
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
									style: {
										display: "block",
										fontSize: 13.5,
										color: "var(--forest-depths)"
									},
									children: [
										item.time,
										" — ",
										String(Number(item.time.slice(0, 2)) + 1).padStart(2, "0"),
										":00",
										" · ",
										item.fieldName
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									style: {
										color: "var(--lichen-sage)",
										fontSize: 12.5
									},
									children: item.teamName ?? item.clientName
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: item.status })]
							}, item.id))
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
					title: "Reservas aguardando confirmação",
					action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/proprietario/reservas",
						style: {
							fontSize: 13,
							fontWeight: 650,
							color: "var(--deep-verdant)"
						},
						children: ["Gerenciar ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
							size: 13,
							"aria-hidden": "true"
						})]
					}),
					children: pending.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						style: {
							margin: 0,
							color: "var(--lichen-sage)",
							fontSize: 14
						},
						children: "Tudo confirmado por aqui."
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "table-wrap",
						style: { border: 0 },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "data-table",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Cliente" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Time" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Data" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Horário" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Campo" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Valor" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Status" })
							] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: pending.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									"data-label": "Cliente",
									className: "cell-strong",
									children: item.clientName
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									"data-label": "Time",
									children: item.teamName ?? "—"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									"data-label": "Data",
									children: item.date.split("-").reverse().join("/")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									"data-label": "Horário",
									children: item.time
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									"data-label": "Campo",
									children: item.fieldName
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									"data-label": "Valor",
									children: formatCurrency(item.total)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									"data-label": "Status",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: item.status })
								})
							] }, item.id)) })]
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid-stats",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							label: "Clientes ativos",
							value: "128",
							hint: "+12 no mês",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UsersRound, {
								size: 19,
								"aria-hidden": "true"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							label: "Taxa de ocupação",
							value: `${financeStats.occupancyRate}%`,
							hint: "Faixa 18h–22h",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock3, {
								size: 19,
								"aria-hidden": "true"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							label: "Ticket médio",
							value: formatCurrency(financeStats.averageTicket),
							hint: "Por reserva",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleDollarSign, {
								size: 19,
								"aria-hidden": "true"
							})
						})
					]
				})
			]
		})
	});
}
//#endregion
export { OwnerDashboard as component };
