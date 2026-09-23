import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { M as MessageSquareHeart, p as Star } from "../_libs/lucide-react.mjs";
import { A as useApp, T as seedReviews, a as Panel, b as initialsOf, n as AppShell, o as Progress, r as Avatar, u as StatCard } from "./AppShell-deypX_no.mjs";
import { n as getOwnerNav } from "./navItems-waG9qci2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/avaliacoes-BSv4gQQ0.js
var import_jsx_runtime = require_jsx_runtime();
function avg(pick) {
	return seedReviews.reduce((sum, review) => sum + pick(review), 0) / seedReviews.length;
}
function OwnerReviews() {
	const { ownerNotifications } = useApp();
	const unread = ownerNotifications.filter((item) => !item.read).length;
	const overall = avg((review) => review.rating);
	const structure = avg((review) => review.structure);
	const service = avg((review) => review.service);
	const pitch = avg((review) => review.pitch);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
		role: "owner",
		active: "/proprietario/avaliacoes",
		title: "Avaliações",
		subtitle: "O que os clientes dizem sobre a areninha",
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
							label: "Nota média",
							value: `${overall.toFixed(1)} ★`,
							hint: `${seedReviews.length} avaliações`,
							accent: true,
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
								size: 19,
								"aria-hidden": "true"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							label: "Estrutura",
							value: structure.toFixed(1),
							hint: "Média dos clientes"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							label: "Atendimento",
							value: service.toFixed(1),
							hint: "Média dos clientes"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							label: "Gramado",
							value: pitch.toFixed(1),
							hint: "Média dos clientes"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
					title: "Dimensões",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						style: {
							display: "grid",
							gap: 16,
							maxWidth: 560
						},
						children: [
							["Estrutura", structure],
							["Atendimento", service],
							["Gramado", pitch]
						].map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								display: "grid",
								gap: 6
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "row-between",
								style: { fontSize: 13.5 },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									style: { color: "var(--moss-shadow)" },
									children: label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									style: { color: "var(--forest-depths)" },
									children: value.toFixed(1)
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, { value: value / 5 * 100 })]
						}, label))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid-cards",
					children: seedReviews.map((review) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
						className: "panel",
						style: { boxShadow: "none" },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "panel-body",
							style: {
								display: "grid",
								gap: 12
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										display: "flex",
										gap: 12,
										alignItems: "center"
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
											initials: initialsOf(review.author),
											size: "sm"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											style: { flex: 1 },
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												style: {
													display: "block",
													fontSize: 14,
													color: "var(--forest-depths)"
												},
												children: review.author
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												style: {
													color: "var(--lichen-sage)",
													fontSize: 12
												},
												children: review.date.split("-").reverse().join("/")
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "rating",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
													size: 14,
													"aria-hidden": "true"
												}),
												" ",
												review.rating,
												".0"
											]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									style: {
										margin: 0,
										color: "var(--moss-shadow)",
										fontSize: 13.5,
										lineHeight: 1.6
									},
									children: review.comment
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "arena-foot",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "arena-tags",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("em", { children: ["Estrutura ", review.structure] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("em", { children: ["Atendimento ", review.service] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("em", { children: ["Gramado ", review.pitch] })
										]
									})
								})
							]
						})
					}, review.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
					title: "Resumo",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						style: {
							margin: 0,
							display: "flex",
							gap: 10,
							color: "var(--lichen-sage)",
							fontSize: 13.5,
							alignItems: "center"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquareHeart, {
							size: 17,
							"aria-hidden": "true",
							style: { color: "var(--deep-verdant)" }
						}), "Notas ilustrativas com dados fictícios para demonstração do painel."]
					})
				})
			]
		})
	});
}
//#endregion
export { OwnerReviews as component };
