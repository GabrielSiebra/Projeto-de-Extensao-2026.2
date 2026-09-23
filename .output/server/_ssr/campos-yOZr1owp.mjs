import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { E as Plus, n as Wrench, tt as Cog } from "../_libs/lucide-react.mjs";
import { A as useApp, S as ownerVenueId, a as Panel, n as AppShell } from "./AppShell-deypX_no.mjs";
import { n as getOwnerNav } from "./navItems-waG9qci2.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/campos-yOZr1owp.js
var import_jsx_runtime = require_jsx_runtime();
var statusMeta = {
	available: {
		label: "Disponível",
		className: "badge-success"
	},
	occupied: {
		label: "Ocupado",
		className: "badge-danger"
	},
	maintenance: {
		label: "Manutenção",
		className: "badge-warning"
	}
};
var cycle = {
	available: "occupied",
	occupied: "maintenance",
	maintenance: "available"
};
function OwnerFields() {
	const { ownerNotifications, venueById, updateVenue } = useApp();
	const unread = ownerNotifications.filter((item) => !item.read).length;
	const venue = venueById(ownerVenueId);
	if (!venue) return null;
	const setStatus = (fieldId, status) => {
		updateVenue(venue.id, { fields: venue.fields.map((field) => field.id === fieldId ? {
			...field,
			status
		} : field) });
		toast.info(`Status atualizado para "${statusMeta[status].label}"`);
	};
	const updatePrice = (fieldId, price) => {
		updateVenue(venue.id, { fields: venue.fields.map((field) => field.id === fieldId ? {
			...field,
			pricePerHour: price
		} : field) });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		role: "owner",
		active: "/proprietario/campos",
		title: "Campos",
		subtitle: `${venue.name} · ${venue.fields.length} campos`,
		nav: getOwnerNav(unread),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid-cards",
			children: [venue.fields.map((field) => {
				const meta = statusMeta[field.status];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
					className: "panel",
					style: { boxShadow: "none" },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "panel-body",
						style: {
							display: "grid",
							gap: 14
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "row-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "icon-tile",
									style: {
										width: 46,
										height: 46
									},
									"aria-hidden": "true",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cog, { size: 20 })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `badge ${meta.className}`,
									children: meta.label
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								style: {
									margin: 0,
									color: "var(--forest-depths)",
									fontSize: 19
								},
								children: field.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								style: {
									color: "var(--lichen-sage)",
									fontSize: 13
								},
								children: [
									field.type,
									" · até ",
									field.capacity,
									" jogadores"
								]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "field-label",
								htmlFor: `price-${field.id}`,
								children: "Preço por hora (R$)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: `price-${field.id}`,
								type: "number",
								min: 50,
								className: "input",
								defaultValue: field.pricePerHour,
								onBlur: (event) => updatePrice(field.id, Number(event.target.value)),
								onChange: (event) => updatePrice(field.id, Number(event.target.value))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "arena-foot",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									className: "chip chip-ghost",
									onClick: () => setStatus(field.id, cycle[field.status]),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wrench, {
										size: 14,
										"aria-hidden": "true"
									}), " Alterar status"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									style: {
										fontSize: 12,
										color: "var(--lichen-sage)"
									},
									children: "disponível → ocupado → manutenção"
								})]
							})
						]
					})
				}, field.id);
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "panel",
				style: {
					minHeight: 240,
					display: "grid",
					placeItems: "center",
					cursor: "pointer",
					borderStyle: "dashed",
					background: "var(--pure-white)",
					color: "var(--lichen-sage)"
				},
				onClick: () => toast.info("Novo campo (simulado)", { description: "O cadastro de campos será liberado em breve." }),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					style: {
						display: "grid",
						gap: 8,
						justifyItems: "center",
						fontSize: 14
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
						size: 24,
						"aria-hidden": "true"
					}), "Adicionar campo"]
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
			title: "Como funciona",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				style: {
					margin: 0,
					color: "var(--lichen-sage)",
					fontSize: 13.5,
					lineHeight: 1.6
				},
				children: "O status dos campos alimenta a agenda e a disponibilidade exibida para os clientes. As alterações acontecem apenas no estado local desta demonstração."
			})
		})]
	});
}
//#endregion
export { OwnerFields as component };
