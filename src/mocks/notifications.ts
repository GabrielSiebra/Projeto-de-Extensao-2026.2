import type { AppNotification } from "../types";
import { addDaysISO } from "../lib/format";

const today = addDaysISO(0);

export const seedNotifications: AppNotification[] = [
  {
    id: "not-1",
    title: "Reserva confirmada",
    message: "Sua reserva na Areninha Central (Campo 01) foi confirmada com sucesso.",
    date: today,
    read: false,
    tone: "success",
  },
  {
    id: "not-2",
    title: "Seu jogo começa em 1 hora",
    message: "Leão do Aldeota joga hoje às 20:00 no Campo do Futuro. Boa partida!",
    date: today,
    read: false,
    tone: "info",
  },
  {
    id: "not-3",
    title: "Pagamento aprovado",
    message: "Pagamento via PIX de R$ 147,00 aprovado. Código da reserva MC-4825.",
    date: today,
    read: false,
    tone: "success",
  },
  {
    id: "not-4",
    title: "Horário disponível",
    message: "Um horário que você aguardava na Areninha Central (21:00) ficou livre.",
    date: addDaysISO(-1),
    read: true,
    tone: "info",
  },
  {
    id: "not-5",
    title: "Reserva cancelada",
    message: "A reserva MC-4814 foi cancelada. O estorno será refletido em até 2 dias úteis.",
    date: addDaysISO(-2),
    read: true,
    tone: "danger",
  },
  {
    id: "not-6",
    title: "Nova promoção disponível",
    message: "Cupom SEXTA10 liberado: 10% OFF nas reservas de sexta-feira.",
    date: addDaysISO(-3),
    read: true,
    tone: "warning",
  },
];

export const ownerNotifications: AppNotification[] = [
  {
    id: "own-1",
    title: "Nova reserva recebida",
    message: "Diego Nascimento reservou o Campo 03 para hoje, aguardando confirmação.",
    date: today,
    read: false,
    tone: "info",
  },
  {
    id: "own-2",
    title: "Saque processado",
    message: "O saque de R$ 1.500,00 foi concluído na conta final 4471.",
    date: addDaysISO(-1),
    read: false,
    tone: "success",
  },
  {
    id: "own-3",
    title: "Nova avaliação",
    message: "Camila Torres avaliou a Areninha Central com nota 5.",
    date: addDaysISO(-1),
    read: true,
    tone: "success",
  },
  {
    id: "own-4",
    title: "Cancelamento solicitado",
    message: "Patrícia Gomes solicitou cancelamento da reserva de ontem.",
    date: addDaysISO(-2),
    read: true,
    tone: "danger",
  },
  {
    id: "own-5",
    title: "Promoção ativa",
    message: "O cupom SEXTA10 teve 6 utilizações nos últimos 7 dias.",
    date: addDaysISO(-4),
    read: true,
    tone: "warning",
  },
];
