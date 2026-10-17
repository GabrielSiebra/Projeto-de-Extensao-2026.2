import { useState, useEffect } from 'react';
import { agendamentoService } from '../lib/api';
import { gerarSlotsArena } from '../lib/dateUtils';
import type { SlotHorario } from '../types/agendamento';

export const useAgendamento = (dataSelecionada: Date | null | undefined) => {
  const [slots, setSlots] = useState<SlotHorario[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!dataSelecionada) return;

    const carregarHorarios = async () => {
      setLoading(true);
      try {
        const todosOsSlots = gerarSlotsArena(16, 23);
        const dataIso = dataSelecionada.toISOString().split('T')[0];
        
        const agendamentosOcupados = await agendamentoService.buscarPorDia(dataIso);

        const slotsProcessados = todosOsSlots.map(horario => {
          const estaOcupado = agendamentosOcupados.some(ag => {
            const horaAg = new Date(ag.dataHoraInicio).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
            return horaAg === horario;
          });
          return { horario, disponivel: !estaOcupado };
        });

        setSlots(slotsProcessados);
      } catch (error) {
        console.error("Erro ao carregar horários da areninha", error);
      } finally {
        setLoading(false);
      }
    };

    carregarHorarios();
  }, [dataSelecionada]);

  return { slots, loading };
};