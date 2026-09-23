import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { L as LogOut, _ as ShieldCheck, a as UserRound, vt as Building2, x as Save } from "../_libs/lucide-react.mjs";
import { A as useApp, a as Panel, b as initialsOf, n as AppShell, r as Avatar } from "./AppShell-deypX_no.mjs";
import { t as getClientNav } from "./navItems-waG9qci2.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/perfil-CpXfzKfp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProfilePage() {
	const { session, notifications, logout, myTeamId, teams } = useApp();
	const unread = notifications.filter((item) => !item.read).length;
	const navigate = useNavigate();
	const name = session?.name ?? "Rafael Mendonça";
	const [form, setForm] = (0, import_react.useState)({
		name,
		email: session?.email ?? "rafael.mendonca@email.com",
		phone: "(85) 98812-4471",
		city: "Fortaleza — CE",
		favoriteTeam: teams.find((team) => team.id === myTeamId)?.name ?? "Leão do Aldeota"
	});
	const roleLabel = session?.role === "time" ? "Conta de time" : session?.role === "owner" ? "Proprietário" : "Conta individual";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
		role: "client",
		active: "/app/perfil",
		title: "Meu perfil",
		subtitle: "Dados da conta usada nesta demonstração",
		nav: getClientNav(unread),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			style: {
				display: "grid",
				gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
				gap: 18
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
				title: "Dados pessoais",
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
								initials: initialsOf(form.name),
								size: "lg"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								style: {
									display: "block",
									color: "var(--forest-depths)",
									fontSize: 17
								},
								children: form.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: {
									color: "var(--lichen-sage)",
									fontSize: 13
								},
								children: roleLabel
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "field-label",
							htmlFor: "perfil-nome",
							children: "Nome completo"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "perfil-nome",
							className: "input",
							value: form.name,
							onChange: (event) => setForm((current) => ({
								...current,
								name: event.target.value
							}))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "field-label",
							htmlFor: "perfil-email",
							children: "E-mail"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "perfil-email",
							type: "email",
							className: "input",
							value: form.email,
							onChange: (event) => setForm((current) => ({
								...current,
								email: event.target.value
							}))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "field-label",
							htmlFor: "perfil-fone",
							children: "Telefone"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "perfil-fone",
							className: "input",
							value: form.phone,
							onChange: (event) => setForm((current) => ({
								...current,
								phone: event.target.value
							}))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "field-label",
							htmlFor: "perfil-cidade",
							children: "Cidade"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "perfil-cidade",
							className: "input",
							value: form.city,
							onChange: (event) => setForm((current) => ({
								...current,
								city: event.target.value
							}))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "button p-button button-dark",
							onClick: () => toast.success("Perfil atualizado", { description: "Alterações salvas localmente na demo." }),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, {
								size: 16,
								"aria-hidden": "true"
							}), " Salvar alterações"]
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
					title: "Preferências",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							display: "grid",
							gap: 14
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "field-label",
								htmlFor: "perfil-time",
								children: "Time preferido"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "perfil-time",
								className: "input",
								value: form.favoriteTeam,
								onChange: (event) => setForm((current) => ({
									...current,
									favoriteTeam: event.target.value
								}))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								style: {
									display: "flex",
									gap: 10,
									alignItems: "center",
									fontSize: 14
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									defaultChecked: true,
									style: { accentColor: "var(--deep-verdant)" }
								}), "Receber avisos de horários disponíveis"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								style: {
									display: "flex",
									gap: 10,
									alignItems: "center",
									fontSize: 14
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									defaultChecked: true,
									style: { accentColor: "var(--deep-verdant)" }
								}), "Lembrete 1 hora antes da partida"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								style: {
									display: "flex",
									gap: 10,
									alignItems: "center",
									fontSize: 14
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									style: { accentColor: "var(--deep-verdant)" }
								}), "Novidades de promoções por push"]
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
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
								}), "Login simulado — nenhum dado sai deste navegador."]
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
								className: "button p-button button-danger",
								onClick: () => {
									logout();
									toast.info("Sessão encerrada");
									navigate({ to: "/" });
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, {
									size: 16,
									"aria-hidden": "true"
								}), " Sair da conta"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "button p-button button-outline",
								onClick: () => navigate({ to: "/proprietario" }),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, {
									size: 16,
									"aria-hidden": "true"
								}), " Ir para painel do proprietário"]
							})
						]
					})
				})]
			})]
		})
	});
}
//#endregion
export { ProfilePage as component };
