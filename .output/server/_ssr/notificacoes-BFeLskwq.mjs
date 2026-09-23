import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { A as OctagonAlert, V as Info, bt as BellOff, c as TriangleAlert, ft as CheckCheck, k as PartyPopper } from "../_libs/lucide-react.mjs";
import { A as useApp, a as Panel, b as initialsOf, i as EmptyState, n as AppShell, r as Avatar } from "./AppShell-deypX_no.mjs";
import { n as getOwnerNav } from "./navItems-waG9qci2.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/notificacoes-BFeLskwq.js
var import_jsx_runtime = require_jsx_runtime();
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
function OwnerNotificationsPage() {
	const { ownerNotifications, markAllNotificationsRead } = useApp();
	const unread = ownerNotifications.filter((item) => !item.read).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
		role: "owner",
		active: "/proprietario/notificacoes",
		title: "Notificações",
		subtitle: unread > 0 ? `${unread} não lidas` : "Nenhuma novidade",
		nav: getOwnerNav(unread),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "chip",
				onClick: () => {
					markAllNotificationsRead("owner");
					toast.success("Notificações marcadas como lidas");
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckCheck, {
					size: 15,
					"aria-hidden": "true"
				}), " Marcar todas como lidas"]
			}),
			children: ownerNotifications.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BellOff, {
					size: 26,
					"aria-hidden": "true"
				}),
				title: "Nenhuma notificação",
				description: "Reservas, saques e avaliações vão aparecer aqui."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				style: {
					display: "grid",
					gap: 4
				},
				children: ownerNotifications.map((item) => {
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
//#endregion
export { OwnerNotificationsPage as component };
