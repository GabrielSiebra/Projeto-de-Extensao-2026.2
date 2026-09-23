import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { L as LogOut, _ as ShieldCheck, a as UserRound, vt as Building2, x as Save } from "../_libs/lucide-react.mjs";
import { A as useApp, a as Panel, b as initialsOf, n as AppShell, r as Avatar } from "./AppShell-deypX_no.mjs";
import { n as getOwnerNav } from "./navItems-waG9qci2.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/configuracoes-DfzEcoId.js
var import_jsx_runtime = require_jsx_runtime();
function OwnerSettings() {
	const { ownerNotifications, session, logout, venueById, balance, pendingBalance } = useApp();
	const navigate = useNavigate();
	const unread = ownerNotifications.filter((item) => !item.read).length;
	const owner = session?.role === "owner" ? session.name : "Marina Costa";
	const venue = venueById("arena-central");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
		role: "owner",
		active: "/proprietario/configuracoes",
		title: "Configurações",
		subtitle: "Preferências da conta e da areninha",
		nav: getOwnerNav(unread),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			style: {
				display: "grid",
				gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
				gap: 18
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
				title: "Conta do proprietário",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						display: "grid",
						gap: 14
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								display: "flex",
								gap: 14,
								alignItems: "center"
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
								initials: initialsOf(owner),
								size: "lg"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								style: {
									display: "block",
									color: "var(--forest-depths)",
									fontSize: 17
								},
								children: owner
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								style: {
									color: "var(--lichen-sage)",
									fontSize: 13
								},
								children: ["Proprietária · ", venue?.name ?? "Areninha Central"]
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "field-label",
							htmlFor: "cfg-email",
							children: "E-mail"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "cfg-email",
							className: "input",
							defaultValue: session?.email ?? "marina@areninhacentral.com.br"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "field-label",
							htmlFor: "cfg-fone",
							children: "Telefone"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "cfg-fone",
							className: "input",
							defaultValue: "(85) 99630-1187"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "button p-button button-dark",
							onClick: () => toast.success("Configurações salvas"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, {
								size: 16,
								"aria-hidden": "true"
							}), " Salvar"]
						})
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: {
					display: "grid",
					gap: 18,
					alignContent: "start"
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
						title: "Notificações por e-mail (simuladas)",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							style: {
								display: "grid",
								gap: 12
							},
							children: [
								["Nova reserva recebida", true],
								["Cancelamentos", true],
								["Resumo financeiro semanal", true],
								["Novas avaliações", false]
							].map(([label, checked]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								style: {
									display: "flex",
									gap: 10,
									alignItems: "center",
									fontSize: 14
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									defaultChecked: checked,
									style: { accentColor: "var(--deep-verdant)" },
									onChange: () => toast.info("Preferência atualizada na demo")
								}), label]
							}, label))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
						title: "Dados da operação",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								display: "grid",
								gap: 10,
								fontSize: 14
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "row-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										style: { color: "var(--lichen-sage)" },
										children: "Saldo disponível"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										style: { color: "var(--deep-verdant)" },
										children: balance.toLocaleString("pt-BR", {
											style: "currency",
											currency: "BRL"
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "row-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										style: { color: "var(--lichen-sage)" },
										children: "Saldo pendente"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										style: { color: "var(--forest-depths)" },
										children: pendingBalance.toLocaleString("pt-BR", {
											style: "currency",
											currency: "BRL"
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "row-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										style: { color: "var(--lichen-sage)" },
										children: "Plano"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "badge badge-success",
										children: "Demo completo"
									})]
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
						title: "Sessão",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								display: "grid",
								gap: 12
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									style: {
										margin: 0,
										display: "flex",
										gap: 8,
										alignItems: "center",
										color: "var(--lichen-sage)",
										fontSize: 13.5
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
										size: 16,
										"aria-hidden": "true",
										style: { color: "var(--deep-verdant)" }
									}), "Ambiente de demonstração — sem backend."]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									className: "button p-button button-outline",
									onClick: () => navigate({ to: "/login" }),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, {
										size: 16,
										"aria-hidden": "true"
									}), " Trocar tipo de conta"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									className: "button p-button button-outline",
									onClick: () => navigate({ to: "/proprietario/cadastrar" }),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, {
										size: 16,
										"aria-hidden": "true"
									}), " Cadastrar nova areninha"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									className: "button p-button button-danger",
									onClick: () => {
										logout();
										toast.info("Sessão encerrada");
										navigate({ to: "/" });
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, {
										size: 16,
										"aria-hidden": "true"
									}), " Sair"]
								})
							]
						})
					})
				]
			})]
		})
	});
}
//#endregion
export { OwnerSettings as component };
