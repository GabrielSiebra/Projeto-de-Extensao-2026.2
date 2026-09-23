import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type {
  AccountType,
  AppNotification,
  DaySlot,
  PaymentMethod,
  Promotion,
  Reservation,
  Session,
  Team,
  Venue,
  WaitlistEntry,
  Withdrawal,
} from "../types";
import {
  ownerNotifications,
  profiles,
  seedNotifications,
  seedPromotions,
  seedReservations,
  seedWithdrawals,
  teams as seedTeams,
  venues as seedVenues,
  ownerVenueId,
} from "../mocks";
import { financeStats } from "../mocks/finance";
import { hourLabel, isPastHour, toISODate } from "../lib/format";

interface AppState {
  session: Session | null;
  favorites: string[];
  reservations: Reservation[];
  notifications: AppNotification[];
  ownerNotifications: AppNotification[];
  waitlist: WaitlistEntry[];
  venues: Venue[];
  teams: Team[];
  myTeamId: string;
  promotions: Promotion[];
  withdrawals: Withdrawal[];
  balance: number;
  pendingBalance: number;
  login: (role: AccountType) => void;
  logout: () => void;
  toggleFavorite: (venueId: string) => void;
  isFavorite: (venueId: string) => boolean;
  venueById: (venueId: string) => Venue | undefined;
  getSlots: (venueId: string, date: string) => DaySlot[];
  createReservation: (input: {
    venueId: string;
    fieldId: string;
    date: string;
    time: string;
    accountType: Exclude<AccountType, "owner">;
    paymentMethod: PaymentMethod;
    recurring?: boolean;
  }) => Reservation;
  updateReservationStatus: (id: string, status: Reservation["status"]) => void;
  markAllNotificationsRead: (audience: "client" | "owner") => void;
  pushNotification: (
    audience: "client" | "owner",
    notification: Omit<AppNotification, "id" | "read">,
  ) => void;
  joinWaitlist: (entry: Omit<WaitlistEntry, "id">) => void;
  inWaitlist: (venueId: string, date: string, time: string) => boolean;
  addPlayer: (name: string, position: string, number: number) => void;
  removePlayer: (playerId: string) => void;
  addVenue: (venue: Venue) => void;
  updateVenue: (venueId: string, patch: Partial<Venue>) => void;
  addPromotion: (promotion: Omit<Promotion, "id">) => void;
  togglePromotion: (id: string) => void;
  requestWithdrawal: (amount: number) => void;
}

const AppContext = createContext<AppState | null>(null);

const SESSION_KEY = "meucampo.session";
const FAVORITES_KEY = "meucampo.favorites";

function readStorage<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function writeStorage(key: string, value: unknown) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // storage indisponível — segue apenas com estado em memória
  }
}

let reservationSeq = 100;
let idSeq = 1000;

