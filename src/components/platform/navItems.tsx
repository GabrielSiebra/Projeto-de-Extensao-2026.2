import type { ReactNode } from "react";
import {
  BadgeDollarSign,
  Bell,
  Building2,
  CalendarCheck,
  CalendarDays,
  CardSim,
  ClipboardList,
  Clock3,
  Cog,
  FileBarChart,
  Home,
  Megaphone,
  MessageSquareHeart,
  Search,
  Settings,
  Star,
  Trophy,
  UserRound,
  UsersRound,
  Wallet,
} from "lucide-react";
import type { NavItem } from "./AppShell";

export function getClientNav(unread = 0): NavItem[] {
  return [
    { label: "Início", to: "/app", icon: <Home size={18} aria-hidden="true" /> },
    { label: "Encontrar", to: "/buscar", icon: <Search size={18} aria-hidden="true" /> },
    {
      label: "Reservas",
      to: "/app/reservas",
      icon: <CalendarCheck size={18} aria-hidden="true" />,
    },
    { label: "Meu time", to: "/app/time", icon: <Trophy size={18} aria-hidden="true" /> },
    { label: "Favoritos", to: "/app/favoritos", icon: <Star size={18} aria-hidden="true" /> },
    {
      label: "Pagamentos",
      to: "/app/pagamentos",
      icon: <CardSim size={18} aria-hidden="true" />,
    },
    {
      label: "Notificações",
      to: "/app/notificacoes",
      icon: <Bell size={18} aria-hidden="true" />,
      ...(unread > 0 ? { badge: unread } : {}),
    },
    { label: "Perfil", to: "/app/perfil", icon: <UserRound size={18} aria-hidden="true" /> },
  ];
}

export function getOwnerNav(unread = 0): NavItem[] {
  return [
    { label: "Dashboard", to: "/proprietario", icon: <Home size={18} aria-hidden="true" /> },
    {
      label: "Agenda",
      to: "/proprietario/agenda",
      icon: <CalendarDays size={18} aria-hidden="true" />,
    },
    {
      label: "Reservas",
      to: "/proprietario/reservas",
      icon: <ClipboardList size={18} aria-hidden="true" />,
    },
    {
      label: "Clientes",
      to: "/proprietario/clientes",
      icon: <UsersRound size={18} aria-hidden="true" />,
    },
    { label: "Times", to: "/proprietario/times", icon: <Trophy size={18} aria-hidden="true" /> },
    {
      label: "Areninha",
      to: "/proprietario/areninha",
      icon: <Building2 size={18} aria-hidden="true" />,
    },
    { label: "Campos", to: "/proprietario/campos", icon: <Cog size={18} aria-hidden="true" /> },
    {
      label: "Financeiro",
      to: "/proprietario/financeiro",
      icon: <BadgeDollarSign size={18} aria-hidden="true" />,
    },
    {
      label: "Relatórios",
      to: "/proprietario/relatorios",
      icon: <FileBarChart size={18} aria-hidden="true" />,
    },
    {
      label: "Avaliações",
      to: "/proprietario/avaliacoes",
      icon: <MessageSquareHeart size={18} aria-hidden="true" />,
    },
    {
      label: "Promoções",
      to: "/proprietario/promocoes",
      icon: <Megaphone size={18} aria-hidden="true" />,
    },
    {
      label: "Notificações",
      to: "/proprietario/notificacoes",
      icon: <Bell size={18} aria-hidden="true" />,
      ...(unread > 0 ? { badge: unread } : {}),
    },
    {
      label: "Configurações",
      to: "/proprietario/configuracoes",
      icon: <Settings size={18} aria-hidden="true" />,
    },
  ];
}

export const ownerQuickIcons: { icon: ReactNode; label: string }[] = [
  { icon: <Clock3 size={16} />, label: "Jogos em andamento" },
  { icon: <Wallet size={16} />, label: "Saldo disponível" },
];
