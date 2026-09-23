import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { Ct as ArrowUpRight, Et as ArrowDownRight, I as MapPin, N as Menu, at as CircleUserRound, dt as Check, gt as CalendarDays, i as UsersRound, lt as ChevronRight, nt as Clock3, q as Goal, t as X, ut as ChevronLeft } from "../_libs/lucide-react.mjs";
import { t as Button } from "../_libs/primereact.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-MQPN11CM.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var links = [
	{
		label: "Início",
		href: "#inicio"
	},
	{
		label: "Como funciona",
		href: "#como-funciona"
	},
	{
		label: "Funcionalidades",
		href: "#funcionalidades"
	},
	{
		label: "Encontrar areninha",
		to: "/buscar"
	}
];
function Navbar() {
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const close = () => setOpen(false);
		window.addEventListener("resize", close);
		return () => window.removeEventListener("resize", close);
	}, []);
	const goToBooking = () => {
		document.querySelector("#agendamento")?.scrollIntoView({ behavior: "smooth" });
		setOpen(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "site-header",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "nav-shell",
			"aria-label": "Navegação principal",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					className: "wordmark",
					href: "#inicio",
					"aria-label": "Meu Campo, ir ao início",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "wordmark-mark",
						"aria-hidden": "true",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})
					}), "MEU CAMPO"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "nav-links",
					"aria-label": "Seções da página",
					children: links.map((link) => "to" in link ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: link.to,
						children: link.label
					}, link.to) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: link.href,
						children: link.label
					}, link.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/login",
					className: "button p-button button-primary nav-cta no-underline",
					children: "Entrar"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "button button-primary nav-cta",
					onClick: goToBooking,
					children: "Agendar agora"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "menu-button",
					"aria-label": open ? "Fechar menu" : "Abrir menu",
					"aria-expanded": open,
					"aria-controls": "mobile-navigation",
					onClick: () => setOpen((value) => !value),
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { "aria-hidden": "true" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { "aria-hidden": "true" })
				}),
				open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mobile-menu",
					id: "mobile-navigation",
					children: [
						links.map((link) => "to" in link ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: link.to,
							onClick: () => setOpen(false),
							children: link.label
						}, link.to) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: link.href,
							onClick: () => setOpen(false),
							children: link.label
						}, link.href)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/login",
							onClick: () => setOpen(false),
							children: "Entrar na plataforma"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "button button-primary",
							onClick: goToBooking,
							children: "Agendar agora"
						})
					]
				})
			]
		})
	});
}
function Hero() {
	const scrollTo = (selector) => document.querySelector(selector)?.scrollIntoView({ behavior: "smooth" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "hero",
		id: "inicio",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hero-orb",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container hero-layout",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hero-copy reveal",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "eyebrow eyebrow-dark",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), "A partida começa aqui"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { children: ["Seu jogo começa com ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "um horário." })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "hero-lead",
							children: "Encontre horários, organize sua partida e monte seu time de forma simples em um só lugar."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hero-actions",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/buscar",
								className: "button p-button button-primary button-large no-underline",
								children: ["Agendar uma areninha ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownRight, {
									size: 18,
									"aria-hidden": "true"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								className: "button button-ghost button-large",
								onClick: () => scrollTo("#como-funciona"),
								children: "Como funciona"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hero-proof",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
								size: 15,
								"aria-hidden": "true"
							}), " Horários em um só lugar"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
								size: 15,
								"aria-hidden": "true"
							}), " Times organizados"] })]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hero-product",
					"aria-label": "Prévia visual da plataforma de agendamento",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "float-card venue-card",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mockup-topline",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Próxima partida" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "live-dot",
										children: "Confirmada"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "venue-title-row",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "icon-tile",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
											size: 20,
											"aria-hidden": "true"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Areninha Central" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Hoje · 20:00" })] })]
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
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "float-card time-card",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "time-icon",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock3, {
										size: 19,
										"aria-hidden": "true"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Horário selecionado" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "20:00" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Disponível para reserva" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "float-card squad-card",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "squad-heading",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UsersRound, {
										size: 18,
										"aria-hidden": "true"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Seu time" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "8/10" })
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "avatar-row",
								"aria-label": "Oito jogadores confirmados",
								children: [[
									"JM",
									"RL",
									"AV",
									"TS",
									"GP"
								].map((name) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: name }, name)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "+3" })]
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hero-marquee",
				"aria-hidden": "true",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "ESCOLHA O HORÁRIO" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "•" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "MONTE SEU TIME" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "•" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "JOGUE" })
				]
			})
		]
	});
}
var features = [
	{
		icon: CalendarDays,
		index: "01",
		title: "Agendamento simplificado",
		description: "Escolha a areninha, encontre um horário disponível e organize sua partida com poucos passos."
	},
	{
		icon: CircleUserRound,
		index: "02",
		title: "Perfis de jogadores",
		description: "Tenha perfis individuais para facilitar a organização e participação dos jogadores."
	},
	{
		icon: UsersRound,
		index: "03",
		title: "Formação de times",
		description: "Organize os participantes e facilite a formação dos times antes da partida."
	}
];
var steps = [
	{
		number: "01",
		icon: CircleUserRound,
		title: "Cadastrar",
		description: "Crie seu perfil para entrar em campo."
	},
	{
		number: "02",
		icon: CalendarDays,
		title: "Escolher horário",
		description: "Veja as opções livres na areninha."
	},
	{
		number: "03",
		icon: UsersRound,
		title: "Montar time",
		description: "Reúna a galera e organize os lados."
	},
	{
		number: "04",
		icon: Goal,
		title: "Jogar",
		description: "Confirme os detalhes e partiu jogo."
	}
];
var schedule = [
	{
		time: "18:00",
		status: "Disponível",
		available: true
	},
	{
		time: "19:00",
		status: "Reservado",
		available: false
	},
	{
		time: "20:00",
		status: "Disponível",
		available: true
	},
	{
		time: "21:00",
		status: "Disponível",
		available: true
	}
];
var venue = {
	name: "Areninha Central",
	location: "Centro esportivo",
	day: "Hoje",
	icon: MapPin
};
function Features() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section light-section",
		id: "funcionalidades",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "section-heading",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "eyebrow",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), "Feito para quem joga"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
					"Menos conversa.",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"Mais bola rolando."
				] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Da escolha da quadra à divisão dos jogadores, tudo pensado para tirar a organização do grupo e colocar o jogo em campo." })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "feature-grid",
				children: features.map(({ icon: Icon, index, title, description }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "feature-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "feature-card-top",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: index }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							size: 24,
							"aria-hidden": "true"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: description })] })]
				}, title))
			})]
		})
	});
}
function HowItWorks() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section process-section",
		id: "como-funciona",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "process-intro",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "eyebrow eyebrow-dark",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), "Como funciona"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Da ideia ao apito inicial." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Uma sequência simples para reunir os jogadores e organizar cada detalhe antes da bola rolar." })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "steps-list",
				children: steps.map(({ number, icon: Icon, title, description }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "step-marker",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							size: 20,
							"aria-hidden": "true"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "step-number",
						children: number
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: title }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: description })
				] }, number))
			})]
		})
	});
}
function BookingPreview() {
	const [selected, setSelected] = (0, import_react.useState)("20:00");
	const [confirmed, setConfirmed] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section booking-section",
		id: "agendamento",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container booking-layout",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "booking-copy",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "eyebrow",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), "Prévia do agendamento"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
						"Seu horário,",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"sem complicação."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Veja como será fácil encontrar uma areninha e escolher o melhor horário para a sua turma." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "notice",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, {
							size: 19,
							"aria-hidden": "true"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Esta é uma demonstração visual. Nenhuma reserva será realizada." })]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "booking-window",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "window-bar",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "meucampo.app/agendar" })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "booking-content",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "booking-title",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Escolha seu horário" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: venue.name }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
										size: 14,
										"aria-hidden": "true"
									}),
									" ",
									venue.location
								] })
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "day-control",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										className: "icon-button",
										"aria-label": "Dia anterior",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: venue.day }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										className: "icon-button",
										"aria-label": "Próximo dia",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {})
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "date-strip",
							"aria-label": "Datas disponíveis",
							children: [
								{
									d: "SEG",
									n: "14"
								},
								{
									d: "TER",
									n: "15"
								},
								{
									d: "QUA",
									n: "16",
									active: true
								},
								{
									d: "QUI",
									n: "17"
								},
								{
									d: "SEX",
									n: "18"
								}
							].map((date) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: date.active ? "active" : "",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: date.d }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: date.n })]
							}, date.n))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "schedule-list",
							role: "radiogroup",
							"aria-label": "Horários de hoje",
							children: schedule.map((slot) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: `${selected === slot.time ? "selected" : ""} ${!slot.available ? "unavailable" : ""}`,
								disabled: !slot.available,
								role: "radio",
								"aria-checked": selected === slot.time,
								onClick: () => {
									setSelected(slot.time);
									setConfirmed(false);
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "slot-time",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock3, {
										size: 16,
										"aria-hidden": "true"
									}), slot.time]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "slot-status",
									children: [selected === slot.time && slot.available && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
										size: 14,
										"aria-hidden": "true"
									}), slot.status]
								})]
							}, slot.time))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "button button-dark booking-button",
							onClick: () => setConfirmed(true),
							children: confirmed ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
									size: 18,
									"aria-hidden": "true"
								}),
								" Horário selecionado: ",
								selected
							] }) : "Selecionar horário"
						})
					]
				})]
			})]
		})
	});
}
function CTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "cta-section",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container cta-inner",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "eyebrow eyebrow-dark",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), "O próximo jogo começa aqui"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
					"Pronto para organizar",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"o próximo jogo?"
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Tenha mais praticidade para encontrar horários, reunir jogadores e colocar sua partida em campo." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					className: "button button-primary button-large",
					onClick: () => document.querySelector("#agendamento")?.scrollIntoView({ behavior: "smooth" }),
					children: ["Começar agora ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
						size: 18,
						"aria-hidden": "true"
					})]
				})
			]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "footer",
		id: "sobre",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container footer-grid",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "footer-brand",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						className: "wordmark",
						href: "#inicio",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "wordmark-mark",
							"aria-hidden": "true",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})
						}), "ARENA"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Organize sua partida. Escolha o horário. Monte seu time. Jogue." })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Navegação" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#inicio",
						children: "Início"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#como-funciona",
						children: "Como funciona"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#funcionalidades",
						children: "Funcionalidades"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#sobre",
						children: "Sobre o projeto"
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Projeto de Extensão" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Curso de Análise e Desenvolvimento de Sistemas." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Integrantes do grupo: a definir" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Contato: a definir" })
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Institucional" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Links institucionais: a definir" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#inicio",
						children: ["Voltar ao topo ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
							size: 14,
							"aria-hidden": "true"
						})]
					})
				] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container footer-bottom",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "© 2026 Meu Campo" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Primeira etapa visual do projeto" })]
		})]
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "site-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Features, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HowItWorks, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingPreview, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTA, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Index as component };
