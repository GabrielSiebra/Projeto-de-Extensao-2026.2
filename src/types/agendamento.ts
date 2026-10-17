export interface AgendamentoArena {
  id?: number;
  nomeResponsavel: string;
  telefoneContato: string;
  dataHoraInicio: string;
  dataHoraFim: string;
  status?: 'PENDENTE' | 'CONFIRMADO' | 'CANCELADO';
}

export interface SlotHorario {
  horario: string;
  disponivel: boolean;
}