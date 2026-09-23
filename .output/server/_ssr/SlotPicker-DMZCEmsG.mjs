import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { dt as Check, ht as CalendarX2 } from "../_libs/lucide-react.mjs";
import { A as useApp, i as EmptyState } from "./AppShell-deypX_no.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SlotPicker-DMZCEmsG.js
var import_jsx_runtime = require_jsx_runtime();
var legend = [
	{
		color: "var(--st-success)",
		label: "Disponível"
	},
	{
		color: "var(--st-warning)",
		label: "Reservado"
	},
	{
		color: "var(--st-danger)",
		label: "Ocupado"
	},
	{
		color: "var(--st-live)",
		label: "Em jogo"
	},
	{
		color: "var(--st-neutral)",
		label: "Indisponível"
	}
];
var slotCopy = {
	available: "Disponível",
	reserved: "Reservado",
	occupied: "Ocupado",
	live: "Em jogo",
	unavailable: "Indisponível"
};
var dotColor = {
	available: "var(--st-success)",
	reserved: "var(--st-warning)",
	occupied: "var(--st-danger)",
	live: "var(--st-live)",
	unavailable: "var(--st-neutral)"
};
function SlotLegend() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "slot-legend",
		"aria-label": "Legenda de horários",
		children: legend.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
			style: { background: item.color },
			"aria-hidden": "true"
		}), item.label] }, item.label))
	});
}
function SlotPicker({ slots, venueId, date, onSelect, selectedTime }) {
	const { inWaitlist, joinWaitlist } = useApp();
	if (slots.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarX2, {
			size: 26,
			"aria-hidden": "true"
		}),
		title: "Nenhum horário para esta data",
		description: "Escolha outra data na barra de dias para ver a disponibilidade da areninha."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlotLegend, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "slot-grid",
		style: { marginTop: 16 },
		role: "radiogroup",
		"aria-label": "Horários",
		children: slots.map((slot) => {
			const selectable = slot.status === "available";
			const waiting = inWaitlist(venueId, date, slot.time);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				role: "radio",
				"aria-checked": selectedTime === slot.time,
				className: `slot-card slot-${slot.status} ${selectedTime === slot.time ? "selected" : ""}`,
				disabled: !selectable && slot.status !== "unavailable" && slot.status !== "reserved",
				style: selectedTime === slot.time ? {
					borderColor: "var(--deep-verdant)",
					background: "var(--sprout-wash)"
				} : void 0,
				onClick: () => {
					if (selectable) onSelect(slot);
					else if (slot.status === "reserved" || slot.status === "unavailable") {
						if (!waiting) {
							joinWaitlist({
								venueId,
								date,
								time: slot.time
							});
							toast.success("Você entrou na lista de espera deste horário.", { description: `${date} · ${slot.time} — avisaremos se um horário liberar.` });
						}
					}
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [
					slot.time,
					" — ",
					String(slot.hour + 1).padStart(2, "0"),
					":00"
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
					style: { background: dotColor[slot.status] },
					"aria-hidden": "true"
				}), selectable ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [selectedTime === slot.time && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
					size: 12,
					"aria-hidden": "true"
				}), slot.status === "available" && waiting ? "Na lista" : slotCopy[slot.status]] }) : slotCopy[slot.status]] })]
			}, slot.time);
		})
	})] });
}
//#endregion
export { SlotPicker as t };