function nextId(prefix: string) {
  idSeq += 1;
  return `${prefix}-${idSeq}`;
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [favorites, setFavorites] = useState<string[]>(["campo-futuro", "ze-society"]);
  const [reservations, setReservations] = useState<Reservation[]>(seedReservations);
  const [notifications, setNotifications] = useState<AppNotification[]>(seedNotifications);
  const [ownerNotes, setOwnerNotes] = useState<AppNotification[]>(ownerNotifications);
  const [waitlist, setWaitlist] = useState<WaitlistEntry[]>([]);
  const [venues, setVenues] = useState<Venue[]>(seedVenues);
  const [teams, setTeams] = useState<Team[]>(seedTeams);
  const [myTeamId, setMyTeamId] = useState("leao-aldeota");
  const [promotions, setPromotions] = useState<Promotion[]>(seedPromotions);
  const [withdrawals, setWithdrawals] = useState<Withdrawal[]>(seedWithdrawals);
  const [balance, setBalance] = useState(financeStats.availableBalance);
  const [pendingBalance, setPendingBalance] = useState(financeStats.pendingBalance);

  useEffect(() => {
    const storedSession = readStorage<Session | null>(SESSION_KEY, null);
    if (storedSession) {
      setSession(storedSession);
      setMyTeamId(storedSession.role === "time" ? "amigos-fc" : "leao-aldeota");
    }
    setFavorites(readStorage<string[]>(FAVORITES_KEY, ["campo-futuro", "ze-society"]));
  }, []);

  const login = useCallback((role: AccountType) => {
    const profile =
      role === "owner" ? { ...profiles.owner, accountType: "individual" as const } : profiles[role];
    const next: Session = { role, name: profile.name, email: profile.email };
    setSession(next);
    setMyTeamId(role === "time" ? "amigos-fc" : "leao-aldeota");
    writeStorage(SESSION_KEY, next);
  }, []);

  const logout = useCallback(() => {
    setSession(null);
    if (typeof window !== "undefined") window.localStorage.removeItem(SESSION_KEY);
  }, []);

  const toggleFavorite = useCallback((venueId: string) => {
    setFavorites((current) => {
      const next = current.includes(venueId)
        ? current.filter((id) => id !== venueId)
        : [...current, venueId];
      writeStorage(FAVORITES_KEY, next);
      return next;
    });
  }, []);

  const isFavorite = useCallback((venueId: string) => favorites.includes(venueId), [favorites]);

  const venueById = useCallback(
    (venueId: string) => venues.find((venue) => venue.id === venueId),
    [venues],
  );

  const getSlots = useCallback(
    (venueId: string, date: string): DaySlot[] => {
      const venue = venues.find((item) => item.id === venueId);
      if (!venue) return [];
      const slots: DaySlot[] = [];
      for (let hour = 6; hour <= 23; hour += 1) {
        const time = hourLabel(hour);
        const reservation = reservations.find(
          (item) =>
            item.venueId === venueId &&
            item.date === date &&
            item.time === time &&
            item.status !== "cancelled",
        );
        let status: DaySlot["status"] = "available";
        if (isPastHour(date, hour)) status = "unavailable";
        else if (venue.closedHours.includes(hour)) status = "unavailable";
        else if (venue.blockedHours.includes(hour)) status = "occupied";
        else if (reservation?.status === "live") status = "live";
        else if (reservation) status = "reserved";
        slots.push({
          time,
          hour,
          status,
          ...(reservation ? { reservationId: reservation.id } : {}),
        });
      }
      return slots;
    },
    [reservations, venues],
  );

  const createReservation = useCallback<AppState["createReservation"]>(
    (input) => {
      const venue = venues.find((item) => item.id === input.venueId);
      const field = venue?.fields.find((item) => item.id === input.fieldId) ?? venue?.fields[0];
      const amount = field?.pricePerHour ?? venue?.pricePerHour ?? 140;
      const fees = Math.round(amount * 0.05);
      reservationSeq += 1;
      const reservation: Reservation = {
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
        ...(input.accountType === "time"
          ? { teamId: myTeamId, teamName: teams.find((t) => t.id === myTeamId)?.name ?? "" }
          : {}),
        amount,
        fees,
        total: amount + fees,
        status: "confirmed",
        paymentMethod: input.paymentMethod,
        paymentStatus: "approved",
        ...(input.recurring ? { recurring: true } : {}),
        createdAt: toISODate(new Date()),
      };
      setReservations((current) => [reservation, ...current]);
      setNotifications((current) => [
        {
          id: nextId("not"),
          title: "Reserva confirmada",
          message: `${venue?.name ?? "Areninha"} · ${reservation.fieldName} em ${reservation.date} às ${reservation.time}. Código ${reservation.code}.`,
          date: toISODate(new Date()),
          read: false,
          tone: "success",
        },
        ...current,
      ]);
      setOwnerNotes((current) => [
        {
          id: nextId("own"),
          title: "Nova reserva recebida",
          message: `${reservation.clientName} reservou ${reservation.fieldName} em ${reservation.date} às ${reservation.time}.`,
          date: toISODate(new Date()),
          read: false,
          tone: "info",
        },
        ...current,
      ]);
      return reservation;
    },
    [myTeamId, session, teams, venues],
  );

  const updateReservationStatus = useCallback((id: string, status: Reservation["status"]) => {
    setReservations((current) =>
      current.map((item) => (item.id === id ? { ...item, status } : item)),
    );
    if (status === "confirmed" || status === "cancelled") {
      setOwnerNotes((current) => [
        {
          id: nextId("own"),
          title: status === "confirmed" ? "Reserva confirmada" : "Reserva cancelada",
          message: `A reserva foi ${status === "confirmed" ? "confirmada" : "cancelada"} pelo painel.`,
          date: toISODate(new Date()),
          read: false,
          tone: status === "confirmed" ? "success" : "danger",
        },
        ...current,
      ]);
    }
  }, []);

  const pushNotification = useCallback<AppState["pushNotification"]>((audience, notification) => {
    const entry: AppNotification = {
      ...notification,
      id: nextId("not"),
      read: false,
    };
    if (audience === "client") setNotifications((current) => [entry, ...current]);
    else setOwnerNotes((current) => [entry, ...current]);
  }, []);

  const markAllNotificationsRead = useCallback((audience: "client" | "owner") => {
    if (audience === "client") {
      setNotifications((current) => current.map((item) => ({ ...item, read: true })));
    } else {
      setOwnerNotes((current) => current.map((item) => ({ ...item, read: true })));
    }
  }, []);

  const joinWaitlist = useCallback((entry: Omit<WaitlistEntry, "id">) => {
    setWaitlist((current) => {
      const exists = current.some(
        (item) =>
          item.venueId === entry.venueId && item.date === entry.date && item.time === entry.time,
      );
      if (exists) return current;
      return [...current, { ...entry, id: nextId("wait") }];
    });
    setNotifications((current) => [
      {
        id: nextId("not"),
        title: "Lista de espera",
        message: `Você entrou na lista de espera de ${entry.time} em ${entry.date}. Avisaremos se liberar.`,
        date: toISODate(new Date()),
        read: false,
        tone: "info",
      },
      ...current,
    ]);
  }, []);

  const inWaitlist = useCallback(
    (venueId: string, date: string, time: string) =>
      waitlist.some((item) => item.venueId === venueId && item.date === date && item.time === time),
    [waitlist],
  );

  const addPlayer = useCallback(
    (name: string, position: string, number: number) => {
      setTeams((current) =>
        current.map((team) =>
          team.id === myTeamId
            ? {
                ...team,
                players: [
                  ...team.players,
                  {
                    id: nextId("player"),
                    name,
                    position,
                    number,
                  },
                ],
              }
            : team,
        ),
      );
    },
    [myTeamId],
  );

  const removePlayer = useCallback(
    (playerId: string) => {
      setTeams((current) =>
        current.map((team) =>
          team.id === myTeamId
            ? { ...team, players: team.players.filter((player) => player.id !== playerId) }
            : team,
        ),
      );
    },
    [myTeamId],
  );

  const addVenue = useCallback((venue: Venue) => {
    setVenues((current) => [...current, venue]);
    setOwnerNotes((current) => [
      {
        id: nextId("own"),
        title: "Areninha cadastrada",
        message: `${venue.name} foi adicionada à plataforma com sucesso.`,
        date: toISODate(new Date()),
        read: false,
        tone: "success",
      },
      ...current,
    ]);
  }, []);

  const updateVenue = useCallback((venueId: string, patch: Partial<Venue>) => {
    setVenues((current) =>
      current.map((venue) => (venue.id === venueId ? { ...venue, ...patch } : venue)),
    );
  }, []);

  const addPromotion = useCallback((promotion: Omit<Promotion, "id">) => {
    setPromotions((current) => [{ ...promotion, id: nextId("promo") }, ...current]);
  }, []);

  const togglePromotion = useCallback((id: string) => {
    setPromotions((current) =>
      current.map((item) => (item.id === id ? { ...item, active: !item.active } : item)),
    );
  }, []);

  const requestWithdrawal = useCallback((amount: number) => {
    setBalance((current) => Math.max(0, current - amount));
    setPendingBalance((current) => current + amount);
    setWithdrawals((current) => [
      {
        id: nextId("w"),
        amount,
        date: new Date().toLocaleDateString("pt-BR"),
        status: "processing",
      },
      ...current,
    ]);
    setOwnerNotes((current) => [
      {
        id: nextId("own"),
        title: "Solicitação de saque",
        message: `Solicitação de ${amount.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })} recebida e em processamento.`,
        date: toISODate(new Date()),
        read: false,
        tone: "info",
      },
      ...current,
    ]);
  }, []);

  const value = useMemo<AppState>(
    () => ({
      session,
      favorites,
      reservations,
      notifications,
      ownerNotifications: ownerNotes,
      waitlist,
      venues,
      teams,
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
      requestWithdrawal,
    }),
    [
      session,
      favorites,
      reservations,
      notifications,
      ownerNotes,
      waitlist,
      venues,
      teams,
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
      requestWithdrawal,
    ],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp(): AppState {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp precisa estar dentro de AppProvider");
  return context;
}
