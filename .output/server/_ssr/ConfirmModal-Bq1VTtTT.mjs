import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as X } from "../_libs/lucide-react.mjs";
import { t as Button } from "../_libs/primereact.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ConfirmModal-Bq1VTtTT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ConfirmModal({ open, title, description, children, confirmLabel = "Confirmar", cancelLabel = "Voltar", onConfirm, onCancel, tone = "default" }) {
	(0, import_react.useEffect)(() => {
		if (!open) return void 0;
		const onKey = (event) => {
			if (event.key === "Escape") onCancel();
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [open, onCancel]);
	if (!open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "modal-overlay",
		role: "presentation",
		onClick: onCancel,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "modal-card",
			role: "dialog",
			"aria-modal": "true",
			"aria-label": title,
			onClick: (event) => event.stopPropagation(),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "modal-head",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: title }), description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: description })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "modal-close",
						"aria-label": "Fechar",
						onClick: onCancel,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
							size: 17,
							"aria-hidden": "true"
						})
					})]
				}),
				children && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "modal-body",
					children
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "modal-foot",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "button button-outline",
						onClick: onCancel,
						children: cancelLabel
					}), onConfirm && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: tone === "danger" ? "button button-danger" : "button button-primary",
						onClick: onConfirm,
						children: confirmLabel
					})]
				})
			]
		})
	});
}
//#endregion
export { ConfirmModal as t };
