import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { J as FileChartColumnIncreasing } from "../_libs/lucide-react.mjs";
import { A as useApp, C as reservationsByMonth, D as topClients, O as topHours, a as Panel, g as financeStats, k as topTeams, n as AppShell, o as Progress, p as cancellationTrend, u as StatCard, x as occupancyByHour } from "./AppShell-deypX_no.mjs";
import { n as getOwnerNav } from "./navItems-waG9qci2.mjs";
import { a as XAxis, c as CartesianGrid, d as Tooltip, i as YAxis, l as Bar, n as BarChart, r as LineChart, s as Line, u as ResponsiveContainer } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/relatorios-d_ZybBiL.js
var import_jsx_runtime = require_jsx_runtime();
var tooltipStyle = {
	background: "var(--forest-depths)",
	border: "1px solid var(--moss-shadow)",
	borderRadius: 12,
	color: "var(--pure-white)",
	fontSize: 12.5
};
function RankList({ title, items, unit }) {
	const max = Math.max(...items.map((item) => item.value), 1);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
		title,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			style: {
				display: "grid",
				gap: 14
			},
			children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: {
					display: "grid",
					gap: 6
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "row-between",
					style: { fontSize: 13.5 },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						style: { color: "var(--moss-shadow)" },
						children: item.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
						style: { color: "var(--forest-depths)" },
						children: [
							item.value,
							" ",
							unit
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, { value: item.value / max * 100 })]
			}, item.label))
		})
	});
}
function OwnerReports() {
	const { ownerNotifications } = useApp();
	const unread = ownerNotifications.filter((item) => !item.read).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
		role: "owner",
		active: "/proprietario/relatorios",
		title: "Relatórios",
		subtitle: "Indicadores visuais da operação (dados mockados)",
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
							label: "Taxa de ocupação",
							value: `${financeStats.occupancyRate}%`,
							hint: "Média do mês",
							accent: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							label: "Cancelamentos",
							value: String(financeStats.cancellations),
							hint: "No mês atual"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							label: "Ticket médio",
							value: `R$ ${financeStats.averageTicket}`,
							hint: "Por reserva"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							label: "Reservas no mês",
							value: "156",
							hint: "+5% vs. agosto"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
						gap: 18
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
							title: "Reservas por mês",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "chart-box",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
									width: "100%",
									height: "100%",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
										data: reservationsByMonth,
										margin: {
											top: 8,
											right: 8,
											left: -18,
											bottom: 0
										},
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
												strokeDasharray: "3 3",
												stroke: "var(--mist-green)",
												vertical: false
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
												dataKey: "month",
												tick: {
													fontSize: 11,
													fill: "var(--lichen-sage)"
												}
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, { tick: {
												fontSize: 11,
												fill: "var(--lichen-sage)"
											} }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
												contentStyle: tooltipStyle,
												cursor: { fill: "var(--sprout-wash)" }
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
												dataKey: "value",
												fill: "var(--electric-sprout)",
												radius: [
													7,
													7,
													0,
													0
												]
											})
										]
									})
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
							title: "Cancelamentos por mês",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "chart-box",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
									width: "100%",
									height: "100%",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
										data: cancellationTrend,
										margin: {
											top: 8,
											right: 8,
											left: -18,
											bottom: 0
										},
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
												strokeDasharray: "3 3",
												stroke: "var(--mist-green)",
												vertical: false
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
												dataKey: "month",
												tick: {
													fontSize: 11,
													fill: "var(--lichen-sage)"
												}
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
												tick: {
													fontSize: 11,
													fill: "var(--lichen-sage)"
												},
												allowDecimals: false
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: tooltipStyle }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
												type: "monotone",
												dataKey: "value",
												stroke: "var(--st-danger)",
												strokeWidth: 2.5,
												dot: {
													r: 4,
													fill: "var(--st-danger)"
												}
											})
										]
									})
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
							title: "Taxa de ocupação por horário",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "chart-box",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
									width: "100%",
									height: "100%",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
										data: occupancyByHour,
										margin: {
											top: 8,
											right: 8,
											left: -18,
											bottom: 0
										},
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
												strokeDasharray: "3 3",
												stroke: "var(--mist-green)",
												vertical: false
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
												dataKey: "hour",
												tick: {
													fontSize: 11,
													fill: "var(--lichen-sage)"
												}
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
												tick: {
													fontSize: 11,
													fill: "var(--lichen-sage)"
												},
												unit: "%"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: tooltipStyle }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
												dataKey: "value",
												fill: "var(--deep-verdant)",
												radius: [
													7,
													7,
													0,
													0
												]
											})
										]
									})
								})
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
						gap: 18
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RankList, {
							title: "Horários mais utilizados",
							items: topHours,
							unit: "reservas"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RankList, {
							title: "Clientes recorrentes",
							items: topClients,
							unit: "reservas"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RankList, {
							title: "Times recorrentes",
							items: topTeams,
							unit: "reservas"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
					title: "Como ler estes relatórios",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						style: {
							margin: 0,
							display: "flex",
							gap: 10,
							alignItems: "flex-start",
							color: "var(--lichen-sage)",
							fontSize: 13.5,
							lineHeight: 1.6
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileChartColumnIncreasing, {
							size: 17,
							"aria-hidden": "true",
							style: {
								color: "var(--deep-verdant)",
								flex: "none",
								marginTop: 2
							}
						}), "Todos os gráficos usam dados fictícios estáticos para demonstração visual. Em uma etapa futura com backend, estes módulos serão alimentados por endpoints de métricas."]
					})
				})
			]
		})
	});
}
//#endregion
export { OwnerReports as component };
