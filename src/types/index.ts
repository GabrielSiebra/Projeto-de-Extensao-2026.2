export type SlotStatus = "available" | "reserved" | "occupied" | "live" | "unavailable";

export type ReservationStatus = "pending" | "confirmed" | "live" | "finished" | "cancelled";

export type AccountType = "individual" | "time" | "owner";

export type PaymentMethod = "pix" | "card" | "other";

export type FieldStatus = "available" | "occupied" | "maintenance";

export interface Field {
  id: string;
  venueId: string;
  name: string;
  type: string;
  capacity: number;
  pricePerHour: number;
  status: FieldStatus;
}

export interface Venue {
  id: string;
  name: string;
  neighborhood: string;
  city: string;
  address: string;
  distanceKm: number;
  rating: number;
  reviewCount: number;
  pricePerHour: number;
  structure: string[];
  rules: string[];
  description: string;
  nextAvailability: string;
  popular: boolean;
  coverHue: number;
  mapX: number;
  mapY: number;
  closedHours: number[];
  blockedHours: number[];
  fields: Field[];
}

export interface Player {
  id: string;
  name: string;
  number: number;
  position: string;
  captain?: boolean;
}

export interface Team {
  id: string;
  name: string;
  initials: string;
  captain: string;
  hue: number;
  players: Player[];
  createdAt: string;
}

export interface Profile {
  id: string;
  name: string;
  email: string;
  phone: string;
  initials: string;
  accountType: Exclude<AccountType, "owner">;
}

export interface Reservation {
  id: string;
  code: string;
  venueId: string;
  fieldId: string;
  fieldName: string;
  date: string;
  time: string;
  durationHours: number;
  accountType: Exclude<AccountType, "owner">;
  clientName: string;
  teamId?: string;
  teamName?: string;
  amount: number;
  fees: number;
  total: number;
  status: ReservationStatus;
  paymentMethod?: PaymentMethod;
  paymentStatus?: "approved" | "processing" | "refused";
  recurring?: boolean;
  createdAt: string;
}

export interface AppNotification {
  id: string;
  title: string;
  message: string;
  date: string;
  read: boolean;
  tone: "success" | "info" | "warning" | "danger";
}

export interface ClientSummary {
  id: string;
  name: string;
  phone: string;
  reservations: number;
  lastBooking: string;
  totalSpent: number;
  hue: number;
}

export interface Review {
  id: string;
  author: string;
  venueId: string;
  rating: number;
  structure: number;
  service: number;
  pitch: number;
  comment: string;
  date: string;
  hue: number;
}

export interface Promotion {
  id: string;
  code: string;
  label: string;
  discount: number;
  kind: "percent" | "happy-hour" | "new-client";
  schedule?: string;
  active: boolean;
}

export interface Withdrawal {
  id: string;
  amount: number;
  date: string;
  status: "processing" | "done";
}

export interface WaitlistEntry {
  id: string;
  venueId: string;
  date: string;
  time: string;
}

export interface Session {
  role: AccountType;
  name: string;
  email: string;
}

export interface DaySlot {
  time: string;
  hour: number;
  status: SlotStatus;
  reservationId?: string;
}

export interface BookingDraft {
  venueId: string;
  date: string;
  time: string;
  fieldId: string;
  accountType: Exclude<AccountType, "owner">;
  durationHours: number;
  paymentMethod?: PaymentMethod;
  recurring?: boolean;
}
