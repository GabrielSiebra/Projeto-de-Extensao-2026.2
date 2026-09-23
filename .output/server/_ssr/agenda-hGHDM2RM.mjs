import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { gt as CalendarDays, lt as ChevronRight, ut as ChevronLeft } from "../_libs/lucide-react.mjs";
import { A as useApp, E as toISODate, S as ownerVenueId, a as Panel, d as StatusBadge, f as addDaysISO, h as dayNumber, i as EmptyState, j as weekdayShort, n as AppShell, y as formatDateLong } from "./AppShell-deypX_no.mjs";
import { n as getOwnerNav } from "./navItems-waG9qci2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/agenda-hGHDM2RM.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hours = Array.from({ length: 15 }, (_, index) => index + 8);
function startOfWeekISO(dateISO) {
	const date = /* @__PURE__ */ new Date(dateISO + "T12:00:00");
	const day = date.getDay();
	const diff = day === 0 ? -6 : 1 - day;
	date.setDate(date.getDate() + diff);
	return toISODate(date);
}
function OwnerAgenda() {
	const { reservations, ownerNotifications, venueById, teams } = useApp();
	const unread = ownerNotifications.filter((item) => !item.read).length;
	const venue = venueById(ownerVenueId);
	const [view, setView] = (0, import_react.useState)("week");
	const [selectedDate, setSelectedDate] = (0, import_react.useState)(addDaysISO(0));
	const [fieldFilter, setFieldFilter] = (0, import_react.useState)("all");
	const [statusFilter, setStatusFilter] = (0, import_react.useState)("all");
	const filtered = (0, import_react.useMemo)(() => reservations.filter((item) => {
		if (item.venueId !== "arena-central") return false;
		if (fieldFilter !== "all" && item.fieldName !== fieldFilter) return false;
		if (statusFilter !== "all" && item.status !== statusFilter) return false;
		return true;
	}), [
		reservations,
		fieldFilter,
		statusFilter
	]);
	const forDate = (dateISO) => filtered.filter((item) => item.date === dateISO).sort((a, b) => a.time.localeCompare(b.time));
	const dayList = forDate(selectedDate);
	const weekStart = startOfWeekISO(selectedDate);
	const weekDates = Array.from({ length: 7 }, (_, index) => addDaysISOOffset(weekStart, index));
	const monthMatrix = (0, import_react.useMemo)(() => {
		const base = /* @__PURE__ */ new Date(selectedDate + "T12:00:00");
		const year = base.getFullYear();
		const month = base.getMonth();
		const startOffset = (new Date(year, month, 1).getDay() + 6) % 7;
		const daysInMonth = new Date(year, month + 1, 0).getDate();
		const cells = [];
		for (let i = 0; i < startOffset; i += 1) cells.push({
			date: null,
			count: 0
		});
		for (let day = 1; day <= daysInMonth; day += 1) {
			const iso = toISODate(new Date(year, month, day));
			cells.push({
				date: iso,
				count: forDate(iso).length
			});
		}
		return cells;
	}, [selectedDate, filtered]);
	const shift = (delta) => {
		const date = /* @__PURE__ */ new Date(selectedDate + "T12:00:00");
		if (view === "month") date.setMonth(date.getMonth() + delta);
		else if (view === "week") date.setDate(date.getDate() + delta * 7);
		else date.setDate(date.getDate() + delta);
		setSelectedDate(toISODate(date));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
		role: "owner",
		active: "/proprietario/agenda",
		title: "Agenda",
		subtitle: `${venue?.name ?? ""} · reservas por dia, semana e mês`,
		nav: getOwnerNav(unread),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			style: {
				display: "grid",
				gap: 18
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "row-between",
					style: {
						flexWrap: "wrap",
						gap: 12
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							display: "flex",
							gap: 8,
							alignItems: "center",
							flexWrap: "wrap"
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "chip",
								onClick: () => shift(-1),
								"aria-label": "Anterior",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
									size: 15,
									"aria-hidden": "true"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								style: {
									color: "var(--forest-depths)",
									fontSize: 15
								},
								children: view === "month" ? (/* @__PURE__ */ new Date(selectedDate + "T12:00:00")).toLocaleDateString("pt-BR", {
									month: "long",
									year: "numeric"
								}) : formatDateLong(selectedDate)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "chip",
								onClick: () => shift(1),
								"aria-label": "Próximo",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
									size: 15,
									"aria-hidden": "true"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "chip chip-ghost",
								onClick: () => setSelectedDate(addDaysISO(0)),
								children: "Hoje"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						style: {
							display: "flex",
							gap: 8,
							flexWrap: "wrap"
						},
						children: [
							"day",
							"week",
							"month"
						].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: `chip ${view === item ? "active" : ""}`,
							onClick: () => setView(item),
							children: item === "day" ? "Dia" : item === "week" ? "Semana" : "Mês"
						}, item))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						display: "flex",
						gap: 10,
						flexWrap: "wrap",
						marginTop: 16
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						className: "select",
						style: { maxWidth: 200 },
						value: fieldFilter,
						onChange: (event) => setFieldFilter(event.target.value),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "all",
							children: "Todos os campos"
						}), venue?.fields.map((field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: field.name,
							children: field.name
						}, field.id))]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						className: "select",
						style: { maxWidth: 200 },
						value: statusFilter,
						onChange: (event) => setStatusFilter(event.target.value),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "all",
								children: "Todos os status"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "pending",
								children: "Pendentes"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "confirmed",
								children: "Confirmadas"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "live",
								children: "Em jogo"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "finished",
								children: "Finalizadas"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "cancelled",
								children: "Canceladas"
							})
						]
					})]
				})] }),
				view === "day" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
					title: formatDateLong(selectedDate),
					children: dayList.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, {
							size: 26,
							"aria-hidden": "true"
						}),
						title: "Dia livre",
						description: "Nenhuma reserva corresponde aos filtros nesta data."
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						style: {
							display: "grid",
							gap: 10
						},
						children: dayList.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgendaRow, { reservation: item }, item.id))
					})
				}),
				view === "week" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
					title: "Semana",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						style: { overflowX: "auto" },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "week-grid",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {}),
								weekDates.map((date) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "calendar-head",
									children: [weekdayShort(date), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										style: {
											fontSize: 14,
											color: date === toISODate(/* @__PURE__ */ new Date()) ? "var(--deep-verdant)" : "inherit"
										},
										children: dayNumber(date)
									})]
								}, date)),
								hours.map((hour) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: { display: "contents" },
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										style: {
											fontSize: 11,
											color: "var(--lichen-sage)",
											padding: "6px 4px",
											textAlign: "right"
										},
										children: [String(hour).padStart(2, "0"), "h"]
									}), weekDates.map((date) => {
										const slot = forDate(date).find((item) => Number(item.time.slice(0, 2)) === hour);
										return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											className: `week-cell ${slot ? "booked" : ""}`,
											style: {
												textAlign: "left",
												cursor: slot ? "pointer" : "default"
											},
											onClick: () => {
												if (slot) {
													setSelectedDate(date);
													setView("day");
												}
											},
											children: slot ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
												slot.time,
												" · ",
												slot.teamName ?? slot.clientName.split(" ")[0],
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
												slot.fieldName
											] }) : ""
										}, `${date}-${hour}`);
									})]
								}, hour))
							]
						})
					})
				}),
				view === "month" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
					title: (/* @__PURE__ */ new Date(selectedDate + "T12:00:00")).toLocaleDateString("pt-BR", {
						month: "long",
						year: "numeric"
					}),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "calendar-grid",
						children: [[
							"Seg",
							"Ter",
							"Qua",
							"Qui",
							"Sex",
							"Sáb",
							"Dom"
						].map((label) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "calendar-head",
							children: label
						}, label)), monthMatrix.map((cell, index) => {
							const todayISO = toISODate(/* @__PURE__ */ new Date());
							if (!cell.date) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "calendar-cell muted" }, `blank-${index}`);
							const reservationsDay = forDate(cell.date);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: `calendar-cell ${cell.date === todayISO ? "today" : ""} ${cell.date === selectedDate ? "selected" : ""}`,
								style: {
									textAlign: "left",
									cursor: "pointer"
								},
								onClick: () => {
									setSelectedDate(cell.date ?? todayISO);
									setView("day");
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "cal-num",
										children: dayNumber(cell.date)
									}),
									reservationsDay.slice(0, 2).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "cal-chip",
										children: [
											item.time,
											" ",
											item.teamName ?? item.clientName.split(" ")[0]
										]
									}, item.id)),
									cell.count > 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "cal-chip",
										children: [
											"+",
											cell.count - 2,
											" reservas"
										]
									})
								]
							}, cell.date);
						})]
					})
				})
			]
		})
	});
}
function AgendaRow({ reservation }) {
	const team = reservation.teamName;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "row-between",
		style: {
			flexWrap: "wrap",
			gap: 12,
			padding: "14px 16px",
			borderRadius: 16,
			border: "1px solid var(--mist-green)",
			background: "var(--bone-white)"
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			style: {
				display: "flex",
				gap: 14,
				alignItems: "center"
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
				style: {
					color: "var(--forest-depths)",
					minWidth: 110
				},
				children: [
					reservation.time,
					" — ",
					String(Number(reservation.time.slice(0, 2)) + 1).padStart(2, "0"),
					":00"
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
				style: {
					display: "block",
					fontSize: 14,
					color: "var(--moss-shadow)"
				},
				children: reservation.fieldName
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				style: {
					color: "var(--lichen-sage)",
					fontSize: 12.5
				},
				children: team ?? reservation.clientName
			})] })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			style: {
				display: "flex",
				gap: 10,
				alignItems: "center"
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				style: {
					color: "var(--lichen-sage)",
					fontSize: 12.5
				},
				children: reservation.code
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: reservation.status })]
		})]
	});
}
function addDaysISOOffset(dateISO, days) {
	const date = /* @__PURE__ */ new Date(dateISO + "T12:00:00");
	date.setDate(date.getDate() + days);
	return toISODate(date);
}
//#endregion
export { OwnerAgenda as component };
