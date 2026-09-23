import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as parseISO, r as format, t as ptBR } from "../_libs/date-fns.mjs";
import { L as LogOut, N as Menu, lt as ChevronRight, p as Star, t as X, yt as Bell } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/AppShell-deypX_no.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var baseRules = [
	"Chegue 10 minutos antes do horário agendado",
	"Traga chutes, coletes e bolas são fornecidos pela areninha",
	"Cancelamento gratuito até 12 horas antes da partida",
	"É proibido o uso de cravo e chuteira de futsal com ponteira metálica"
];
function fields(venueId, defs) {
	return defs.map(([name, type, capacity, price], index) => ({
		id: `${venueId}-campo-${index + 1}`,
		venueId,
		name,
		type,
		capacity,
		pricePerHour: price,
		status: "available"
	}));
}
var venues = [
	{
		id: "arena-central",
		name: "Areninha Central",
		neighborhood: "Aldeota",
		city: "Fortaleza",
		address: "Av. Antônio Justa, 1420 — Aldeota, Fortaleza/CE",
		distanceKm: 1.2,
		rating: 4.8,
		reviewCount: 214,
		pricePerHour: 140,
		structure: [
			"Estacionamento",
			"Vestiário",
			"Iluminação LED",
			"Churrasqueira",
			"Bebidas"
		],
		rules: baseRules,
		description: "Areninha de society no coração da Aldeota, com dois campos revestidos em grama sintética importada, iluminação LED de última geração e estrutura completa para treinos, peladas de sexta e campeonatos corporativos.",
		nextAvailability: "Hoje às 21:00",
		popular: true,
		coverHue: 137,
		mapX: 46,
		mapY: 42,
		closedHours: [
			6,
			7,
			23
		],
		blockedHours: [12, 13],
		fields: fields("arena-central", [
			[
				"Campo 01",
				"Society 5x5",
				10,
				140
			],
			[
				"Campo 02",
				"Society 5x5",
				10,
				130
			],
			[
				"Campo 03",
				"Futsal 4x4",
				8,
				110
			]
		])
	},
	{
		id: "ze-society",
		name: "Society do Zé",
		neighborhood: "Meireles",
		city: "Fortaleza",
		address: "Rua Castilho Franca, 305 — Meireles, Fortaleza/CE",
		distanceKm: 2.4,
		rating: 4.6,
		reviewCount: 168,
		pricePerHour: 120,
		structure: [
			"Vestiário",
			"Iluminação",
			"Lanchonete",
			"Wi-Fi"
		],
		rules: baseRules,
		description: "Clássica pelada do Meireles. Campo único com gramado renovado a cada 8 meses, ambiente familiar e lanchonete com petiscos até meia-noite.",
		nextAvailability: "Amanhã às 07:00",
		popular: true,
		coverHue: 150,
		mapX: 62,
		mapY: 30,
		closedHours: [6, 23],
		blockedHours: [],
		fields: fields("ze-society", [[
			"Campo 01",
			"Society 5x5",
			10,
			120
		]])
	},
	{
		id: "campo-futuro",
		name: "Campo do Futuro",
		neighborhood: "Cocó",
		city: "Fortaleza",
		address: "Rua Sabiaguaba, 88 — Cocó, Fortaleza/CE",
		distanceKm: 3.1,
		rating: 4.9,
		reviewCount: 302,
		pricePerHour: 160,
		structure: [
			"Estacionamento",
			"Estofamento",
			"Vestiário premium",
			"Iluminação LED",
			"Academia"
		],
		rules: baseRules,
		description: "Estrutura premium ao lado do Parque do Cocó: dois campos oficiais de society, arquibancada coberta, vestiários com chuveiro quente e estacionamento gratuito para 40 vagas.",
		nextAvailability: "Hoje às 20:00",
		popular: true,
		coverHue: 128,
		mapX: 55,
		mapY: 58,
		closedHours: [
			6,
			7,
			23
		],
		blockedHours: [15],
		fields: fields("campo-futuro", [[
			"Campo 01",
			"Society 7x7",
			14,
			160
		], [
			"Campo 02",
			"Society 5x5",
			10,
			150
		]])
	},
	{
		id: "vila-nova",
		name: "Arena Vila Nova",
		neighborhood: "Messejana",
		city: "Fortaleza",
		address: "Av. Washington Soares, 2100 — Messejana, Fortaleza/CE",
		distanceKm: 6.8,
		rating: 4.4,
		reviewCount: 97,
		pricePerHour: 95,
		structure: [
			"Estacionamento",
			"Vestiário",
			"Iluminação",
			"Área de cobertura"
		],
		rules: baseRules,
		description: "Opção acessível na Messejana com cobertura parcial, ideal para times de bairro e campeonatos de várzea. Café e água mineral inclusos.",
		nextAvailability: "Hoje às 18:00",
		popular: false,
		coverHue: 160,
		mapX: 74,
		mapY: 70,
		closedHours: [6, 23],
		blockedHours: [],
		fields: fields("vila-nova", [[
			"Campo 01",
			"Society 5x5",
			10,
			95
		], [
			"Campo 02",
			"Society 5x5",
			10,
			90
		]])
	},
	{
		id: "soccer-arena",
		name: "Soccer Arena Edson Queiroz",
		neighborhood: "Edson Queiroz",
		city: "Fortaleza",
		address: "Rua Pereira Filho, 950 — Edson Queiroz, Fortaleza/CE",
		distanceKm: 4.2,
		rating: 4.7,
		reviewCount: 143,
		pricePerHour: 135,
		structure: [
			"Estacionamento",
			"Vestiário",
			"Iluminação LED",
			"Cafeteria"
		],
		rules: baseRules,
		description: "Três campos de society em escala profissional, com placar eletrônico, torcida organizada e cafeteria com café especial aberta desde as 6h.",
		nextAvailability: "Amanhã às 19:00",
		popular: true,
		coverHue: 120,
		mapX: 38,
		mapY: 64,
		closedHours: [6, 23],
		blockedHours: [11],
		fields: fields("soccer-arena", [
			[
				"Campo 01",
				"Society 5x5",
				10,
				135
			],
			[
				"Campo 02",
				"Society 5x5",
				10,
				135
			],
			[
				"Campo 03",
				"Treino livre",
				12,
				100
			]
		])
	},
	{
		id: "gramado-real",
		name: "Gramado Real",
		neighborhood: "Guararapes",
		city: "Fortaleza",
		address: "Rua Barão do Rio Branco, 177 — Guararapes, Fortaleza/CE",
		distanceKm: 2.9,
		rating: 4.5,
		reviewCount: 86,
		pricePerHour: 110,
		structure: [
			"Vestiário",
			"Iluminação",
			"Bebidas",
			"Quadra poliesportiva"
		],
		rules: baseRules,
		description: "Grama híbrida com manutenção semanal, ambiente tranquilo para peladas de manhã e noite, com quadra poliesportiva anexa para aquecimento.",
		nextAvailability: "Hoje às 22:00",
		popular: false,
		coverHue: 145,
		mapX: 30,
		mapY: 34,
		closedHours: [
			6,
			7,
			23
		],
		blockedHours: [],
		fields: fields("gramado-real", [[
			"Campo 01",
			"Society 5x5",
			10,
			110
		]])
	},
	{
		id: "beira-mar",
		name: "Arena Beira-Mar",
		neighborhood: "Praia de Iracema",
		city: "Fortaleza",
		address: "Av. Historiador Rubens de Mendonça, 400 — Praia de Iracema, Fortaleza/CE",
		distanceKm: 5.5,
		rating: 4.3,
		reviewCount: 121,
		pricePerHour: 150,
		structure: [
			"Estacionamento",
			"Vestiário",
			"Bar",
			"Iluminação",
			"Vista mar"
		],
		rules: baseRules,
		description: "Campo com vista para o mar, bar com coquetelaria e área de convivência coberta. Perfeita para eventos de empresa e aniversários.",
		nextAvailability: "Hoje às 19:00",
		popular: false,
		coverHue: 175,
		mapX: 20,
		mapY: 52,
		closedHours: [
			6,
			7,
			23
		],
		blockedHours: [14],
		fields: fields("beira-mar", [[
			"Campo 01",
			"Society 5x5",
			10,
			150
		]])
	},
	{
		id: "laginha",
		name: "Futebol Society Laginha",
		neighborhood: "Laginha",
		city: "Fortaleza",
		address: "Rua 24 de Maio, 512 — Laginha, Fortaleza/CE",
		distanceKm: 3.7,
		rating: 4.2,
		reviewCount: 64,
		pricePerHour: 85,
		structure: [
			"Vestiário",
			"Iluminação",
			"Área coberta"
		],
		rules: baseRules,
		description: "A queridinha da galera: preço justo, campo coberto e senzala de bairro com charuto esportivo. Ideal para peladas midweek.",
		nextAvailability: "Hoje às 20:00",
		popular: false,
		coverHue: 155,
		mapX: 66,
		mapY: 46,
		closedHours: [6, 23],
		blockedHours: [],
		fields: fields("laginha", [[
			"Campo 01",
			"Society 5x5",
			10,
			85
		]])
	}
];
var ownerVenueId = "arena-central";
var players = (prefix, defs, captainIndex = 0) => defs.map(([name, number, position], index) => ({
	id: `${prefix}-p${index + 1}`,
	name,
	number,
	position,
	...index === captainIndex ? { captain: true } : {}
}));
var teams = [
	{
		id: "leao-aldeota",
		name: "Leão do Aldeota",
		initials: "LDA",
		captain: "Rafael Mendonça",
		hue: 137,
		createdAt: "2025-02-14",
		players: players("leao", [
			[
				"Rafael Mendonça",
				10,
				"Meia"
			],
			[
				"Camila Torres",
				1,
				"Goleira"
			],
			[
				"João Pedro Alves",
				4,
				"Zagueiro"
			],
			[
				"Bruno Carvalho",
				7,
				"Ponta"
			],
			[
				"Diego Nascimento",
				9,
				"Atacante"
			],
			[
				"Mateus Rocha",
				5,
				"Volante"
			],
			[
				"Lucas Ferreira",
				11,
				"Ponta"
			],
			[
				"André Lima",
				3,
				"Lateral"
			],
			[
				"Thiago Barros",
				8,
				"Meia"
			],
			[
				"Pedro Henrique",
				6,
				"Zagueiro"
			],
			[
				"Vanessa Duarte",
				2,
				"Zagueira"
			],
			[
				"Gustavo Reis",
				12,
				"Goleiro"
			]
		], 0)
	},
	{
		id: "amigos-fc",
		name: "Amigos FC",
		initials: "AMG",
		captain: "Fernando Braga",
		hue: 150,
		createdAt: "2024-08-03",
		players: players("amigos", [
			[
				"Fernando Braga",
				9,
				"Atacante"
			],
			[
				"Ricardo Souza",
				1,
				"Goleiro"
			],
			[
				"Paulo Menezes",
				4,
				"Zagueiro"
			],
			[
				"Igor Castelo",
				7,
				"Meia"
			],
			[
				"Marcos Vinícius",
				11,
				"Ponta"
			],
			[
				"Caio Bezerra",
				5,
				"Volante"
			],
			[
				"Túlio Marinho",
				10,
				"Meia"
			],
			[
				"Renan Dantas",
				3,
				"Lateral"
			],
			[
				"Wesley Prado",
				6,
				"Zagueiro"
			],
			[
				"Alex Ferrari",
				2,
				"Lateral"
			]
		], 0)
	},
	{
		id: "falcoes-ce",
		name: "Falcões do CE",
		initials: "FCE",
		captain: "Juliana Prado",
		hue: 128,
		createdAt: "2025-05-20",
		players: players("falcoes", [
			[
				"Juliana Prado",
				10,
				"Meia"
			],
			[
				"Amanda Ribeiro",
				1,
				"Goleira"
			],
			[
				"Beatriz Nunes",
				5,
				"Zagueira"
			],
			[
				"Carla Menezes",
				7,
				"Ponta"
			],
			[
				"Debora Lopes",
				9,
				"Atacante"
			],
			[
				"Elisa Vieira",
				4,
				"Zagueira"
			],
			[
				"Gabriela Pinto",
				6,
				"Volante"
			],
			[
				"Helena Castro",
				11,
				"Ponta"
			],
			[
				"Isabela Moreira",
				2,
				"Lateral"
			],
			[
				"Julia Santana",
				3,
				"Lateral"
			],
			[
				"Karina Duarte",
				8,
				"Meia"
			]
		], 0)
	},
	{
		id: "uniao-vila",
		name: "União Vila Nova",
		initials: "UVN",
		captain: "Wesley Prado",
		hue: 160,
		createdAt: "2024-11-11",
		players: players("uniao", [
			[
				"Wesley Prado",
				6,
				"Zagueiro"
			],
			[
				"Nelson Júnior",
				1,
				"Goleiro"
			],
			[
				"Ademir Barros",
				3,
				"Lateral"
			],
			[
				"Cícero Maia",
				8,
				"Meia"
			],
			[
				"Danilo Freitas",
				10,
				"Ponta"
			],
			[
				"Everton Ramos",
				9,
				"Atacante"
			],
			[
				"Fábio Correia",
				5,
				"Volante"
			],
			[
				"Gilberto Sá",
				2,
				"Lateral"
			],
			[
				"Hélio Monteiro",
				4,
				"Zagueiro"
			]
		], 0)
	}
];
var profiles = {
	individual: {
		id: "perfil-rafael",
		name: "Rafael Mendonça",
		email: "rafael.mendonca@email.com",
		phone: "(85) 98812-4471",
		initials: "RM",
		accountType: "individual"
	},
	time: {
		id: "perfil-capitao",
		name: "Fernando Braga",
		email: "capitao.amigosfc@email.com",
		phone: "(85) 99145-2280",
		initials: "FB",
		accountType: "time"
	},
	owner: {
		id: "perfil-proprietaria",
		name: "Marina Costa",
		email: "marina@areninhacentral.com.br",
		phone: "(85) 99630-1187",
		initials: "MC",
		accountType: "time"
	}
};
profiles.individual;
var clients = [
	{
		id: "cli-1",
		name: "Rafael Mendonça",
		phone: "(85) 98812-4471",
		reservations: 18,
		lastBooking: "Há 2 dias",
		totalSpent: 2520,
		hue: 137
	},
	{
		id: "cli-2",
		name: "Camila Torres",
		phone: "(85) 99270-3312",
		reservations: 12,
		lastBooking: "Ontem",
		totalSpent: 1680,
		hue: 150
	},
	{
		id: "cli-3",
		name: "Fernando Braga",
		phone: "(85) 99145-2280",
		reservations: 27,
		lastBooking: "Hoje",
		totalSpent: 3780,
		hue: 128
	},
	{
		id: "cli-4",
		name: "Juliana Prado",
		phone: "(85) 98155-9044",
		reservations: 9,
		lastBooking: "Há 5 dias",
		totalSpent: 1170,
		hue: 160
	},
	{
		id: "cli-5",
		name: "Diego Nascimento",
		phone: "(85) 98644-7719",
		reservations: 15,
		lastBooking: "Há 1 dia",
		totalSpent: 2100,
		hue: 145
	},
	{
		id: "cli-6",
		name: "Amanda Ribeiro",
		phone: "(85) 99501-6633",
		reservations: 7,
		lastBooking: "Há 9 dias",
		totalSpent: 980,
		hue: 170
	},
	{
		id: "cli-7",
		name: "Bruno Carvalho",
		phone: "(85) 98390-1156",
		reservations: 11,
		lastBooking: "Há 3 dias",
		totalSpent: 1540,
		hue: 132
	},
	{
		id: "cli-8",
		name: "Patrícia Gomes",
		phone: "(85) 99777-4821",
		reservations: 5,
		lastBooking: "Há 12 dias",
		totalSpent: 700,
		hue: 155
	}
];
function formatCurrency(value) {
	return value.toLocaleString("pt-BR", {
		style: "currency",
		currency: "BRL"
	});
}
function toISODate(date) {
	return format(date, "yyyy-MM-dd");
}
function formatDate(iso) {
	return format(parseISO(iso), "dd/MM/yyyy", { locale: ptBR });
}
function formatDateLong(iso) {
	return format(parseISO(iso), "EEEE, dd 'de' MMMM", { locale: ptBR });
}
function weekdayShort(iso) {
	return format(parseISO(iso), "EEE", { locale: ptBR }).toUpperCase();
}
function dayNumber(iso) {
	return format(parseISO(iso), "dd");
}
function currentHour() {
	return (/* @__PURE__ */ new Date()).getHours();
}
function isPastHour(dateISO, hour) {
	const today = toISODate(/* @__PURE__ */ new Date());
	if (dateISO > today) return false;
	if (dateISO < today) return true;
	return hour <= currentHour();
}
function addDaysISO(days) {
	const date = /* @__PURE__ */ new Date();
	date.setDate(date.getDate() + days);
	return toISODate(date);
}
function hourLabel(hour) {
	return `${String(hour).padStart(2, "0")}:00`;
}
var today$1 = toISODate(/* @__PURE__ */ new Date());
var hour = Math.min(Math.max(currentHour(), 8), 21);
function make(seq, overrides) {
	const field = overrides.fieldName ?? "Campo 01";
	const amount = overrides.amount ?? 140;
	const fees = overrides.fees ?? Math.round(amount * .05);
	return {
		id: `res-${seq}`,
		code: `MC-${String(4820 + seq)}`,
		fieldId: `${overrides.venueId}-campo-1`,
		fieldName: field,
		durationHours: 1,
		accountType: "individual",
		clientName: "Rafael Mendonça",
		amount,
		fees,
		total: amount + fees,
		status: "confirmed",
		createdAt: addDaysISO(-3),
		...overrides
	};
}
var seedReservations = [
	make(1, {
		venueId: "arena-central",
		date: today$1,
		time: hourLabel(hour),
		status: "live",
		clientName: "Fernando Braga",
		teamId: "amigos-fc",
		teamName: "Amigos FC",
		accountType: "time",
		fieldName: "Campo 01",
		paymentMethod: "pix",
		paymentStatus: "approved"
	}),
	make(2, {
		venueId: "arena-central",
		date: today$1,
		time: hourLabel(Math.max(hour - 2, 8)),
		status: "finished",
		clientName: "Camila Torres",
		fieldName: "Campo 02",
		paymentMethod: "card",
		paymentStatus: "approved",
		amount: 130,
		fees: 7
	}),
	make(3, {
		venueId: "arena-central",
		date: today$1,
		time: hourLabel(Math.min(hour + 2, 22)),
		status: "confirmed",
		clientName: "Juliana Prado",
		teamId: "falcoes-ce",
		teamName: "Falcões do CE",
		accountType: "time",
		paymentMethod: "pix",
		paymentStatus: "approved"
	}),
	make(4, {
		venueId: "arena-central",
		date: today$1,
		time: hourLabel(Math.min(hour + 3, 22)),
		status: "pending",
		clientName: "Diego Nascimento",
		paymentMethod: "card",
		paymentStatus: "processing",
		amount: 110,
		fees: 6,
		fieldName: "Campo 03"
	}),
	make(5, {
		venueId: "arena-central",
		date: addDaysISO(1),
		time: "19:00",
		status: "confirmed",
		clientName: "Rafael Mendonça",
		teamId: "leao-aldeota",
		teamName: "Leão do Aldeota",
		accountType: "time",
		paymentMethod: "pix",
		paymentStatus: "approved",
		recurring: true
	}),
	make(6, {
		venueId: "arena-central",
		date: addDaysISO(1),
		time: "20:00",
		status: "confirmed",
		clientName: "Amanda Ribeiro",
		fieldName: "Campo 02",
		paymentMethod: "other",
		paymentStatus: "approved",
		amount: 130,
		fees: 7
	}),
	make(7, {
		venueId: "arena-central",
		date: addDaysISO(2),
		time: "21:00",
		status: "pending",
		clientName: "Bruno Carvalho",
		paymentStatus: "processing"
	}),
	make(8, {
		venueId: "arena-central",
		date: addDaysISO(-1),
		time: "20:00",
		status: "finished",
		clientName: "Patrícia Gomes",
		paymentMethod: "pix",
		paymentStatus: "approved"
	}),
	make(9, {
		venueId: "arena-central",
		date: addDaysISO(-2),
		time: "19:00",
		status: "cancelled",
		clientName: "Marcos Vinícius",
		paymentMethod: "card",
		paymentStatus: "refused"
	}),
	make(10, {
		venueId: "campo-futuro",
		date: addDaysISO(1),
		time: "18:00",
		status: "confirmed",
		clientName: "Rafael Mendonça",
		teamId: "leao-aldeota",
		teamName: "Leão do Aldeota",
		accountType: "time",
		paymentMethod: "pix",
		paymentStatus: "approved",
		amount: 160,
		fees: 8
	}),
	make(11, {
		venueId: "ze-society",
		date: addDaysISO(3),
		time: "07:00",
		status: "confirmed",
		clientName: "Camila Torres",
		paymentMethod: "pix",
		paymentStatus: "approved",
		amount: 120,
		fees: 6
	}),
	make(12, {
		venueId: "arena-central",
		date: addDaysISO(-6),
		time: "21:00",
		status: "finished",
		clientName: "Rafael Mendonça",
		fieldName: "Campo 03",
		paymentMethod: "card",
		paymentStatus: "approved",
		amount: 110,
		fees: 6
	}),
	make(13, {
		venueId: "arena-central",
		date: addDaysISO(-9),
		time: "20:00",
		status: "finished",
		clientName: "Diego Nascimento",
		paymentMethod: "pix",
		paymentStatus: "approved"
	}),
	make(14, {
		venueId: "arena-central",
		date: addDaysISO(-13),
		time: "19:00",
		status: "cancelled",
		clientName: "Camila Torres",
		paymentMethod: "card",
		paymentStatus: "refused"
	}),
	make(15, {
		venueId: "arena-central",
		date: addDaysISO(4),
		time: "20:00",
		status: "confirmed",
		clientName: "Fernando Braga",
		teamId: "amigos-fc",
		teamName: "Amigos FC",
		accountType: "time",
		paymentMethod: "pix",
		paymentStatus: "approved",
		fieldName: "Campo 02"
	})
];
seedReservations.filter((reservation) => reservation.clientName === "Rafael Mendonça");
var today = addDaysISO(0);
var seedNotifications = [
	{
		id: "not-1",
		title: "Reserva confirmada",
		message: "Sua reserva na Areninha Central (Campo 01) foi confirmada com sucesso.",
		date: today,
		read: false,
		tone: "success"
	},
	{
		id: "not-2",
		title: "Seu jogo começa em 1 hora",
		message: "Leão do Aldeota joga hoje às 20:00 no Campo do Futuro. Boa partida!",
		date: today,
		read: false,
		tone: "info"
	},
	{
		id: "not-3",
		title: "Pagamento aprovado",
		message: "Pagamento via PIX de R$ 147,00 aprovado. Código da reserva MC-4825.",
		date: today,
		read: false,
		tone: "success"
	},
	{
		id: "not-4",
		title: "Horário disponível",
		message: "Um horário que você aguardava na Areninha Central (21:00) ficou livre.",
		date: addDaysISO(-1),
		read: true,
		tone: "info"
	},
	{
		id: "not-5",
		title: "Reserva cancelada",
		message: "A reserva MC-4814 foi cancelada. O estorno será refletido em até 2 dias úteis.",
		date: addDaysISO(-2),
		read: true,
		tone: "danger"
	},
	{
		id: "not-6",
		title: "Nova promoção disponível",
		message: "Cupom SEXTA10 liberado: 10% OFF nas reservas de sexta-feira.",
		date: addDaysISO(-3),
		read: true,
		tone: "warning"
	}
];
var ownerNotifications = [
	{
		id: "own-1",
		title: "Nova reserva recebida",
		message: "Diego Nascimento reservou o Campo 03 para hoje, aguardando confirmação.",
		date: today,
		read: false,
		tone: "info"
	},
	{
		id: "own-2",
		title: "Saque processado",
		message: "O saque de R$ 1.500,00 foi concluído na conta final 4471.",
		date: addDaysISO(-1),
		read: false,
		tone: "success"
	},
	{
		id: "own-3",
		title: "Nova avaliação",
		message: "Camila Torres avaliou a Areninha Central com nota 5.",
		date: addDaysISO(-1),
		read: true,
		tone: "success"
	},
	{
		id: "own-4",
		title: "Cancelamento solicitado",
		message: "Patrícia Gomes solicitou cancelamento da reserva de ontem.",
		date: addDaysISO(-2),
		read: true,
		tone: "danger"
	},
	{
		id: "own-5",
		title: "Promoção ativa",
		message: "O cupom SEXTA10 teve 6 utilizações nos últimos 7 dias.",
		date: addDaysISO(-4),
		read: true,
		tone: "warning"
	}
];
var financeStats = {
	today: 1840,
	week: 9720,
	month: 18450,
	availableBalance: 8240,
	pendingBalance: 3150,
	reservationsToday: 24,
	inProgress: 3,
	awaitingConfirmation: 5,
	occupancyRate: 78,
	averageTicket: 148,
	cancellations: 6
};
var revenueByMonth = [
	{
		month: "Jan",
		value: 12400
	},
	{
		month: "Fev",
		value: 13950
	},
	{
		month: "Mar",
		value: 15100
	},
	{
		month: "Abr",
		value: 14200
	},
	{
		month: "Mai",
		value: 16750
	},
	{
		month: "Jun",
		value: 17300
	},
	{
		month: "Jul",
		value: 16900
	},
	{
		month: "Ago",
		value: 18100
	},
	{
		month: "Set",
		value: 18450
	}
];
var reservationsByMonth = [
	{
		month: "Jan",
		value: 96
	},
	{
		month: "Fev",
		value: 108
	},
	{
		month: "Mar",
		value: 121
	},
	{
		month: "Abr",
		value: 113
	},
	{
		month: "Mai",
		value: 134
	},
	{
		month: "Jun",
		value: 142
	},
	{
		month: "Jul",
		value: 137
	},
	{
		month: "Ago",
		value: 149
	},
	{
		month: "Set",
		value: 156
	}
];
var occupancyByHour = [
	{
		hour: "08h",
		value: 35
	},
	{
		hour: "10h",
		value: 48
	},
	{
		hour: "12h",
		value: 42
	},
	{
		hour: "14h",
		value: 55
	},
	{
		hour: "16h",
		value: 68
	},
	{
		hour: "18h",
		value: 86
	},
	{
		hour: "20h",
		value: 97
	},
	{
		hour: "22h",
		value: 74
	}
];
var topHours = [
	{
		label: "20:00 — 21:00",
		value: 64
	},
	{
		label: "19:00 — 20:00",
		value: 58
	},
	{
		label: "21:00 — 22:00",
		value: 51
	},
	{
		label: "18:00 — 19:00",
		value: 44
	},
	{
		label: "07:00 — 08:00",
		value: 26
	}
];
var topClients = [
	{
		label: "Fernando Braga",
		value: 27
	},
	{
		label: "Rafael Mendonça",
		value: 18
	},
	{
		label: "Diego Nascimento",
		value: 15
	},
	{
		label: "Camila Torres",
		value: 12
	},
	{
		label: "Bruno Carvalho",
		value: 11
	}
];
var topTeams = [
	{
		label: "Amigos FC",
		value: 22
	},
	{
		label: "Leão do Aldeota",
		value: 19
	},
	{
		label: "Falcões do CE",
		value: 14
	},
	{
		label: "União Vila Nova",
		value: 11
	}
];
var cancellationTrend = [
	{
		month: "Abr",
		value: 11
	},
	{
		month: "Mai",
		value: 9
	},
	{
		month: "Jun",
		value: 8
	},
	{
		month: "Jul",
		value: 7
	},
	{
		month: "Ago",
		value: 6
	},
	{
		month: "Set",
		value: 6
	}
];
var seedWithdrawals = [
	{
		id: "w-1",
		amount: 1500,
		date: "12/09/2026",
		status: "done"
	},
	{
		id: "w-2",
		amount: 2400,
		date: "28/08/2026",
		status: "done"
	},
	{
		id: "w-3",
		amount: 900,
		date: "15/08/2026",
		status: "done"
	}
];
var seedReviews = [
	{
		id: "rev-1",
		author: "Camila Torres",
		venueId: "arena-central",
		rating: 5,
		structure: 5,
		service: 5,
		pitch: 5,
		comment: "Gramado impecável e vestiários limpos. A iluminação LED faz diferença demais para jogos noturnos.",
		date: addDaysISO(-1),
		hue: 150
	},
	{
		id: "rev-2",
		author: "Fernando Braga",
		venueId: "arena-central",
		rating: 5,
		structure: 4,
		service: 5,
		pitch: 5,
		comment: "Time de lá é atencioso, sempre nos atendem na hora. Recomendo para peladas de time.",
		date: addDaysISO(-4),
		hue: 137
	},
	{
		id: "rev-3",
		author: "Juliana Prado",
		venueId: "arena-central",
		rating: 4,
		structure: 4,
		service: 5,
		pitch: 4,
		comment: "Ótima estrutura, só acho o estacionamento um pouco apertado nos horários de pico.",
		date: addDaysISO(-8),
		hue: 160
	},
	{
		id: "rev-4",
		author: "Diego Nascimento",
		venueId: "arena-central",
		rating: 5,
		structure: 5,
		service: 4,
		pitch: 5,
		comment: "Jogamos quase toda semana. Preço justo e a churrasqueira é um diferencial.",
		date: addDaysISO(-12),
		hue: 128
	},
	{
		id: "rev-5",
		author: "Amanda Ribeiro",
		venueId: "arena-central",
		rating: 4,
		structure: 4,
		service: 4,
		pitch: 5,
		comment: "Campo ótimo para treinos. Só gostaria de mais opções no lanchonete.",
		date: addDaysISO(-15),
		hue: 170
	},
	{
		id: "rev-6",
		author: "Patrícia Gomes",
		venueId: "arena-central",
		rating: 5,
		structure: 5,
		service: 5,
		pitch: 4,
		comment: "Reserva pelo app é muito prática. Chegamos e já estava tudo liberado.",
		date: addDaysISO(-20),
		hue: 145
	}
];
var seedPromotions = [
	{
		id: "promo-1",
		code: "SEXTA10",
		label: "10% OFF nas sextas",
		discount: 10,
		kind: "percent",
		active: true
	},
	{
		id: "promo-2",
		code: "MANHA20",
		label: "Happy hour das 07h às 11h",
		discount: 20,
		kind: "happy-hour",
		schedule: "Seg a Sex · 07:00 — 11:00",
		active: true
	},
	{
		id: "promo-3",
		code: "PRIMEIRAJOGADA",
		label: "25% OFF para novos clientes",
		discount: 25,
		kind: "new-client",
		active: false
	}
];
var AppContext = (0, import_react.createContext)(null);
var SESSION_KEY = "meucampo.session";
var FAVORITES_KEY = "meucampo.favorites";
function readStorage(key, fallback) {
	if (typeof window === "undefined") return fallback;
	try {
		const raw = window.localStorage.getItem(key);
		return raw ? JSON.parse(raw) : fallback;
	} catch {
		return fallback;
	}
}
function writeStorage(key, value) {
	if (typeof window === "undefined") return;
	try {
		window.localStorage.setItem(key, JSON.stringify(value));
	} catch {}
}
var reservationSeq = 100;
var idSeq = 1e3;
function nextId(prefix) {
	idSeq += 1;
	return `${prefix}-${idSeq}`;
}
function AppProvider({ children }) {
	const [session, setSession] = (0, import_react.useState)(null);
	const [favorites, setFavorites] = (0, import_react.useState)(["campo-futuro", "ze-society"]);
	const [reservations, setReservations] = (0, import_react.useState)(seedReservations);
	const [notifications, setNotifications] = (0, import_react.useState)(seedNotifications);
	const [ownerNotes, setOwnerNotes] = (0, import_react.useState)(ownerNotifications);
	const [waitlist, setWaitlist] = (0, import_react.useState)([]);
	const [venues$1, setVenues] = (0, import_react.useState)(venues);
	const [teams$1, setTeams] = (0, import_react.useState)(teams);
	const [myTeamId, setMyTeamId] = (0, import_react.useState)("leao-aldeota");
	const [promotions, setPromotions] = (0, import_react.useState)(seedPromotions);
	const [withdrawals, setWithdrawals] = (0, import_react.useState)(seedWithdrawals);
	const [balance, setBalance] = (0, import_react.useState)(financeStats.availableBalance);
	const [pendingBalance, setPendingBalance] = (0, import_react.useState)(financeStats.pendingBalance);
	(0, import_react.useEffect)(() => {
		const storedSession = readStorage(SESSION_KEY, null);
		if (storedSession) {
			setSession(storedSession);
			setMyTeamId(storedSession.role === "time" ? "amigos-fc" : "leao-aldeota");
		}
		setFavorites(readStorage(FAVORITES_KEY, ["campo-futuro", "ze-society"]));
	}, []);
	const login = (0, import_react.useCallback)((role) => {
		const profile = role === "owner" ? {
			...profiles.owner,
			accountType: "individual"
		} : profiles[role];
		const next = {
			role,
			name: profile.name,
			email: profile.email
		};
		setSession(next);
		setMyTeamId(role === "time" ? "amigos-fc" : "leao-aldeota");
		writeStorage(SESSION_KEY, next);
	}, []);
	const logout = (0, import_react.useCallback)(() => {
		setSession(null);
		if (typeof window !== "undefined") window.localStorage.removeItem(SESSION_KEY);
	}, []);
	const toggleFavorite = (0, import_react.useCallback)((venueId) => {
		setFavorites((current) => {
			const next = current.includes(venueId) ? current.filter((id) => id !== venueId) : [...current, venueId];
			writeStorage(FAVORITES_KEY, next);
			return next;
		});
	}, []);
	const isFavorite = (0, import_react.useCallback)((venueId) => favorites.includes(venueId), [favorites]);
	const venueById = (0, import_react.useCallback)((venueId) => venues$1.find((venue) => venue.id === venueId), [venues$1]);
	const getSlots = (0, import_react.useCallback)((venueId, date) => {
		const venue = venues$1.find((item) => item.id === venueId);
		if (!venue) return [];
		const slots = [];
		for (let hour = 6; hour <= 23; hour += 1) {
			const time = hourLabel(hour);
			const reservation = reservations.find((item) => item.venueId === venueId && item.date === date && item.time === time && item.status !== "cancelled");
			let status = "available";
			if (isPastHour(date, hour)) status = "unavailable";
			else if (venue.closedHours.includes(hour)) status = "unavailable";
			else if (venue.blockedHours.includes(hour)) status = "occupied";
			else if (reservation?.status === "live") status = "live";
			else if (reservation) status = "reserved";
			slots.push({
				time,
				hour,
				status,
				...reservation ? { reservationId: reservation.id } : {}
			});
		}
		return slots;
	}, [reservations, venues$1]);
	const createReservation = (0, import_react.useCallback)((input) => {
		const venue = venues$1.find((item) => item.id === input.venueId);
		const field = venue?.fields.find((item) => item.id === input.fieldId) ?? venue?.fields[0];
		const amount = field?.pricePerHour ?? venue?.pricePerHour ?? 140;
		const fees = Math.round(amount * .05);
		reservationSeq += 1;
		const reservation = {
			id: `res-user-${reservationSeq}`,
			code: `MC-${4900 + reservationSeq}`,
			venueId: input.venueId,
			fieldId: field?.id ?? `${input.venueId}-campo-1`,
			fieldName: field?.name ?? "Campo 01",
			date: input.date,
			time: input.time,
			durationHours: 1,
			accountType: input.accountType,
			clientName: session?.name ?? profiles.individual.name,
			...input.accountType === "time" ? {
				teamId: myTeamId,
				teamName: teams$1.find((t) => t.id === myTeamId)?.name ?? ""
			} : {},
			amount,
			fees,
			total: amount + fees,
			status: "confirmed",
			paymentMethod: input.paymentMethod,
			paymentStatus: "approved",
			...input.recurring ? { recurring: true } : {},
			createdAt: toISODate(/* @__PURE__ */ new Date())
		};
		setReservations((current) => [reservation, ...current]);
		setNotifications((current) => [{
			id: nextId("not"),
			title: "Reserva confirmada",
			message: `${venue?.name ?? "Areninha"} · ${reservation.fieldName} em ${reservation.date} às ${reservation.time}. Código ${reservation.code}.`,
			date: toISODate(/* @__PURE__ */ new Date()),
			read: false,
			tone: "success"
		}, ...current]);
		setOwnerNotes((current) => [{
			id: nextId("own"),
			title: "Nova reserva recebida",
			message: `${reservation.clientName} reservou ${reservation.fieldName} em ${reservation.date} às ${reservation.time}.`,
			date: toISODate(/* @__PURE__ */ new Date()),
			read: false,
			tone: "info"
		}, ...current]);
		return reservation;
	}, [
		myTeamId,
		session,
		teams$1,
		venues$1
	]);
	const updateReservationStatus = (0, import_react.useCallback)((id, status) => {
		setReservations((current) => current.map((item) => item.id === id ? {
			...item,
			status
		} : item));
		if (status === "confirmed" || status === "cancelled") setOwnerNotes((current) => [{
			id: nextId("own"),
			title: status === "confirmed" ? "Reserva confirmada" : "Reserva cancelada",
			message: `A reserva foi ${status === "confirmed" ? "confirmada" : "cancelada"} pelo painel.`,
			date: toISODate(/* @__PURE__ */ new Date()),
			read: false,
			tone: status === "confirmed" ? "success" : "danger"
		}, ...current]);
	}, []);
	const pushNotification = (0, import_react.useCallback)((audience, notification) => {
		const entry = {
			...notification,
			id: nextId("not"),
			read: false
		};
		if (audience === "client") setNotifications((current) => [entry, ...current]);
		else setOwnerNotes((current) => [entry, ...current]);
	}, []);
	const markAllNotificationsRead = (0, import_react.useCallback)((audience) => {
		if (audience === "client") setNotifications((current) => current.map((item) => ({
			...item,
			read: true
		})));
		else setOwnerNotes((current) => current.map((item) => ({
			...item,
			read: true
		})));
	}, []);
	const joinWaitlist = (0, import_react.useCallback)((entry) => {
		setWaitlist((current) => {
			if (current.some((item) => item.venueId === entry.venueId && item.date === entry.date && item.time === entry.time)) return current;
			return [...current, {
				...entry,
				id: nextId("wait")
			}];
		});
		setNotifications((current) => [{
			id: nextId("not"),
			title: "Lista de espera",
			message: `Você entrou na lista de espera de ${entry.time} em ${entry.date}. Avisaremos se liberar.`,
			date: toISODate(/* @__PURE__ */ new Date()),
			read: false,
			tone: "info"
		}, ...current]);
	}, []);
	const inWaitlist = (0, import_react.useCallback)((venueId, date, time) => waitlist.some((item) => item.venueId === venueId && item.date === date && item.time === time), [waitlist]);
	const addPlayer = (0, import_react.useCallback)((name, position, number) => {
		setTeams((current) => current.map((team) => team.id === myTeamId ? {
			...team,
			players: [...team.players, {
				id: nextId("player"),
				name,
				position,
				number
			}]
		} : team));
	}, [myTeamId]);
	const removePlayer = (0, import_react.useCallback)((playerId) => {
		setTeams((current) => current.map((team) => team.id === myTeamId ? {
			...team,
			players: team.players.filter((player) => player.id !== playerId)
		} : team));
	}, [myTeamId]);
	const addVenue = (0, import_react.useCallback)((venue) => {
		setVenues((current) => [...current, venue]);
		setOwnerNotes((current) => [{
			id: nextId("own"),
			title: "Areninha cadastrada",
			message: `${venue.name} foi adicionada à plataforma com sucesso.`,
			date: toISODate(/* @__PURE__ */ new Date()),
			read: false,
			tone: "success"
		}, ...current]);
	}, []);
	const updateVenue = (0, import_react.useCallback)((venueId, patch) => {
		setVenues((current) => current.map((venue) => venue.id === venueId ? {
			...venue,
			...patch
		} : venue));
	}, []);
	const addPromotion = (0, import_react.useCallback)((promotion) => {
		setPromotions((current) => [{
			...promotion,
			id: nextId("promo")
		}, ...current]);
	}, []);
	const togglePromotion = (0, import_react.useCallback)((id) => {
		setPromotions((current) => current.map((item) => item.id === id ? {
			...item,
			active: !item.active
		} : item));
	}, []);
	const requestWithdrawal = (0, import_react.useCallback)((amount) => {
		setBalance((current) => Math.max(0, current - amount));
		setPendingBalance((current) => current + amount);
		setWithdrawals((current) => [{
			id: nextId("w"),
			amount,
			date: (/* @__PURE__ */ new Date()).toLocaleDateString("pt-BR"),
			status: "processing"
		}, ...current]);
		setOwnerNotes((current) => [{
			id: nextId("own"),
			title: "Solicitação de saque",
			message: `Solicitação de ${amount.toLocaleString("pt-BR", {
				style: "currency",
				currency: "BRL"
			})} recebida e em processamento.`,
			date: toISODate(/* @__PURE__ */ new Date()),
			read: false,
			tone: "info"
		}, ...current]);
	}, []);
	const value = (0, import_react.useMemo)(() => ({
		session,
		favorites,
		reservations,
		notifications,
		ownerNotifications: ownerNotes,
		waitlist,
		venues: venues$1,
		teams: teams$1,
		myTeamId,
		promotions,
		withdrawals,
		balance,
		pendingBalance,
		login,
		logout,
		toggleFavorite,
		isFavorite,
		venueById,
		getSlots,
		createReservation,
		updateReservationStatus,
		markAllNotificationsRead,
		pushNotification,
		joinWaitlist,
		inWaitlist,
		addPlayer,
		removePlayer,
		addVenue,
		updateVenue,
		addPromotion,
		togglePromotion,
		requestWithdrawal
	}), [
		session,
		favorites,
		reservations,
		notifications,
		ownerNotes,
		waitlist,
		venues$1,
		teams$1,
		myTeamId,
		promotions,
		withdrawals,
		balance,
		pendingBalance,
		login,
		logout,
		toggleFavorite,
		isFavorite,
		venueById,
		getSlots,
		createReservation,
		updateReservationStatus,
		markAllNotificationsRead,
		pushNotification,
		joinWaitlist,
		inWaitlist,
		addPlayer,
		removePlayer,
		addVenue,
		updateVenue,
		addPromotion,
		togglePromotion,
		requestWithdrawal
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppContext.Provider, {
		value,
		children
	});
}
function useApp() {
	const context = (0, import_react.useContext)(AppContext);
	if (!context) throw new Error("useApp precisa estar dentro de AppProvider");
	return context;
}
function Panel({ title, action, children, dark = false, bodyClass = "panel-body" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: `panel ${dark ? "panel-dark" : ""}`,
		children: [title && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "panel-head",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: title }), action]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: bodyClass,
			children
		})]
	});
}
function StatCard({ label, value, hint, icon, accent = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: `stat-card ${accent ? "accent" : ""}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "row-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "stat-label",
					children: label
				}), icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "stat-icon",
					children: icon
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
				className: "stat-value",
				children: value
			}),
			hint && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "stat-hint",
				children: hint
			})
		]
	});
}
var reservationBadge = {
	pending: {
		label: "Aguardando",
		className: "badge-warning"
	},
	confirmed: {
		label: "Confirmada",
		className: "badge-success"
	},
	live: {
		label: "Em jogo",
		className: "badge-live"
	},
	finished: {
		label: "Finalizada",
		className: "badge-neutral"
	},
	cancelled: {
		label: "Cancelada",
		className: "badge-danger"
	}
};
var slotBadge = {
	available: {
		label: "Disponível",
		className: "badge-success"
	},
	reserved: {
		label: "Reservado",
		className: "badge-warning"
	},
	occupied: {
		label: "Ocupado",
		className: "badge-danger"
	},
	live: {
		label: "Em jogo",
		className: "badge-live"
	},
	unavailable: {
		label: "Indisponível",
		className: "badge-neutral"
	}
};
function StatusBadge({ status }) {
	const config = status in reservationBadge ? reservationBadge[status] : slotBadge[status];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `badge ${config.className}`,
		children: config.label
	});
}
function EmptyState({ icon, title, description, action }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "empty-state",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "empty-icon",
				children: icon
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: title }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: description }),
			action
		]
	});
}
function SkeletonCard() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "arena-card",
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "skeleton",
			style: {
				height: 170,
				borderRadius: 0
			}
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "arena-body",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "skeleton",
					style: {
						height: 18,
						width: "70%"
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "skeleton",
					style: {
						height: 12,
						width: "45%"
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "skeleton",
					style: {
						height: 12,
						width: "85%"
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "skeleton",
					style: {
						height: 36,
						width: "100%",
						marginTop: 10
					}
				})
			]
		})]
	});
}
function Rating({ value, count }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "rating",
		"aria-label": `Nota ${value} de 5`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
				size: 14,
				"aria-hidden": "true"
			}),
			value.toFixed(1),
			count !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				style: {
					color: "var(--lichen-sage)",
					fontWeight: 600
				},
				children: [
					"(",
					count,
					")"
				]
			})
		]
	});
}
function Avatar({ initials, size = "md" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `avatar ${size === "md" ? "" : size}`,
		"aria-hidden": "true",
		children: initials
	});
}
function Progress({ value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "progress-track",
		role: "progressbar",
		"aria-valuenow": value,
		"aria-valuemin": 0,
		"aria-valuemax": 100,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "progress-fill",
			style: { width: `${Math.min(value, 100)}%` }
		})
	});
}
function initialsOf(name) {
	return name.split(" ").slice(0, 2).map((part) => part[0]).join("").toUpperCase();
}
function Wordmark({ to }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to,
		className: "wordmark",
		"aria-label": "Meu Campo, ir ao início",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "wordmark-mark",
			"aria-hidden": "true",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})
		}), "MEU CAMPO"]
	});
}
function AppShell({ role, active, title, subtitle, nav, wide = false, children }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const { session, logout, notifications, ownerNotifications } = useApp();
	const navigate = useNavigate();
	const unread = (role === "client" ? notifications : ownerNotifications).filter((item) => !item.read).length;
	const homeTo = role === "client" ? "/app" : "/proprietario";
	const displayName = session?.name ?? (role === "owner" ? "Marina Costa" : "Rafael Mendonça");
	const displayRole = role === "owner" ? "Proprietária · Areninha Central" : "Conta individual";
	const handleLogout = () => {
		logout();
		navigate({ to: "/" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "app-shell",
		children: [
			open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "sidebar-scrim",
				onClick: () => setOpen(false),
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: `app-sidebar ${open ? "open" : ""}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, { to: homeTo }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "sidebar-label",
						children: role === "owner" ? "Gestão" : "Minha conta"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "sidebar-nav",
						"aria-label": "Menu lateral",
						children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: item.to,
							className: active === item.to ? "active" : "",
							onClick: () => setOpen(false),
							children: [
								item.icon,
								item.label,
								item.badge ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "nav-count",
									children: item.badge
								}) : null
							]
						}, item.to))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "sidebar-footer",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sidebar-user",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
									initials: initialsOf(displayName),
									size: "sm"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: displayName }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: displayRole })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-label": "Sair",
									onClick: handleLogout,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, {
										size: 16,
										"aria-hidden": "true"
									})
								})
							]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "app-main",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "app-topbar",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "app-burger",
							"aria-label": open ? "Fechar menu" : "Abrir menu",
							onClick: () => setOpen((value) => !value),
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 19 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 19 })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								flex: 1,
								minWidth: 0
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: title }), subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "topbar-sub",
								children: subtitle
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: role === "client" ? "/app/notificacoes" : "/proprietario/notificacoes",
							"aria-label": "Notificações",
							style: {
								position: "relative",
								display: "grid",
								placeItems: "center",
								width: 42,
								height: 42,
								borderRadius: "50%",
								background: "var(--pure-white)",
								border: "1px solid var(--mist-green)",
								color: "var(--moss-shadow)"
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, {
								size: 18,
								"aria-hidden": "true"
							}), unread > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: {
									position: "absolute",
									top: -4,
									right: -4,
									minWidth: 18,
									height: 18,
									padding: "0 4px",
									borderRadius: 999,
									background: "var(--st-danger)",
									color: "white",
									fontSize: 10,
									fontWeight: 700,
									display: "grid",
									placeItems: "center"
								},
								children: unread
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							style: {
								display: "inline-flex",
								alignItems: "center",
								gap: 6,
								fontSize: 13,
								fontWeight: 650,
								color: "var(--moss-shadow)"
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hide-sm",
								children: "Site"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
								size: 14,
								"aria-hidden": "true"
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: `app-content ${wide ? "app-content-wide" : ""}`,
					children
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "bottom-nav",
				"aria-label": "Navegação inferior",
				children: nav.slice(0, 5).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: item.to,
					className: active === item.to ? "active" : "",
					children: [item.icon, item.label]
				}, item.to))
			})
		]
	});
}
function PublicHeader({ active }) {
	const { session } = useApp();
	const homeTo = session?.role === "owner" ? "/proprietario" : "/app";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "public-header",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "nav-shell",
			"aria-label": "Navegação principal",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "wordmark",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "wordmark-mark",
						"aria-hidden": "true",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})
					}), "MEU CAMPO"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "nav-links",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/buscar",
							className: active === "buscar" ? "active" : "",
							children: "Encontrar areninha"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/buscar",
							children: "Mapa"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/app/reservas",
							className: active === "reservas" ? "active" : "",
							children: "Minhas reservas"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: session ? homeTo : "/login",
					className: "button p-button button-primary no-underline",
					style: {
						minHeight: 42,
						marginLeft: 6
					},
					children: session ? "Meu painel" : "Entrar"
				})
			]
		})
	});
}
//#endregion
export { useApp as A, reservationsByMonth as C, topClients as D, toISODate as E, topHours as O, ownerVenueId as S, seedReviews as T, formatCurrency as _, Panel as a, initialsOf as b, Rating as c, StatusBadge as d, addDaysISO as f, financeStats as g, dayNumber as h, EmptyState as i, weekdayShort as j, topTeams as k, SkeletonCard as l, clients as m, AppShell as n, Progress as o, cancellationTrend as p, Avatar as r, PublicHeader as s, AppProvider as t, StatCard as u, formatDate as v, revenueByMonth as w, occupancyByHour as x, formatDateLong as y };
