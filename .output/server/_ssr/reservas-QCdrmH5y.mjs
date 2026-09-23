import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { Y as Eye, _ as ShieldCheck, it as CircleX, rt as ClipboardList } from "../_libs/lucide-react.mjs";
import { A as useApp, S as ownerVenueId, _ as formatCurrency, a as Panel, d as StatusBadge, i as EmptyState, n as AppShell, v as formatDate } from "./AppShell-deypX_no.mjs";
import { n as getOwnerNav } from "./navItems-waG9qci2.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as ConfirmModal } from "./ConfirmModal-Bq1VTtTT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reservas-QCdrmH5y.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var filters = [
	{
		id: "all",
		label: "Todas"
	},
	{
		id: "confirmed",
		label: "Confirmadas"
	},
	{
		id: "pending",
		label: "Pendentes"
	},
	{
		id: "live",
		label: "Em jogo"
	},
	{
		id: "finished",
		label: "Finalizadas"
	},
	{
		id: "cancelled",
		label: "Canceladas"
	}
];
function OwnerReservations() {
	const { reservations, ownerNotifications, updateReservationStatus, venueById } = useApp();
	const unread = ownerNotifications.filter((item) => !item.read).length;
	const [filter, setFilter] = (0, import_react.useState)("all");
	const [viewing, setViewing] = (0, import_react.useState)(null);
	const [cancelling, setCancelling] = (0, import_react.useState)(null);
	const list = (0, import_react.useMemo)(() => reservations.filter((item) => item.venueId === ownerVenueId).filter((item) => filter === "all" || item.status === filter).sort((a, b) => b.date.localeCompare(a.date) || b.time.localeCompare(a.time)), [reservations, filter]);
	const confirm = (reservation) => {
		updateReservationStatus(reservation.id, "confirmed");
		toast.success("Reserva confirmada", { description: `Código ${reservation.code}.` });
		setViewing(null);
	};
	const cancel = () => {
		if (!cancelling) return;
		updateReservationStatus(cancelling.id, "cancelled");
		toast.info("Reserva cancelada", { description: `Código ${cancelling.code}.` });
		setCancelling(null);
		setViewing(null);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		role: "owner",
		active: "/proprietario/reservas",
		title: "Reservas",
		subtitle: "Confirme, cancele e acompanhe todas as reservas da areninha",
		nav: getOwnerNav(unread),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: {
					display: "grid",
					gap: 18
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					style: {
						display: "flex",
						gap: 8,
						flexWrap: "wrap"
					},
					children: filters.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: `chip ${filter === item.id ? "active" : ""}`,
						onClick: () => setFilter(item.id),
						children: item.label
					}, item.id))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, { children: list.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardList, {
						size: 26,
						"aria-hidden": "true"
					}),
					title: "Nenhuma reserva neste filtro",
					description: "As novas reservas feitas pelo site aparecem aqui automaticamente nesta demonstração."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "table-wrap",
					style: { border: 0 },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "data-table",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Cliente" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Time" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Campo" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Data" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Horário" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Valor" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Status" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Ações" })
						] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: list.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
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
								"data-label": "Campo",
								children: item.fieldName
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								"data-label": "Data",
								children: formatDate(item.date)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								"data-label": "Horário",
								children: item.time
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								"data-label": "Valor",
								children: formatCurrency(item.total)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								"data-label": "Status",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: item.status })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								"data-label": "Ações",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										display: "flex",
										gap: 6,
										justifyContent: "flex-end"
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											className: "chip",
											onClick: () => setViewing(item),
											"aria-label": `Visualizar ${item.code}`,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, {
												size: 14,
												"aria-hidden": "true"
											})
										}),
										item.status === "pending" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											className: "chip",
											onClick: () => confirm(item),
											"aria-label": `Confirmar ${item.code}`,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
												size: 14,
												"aria-hidden": "true"
											})
										}),
										item.status !== "cancelled" && item.status !== "finished" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											className: "chip chip-ghost",
											onClick: () => setCancelling(item),
											"aria-label": `Cancelar ${item.code}`,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, {
												size: 14,
												"aria-hidden": "true"
											})
										})
									]
								})
							})
						] }, item.id)) })]
					})
				}) })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfirmModal, {
				open: Boolean(viewing),
				title: `Reserva ${viewing?.code ?? ""}`,
				description: viewing ? `${formatDate(viewing.date)} às ${viewing.time}` : void 0,
				onCancel: () => setViewing(null),
				...viewing && viewing.status === "pending" ? {
					confirmLabel: "Confirmar reserva",
					onConfirm: () => confirm(viewing)
				} : {},
				children: viewing && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						display: "grid",
						gap: 10,
						fontSize: 14
					},
					children: [
						[
							["Areninha", venueById(viewing.venueId)?.name ?? "—"],
							["Campo", viewing.fieldName],
							["Cliente", viewing.clientName],
							["Time", viewing.teamName ?? "—"],
							["Conta", viewing.accountType === "time" ? "Time" : "Individual"],
							["Duração", `${viewing.durationHours}h`],
							["Valor", formatCurrency(viewing.amount)],
							["Taxas", formatCurrency(viewing.fees)],
							["Total", formatCurrency(viewing.total)],
							["Pagamento", viewing.paymentMethod === "pix" ? "PIX" : viewing.paymentMethod === "card" ? "Cartão" : "Outro"],
							["Recorrente", viewing.recurring ? "Sim" : "Não"]
						].map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "row-between",
							style: {
								paddingBottom: 8,
								borderBottom: "1px dashed var(--mist-green)"
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: { color: "var(--lichen-sage)" },
								children: label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								style: { color: "var(--forest-depths)" },
								children: value
							})]
						}, label)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "row-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: { color: "var(--lichen-sage)" },
								children: "Status"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: viewing.status })]
						}),
						viewing.status !== "cancelled" && viewing.status !== "finished" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "button p-button button-danger",
							style: { marginTop: 10 },
							onClick: () => setCancelling(viewing),
							children: "Cancelar reserva"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfirmModal, {
				open: Boolean(cancelling),
				title: "Cancelar esta reserva?",
				description: cancelling ? `${cancelling.code} · ${cancelling.clientName} · ${formatDate(cancelling.date)}` : void 0,
				confirmLabel: "Sim, cancelar",
				tone: "danger",
				onCancel: () => setCancelling(null),
				onConfirm: cancel
			})
		]
	});
}
//#endregion
export { OwnerReservations as component };
