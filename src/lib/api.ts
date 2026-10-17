import type { AgendamentoArena } from '../types/agendamento';

const API_URL = 'http://localhost:8080/api/agendamentos'; // Futuro endpoint Spring Boot

export const agendamentoService = {
  criar: async (dados: AgendamentoArena): Promise<AgendamentoArena> => {
    // Simulação temporária enquanto o backend não está plugado
    console.log("Payload enviado para o Spring Boot:", dados);
    return new Promise((resolve) => setTimeout(() => resolve({ ...dados, id: Date.now(), status: 'CONFIRMADO' }), 800));
    
    /* Código real para o futuro:
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dados),
    });
    if (!response.ok) throw new Error(await response.text());
    return response.json();
    */
  },

  buscarPorDia: async (dataIso: string): Promise<AgendamentoArena[]> => {
    return [
      {
        id: 1,
        nomeResponsavel: "Teste",
        telefoneContato: "0000000000",
        dataHoraInicio: `${dataIso}T19:00:00`,
        dataHoraFim: `${dataIso}T20:00:00`,
        status: 'CONFIRMADO'
      }
    ];
  }
};