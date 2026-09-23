import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate, c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as OctagonAlert, E as Plus, G as HeartOff, I as MapPin, Q as CreditCard, T as QrCode, V as Info, W as Heart, Z as Crown, _ as ShieldCheck, _t as CalendarCheck, a as UserRound, bt as BellOff, c as TriangleAlert, d as Ticket, ft as CheckCheck, g as Shield, ht as CalendarX2, i as UsersRound, k as PartyPopper, l as Trash2, nt as Clock3, o as UserPlus, r as Wallet, s as Trophy, vt as Building2, w as Receipt, wt as ArrowRight, y as Search, yt as Bell } from "../_libs/lucide-react.mjs";
import { A as useApp, E as toISODate, _ as formatCurrency, a as Panel, b as initialsOf, d as StatusBadge, i as EmptyState, n as AppShell, r as Avatar, t as AppProvider, u as StatCard, v as formatDate, y as formatDateLong } from "./AppShell-deypX_no.mjs";
import { t as getClientNav } from "./navItems-waG9qci2.mjs";
import { t as ArenaCard } from "./ArenaCard-DLRzwOXG.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { n as PrimeReactProvider } from "../_libs/primereact.mjs";
import { t as ConfirmModal } from "./ConfirmModal-Bq1VTtTT.mjs";
import { t as Route$26 } from "./reserva-2hFs2M1T.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-RdaTXFPw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-r61UxjU4.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$25 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{
				name: "author",
				content: "Projeto Meu Campo"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Boldonse&family=Geist:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$25.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimeReactProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppProvider, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
			position: "top-right",
			richColors: true,
			closeButton: true
		})] })
	}) });
}
var $$splitComponentImporter$17 = () => import("./routes-MQPN11CM.mjs");
var Route$24 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Meu Campo — Organize seu jogo na areninha" },
		{
			name: "description",
			content: "Encontre horários, organize sua partida e monte seu time em areninhas de forma simples."
		},
		{
			property: "og:title",
			content: "Meu Campo — Organize seu jogo na areninha"
		},
		{
			property: "og:description",
			content: "Escolha o horário, monte seu time e coloque sua partida em campo."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$17, "component")
});
var $$splitComponentImporter$16 = () => import("./buscar-D3sfsTiA.mjs");
var Route$23 = createFileRoute("/buscar")({ component: lazyRouteComponent($$splitComponentImporter$16, "component") });
var Route$22 = createFileRoute("/login")({ component: LoginPage });
var accounts = [
	{
		role: "individual",
		icon: UserRound,
		title: "Conta Individual",
		description: "Reserve horários, acompanhe suas partidas, favorite areninhas e gerencie seus pagamentos.",
		cta: "Acessar como jogador"
	},
	{
		role: "time",
		icon: UsersRound,
		title: "Conta de Time",
		description: "Gerencie elenco, reserve para o time inteiro e acompanhe partidas e pagamentos do grupo.",
		cta: "Acessar como time"
	},
	{
		role: "owner",
		icon: Building2,
		title: "Minha Areninha",
		description: "Agenda, reservas, financeiro, clientes e relatórios da sua areninha em um só painel.",
		cta: "Acessar painel do proprietário"
	}
];
function LoginPage() {
	const { login } = useApp();
	const navigate = useNavigate();
	const handleLogin = (role) => {
		login(role);
		if (role === "owner") navigate({ to: "/proprietario" });
		else if (role === "time") navigate({ to: "/app/time" });
		else navigate({ to: "/app" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "login-page",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "hero-orb",
			"aria-hidden": "true"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "login-card",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "eyebrow eyebrow-dark",
					style: { justifyContent: "center" },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), "Acesso demonstrativo"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Como você deseja acessar?" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Escolha o tipo de conta para entrar na plataforma. Esta demonstração é 100% de front-end — nenhum dado real é coletado ou enviado." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "account-grid",
					children: accounts.map((account) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "account-card",
						onClick: () => handleLogin(account.role),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "account-icon",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(account.icon, {
									size: 24,
									"aria-hidden": "true"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: account.title }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: account.description }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "account-cta",
								children: [
									account.cta,
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
										size: 15,
										"aria-hidden": "true"
									})
								]
							})
						]
					}, account.role))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					style: {
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						gap: 8,
						marginTop: 32,
						color: "var(--lichen-sage)",
						fontSize: 13
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
						size: 15,
						"aria-hidden": "true"
					}), "Login simulado no navegador — sem senha, sem backend, sem envio de dados."]
				})
			]
		})]
	});
}
var Route$21 = createFileRoute("/app/")({ component: ClientDashboard });
function ClientDashboard() {
	const { session, notifications, favorites, reservations, venueById, teams, myTeamId } = useApp();
	const name = session?.name ?? "Rafael Mendonça";
	const today = toISODate(/* @__PURE__ */ new Date());
	const unread = notifications.filter((item) => !item.read).length;
	const upcoming = reservations.filter((item) => item.clientName === name).filter((item) => item.date >= today && (item.status === "confirmed" || item.status === "pending")).sort((a, b) => `${a.date}${a.time}`.localeCompare(`${b.date}${b.time}`));
	const nextMatch = upcoming[0];
	const myTeam = teams.find((team) => team.id === myTeamId);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
		role: "client",
		active: "/app",
		title: `Olá, ${name.split(" ")[0]}!`,
		subtitle: "Aqui está o resumo da sua semana na areninha",
		nav: getClientNav(unread),
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
							label: "Próximas reservas",
							value: String(upcoming.length),
							hint: "Confirmadas e aguardando",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarCheck, {
								size: 19,
								"aria-hidden": "true"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							label: "Areninhas favoritas",
							value: String(favorites.length),
							hint: "Salvas para comparar",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
								size: 19,
								"aria-hidden": "true"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							label: "Notificações",
							value: String(unread),
							hint: "Não lidas",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, {
								size: 19,
								"aria-hidden": "true"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							label: "Meu time",
							value: myTeam?.initials ?? "—",
							hint: `${myTeam?.players.length ?? 0} jogadores no elenco`,
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, {
								size: 19,
								"aria-hidden": "true"
							}),
							accent: true
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
						gap: 18
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "panel panel-dark",
						style: {
							background: "var(--forest-depths)",
							color: "var(--pure-white)",
							overflow: "hidden"
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "panel-body",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "row-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									style: {
										color: "var(--lichen-sage)",
										fontSize: 12,
										fontWeight: 700,
										letterSpacing: "0.08em",
										textTransform: "uppercase"
									},
									children: "Próxima partida"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "live-dot",
									style: { color: "var(--electric-sprout)" },
									children: nextMatch ? "Agendada" : "Sem jogos"
								})]
							}), nextMatch ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										display: "flex",
										gap: 12,
										alignItems: "center",
										margin: "18px 0"
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "icon-tile",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
											size: 20,
											"aria-hidden": "true"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										style: {
											display: "block",
											fontSize: 18
										},
										children: venueById(nextMatch.venueId)?.name ?? "Areninha"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", {
										style: { color: "var(--lichen-sage)" },
										children: [
											formatDateLong(nextMatch.date),
											" · ",
											nextMatch.time
										]
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mini-pitch",
									"aria-hidden": "true",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "center-line" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "center-circle" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "player-dot dot-a" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "player-dot dot-b" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "player-dot dot-c" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "player-dot dot-d" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "player-dot dot-e" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "player-dot dot-f" })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "row-between",
									style: { marginTop: 16 },
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										style: {
											color: "var(--lichen-sage)",
											fontSize: 13
										},
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock3, {
												size: 14,
												"aria-hidden": "true"
											}),
											" ",
											nextMatch.fieldName,
											" · código",
											" ",
											nextMatch.code
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/app/reservas",
										className: "button p-button button-primary no-underline",
										style: {
											minHeight: 38,
											width: "auto"
										},
										children: ["Ver reserva ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
											size: 15,
											"aria-hidden": "true"
										})]
									})]
								})
							] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: { padding: "26px 0" },
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										style: {
											display: "block",
											fontSize: 18,
											marginBottom: 6
										},
										children: "Nenhuma partida marcada"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										style: {
											color: "var(--pale-fern)",
											fontSize: 14
										},
										children: "Encontre uma areninha livre e coloque a bola pra rolar."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										style: { marginTop: 18 },
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/buscar",
											className: "button p-button button-primary no-underline",
											style: { width: "auto" },
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
												size: 16,
												"aria-hidden": "true"
											}), " Encontrar areninha"]
										})
									})
								]
							})]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							display: "grid",
							gap: 18,
							alignContent: "start"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
							title: "Próximas reservas",
							action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/app/reservas",
								style: {
									fontSize: 13,
									fontWeight: 650,
									color: "var(--deep-verdant)"
								},
								children: "Ver todas"
							}),
							children: upcoming.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								style: {
									margin: 0,
									color: "var(--lichen-sage)",
									fontSize: 14
								},
								children: "Nenhuma reserva futura. Que tal agendar a próxima pelada?"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: {
									display: "grid",
									gap: 10
								},
								children: upcoming.slice(0, 3).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
										children: venueById(item.venueId)?.name ?? "Areninha"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										style: {
											color: "var(--lichen-sage)",
											fontSize: 12.5
										},
										children: [
											item.date.split("-").reverse().join("/"),
											" · ",
											item.time,
											" ·",
											" ",
											item.fieldName
										]
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: item.status })]
								}, item.id))
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
							title: "Notificações recentes",
							action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/app/notificacoes",
								style: {
									fontSize: 13,
									fontWeight: 650,
									color: "var(--deep-verdant)"
								},
								children: "Central"
							}),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: {
									display: "grid",
									gap: 12
								},
								children: notifications.slice(0, 3).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										display: "flex",
										gap: 12
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
										initials: initialsOf(item.title),
										size: "sm"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										style: {
											display: "block",
											fontSize: 13.5,
											color: "var(--forest-depths)"
										},
										children: item.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										style: {
											color: "var(--lichen-sage)",
											fontSize: 12.5,
											lineHeight: 1.5
										},
										children: item.message
									})] })]
								}, item.id))
							})
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
					title: "Acessos rápidos",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid-cards",
						style: { gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))" },
						children: [
							{
								to: "/buscar",
								label: "Encontrar areninha",
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { size: 19 })
							},
							{
								to: "/app/reservas",
								label: "Minhas reservas",
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarCheck, { size: 19 })
							},
							{
								to: "/app/time",
								label: "Meu time",
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { size: 19 })
							},
							{
								to: "/app/favoritos",
								label: "Favoritos",
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { size: 19 })
							}
						].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: item.to,
							className: "button p-button button-outline no-underline",
							style: {
								justifyContent: "flex-start",
								minHeight: 56
							},
							children: [
								item.icon,
								" ",
								item.label
							]
						}, item.to))
					})
				})
			]
		})
	});
}
var Route$20 = createFileRoute("/app/favoritos")({ component: FavoritesPage });
function FavoritesPage() {
	const { favorites, venues, notifications, toggleFavorite } = useApp();
	const unread = notifications.filter((item) => !item.read).length;
	const favoriteVenues = venues.filter((venue) => favorites.includes(venue.id));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
		role: "client",
		active: "/app/favoritos",
		title: "Minhas areninhas favoritas",
		subtitle: "Compare e acesse rápido as arenas que você mais gosta",
		nav: getClientNav(unread),
		children: favoriteVenues.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartOff, {
				size: 26,
				"aria-hidden": "true"
			}),
			title: "Nenhuma favorita ainda",
			description: "Toque no coração de qualquer areninha para salvá-la aqui e receber atalhos rápidos.",
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/buscar",
				className: "button p-button button-primary no-underline",
				style: { width: "auto" },
				children: "Explorar areninhas"
			})
		}) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid-cards",
			children: favoriteVenues.map((venue) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: { position: "relative" },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArenaCard, { venue }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "chip",
					style: {
						position: "absolute",
						top: 12,
						left: 12,
						zIndex: 3
					},
					onClick: () => toggleFavorite(venue.id),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
						size: 14,
						fill: "currentColor",
						"aria-hidden": "true"
					}), " Remover"]
				})]
			}, venue.id))
		})
	});
}
var Route$19 = createFileRoute("/app/notificacoes")({ component: NotificationsPage });
var toneStyles = {
	success: {
		icon: PartyPopper,
		color: "var(--st-success)"
	},
	info: {
		icon: Info,
		color: "var(--st-live)"
	},
	warning: {
		icon: TriangleAlert,
		color: "var(--st-warning)"
	},
	danger: {
		icon: OctagonAlert,
		color: "var(--st-danger)"
	}
};
function NotificationsPage() {
	const { notifications, markAllNotificationsRead } = useApp();
	const unread = notifications.filter((item) => !item.read).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
		role: "client",
		active: "/app/notificacoes",
		title: "Central de notificações",
		subtitle: unread > 0 ? `${unread} não lidas` : "Tudo em dia — nenhuma notificação nova",
		nav: getClientNav(unread),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "chip",
				onClick: () => {
					markAllNotificationsRead("client");
					toast.success("Notificações marcadas como lidas");
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckCheck, {
					size: 15,
					"aria-hidden": "true"
				}), " Marcar todas como lidas"]
			}),
			children: notifications.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BellOff, {
					size: 26,
					"aria-hidden": "true"
				}),
				title: "Nenhuma notificação",
				description: "Reservas, pagamentos e avisos de horários vão aparecer aqui."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				style: {
					display: "grid",
					gap: 4
				},
				children: notifications.map((item) => {
					const tone = toneStyles[item.tone];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						style: {
							display: "flex",
							gap: 14,
							padding: "14px 12px",
							borderRadius: 16,
							background: item.read ? "transparent" : "var(--sprout-wash)"
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: {
									display: "grid",
									placeItems: "center",
									width: 42,
									height: 42,
									borderRadius: 14,
									background: "var(--pure-white)",
									border: "1px solid var(--mist-green)",
									color: tone.color,
									flex: "none"
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tone.icon, {
									size: 19,
									"aria-hidden": "true"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: {
									flex: 1,
									minWidth: 0
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "row-between",
									style: {
										flexWrap: "wrap",
										gap: 6
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										style: {
											color: "var(--forest-depths)",
											fontSize: 14.5
										},
										children: item.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										style: {
											color: "var(--lichen-sage)",
											fontSize: 12
										},
										children: item.date.split("-").reverse().join("/")
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									style: {
										margin: "4px 0 0",
										color: "var(--moss-shadow)",
										fontSize: 13.5,
										lineHeight: 1.55
									},
									children: item.message
								})]
							}),
							!item.read && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-label": "Não lida",
								style: {
									width: 9,
									height: 9,
									borderRadius: "50%",
									background: "var(--st-danger)",
									marginTop: 6
								}
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
								initials: initialsOf(item.title),
								size: "sm"
							})
						]
					}, item.id);
				})
			})
		})
	});
}
var Route$18 = createFileRoute("/app/pagamentos")({ component: PaymentsPage });
var methodLabel = {
	pix: "PIX",
	card: "Cartão",
	other: "Outro"
};
var methodIcon = {
	pix: QrCode,
	card: CreditCard,
	other: Wallet
};
function PaymentsPage() {
	const { session, reservations, venueById, notifications } = useApp();
	const unread = notifications.filter((item) => !item.read).length;
	const name = session?.name ?? "Rafael Mendonça";
	const payments = reservations.filter((item) => item.clientName === name || item.clientName === "Rafael Mendonça").sort((a, b) => b.date.localeCompare(a.date));
	const approved = payments.filter((item) => item.paymentStatus === "approved").reduce((sum, item) => sum + item.total, 0);
	const pending = payments.filter((item) => item.paymentStatus === "processing").reduce((sum, item) => sum + item.total, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
		role: "client",
		active: "/app/pagamentos",
		title: "Pagamentos",
		subtitle: "Comprovantes e transações simuladas das suas reservas",
		nav: getClientNav(unread),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			style: {
				display: "grid",
				gap: 18
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid-stats",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Total aprovado",
						value: formatCurrency(approved),
						hint: "Nesta demonstração",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, {
							size: 19,
							"aria-hidden": "true"
						}),
						accent: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Em processamento",
						value: formatCurrency(pending),
						hint: "Aguardando confirmação",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Receipt, {
							size: 19,
							"aria-hidden": "true"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Transações",
						value: String(payments.length),
						hint: "Reservas com pagamento",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, {
							size: 19,
							"aria-hidden": "true"
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
				title: "Extrato de transações",
				children: payments.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Receipt, {
						size: 26,
						"aria-hidden": "true"
					}),
					title: "Nenhuma transação",
					description: "Quando você concluir uma reserva, o pagamento simulado aparece aqui."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "table-wrap",
					style: { border: 0 },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "data-table",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Código" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Areninha" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Data" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Método" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Valor" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Status" })
						] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: payments.map((item) => {
							const Icon = methodIcon[item.paymentMethod ?? "pix"] ?? QrCode;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									"data-label": "Código",
									className: "cell-strong",
									children: item.code
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									"data-label": "Areninha",
									children: venueById(item.venueId)?.name ?? "—"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									"data-label": "Data",
									children: formatDate(item.date)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									"data-label": "Método",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										style: {
											display: "inline-flex",
											gap: 6,
											alignItems: "center"
										},
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
												size: 14,
												"aria-hidden": "true"
											}),
											" ",
											methodLabel[item.paymentMethod ?? "pix"]
										]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									"data-label": "Valor",
									className: "cell-strong",
									children: formatCurrency(item.total)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									"data-label": "Status",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `badge ${item.paymentStatus === "approved" ? "badge-success" : item.paymentStatus === "processing" ? "badge-warning" : "badge-danger"}`,
										children: item.paymentStatus === "approved" ? "Aprovado" : item.paymentStatus === "processing" ? "Processando" : "Recusado"
									})
								})
							] }, item.id);
						}) })]
					})
				})
			})]
		})
	});
}
var $$splitComponentImporter$15 = () => import("./perfil-CpXfzKfp.mjs");
var Route$17 = createFileRoute("/app/perfil")({ component: lazyRouteComponent($$splitComponentImporter$15, "component") });
var Route$16 = createFileRoute("/app/reservas")({ component: ClientReservations });
function ClientReservations() {
	const { session, reservations, venueById, notifications, updateReservationStatus } = useApp();
	const [tab, setTab] = (0, import_react.useState)("upcoming");
	const [toCancel, setToCancel] = (0, import_react.useState)(null);
	const name = session?.name ?? "Rafael Mendonça";
	const unread = notifications.filter((item) => !item.read).length;
	const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
	const mine = (0, import_react.useMemo)(() => reservations.filter((item) => item.clientName === name || item.clientName === "Rafael Mendonça").sort((a, b) => b.date.localeCompare(a.date)), [reservations, name]);
	const upcoming = mine.filter((item) => item.date >= today && (item.status === "confirmed" || item.status === "pending"));
	const history = mine.filter((item) => !upcoming.some((upcomingItem) => upcomingItem.id === item.id));
	const list = tab === "upcoming" ? upcoming : history;
	const handleCancel = () => {
		if (!toCancel) return;
		updateReservationStatus(toCancel.id, "cancelled");
		toast.success("Reserva cancelada", { description: `A reserva ${toCancel.code} foi cancelada nesta demonstração.` });
		setToCancel(null);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		role: "client",
		active: "/app/reservas",
		title: "Minhas reservas",
		subtitle: "Acompanhe partidas futuras e o histórico completo",
		nav: getClientNav(unread),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			style: {
				display: "grid",
				gap: 18
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: {
					display: "flex",
					gap: 8
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: `chip ${tab === "upcoming" ? "active" : ""}`,
					onClick: () => setTab("upcoming"),
					children: [
						"Próximas (",
						upcoming.length,
						")"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: `chip ${tab === "history" ? "active" : ""}`,
					onClick: () => setTab("history"),
					children: [
						"Histórico (",
						history.length,
						")"
					]
				})]
			}), list.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarX2, {
					size: 26,
					"aria-hidden": "true"
				}),
				title: tab === "upcoming" ? "Nenhuma reserva futura" : "Nenhum registro no histórico",
				description: tab === "upcoming" ? "Quando você reservar um horário, ela aparece aqui com status em tempo real da demo." : "Reservas finalizadas e canceladas serão listadas aqui.",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/buscar",
					className: "button p-button button-primary no-underline",
					style: { width: "auto" },
					children: "Encontrar areninha"
				})
			}) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid-cards",
				children: list.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
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
								className: "row-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									style: {
										color: "var(--forest-depths)",
										fontSize: 16
									},
									children: venueById(item.venueId)?.name ?? "Areninha"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: item.status })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: {
									display: "grid",
									gap: 7,
									fontSize: 13.5,
									color: "var(--moss-shadow)"
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										style: {
											display: "flex",
											gap: 8,
											alignItems: "center"
										},
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
												size: 14,
												"aria-hidden": "true"
											}),
											" ",
											formatDate(item.date),
											" · ",
											item.time,
											" ",
											"· ",
											item.fieldName
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										style: {
											display: "flex",
											gap: 8,
											alignItems: "center"
										},
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ticket, {
												size: 14,
												"aria-hidden": "true"
											}),
											" Código ",
											item.code,
											item.recurring ? " · recorrente" : ""
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										style: {
											display: "flex",
											gap: 8,
											alignItems: "center"
										},
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "badge badge-neutral",
											style: { fontWeight: 600 },
											children: item.accountType === "time" ? `Time · ${item.teamName ?? ""}` : "Individual"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											style: { color: "var(--forest-depths)" },
											children: formatCurrency(item.total)
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: {
									display: "flex",
									gap: 8,
									flexWrap: "wrap",
									marginTop: 4
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/arena/$arenaId",
									params: { arenaId: item.venueId },
									className: "chip",
									style: { textDecoration: "none" },
									children: "Ver areninha"
								}), item.status === "confirmed" && item.date >= today && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "chip chip-ghost",
									onClick: () => setToCancel(item),
									children: "Cancelar"
								})]
							})
						]
					})
				}, item.id))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfirmModal, {
			open: Boolean(toCancel),
			title: "Cancelar esta reserva?",
			description: `${toCancel ? `${toCancel.code} · ${formatDate(toCancel.date)} às ${toCancel.time}` : ""}. A ação altera apenas o estado da demonstração.`,
			confirmLabel: "Cancelar reserva",
			tone: "danger",
			onCancel: () => setToCancel(null),
			onConfirm: handleCancel
		})]
	});
}
var Route$15 = createFileRoute("/app/time")({ component: TeamPage });
function TeamPage() {
	const { teams, myTeamId, addPlayer, removePlayer, reservations, venueById, notifications, session } = useApp();
	const unread = notifications.filter((item) => !item.read).length;
	const team = teams.find((item) => item.id === myTeamId) ?? teams[0];
	const [name, setName] = (0, import_react.useState)("");
	const [position, setPosition] = (0, import_react.useState)("Atacante");
	const [number, setNumber] = (0, import_react.useState)(14);
	const today = toISODate(/* @__PURE__ */ new Date());
	if (!team) return null;
	const teamReservations = reservations.filter((item) => item.teamId === team.id).sort((a, b) => b.date.localeCompare(a.date));
	const upcoming = teamReservations.filter((item) => item.date >= today && item.status !== "cancelled" && item.status !== "finished");
	const history = teamReservations.filter((item) => !upcoming.includes(item));
	const handleAdd = () => {
		if (!name.trim()) {
			toast.error("Informe o nome do jogador");
			return;
		}
		addPlayer(name.trim(), position, number);
		toast.success(`${name.trim()} adicionado ao elenco`);
		setName("");
		setNumber((value) => value + 1);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
		role: "client",
		active: "/app/time",
		title: team.name,
		subtitle: `Elenco, reservas e partidas do time · sessão: ${session?.name ?? "demonstração"}`,
		nav: getClientNav(unread),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			style: {
				display: "grid",
				gap: 18
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "panel panel-dark",
				style: {
					background: "var(--forest-depths)",
					color: "var(--pure-white)"
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "panel-body",
					style: {
						display: "flex",
						flexWrap: "wrap",
						gap: 22,
						alignItems: "center"
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
							initials: team.initials,
							size: "lg"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								flex: 1,
								minWidth: 220
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								style: {
									margin: 0,
									fontSize: 26
								},
								children: team.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								style: {
									color: "var(--lichen-sage)",
									fontSize: 13.5
								},
								children: [
									"Capitão ",
									team.captain,
									" · desde",
									" ",
									(/* @__PURE__ */ new Date(team.createdAt + "T12:00:00")).toLocaleDateString("pt-BR"),
									" ·",
									" ",
									team.players.length,
									" jogadores"
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								display: "flex",
								gap: 26
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: {
									display: "block",
									color: "var(--lichen-sage)",
									fontSize: 11,
									textTransform: "uppercase",
									letterSpacing: "0.08em"
								},
								children: "Próximos jogos"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								style: {
									fontSize: 26,
									color: "var(--electric-sprout)"
								},
								children: upcoming.length
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: {
									display: "block",
									color: "var(--lichen-sage)",
									fontSize: 11,
									textTransform: "uppercase",
									letterSpacing: "0.08em"
								},
								children: "Partidas no total"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								style: {
									fontSize: 26,
									color: "var(--electric-sprout)"
								},
								children: teamReservations.length
							})] })]
						})
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: {
					display: "grid",
					gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
					gap: 18
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
					title: "Elenco",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								display: "grid",
								gap: 10
							},
							children: [team.players.map((player) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "row-between",
								style: {
									padding: "10px 12px",
									borderRadius: 14,
									background: "var(--bone-white)"
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										display: "flex",
										gap: 10,
										alignItems: "center"
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
										initials: initialsOf(player.name),
										size: "sm"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
										style: {
											display: "block",
											fontSize: 13.5,
											color: "var(--forest-depths)"
										},
										children: [
											player.name,
											" ",
											player.captain && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crown, {
												size: 13,
												"aria-hidden": "true",
												style: { color: "var(--electric-sprout)" }
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										style: {
											color: "var(--lichen-sage)",
											fontSize: 12
										},
										children: [
											player.position,
											" · camisa ",
											player.number
										]
									})] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "modal-close",
									"aria-label": `Remover ${player.name}`,
									onClick: () => {
										removePlayer(player.id);
										toast.info(`${player.name} removido do elenco`);
									},
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {
										size: 14,
										"aria-hidden": "true"
									})
								})]
							}, player.id)), team.players.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								style: {
									margin: 0,
									color: "var(--lichen-sage)",
									fontSize: 14
								},
								children: "Nenhum jogador. Adicione o primeiro abaixo."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								display: "grid",
								gridTemplateColumns: "1.4fr 1fr 70px auto",
								gap: 8,
								marginTop: 16,
								alignItems: "end"
							},
							className: "add-player-form",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "field-label",
									htmlFor: "player-name",
									children: "Nome"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "player-name",
									className: "input",
									placeholder: "Ex.: Caio Bezerra",
									value: name,
									onChange: (event) => setName(event.target.value)
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "field-label",
									htmlFor: "player-pos",
									children: "Posição"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									id: "player-pos",
									className: "select",
									value: position,
									onChange: (event) => setPosition(event.target.value),
									children: [
										"Goleiro",
										"Zagueiro",
										"Lateral",
										"Volante",
										"Meia",
										"Ponta",
										"Atacante"
									].map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: option }, option))
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "field-label",
									htmlFor: "player-num",
									children: "Nº"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "player-num",
									type: "number",
									min: 1,
									max: 99,
									className: "input",
									value: number,
									onChange: (event) => setNumber(Number(event.target.value))
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "button p-button button-dark",
									style: { width: "auto" },
									onClick: handleAdd,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
										size: 16,
										"aria-hidden": "true"
									})
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							style: {
								margin: "12px 0 0",
								fontSize: 12,
								color: "var(--lichen-sage)",
								display: "flex",
								gap: 6,
								alignItems: "center"
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserPlus, {
								size: 13,
								"aria-hidden": "true"
							}), " Alterações valem apenas nesta demonstração."]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						display: "grid",
						gap: 18,
						alignContent: "start"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
						title: "Próximas partidas do time",
						children: upcoming.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								display: "flex",
								gap: 10,
								alignItems: "center",
								color: "var(--lichen-sage)",
								fontSize: 14
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarX2, {
								size: 18,
								"aria-hidden": "true"
							}), " Nenhuma partida agendada para o time."]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							style: {
								display: "grid",
								gap: 10
							},
							children: upcoming.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
									children: venueById(item.venueId)?.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									style: {
										color: "var(--lichen-sage)",
										fontSize: 12.5
									},
									children: [
										formatDate(item.date),
										" · ",
										item.time,
										" · ",
										item.fieldName
									]
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: item.status })]
							}, item.id))
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
						title: "Reservas e pagamentos",
						action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/app/pagamentos",
							style: {
								fontSize: 13,
								fontWeight: 650,
								color: "var(--deep-verdant)"
							},
							children: "Ver pagamentos"
						}),
						children: history.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							style: {
								margin: 0,
								color: "var(--lichen-sage)",
								fontSize: 14
							},
							children: "Sem registros anteriores para este time."
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							style: {
								display: "grid",
								gap: 10
							},
							children: history.slice(0, 5).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "row-between",
								style: {
									fontSize: 13.5,
									paddingBottom: 8,
									borderBottom: "1px dashed var(--mist-green)"
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									style: { color: "var(--moss-shadow)" },
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, {
											size: 13,
											"aria-hidden": "true"
										}),
										" ",
										formatDate(item.date),
										" ·",
										" ",
										venueById(item.venueId)?.name
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									style: { color: "var(--forest-depths)" },
									children: formatCurrency(item.total)
								})]
							}, item.id))
						})
					})]
				})]
			})]
		})
	});
}
var $$splitComponentImporter$14 = () => import("./arena._arenaId-BRnaSt0B.mjs");
var Route$14 = createFileRoute("/arena/$arenaId")({ component: lazyRouteComponent($$splitComponentImporter$14, "component") });
var $$splitComponentImporter$13 = () => import("./proprietario-Dz1rJ27Z.mjs");
var Route$13 = createFileRoute("/proprietario/")({ component: lazyRouteComponent($$splitComponentImporter$13, "component") });
var $$splitComponentImporter$12 = () => import("./agenda-hGHDM2RM.mjs");
var Route$12 = createFileRoute("/proprietario/agenda")({ component: lazyRouteComponent($$splitComponentImporter$12, "component") });
var $$splitComponentImporter$11 = () => import("./areninha-MaU1G5Bn.mjs");
var Route$11 = createFileRoute("/proprietario/areninha")({ component: lazyRouteComponent($$splitComponentImporter$11, "component") });
var $$splitComponentImporter$10 = () => import("./avaliacoes-BSv4gQQ0.mjs");
var Route$10 = createFileRoute("/proprietario/avaliacoes")({ component: lazyRouteComponent($$splitComponentImporter$10, "component") });
var $$splitComponentImporter$9 = () => import("./cadastrar-BJAGlHuk.mjs");
var Route$9 = createFileRoute("/proprietario/cadastrar")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
var $$splitComponentImporter$8 = () => import("./campos-yOZr1owp.mjs");
var Route$8 = createFileRoute("/proprietario/campos")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./clientes-CljAN0_k.mjs");
var Route$7 = createFileRoute("/proprietario/clientes")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./configuracoes-DfzEcoId.mjs");
var Route$6 = createFileRoute("/proprietario/configuracoes")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./financeiro-CRbTuNk5.mjs");
var Route$5 = createFileRoute("/proprietario/financeiro")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./notificacoes-BFeLskwq.mjs");
var Route$4 = createFileRoute("/proprietario/notificacoes")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./promocoes-CPuLcNce.mjs");
var Route$3 = createFileRoute("/proprietario/promocoes")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./relatorios-d_ZybBiL.mjs");
var Route$2 = createFileRoute("/proprietario/relatorios")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./reservas-QCdrmH5y.mjs");
var Route$1 = createFileRoute("/proprietario/reservas")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./times-BjUkw7WC.mjs");
var Route = createFileRoute("/proprietario/times")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var IndexRoute = Route$24.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$25
});
var BuscarRoute = Route$23.update({
	id: "/buscar",
	path: "/buscar",
	getParentRoute: () => Route$25
});
var LoginRoute = Route$22.update({
	id: "/login",
	path: "/login",
	getParentRoute: () => Route$25
});
var ReservaRoute = Route$26.update({
	id: "/reserva",
	path: "/reserva",
	getParentRoute: () => Route$25
});
var AppIndexRoute = Route$21.update({
	id: "/app/",
	path: "/app/",
	getParentRoute: () => Route$25
});
var AppFavoritosRoute = Route$20.update({
	id: "/app/favoritos",
	path: "/app/favoritos",
	getParentRoute: () => Route$25
});
var AppNotificacoesRoute = Route$19.update({
	id: "/app/notificacoes",
	path: "/app/notificacoes",
	getParentRoute: () => Route$25
});
var AppPagamentosRoute = Route$18.update({
	id: "/app/pagamentos",
	path: "/app/pagamentos",
	getParentRoute: () => Route$25
});
var AppPerfilRoute = Route$17.update({
	id: "/app/perfil",
	path: "/app/perfil",
	getParentRoute: () => Route$25
});
var AppReservasRoute = Route$16.update({
	id: "/app/reservas",
	path: "/app/reservas",
	getParentRoute: () => Route$25
});
var AppTimeRoute = Route$15.update({
	id: "/app/time",
	path: "/app/time",
	getParentRoute: () => Route$25
});
var ArenaArenaIdRoute = Route$14.update({
	id: "/arena/$arenaId",
	path: "/arena/$arenaId",
	getParentRoute: () => Route$25
});
var ProprietarioIndexRoute = Route$13.update({
	id: "/proprietario/",
	path: "/proprietario/",
	getParentRoute: () => Route$25
});
var rootRouteChildren = {
	IndexRoute,
	BuscarRoute,
	LoginRoute,
	ReservaRoute,
	AppFavoritosRoute,
	AppNotificacoesRoute,
	AppPagamentosRoute,
	AppPerfilRoute,
	AppReservasRoute,
	AppTimeRoute,
	ArenaArenaIdRoute,
	ProprietarioAgendaRoute: Route$12.update({
		id: "/proprietario/agenda",
		path: "/proprietario/agenda",
		getParentRoute: () => Route$25
	}),
	ProprietarioAreninhaRoute: Route$11.update({
		id: "/proprietario/areninha",
		path: "/proprietario/areninha",
		getParentRoute: () => Route$25
	}),
	ProprietarioAvaliacoesRoute: Route$10.update({
		id: "/proprietario/avaliacoes",
		path: "/proprietario/avaliacoes",
		getParentRoute: () => Route$25
	}),
	ProprietarioCadastrarRoute: Route$9.update({
		id: "/proprietario/cadastrar",
		path: "/proprietario/cadastrar",
		getParentRoute: () => Route$25
	}),
	ProprietarioCamposRoute: Route$8.update({
		id: "/proprietario/campos",
		path: "/proprietario/campos",
		getParentRoute: () => Route$25
	}),
	ProprietarioClientesRoute: Route$7.update({
		id: "/proprietario/clientes",
		path: "/proprietario/clientes",
		getParentRoute: () => Route$25
	}),
	ProprietarioConfiguracoesRoute: Route$6.update({
		id: "/proprietario/configuracoes",
		path: "/proprietario/configuracoes",
		getParentRoute: () => Route$25
	}),
	ProprietarioFinanceiroRoute: Route$5.update({
		id: "/proprietario/financeiro",
		path: "/proprietario/financeiro",
		getParentRoute: () => Route$25
	}),
	ProprietarioNotificacoesRoute: Route$4.update({
		id: "/proprietario/notificacoes",
		path: "/proprietario/notificacoes",
		getParentRoute: () => Route$25
	}),
	ProprietarioPromocoesRoute: Route$3.update({
		id: "/proprietario/promocoes",
		path: "/proprietario/promocoes",
		getParentRoute: () => Route$25
	}),
	ProprietarioRelatoriosRoute: Route$2.update({
		id: "/proprietario/relatorios",
		path: "/proprietario/relatorios",
		getParentRoute: () => Route$25
	}),
	ProprietarioReservasRoute: Route$1.update({
		id: "/proprietario/reservas",
		path: "/proprietario/reservas",
		getParentRoute: () => Route$25
	}),
	ProprietarioTimesRoute: Route.update({
		id: "/proprietario/times",
		path: "/proprietario/times",
		getParentRoute: () => Route$25
	}),
	AppIndexRoute,
	ProprietarioIndexRoute
};
var routeTree = Route$25._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
