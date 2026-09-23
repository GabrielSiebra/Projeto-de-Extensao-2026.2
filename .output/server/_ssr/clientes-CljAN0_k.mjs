import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { D as Phone, i as UsersRound } from "../_libs/lucide-react.mjs";
import { A as useApp, _ as formatCurrency, a as Panel, b as initialsOf, d as StatusBadge, i as EmptyState, m as clients, n as AppShell, r as Avatar, v as formatDate } from "./AppShell-deypX_no.mjs";
import { n as getOwnerNav } from "./navItems-waG9qci2.mjs";
import { t as ConfirmModal } from "./ConfirmModal-Bq1VTtTT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/clientes-CljAN0_k.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function OwnerClients() {
	const { ownerNotifications, reservations } = useApp();
	const unread = ownerNotifications.filter((item) => !item.read).length;
	const [selected, setSelected] = (0, import_react.useState)(null);
	const history = selected ? reservations.filter((item) => item.venueId === "arena-central" && item.clientName === selected.name) : [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		role: "owner",
		active: "/proprietario/clientes",
		title: "Clientes",
		subtitle: "Quem já reservou na sua areninha",
		nav: getOwnerNav(unread),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "table-wrap",
			style: { border: 0 },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "data-table",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Nome" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Telefone" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Reservas" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Última reserva" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Total gasto" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {})
				] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: clients.map((client) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						"data-label": "Nome",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							style: {
								display: "inline-flex",
								gap: 10,
								alignItems: "center"
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
								initials: initialsOf(client.name),
								size: "sm"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "cell-strong",
								children: client.name
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						"data-label": "Telefone",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							style: {
								display: "inline-flex",
								gap: 6,
								alignItems: "center"
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
									size: 13,
									"aria-hidden": "true"
								}),
								" ",
								client.phone
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						"data-label": "Reservas",
						children: client.reservations
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						"data-label": "Última reserva",
						children: client.lastBooking
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						"data-label": "Total gasto",
						className: "cell-strong",
						children: formatCurrency(client.totalSpent)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						"data-label": "Ações",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "chip",
							style: { marginLeft: "auto" },
							onClick: () => setSelected(client),
							children: "Ver histórico"
						})
					})
				] }, client.id)) })]
			})
		}), clients.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UsersRound, {
				size: 26,
				"aria-hidden": "true"
			}),
			title: "Nenhum cliente",
			description: "Os clientes aparecem após as primeiras reservas."
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfirmModal, {
			open: Boolean(selected),
			title: selected?.name ?? "",
			onCancel: () => setSelected(null),
			children: selected && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: {
					display: "grid",
					gap: 14
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						display: "flex",
						gap: 12,
						alignItems: "center"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
						initials: initialsOf(selected.name),
						size: "lg"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						style: {
							display: "block",
							color: "var(--forest-depths)"
						},
						children: selected.phone
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						style: {
							color: "var(--lichen-sage)",
							fontSize: 13
						},
						children: [
							selected.reservations,
							" reservas · ",
							formatCurrency(selected.totalSpent),
							" no total"
						]
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
					style: {
						fontSize: 13,
						color: "var(--forest-depths)"
					},
					children: "Histórico nesta areninha"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					style: {
						display: "grid",
						gap: 8,
						marginTop: 10
					},
					children: history.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						style: {
							margin: 0,
							color: "var(--lichen-sage)",
							fontSize: 13.5
						},
						children: "Sem reservas registradas para este cliente na demo atual."
					}) : history.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "row-between",
						style: {
							padding: "10px 12px",
							borderRadius: 12,
							background: "var(--bone-white)",
							fontSize: 13.5
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							style: { color: "var(--moss-shadow)" },
							children: [
								formatDate(item.date),
								" · ",
								item.time,
								" · ",
								item.fieldName
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: item.status })]
					}, item.id))
				})] })]
			})
		})]
	});
}
//#endregion
export { OwnerClients as component };
