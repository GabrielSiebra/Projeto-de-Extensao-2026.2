import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { E as Plus, O as Percent, P as Megaphone, f as Tag } from "../_libs/lucide-react.mjs";
import { A as useApp, a as Panel, n as AppShell } from "./AppShell-deypX_no.mjs";
import { n as getOwnerNav } from "./navItems-waG9qci2.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/promocoes-CPuLcNce.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var kindLabel = {
	percent: "Desconto",
	"happy-hour": "Horário promocional",
	"new-client": "Novo cliente"
};
function OwnerPromotions() {
	const { ownerNotifications, promotions, addPromotion, togglePromotion } = useApp();
	const unread = ownerNotifications.filter((item) => !item.read).length;
	const [form, setForm] = (0, import_react.useState)({
		code: "",
		label: "",
		discount: 10,
		kind: "percent",
		schedule: ""
	});
	const create = () => {
		const code = form.code.trim().toUpperCase();
		if (code.length < 4) {
			toast.error("Código muito curto", { description: "Use ao menos 4 caracteres." });
			return;
		}
		addPromotion({
			code,
			label: form.label.trim() || `${form.discount}% OFF`,
			discount: form.discount,
			kind: form.kind,
			...form.kind === "happy-hour" && form.schedule ? { schedule: form.schedule } : {},
			active: true
		});
		toast.success(`Cupom ${code} criado`, { description: "Já disponível na simulação." });
		setForm({
			code: "",
			label: "",
			discount: 10,
			kind: "percent",
			schedule: ""
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
		role: "owner",
		active: "/proprietario/promocoes",
		title: "Promoções",
		subtitle: "Cupons e campanhas gerenciadas localmente",
		nav: getOwnerNav(unread),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			style: {
				display: "grid",
				gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
				gap: 18
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
				title: "Criar promoção",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						display: "grid",
						gap: 14
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "field-label",
							htmlFor: "promo-code",
							children: "Código do cupom"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "promo-code",
							className: "input",
							placeholder: "EX.: QUARTA15",
							value: form.code,
							onChange: (event) => setForm((current) => ({
								...current,
								code: event.target.value.toUpperCase()
							}))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "field-label",
							htmlFor: "promo-label",
							children: "Descrição exibida"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "promo-label",
							className: "input",
							placeholder: "15% OFF nas quartas",
							value: form.label,
							onChange: (event) => setForm((current) => ({
								...current,
								label: event.target.value
							}))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								display: "grid",
								gridTemplateColumns: "1fr 1fr",
								gap: 12
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "field-label",
								htmlFor: "promo-kind",
								children: "Tipo"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								id: "promo-kind",
								className: "select",
								value: form.kind,
								onChange: (event) => setForm((current) => ({
									...current,
									kind: event.target.value
								})),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "percent",
										children: "Desconto"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "happy-hour",
										children: "Horário promocional"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "new-client",
										children: "Novo cliente"
									})
								]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "field-label",
								htmlFor: "promo-disc",
								children: "Desconto (%)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "promo-disc",
								type: "number",
								min: 1,
								max: 90,
								className: "input",
								value: form.discount,
								onChange: (event) => setForm((current) => ({
									...current,
									discount: Number(event.target.value)
								}))
							})] })]
						}),
						form.kind === "happy-hour" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "field-label",
							htmlFor: "promo-sched",
							children: "Horário promocional"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "promo-sched",
							className: "input",
							placeholder: "Seg a Sex · 07:00 — 11:00",
							value: form.schedule,
							onChange: (event) => setForm((current) => ({
								...current,
								schedule: event.target.value
							}))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "button p-button button-dark",
							onClick: create,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
								size: 16,
								"aria-hidden": "true"
							}), " Criar promoção"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							style: {
								fontSize: 12,
								color: "var(--lichen-sage)"
							},
							children: [
								"Exemplo válido na demo de reserva: ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "SEXTA10" }),
								" (10% OFF)."
							]
						})
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: {
					display: "grid",
					gap: 18,
					alignContent: "start"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
					title: "Promoções ativas e rascunhos",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						style: {
							display: "grid",
							gap: 12
						},
						children: promotions.map((promo) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								display: "flex",
								flexWrap: "wrap",
								gap: 12,
								alignItems: "center",
								justifyContent: "space-between",
								padding: 16,
								borderRadius: 16,
								background: promo.active ? "var(--sprout-wash)" : "var(--bone-white)",
								border: `1px solid ${promo.active ? "color-mix(in oklab, var(--deep-verdant) 40%, white)" : "var(--mist-green)"}`
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: {
									display: "flex",
									gap: 12,
									alignItems: "center"
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "icon-tile",
									children: promo.kind === "percent" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Percent, { size: 18 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { size: 18 })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									style: {
										display: "block",
										color: "var(--forest-depths)",
										letterSpacing: "0.06em",
										fontSize: 15
									},
									children: promo.code
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									style: {
										color: "var(--lichen-sage)",
										fontSize: 13
									},
									children: [
										promo.label,
										" · ",
										kindLabel[promo.kind],
										promo.schedule ? ` · ${promo.schedule}` : ""
									]
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: {
									display: "flex",
									gap: 8,
									alignItems: "center"
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `badge ${promo.active ? "badge-success" : "badge-neutral"}`,
									children: promo.active ? "Ativa" : "Inativa"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "chip",
									onClick: () => {
										togglePromotion(promo.id);
										toast.info(`${promo.code} ${promo.active ? "desativada" : "ativada"}`);
									},
									children: promo.active ? "Desativar" : "Ativar"
								})]
							})]
						}, promo.id))
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
					title: "Resumo",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						style: {
							margin: 0,
							display: "flex",
							gap: 10,
							alignItems: "center",
							color: "var(--lichen-sage)",
							fontSize: 13.5
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Megaphone, {
							size: 16,
							"aria-hidden": "true",
							style: { color: "var(--deep-verdant)" }
						}), "Alterações valem apenas no estado local desta demonstração."]
					})
				})]
			})]
		})
	});
}
//#endregion
export { OwnerPromotions as component };
