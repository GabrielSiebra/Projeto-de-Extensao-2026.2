import { CalendarDays, CircleUserRound, Goal, MapPin, UsersRound } from "lucide-react";

export const features = [
  {
    icon: CalendarDays,
    index: "01",
    title: "Agendamento simplificado",
    description:
      "Escolha a areninha, encontre um horário disponível e organize sua partida com poucos passos.",
  },
  {
    icon: CircleUserRound,
    index: "02",
    title: "Perfis de jogadores",
    description:
      "Tenha perfis individuais para facilitar a organização e participação dos jogadores.",
  },
  {
    icon: UsersRound,
    index: "03",
    title: "Formação de times",
    description: "Organize os participantes e facilite a formação dos times antes da partida.",
  },
];

export const steps = [
  {
    number: "01",
    icon: CircleUserRound,
    title: "Cadastrar",
    description: "Crie seu perfil para entrar em campo.",
  },
  {
    number: "02",
    icon: CalendarDays,
    title: "Escolher horário",
    description: "Veja as opções livres na areninha.",
  },
  {
    number: "03",
    icon: UsersRound,
    title: "Montar time",
    description: "Reúna a galera e organize os lados.",
  },
  { number: "04", icon: Goal, title: "Jogar", description: "Confirme os detalhes e partiu jogo." },
];

export const schedule = [
  { time: "18:00", status: "Disponível", available: true },
  { time: "19:00", status: "Reservado", available: false },
  { time: "20:00", status: "Disponível", available: true },
  { time: "21:00", status: "Disponível", available: true },
];

export const venue = {
  name: "Areninha Central",
  location: "Centro esportivo",
  day: "Hoje",
  icon: MapPin,
};
