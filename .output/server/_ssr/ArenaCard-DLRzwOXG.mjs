import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { I as MapPin, W as Heart, nt as Clock3 } from "../_libs/lucide-react.mjs";
import { A as useApp, c as Rating } from "./AppShell-deypX_no.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ArenaCard-DLRzwOXG.js
var import_jsx_runtime = require_jsx_runtime();
function ArenaCover({ venue, showFavorite = true, fill = false }) {
	const { isFavorite, toggleFavorite } = useApp();
	const favorite = isFavorite(venue.id);
	const initials = venue.name.split(" ").slice(0, 2).map((part) => part[0]).join("").toUpperCase();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "arena-cover",
		style: {
			filter: `hue-rotate(${venue.coverHue - 137}deg)`,
			height: fill ? "100%" : void 0
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "cover-center",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "cover-initials",
				"aria-hidden": "true",
				children: initials
			}),
			venue.popular && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "cover-badge",
				children: "Popular"
			}),
			showFavorite && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: `fav-button ${favorite ? "on" : ""}`,
				"aria-label": favorite ? "Remover dos favoritos" : "Adicionar aos favoritos",
				onClick: (event) => {
					event.preventDefault();
					event.stopPropagation();
					toggleFavorite(venue.id);
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
					size: 17,
					fill: favorite ? "currentColor" : "none",
					"aria-hidden": "true"
				})
			})
		]
	});
}
function ArenaCard({ venue }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "arena-card",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArenaCover, { venue }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "arena-body",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "row-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: venue.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rating, {
						value: venue.rating,
						count: venue.reviewCount
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "arena-meta",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
							size: 13,
							"aria-hidden": "true"
						}),
						venue.neighborhood,
						" · ",
						venue.distanceKm.toFixed(1),
						" km"
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock3, {
						size: 13,
						"aria-hidden": "true"
					}), venue.nextAvailability] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "arena-tags",
					children: venue.structure.slice(0, 3).map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: tag }, tag))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "arena-foot",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "arena-price",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: venue.pricePerHour.toLocaleString("pt-BR", {
							style: "currency",
							currency: "BRL"
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: " /hora" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/arena/$arenaId",
						params: { arenaId: venue.id },
						className: "button p-button button-dark no-underline",
						style: {
							minHeight: 40,
							padding: "8px 18px",
							width: "auto"
						},
						children: "Ver detalhes"
					})]
				})
			]
		})]
	});
}
//#endregion
export { ArenaCover as n, ArenaCard as t };
