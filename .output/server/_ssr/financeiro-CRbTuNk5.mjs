import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { B as Landmark, K as HandCoins, R as LoaderCircle, st as CircleDollarSign, xt as Banknote } from "../_libs/lucide-react.mjs";
import { A as useApp, _ as formatCurrency, a as Panel, g as financeStats, n as AppShell, u as StatCard, w as revenueByMonth, x as occupancyByHour } from "./AppShell-deypX_no.mjs";
import { n as getOwnerNav } from "./navItems-waG9qci2.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as ConfirmModal } from "./ConfirmModal-Bq1VTtTT.mjs";
import { a as XAxis, c as CartesianGrid, d as Tooltip, i as YAxis, l as Bar, n as BarChart, o as Area, t as AreaChart, u as ResponsiveContainer } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/financeiro-CRbTuNk5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var tooltipStyle = {
	background: "var(--forest-depths)",
	border: "1px solid var(--moss-shadow)",
	borderRadius: 12,
	color: "var(--pure-white)",
	fontSize: 12.5
};
function OwnerFinance() {
	const { ownerNotifications, balance, pendingBalance, withdrawals, requestWithdrawal } = useApp();
	const unread = ownerNotifications.filter((item) => !item.read).length;
	const [open, setOpen] = (0, import_react.useState)(false);
	const [amount, setAmount] = (0, import_react.useState)(1e3);
	const submit = () => {
		if (amount <= 0 || amount > balance) {
			toast.error("Valor inválido", { description: "Informe um valor até o saldo disponível." });
			return;
		}
		requestWithdrawal(amount);
		setOpen(false);
		toast.success("Solicitação de saque realizada.", { description: `${formatCurrency(amount)} entrou na fila de processamento (simulada).` });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		role: "owner",
		active: "/proprietario/financeiro",
		title: "Financeiro",
		subtitle: "Faturamento, saldo e saques — dados simulados",
		nav: getOwnerNav(unread),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			style: {
				display: "grid",
				gap: 18
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid-stats",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							label: "Faturamento hoje",
							value: formatCurrency(financeStats.today),
							hint: "12 reservas pagas",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleDollarSign, {
								size: 19,
								"aria-hidden": "true"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							label: "Faturamento da semana",
							value: formatCurrency(financeStats.week),
							hint: "+8% vs. semana anterior",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Banknote, {
								size: 19,
								"aria-hidden": "true"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							label: "Faturamento do mês",
							value: formatCurrency(financeStats.month),
							hint: "Meta de R$ 20.000",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Landmark, {
								size: 19,
								"aria-hidden": "true"
							}),
							accent: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							label: "Saldo disponível",
							value: formatCurrency(balance),
							hint: "Pronto para saque",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HandCoins, {
								size: 19,
								"aria-hidden": "true"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							label: "Saldo pendente",
							value: formatCurrency(pendingBalance),
							hint: "Liberação em até 2 dias úteis (simulado)",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
								size: 19,
								"aria-hidden": "true"
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
						gap: 18
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
						title: "Faturamento mensal (2026)",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "chart-box",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
								width: "100%",
								height: "100%",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
									data: revenueByMonth,
									margin: {
										top: 8,
										right: 8,
										left: -14,
										bottom: 0
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
											id: "rev",
											x1: "0",
											y1: "0",
											x2: "0",
											y2: "1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
												offset: "0%",
												stopColor: "oklch(0.84 0.22 137)",
												stopOpacity: .7
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
												offset: "100%",
												stopColor: "oklch(0.58 0.21 137)",
												stopOpacity: .05
											})]
										}) }),
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
											formatter: (value) => formatCurrency(Number(value))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
											type: "monotone",
											dataKey: "value",
											stroke: "var(--deep-verdant)",
											strokeWidth: 2.5,
											fill: "url(#rev)"
										})
									]
								})
							})
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
						title: "Ocupação por horário",
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
										left: -14,
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
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
											contentStyle: tooltipStyle,
											formatter: (value) => `${value}%`
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
											dataKey: "value",
											fill: "var(--forest-depths)",
											radius: [
												8,
												8,
												0,
												0
											]
										})
									]
								})
							})
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
						gap: 18
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
						title: "Solicitar saque",
						action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							style: {
								fontSize: 12.5,
								color: "var(--lichen-sage)"
							},
							children: [
								"Disponível:",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									style: { color: "var(--deep-verdant)" },
									children: formatCurrency(balance)
								})
							]
						}),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								display: "grid",
								gap: 14
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									style: {
										margin: 0,
										color: "var(--moss-shadow)",
										fontSize: 14,
										lineHeight: 1.6
									},
									children: [
										"Saldo disponível:",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											style: {
												fontSize: 18,
												color: "var(--forest-depths)"
											},
											children: formatCurrency(balance)
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "field-label",
									htmlFor: "saque-valor",
									children: "Valor do saque"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "saque-valor",
									type: "number",
									min: 50,
									className: "input",
									value: amount,
									onChange: (event) => setAmount(Number(event.target.value))
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									className: "button p-button button-dark",
									onClick: () => setOpen(true),
									disabled: balance <= 0,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HandCoins, {
										size: 17,
										"aria-hidden": "true"
									}), " Solicitar saque"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									style: {
										fontSize: 12,
										color: "var(--lichen-sage)"
									},
									children: "Simulação apenas — nenhuma operação bancária é realizada."
								})
							]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
						title: "Histórico de saques",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							style: {
								display: "grid",
								gap: 10
							},
							children: withdrawals.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "row-between",
								style: {
									padding: "12px 14px",
									borderRadius: 14,
									background: "var(--bone-white)"
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									style: {
										display: "block",
										fontSize: 14,
										color: "var(--forest-depths)"
									},
									children: formatCurrency(item.amount)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									style: {
										color: "var(--lichen-sage)",
										fontSize: 12.5
									},
									children: item.date
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `badge ${item.status === "done" ? "badge-success" : "badge-warning"}`,
									children: item.status === "done" ? "Concluído" : "Processando"
								})]
							}, item.id))
						})
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfirmModal, {
			open,
			title: "Confirmar solicitação de saque",
			description: `${formatCurrency(amount)} · conta final 4471 (dados fictícios)`,
			confirmLabel: "Confirmar saque",
			onCancel: () => setOpen(false),
			onConfirm: submit,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				style: {
					margin: 0,
					color: "var(--moss-shadow)",
					fontSize: 14,
					lineHeight: 1.6
				},
				children: "Esta é uma demonstração de interface. Nenhum valor será transferido e nenhum dado bancário é utilizado."
			})
		})]
	});
}
//#endregion
export { OwnerFinance as component };
