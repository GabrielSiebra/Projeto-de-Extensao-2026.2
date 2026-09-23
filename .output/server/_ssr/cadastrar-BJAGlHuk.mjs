import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { H as ImagePlus, I as MapPin, Tt as ArrowLeft, ct as CircleCheck, dt as Check, f as Tag, vt as Building2, wt as ArrowRight } from "../_libs/lucide-react.mjs";
import { A as useApp, a as Panel, n as AppShell } from "./AppShell-deypX_no.mjs";
import { n as getOwnerNav } from "./navItems-waG9qci2.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cadastrar-BJAGlHuk.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var stepLabels = [
	"Informações",
	"Localização",
	"Estrutura",
	"Fotos",
	"Horários",
	"Preços",
	"Revisão"
];
var structureList = [
	"Estacionamento",
	"Vestiário",
	"Iluminação LED",
	"Churrasqueira",
	"Bebidas",
	"Lanchonete",
	"Wi-Fi",
	"Bar"
];
function VenueWizard() {
	const { ownerNotifications, addVenue } = useApp();
	const navigate = useNavigate();
	const unread = ownerNotifications.filter((item) => !item.read).length;
	const [step, setStep] = (0, import_react.useState)(0);
	const [done, setDone] = (0, import_react.useState)(null);
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		description: "",
		neighborhood: "",
		city: "Fortaleza",
		address: "",
		structure: [
			"Estacionamento",
			"Vestiário",
			"Iluminação LED"
		],
		opening: "06:00",
		closing: "23:00",
		price: 120,
		fieldsCount: 2,
		photos: 3
	});
	const patch = (partial) => setForm((current) => ({
		...current,
		...partial
	}));
	const canNext = () => {
		if (step === 0) return form.name.trim().length > 2 && form.description.trim().length > 10;
		if (step === 1) return form.neighborhood.trim() !== "" && form.address.trim() !== "";
		return true;
	};
	const finish = () => {
		const id = `nova-${Date.now()}`;
		const venue = {
			id,
			name: form.name.trim(),
			neighborhood: form.neighborhood.trim(),
			city: form.city,
			address: form.address.trim(),
			distanceKm: 5,
			rating: 5,
			reviewCount: 0,
			pricePerHour: Number(form.price),
			structure: form.structure,
			rules: ["Chegue 10 minutos antes do horário", "Cancelamento gratuito até 12 horas antes"],
			description: form.description.trim(),
			nextAvailability: "Hoje",
			popular: false,
			coverHue: 137,
			mapX: 50,
			mapY: 50,
			closedHours: [6, 23],
			blockedHours: [],
			fields: Array.from({ length: Math.max(1, form.fieldsCount) }, (_, index) => ({
				id: `${id}-campo-${index + 1}`,
				venueId: id,
				name: `Campo ${String(index + 1).padStart(2, "0")}`,
				type: "Society 5x5",
				capacity: 10,
				pricePerHour: Number(form.price),
				status: "available"
			}))
		};
		addVenue(venue);
		setDone(venue);
		toast.success("Areninha cadastrada com sucesso!");
	};
	if (done) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
		role: "owner",
		active: "/proprietario/cadastrar",
		title: "Cadastro concluído",
		nav: getOwnerNav(unread),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			style: {
				textAlign: "center",
				padding: "28px 12px"
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "success-burst",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
						size: 42,
						"aria-hidden": "true"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					style: {
						margin: "22px 0 8px",
						color: "var(--forest-depths)",
						fontSize: 28
					},
					children: "Areninha cadastrada com sucesso!"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					style: {
						margin: "0 auto 26px",
						color: "var(--lichen-sage)",
						maxWidth: 460
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: done.name }), " já está disponível na busca (estado local da demonstração)."]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						display: "flex",
						gap: 12,
						justifyContent: "center",
						flexWrap: "wrap"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "button p-button button-dark",
						style: { width: "auto" },
						onClick: () => navigate({ to: "/proprietario" }),
						children: "Ir para o dashboard"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "button p-button button-outline",
						style: { width: "auto" },
						onClick: () => navigate({ to: "/buscar" }),
						children: "Ver na busca"
					})]
				})
			]
		}) })
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
		role: "owner",
		active: "/proprietario/cadastrar",
		title: "Cadastrar areninha",
		subtitle: "Assistente em 7 etapas — tudo simulado, sem envio de dados",
		nav: getOwnerNav(unread),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			style: {
				display: "grid",
				gap: 18
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "wizard-nav",
					children: stepLabels.map((label, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: index === step ? "active" : index < step ? "done" : "",
						onClick: () => setStep(index),
						children: [
							index < step ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
								size: 13,
								"aria-hidden": "true"
							}) : index + 1,
							" ",
							label
						]
					}, label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
					title: `${step + 1}. ${stepLabels[step]}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							display: "grid",
							gap: 14
						},
						children: [
							step === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "field-label",
									htmlFor: "wiz-name",
									children: "Nome da areninha"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "wiz-name",
									className: "input",
									placeholder: "Ex.: Arena do Cocó Society",
									value: form.name,
									onChange: (event) => patch({ name: event.target.value })
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "field-label",
									htmlFor: "wiz-desc",
									children: "Descrição"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									id: "wiz-desc",
									className: "textarea",
									placeholder: "Conte os diferenciais da sua estrutura...",
									value: form.description,
									onChange: (event) => patch({ description: event.target.value })
								})] }),
								!canNext() && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									style: {
										fontSize: 12.5,
										color: "var(--st-danger)"
									},
									children: "Preencha o nome e uma descrição com pelo menos 10 caracteres."
								})
							] }),
							step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										display: "grid",
										gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
										gap: 12
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "field-label",
										htmlFor: "wiz-hood",
										children: "Bairro"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "wiz-hood",
										className: "input",
										placeholder: "Ex.: Cocó",
										value: form.neighborhood,
										onChange: (event) => patch({ neighborhood: event.target.value })
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "field-label",
										htmlFor: "wiz-city",
										children: "Cidade"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "wiz-city",
										className: "input",
										value: form.city,
										onChange: (event) => patch({ city: event.target.value })
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "field-label",
									htmlFor: "wiz-addr",
									children: "Endereço completo"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "wiz-addr",
									className: "input",
									placeholder: "Rua, número, complemento",
									value: form.address,
									onChange: (event) => patch({ address: event.target.value })
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									style: {
										margin: 0,
										display: "flex",
										gap: 8,
										alignItems: "center",
										fontSize: 13,
										color: "var(--lichen-sage)"
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
										size: 14,
										"aria-hidden": "true"
									}), " A posição no mapa será aproximada e ilustrativa."]
								})
							] }),
							step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								style: {
									margin: 0,
									color: "var(--lichen-sage)",
									fontSize: 14
								},
								children: "Selecione a estrutura disponível:"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: {
									display: "flex",
									flexWrap: "wrap",
									gap: 8
								},
								children: structureList.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: `chip ${form.structure.includes(tag) ? "active" : ""}`,
									onClick: () => patch({ structure: form.structure.includes(tag) ? form.structure.filter((item) => item !== tag) : [...form.structure, tag] }),
									children: tag
								}, tag))
							})] }),
							step === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								style: {
									margin: 0,
									color: "var(--lichen-sage)",
									fontSize: 14
								},
								children: "Adicione fotos dos campos e da estrutura (simulação)."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: {
									display: "grid",
									gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
									gap: 10
								},
								children: [Array.from({ length: form.photos }, (_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										height: 90,
										borderRadius: 14,
										background: `linear-gradient(${140 + index * 25}deg, var(--forest-depths), var(--deep-verdant))`,
										display: "grid",
										placeItems: "center",
										color: "var(--electric-sprout)",
										fontWeight: 700,
										fontSize: 12
									},
									children: ["Foto ", index + 1]
								}, index)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									style: {
										height: 90,
										borderRadius: 14,
										border: "1.5px dashed var(--mist-green)",
										background: "var(--bone-white)",
										color: "var(--lichen-sage)",
										cursor: "pointer",
										display: "grid",
										placeItems: "center",
										gap: 4,
										fontSize: 12
									},
									onClick: () => patch({ photos: form.photos + 1 }),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlus, {
										size: 18,
										"aria-hidden": "true"
									}), "Adicionar"]
								})]
							})] }),
							step === 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: {
									display: "grid",
									gridTemplateColumns: "1fr 1fr",
									gap: 12,
									maxWidth: 420
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "field-label",
									htmlFor: "wiz-open",
									children: "Abertura"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									id: "wiz-open",
									className: "select",
									value: form.opening,
									onChange: (event) => patch({ opening: event.target.value }),
									children: [
										"05:00",
										"06:00",
										"07:00",
										"08:00"
									].map((hour) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: hour }, hour))
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "field-label",
									htmlFor: "wiz-close",
									children: "Fechamento"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									id: "wiz-close",
									className: "select",
									value: form.closing,
									onChange: (event) => patch({ closing: event.target.value }),
									children: [
										"22:00",
										"23:00",
										"00:00",
										"01:00"
									].map((hour) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: hour }, hour))
								})] })]
							}),
							step === 5 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: {
									display: "grid",
									gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
									gap: 12
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "field-label",
									htmlFor: "wiz-price",
									children: "Preço por hora (R$)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "wiz-price",
									type: "number",
									min: 50,
									className: "input",
									value: form.price,
									onChange: (event) => patch({ price: Number(event.target.value) })
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "field-label",
									htmlFor: "wiz-fields",
									children: "Quantidade de campos"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									id: "wiz-fields",
									className: "select",
									value: form.fieldsCount,
									onChange: (event) => patch({ fieldsCount: Number(event.target.value) }),
									children: [
										1,
										2,
										3,
										4
									].map((count) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
										value: count,
										children: [
											count,
											" campo",
											count > 1 ? "s" : ""
										]
									}, count))
								})] })]
							}),
							step === 6 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: {
									display: "grid",
									gap: 10
								},
								children: [
									[`${form.name || "—"}`, form.description || "Sem descrição"],
									["Localização", `${form.address}, ${form.neighborhood} — ${form.city}`],
									["Estrutura", form.structure.join(" · ") || "—"],
									["Fotos", `${form.photos} fotos simuladas`],
									["Horários", `${form.opening} às ${form.closing}`],
									["Preços", `R$ ${form.price}/hora · ${form.fieldsCount} campo(s)`]
								].map(([label, value], index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "row-between",
									style: {
										gap: 16,
										padding: "12px 0",
										borderBottom: "1px dashed var(--mist-green)"
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										style: {
											color: "var(--lichen-sage)",
											fontSize: 13,
											minWidth: 110
										},
										children: index === 0 ? "Informações" : label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										style: {
											color: "var(--forest-depths)",
											fontSize: 14,
											textAlign: "right"
										},
										children: value
									})]
								}, label))
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						display: "flex",
						justifyContent: "space-between",
						gap: 12
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "button p-button button-outline",
						style: { width: "auto" },
						disabled: step === 0,
						onClick: () => setStep((current) => Math.max(0, current - 1)),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
							size: 16,
							"aria-hidden": "true"
						}), " Voltar"]
					}), step < 6 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "button p-button button-dark",
						style: { width: "auto" },
						disabled: !canNext(),
						onClick: () => setStep((current) => Math.min(6, current + 1)),
						children: ["Continuar ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
							size: 16,
							"aria-hidden": "true"
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "button p-button button-primary",
						style: { width: "auto" },
						onClick: finish,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, {
							size: 16,
							"aria-hidden": "true"
						}), " Cadastrar areninha"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					style: {
						margin: 0,
						fontSize: 12.5,
						color: "var(--lichen-sage)",
						display: "flex",
						gap: 8,
						alignItems: "center"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
						size: 14,
						"aria-hidden": "true"
					}), " Cadastro 100% local: nada é enviado a servidores."]
				})
			]
		})
	});
}
//#endregion
export { VenueWizard as component };
