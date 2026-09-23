import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as Trash2, mt as Camera, x as Save } from "../_libs/lucide-react.mjs";
import { A as useApp, S as ownerVenueId, a as Panel, n as AppShell } from "./AppShell-deypX_no.mjs";
import { n as getOwnerNav } from "./navItems-waG9qci2.mjs";
import { n as ArenaCover } from "./ArenaCard-DLRzwOXG.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/areninha-MaU1G5Bn.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var allStructures = [
	"Estacionamento",
	"Vestiário",
	"Iluminação LED",
	"Churrasqueira",
	"Bebidas",
	"Lanchonete",
	"Wi-Fi",
	"Bar"
];
var openHours = [
	"06:00",
	"07:00",
	"08:00",
	"18:00",
	"19:00",
	"20:00",
	"21:00",
	"22:00",
	"23:00"
];
function OwnerVenueSettings() {
	const { ownerNotifications, venueById, updateVenue } = useApp();
	const navigate = useNavigate();
	const unread = ownerNotifications.filter((item) => !item.read).length;
	const venue = venueById(ownerVenueId);
	const [form, setForm] = (0, import_react.useState)({
		name: venue?.name ?? "",
		neighborhood: venue?.neighborhood ?? "",
		address: venue?.address ?? "",
		description: venue?.description ?? "",
		price: venue?.pricePerHour ?? 140,
		structure: venue?.structure ?? [],
		opening: "06:00",
		closing: "23:00"
	});
	if (!venue) return null;
	const toggleStructure = (tag) => {
		setForm((current) => ({
			...current,
			structure: current.structure.includes(tag) ? current.structure.filter((item) => item !== tag) : [...current.structure, tag]
		}));
	};
	const save = () => {
		updateVenue(venue.id, {
			name: form.name.trim() || venue.name,
			neighborhood: form.neighborhood,
			address: form.address,
			description: form.description,
			pricePerHour: Number(form.price),
			structure: form.structure
		});
		toast.success("Areninha atualizada", { description: "As alterações já valem para a busca." });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
		role: "owner",
		active: "/proprietario/areninha",
		title: "Minha areninha",
		subtitle: "Informações públicas exibidas para os clientes",
		nav: getOwnerNav(unread),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			style: {
				display: "grid",
				gap: 18
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
						gap: 14
					},
					children: [[
						0,
						1,
						2
					].map((index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						style: {
							height: 140,
							borderRadius: 20,
							overflow: "hidden",
							filter: `hue-rotate(${index * 14 - 10}deg)`
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArenaCover, {
							venue: {
								...venue,
								id: `${venue.id}-pic-${index}`,
								popular: index === 0
							},
							showFavorite: false,
							fill: true
						})
					}, index)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "panel",
						style: {
							height: 140,
							display: "grid",
							placeItems: "center",
							cursor: "pointer",
							borderStyle: "dashed",
							color: "var(--lichen-sage)",
							background: "var(--pure-white)"
						},
						onClick: () => toast.info("Upload simulado", { description: "Nenhum arquivo é enviado nesta demo." }),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							style: {
								display: "grid",
								gap: 8,
								justifyItems: "center",
								fontSize: 13
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, {
								size: 22,
								"aria-hidden": "true"
							}), "Adicionar foto"]
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
						gap: 18
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
						title: "Informações",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								display: "grid",
								gap: 14
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "field-label",
									htmlFor: "venue-name",
									children: "Nome"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "venue-name",
									className: "input",
									value: form.name,
									onChange: (event) => setForm((current) => ({
										...current,
										name: event.target.value
									}))
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "field-label",
									htmlFor: "venue-hood",
									children: "Bairro"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "venue-hood",
									className: "input",
									value: form.neighborhood,
									onChange: (event) => setForm((current) => ({
										...current,
										neighborhood: event.target.value
									}))
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "field-label",
									htmlFor: "venue-addr",
									children: "Endereço"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "venue-addr",
									className: "input",
									value: form.address,
									onChange: (event) => setForm((current) => ({
										...current,
										address: event.target.value
									}))
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "field-label",
									htmlFor: "venue-desc",
									children: "Descrição"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									id: "venue-desc",
									className: "textarea",
									value: form.description,
									onChange: (event) => setForm((current) => ({
										...current,
										description: event.target.value
									}))
								})] })
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
								title: "Preços e horários",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										display: "grid",
										gap: 14
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "field-label",
											htmlFor: "venue-price",
											children: "Preço por hora (R$)"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											id: "venue-price",
											type: "number",
											min: 50,
											className: "input",
											value: form.price,
											onChange: (event) => setForm((current) => ({
												...current,
												price: Number(event.target.value)
											}))
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											style: {
												display: "grid",
												gridTemplateColumns: "1fr 1fr",
												gap: 12
											},
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "field-label",
												htmlFor: "venue-open",
												children: "Abertura"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
												id: "venue-open",
												className: "select",
												value: form.opening,
												onChange: (event) => setForm((current) => ({
													...current,
													opening: event.target.value
												})),
												children: openHours.map((hour) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: hour }, hour))
											})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "field-label",
												htmlFor: "venue-close",
												children: "Fechamento"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
												id: "venue-close",
												className: "select",
												value: form.closing,
												onChange: (event) => setForm((current) => ({
													...current,
													closing: event.target.value
												})),
												children: openHours.map((hour) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: hour }, hour))
											})] })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											style: {
												fontSize: 12.5,
												color: "var(--lichen-sage)"
											},
											children: "Horários de bloqueio manual são feitos na página de Campos."
										})
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
								title: "Estrutura",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									style: {
										display: "flex",
										flexWrap: "wrap",
										gap: 8
									},
									children: allStructures.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: `chip ${form.structure.includes(tag) ? "active" : ""}`,
										onClick: () => toggleStructure(tag),
										children: tag
									}, tag))
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
								title: "Campos cadastrados",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									style: {
										display: "grid",
										gap: 8
									},
									children: venue.fields.map((field) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "row-between",
										style: {
											padding: "10px 12px",
											borderRadius: 12,
											background: "var(--bone-white)",
											fontSize: 13.5
										},
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												style: { color: "var(--forest-depths)" },
												children: field.name
											}),
											" ·",
											" ",
											field.type
										] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											className: "chip chip-ghost",
											onClick: () => navigate({ to: "/proprietario/campos" }),
											children: "Gerenciar"
										})]
									}, field.id))
								})
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						display: "flex",
						gap: 10,
						justifyContent: "flex-end"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "button p-button button-outline",
						style: { width: "auto" },
						onClick: () => toast.info("Alterações descartadas"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {
							size: 16,
							"aria-hidden": "true"
						}), " Descartar"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "button p-button button-dark",
						style: { width: "auto" },
						onClick: save,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, {
							size: 16,
							"aria-hidden": "true"
						}), " Salvar alterações"]
					})]
				})
			]
		})
	});
}
//#endregion
export { OwnerVenueSettings as component };
