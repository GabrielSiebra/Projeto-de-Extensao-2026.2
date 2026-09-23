import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";

export function formatCurrency(value: number): string {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function toISODate(date: Date): string {
  return format(date, "yyyy-MM-dd");
}

export function formatDate(iso: string): string {
  return format(parseISO(iso), "dd/MM/yyyy", { locale: ptBR });
}

export function formatDateLong(iso: string): string {
  return format(parseISO(iso), "EEEE, dd 'de' MMMM", { locale: ptBR });
}

export function formatDateShort(iso: string): string {
  return format(parseISO(iso), "dd MMM", { locale: ptBR });
}

export function weekdayShort(iso: string): string {
  return format(parseISO(iso), "EEE", { locale: ptBR }).toUpperCase();
}

export function dayNumber(iso: string): string {
  return format(parseISO(iso), "dd");
}

export function nowTime(): string {
  return format(new Date(), "HH:mm");
}

export function currentHour(): number {
  return new Date().getHours();
}

export function isPastHour(dateISO: string, hour: number): boolean {
  const today = toISODate(new Date());
  if (dateISO > today) return false;
  if (dateISO < today) return true;
  return hour <= currentHour();
}

export function addDaysISO(days: number): string {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return toISODate(date);
}

export function hourLabel(hour: number): string {
  return `${String(hour).padStart(2, "0")}:00`;
}

export function nextHourLabel(hour: number): string {
  return hourLabel(hour + 1);
}
