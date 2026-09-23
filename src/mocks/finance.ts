export const financeStats = {
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
  cancellations: 6,
};

export const revenueByMonth = [
  { month: "Jan", value: 12400 },
  { month: "Fev", value: 13950 },
  { month: "Mar", value: 15100 },
  { month: "Abr", value: 14200 },
  { month: "Mai", value: 16750 },
  { month: "Jun", value: 17300 },
  { month: "Jul", value: 16900 },
  { month: "Ago", value: 18100 },
  { month: "Set", value: 18450 },
];

export const reservationsByMonth = [
  { month: "Jan", value: 96 },
  { month: "Fev", value: 108 },
  { month: "Mar", value: 121 },
  { month: "Abr", value: 113 },
  { month: "Mai", value: 134 },
  { month: "Jun", value: 142 },
  { month: "Jul", value: 137 },
  { month: "Ago", value: 149 },
  { month: "Set", value: 156 },
];

export const occupancyByHour = [
  { hour: "08h", value: 35 },
  { hour: "10h", value: 48 },
  { hour: "12h", value: 42 },
  { hour: "14h", value: 55 },
  { hour: "16h", value: 68 },
  { hour: "18h", value: 86 },
  { hour: "20h", value: 97 },
  { hour: "22h", value: 74 },
];

export const topHours = [
  { label: "20:00 — 21:00", value: 64 },
  { label: "19:00 — 20:00", value: 58 },
  { label: "21:00 — 22:00", value: 51 },
  { label: "18:00 — 19:00", value: 44 },
  { label: "07:00 — 08:00", value: 26 },
];

export const topClients = [
  { label: "Fernando Braga", value: 27 },
  { label: "Rafael Mendonça", value: 18 },
  { label: "Diego Nascimento", value: 15 },
  { label: "Camila Torres", value: 12 },
  { label: "Bruno Carvalho", value: 11 },
];

export const topTeams = [
  { label: "Amigos FC", value: 22 },
  { label: "Leão do Aldeota", value: 19 },
  { label: "Falcões do CE", value: 14 },
  { label: "União Vila Nova", value: 11 },
];

export const cancellationTrend = [
  { month: "Abr", value: 11 },
  { month: "Mai", value: 9 },
  { month: "Jun", value: 8 },
  { month: "Jul", value: 7 },
  { month: "Ago", value: 6 },
  { month: "Set", value: 6 },
];

export const seedWithdrawals = [
  { id: "w-1", amount: 1500, date: "12/09/2026", status: "done" as const },
  { id: "w-2", amount: 2400, date: "28/08/2026", status: "done" as const },
  { id: "w-3", amount: 900, date: "15/08/2026", status: "done" as const },
];
