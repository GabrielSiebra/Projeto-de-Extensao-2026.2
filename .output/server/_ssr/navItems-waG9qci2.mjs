import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { J as FileChartColumnIncreasing, M as MessageSquareHeart, P as Megaphone, St as BadgeDollarSign, U as House, _t as CalendarCheck, a as UserRound, gt as CalendarDays, i as UsersRound, p as Star, pt as CardSim, rt as ClipboardList, s as Trophy, tt as Cog, v as Settings, vt as Building2, y as Search, yt as Bell } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/navItems-waG9qci2.js
var import_jsx_runtime = require_jsx_runtime();
function getClientNav(unread = 0) {
	return [
		{
			label: "Início",
			to: "/app",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, {
				size: 18,
				"aria-hidden": "true"
			})
		},
		{
			label: "Encontrar",
			to: "/buscar",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
				size: 18,
				"aria-hidden": "true"
			})
		},
		{
			label: "Reservas",
			to: "/app/reservas",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarCheck, {
				size: 18,
				"aria-hidden": "true"
			})
		},
		{
			label: "Meu time",
			to: "/app/time",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, {
				size: 18,
				"aria-hidden": "true"
			})
		},
		{
			label: "Favoritos",
			to: "/app/favoritos",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
				size: 18,
				"aria-hidden": "true"
			})
		},
		{
			label: "Pagamentos",
			to: "/app/pagamentos",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardSim, {
				size: 18,
				"aria-hidden": "true"
			})
		},
		{
			label: "Notificações",
			to: "/app/notificacoes",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, {
				size: 18,
				"aria-hidden": "true"
			}),
			...unread > 0 ? { badge: unread } : {}
		},
		{
			label: "Perfil",
			to: "/app/perfil",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, {
				size: 18,
				"aria-hidden": "true"
			})
		}
	];
}
function getOwnerNav(unread = 0) {
	return [
		{
			label: "Dashboard",
			to: "/proprietario",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, {
				size: 18,
				"aria-hidden": "true"
			})
		},
		{
			label: "Agenda",
			to: "/proprietario/agenda",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, {
				size: 18,
				"aria-hidden": "true"
			})
		},
		{
			label: "Reservas",
			to: "/proprietario/reservas",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardList, {
				size: 18,
				"aria-hidden": "true"
			})
		},
		{
			label: "Clientes",
			to: "/proprietario/clientes",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UsersRound, {
				size: 18,
				"aria-hidden": "true"
			})
		},
		{
			label: "Times",
			to: "/proprietario/times",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, {
				size: 18,
				"aria-hidden": "true"
			})
		},
		{
			label: "Areninha",
			to: "/proprietario/areninha",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, {
				size: 18,
				"aria-hidden": "true"
			})
		},
		{
			label: "Campos",
			to: "/proprietario/campos",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cog, {
				size: 18,
				"aria-hidden": "true"
			})
		},
		{
			label: "Financeiro",
			to: "/proprietario/financeiro",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeDollarSign, {
				size: 18,
				"aria-hidden": "true"
			})
		},
		{
			label: "Relatórios",
			to: "/proprietario/relatorios",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileChartColumnIncreasing, {
				size: 18,
				"aria-hidden": "true"
			})
		},
		{
			label: "Avaliações",
			to: "/proprietario/avaliacoes",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquareHeart, {
				size: 18,
				"aria-hidden": "true"
			})
		},
		{
			label: "Promoções",
			to: "/proprietario/promocoes",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Megaphone, {
				size: 18,
				"aria-hidden": "true"
			})
		},
		{
			label: "Notificações",
			to: "/proprietario/notificacoes",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, {
				size: 18,
				"aria-hidden": "true"
			}),
			...unread > 0 ? { badge: unread } : {}
		},
		{
			label: "Configurações",
			to: "/proprietario/configuracoes",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, {
				size: 18,
				"aria-hidden": "true"
			})
		}
	];
}
//#endregion
export { getOwnerNav as n, getClientNav as t };
