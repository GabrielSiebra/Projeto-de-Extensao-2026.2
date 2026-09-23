import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { Z as Crown, _t as CalendarCheck, i as UsersRound, s as Trophy } from "../_libs/lucide-react.mjs";
import { A as useApp, E as toISODate, a as Panel, b as initialsOf, n as AppShell, r as Avatar, v as formatDate } from "./AppShell-deypX_no.mjs";
import { n as getOwnerNav } from "./navItems-waG9qci2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/times-BjUkw7WC.js
var import_jsx_runtime = require_jsx_runtime();
function OwnerTeams() {
	const { ownerNotifications, teams, reservations } = useApp();
	const unread = ownerNotifications.filter((item) => !item.read).length;
	const today = toISODate(/* @__PURE__ */ new Date());
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		role: "owner",
		active: "/proprietario/times",
		title: "Times",
		subtitle: "Times que já reservaram na sua areninha",
		nav: getOwnerNav(unread),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid-cards",
			children: teams.map((team) => {
				const teamReservations = reservations.filter((item) => item.venueId === "arena-central" && item.teamId === team.id);
				const played = teamReservations.filter((item) => item.status === "finished" || item.date < today);
				const next = teamReservations.filter((item) => item.date >= today && item.status === "confirmed").sort((a, b) => a.date.localeCompare(b.date))[0];
				const last = [...teamReservations].filter((item) => item.date < today).sort((a, b) => b.date.localeCompare(a.date))[0];
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
								style: {
									display: "flex",
									gap: 14,
									alignItems: "center"
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
									initials: team.initials,
									size: "lg"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									style: {
										display: "block",
										color: "var(--forest-depths)",
										fontSize: 17
									},
									children: team.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									style: {
										display: "inline-flex",
										gap: 6,
										color: "var(--lichen-sage)",
										fontSize: 13
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crown, {
											size: 13,
											"aria-hidden": "true"
										}),
										" ",
										team.captain
									]
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "arena-tags",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("em", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UsersRound, {
											size: 12,
											"aria-hidden": "true"
										}),
										" ",
										team.players.length,
										" jogadores"
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("em", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarCheck, {
											size: 12,
											"aria-hidden": "true"
										}),
										" ",
										teamReservations.length,
										" ",
										"reservas"
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("em", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, {
											size: 12,
											"aria-hidden": "true"
										}),
										" ",
										played.length,
										" partidas"
									] })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: {
									display: "grid",
									gap: 6,
									fontSize: 13
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									style: { color: "var(--lichen-sage)" },
									children: [
										"Último jogo:",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											style: { color: "var(--moss-shadow)" },
											children: last ? formatDate(last.date) : "—"
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									style: { color: "var(--lichen-sage)" },
									children: [
										"Próximo jogo:",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											style: { color: "var(--deep-verdant)" },
											children: next ? `${formatDate(next.date)} · ${next.time}` : "sem agendamento"
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: {
									display: "flex",
									flexWrap: "wrap",
									gap: 6
								},
								children: [team.players.slice(0, 6).map((player) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "chip",
									style: {
										padding: "5px 10px",
										fontSize: 11.5
									},
									children: player.name.split(" ")[0]
								}, player.id)), team.players.length > 6 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "chip chip-ghost",
									style: {
										padding: "5px 10px",
										fontSize: 11.5
									},
									children: ["+", team.players.length - 6]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "arena-foot",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									style: {
										color: "var(--lichen-sage)",
										fontSize: 12.5
									},
									children: ["Elenco de ", initialsOf(team.captain)]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/proprietario/agenda",
									className: "chip active",
									style: { textDecoration: "none" },
									children: "Ver na agenda"
								})]
							})
						]
					})
				}, team.id);
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
			title: "Observação",
			bodyClass: "panel-body",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				style: {
					margin: 0,
					color: "var(--lichen-sage)",
					fontSize: 13.5
				},
				children: "Os elencos são geridos na área do time (painel do cliente) e refletem aqui em tempo real nesta demonstração."
			})
		})]
	});
}
//#endregion
export { OwnerTeams as component };
