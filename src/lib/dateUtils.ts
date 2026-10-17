export const gerarSlotsArena = (horaInicio: number, horaFim: number, duracaoMinutos: number = 60): string[] => {
  const slots: string[] = [];
  const atual = new Date();
  atual.setHours(horaInicio, 0, 0, 0);

  const limite = new Date();
  limite.setHours(horaFim, 0, 0, 0);

  while (atual < limite) {
    slots.push(atual.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }));
    atual.setMinutes(atual.getMinutes() + duracaoMinutos);
  }
  return slots;
};