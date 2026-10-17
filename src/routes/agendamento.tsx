import { useState } from 'react';
import { Calendar } from 'primereact/calendar';
import { InputText } from 'primereact/inputtext';
import { useAgendamento } from '../hooks/useAgendamento';
import { TimeSlotPicker } from '../components/TimeSlotPicker';
import { agendamentoService } from '../lib/api';

export default function AgendamentoArenaForm() {
  const [dataSelecionada, setDataSelecionada] = useState<Date | null>(null);
  const [horarioSelecionado, setHorarioSelecionado] = useState<string | null>(null);
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');

  const { slots, loading } = useAgendamento(dataSelecionada);

  const handleAgendar = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!horarioSelecionado || !nome || !dataSelecionada) return;

    const [hora, minuto] = horarioSelecionado.split(':');
    const dataInicio = new Date(dataSelecionada);
    dataInicio.setHours(Number(hora), Number(minuto), 0, 0);

    const dataFim = new Date(dataInicio);
    dataFim.setHours(dataInicio.getHours() + 1);

    try {
      await agendamentoService.criar({
        nomeResponsavel: nome,
        telefoneContato: telefone,
        dataHoraInicio: dataInicio.toISOString(),
        dataHoraFim: dataFim.toISOString()
      });
      alert('Reserva da arena confirmada com sucesso!');
      setHorarioSelecionado(null);
      setDataSelecionada(null);
      setNome('');
      setTelefone('');
    } catch (error) {
      console.error(error);
      alert('Erro ao realizar reserva.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 lg:p-8 bg-white border border-gray-100 rounded-2xl shadow-xl shadow-gray-200/40">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Garanta seu horário</h2>
        <p className="text-gray-500 mt-2">Escolha o dia e o horário para o seu jogo.</p>
      </div>

      <form onSubmit={handleAgendar} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">Nome do Responsável</label>
            <InputText 
              value={nome} 
              onChange={(e) => setNome(e.target.value)} 
              placeholder="Ex: João Silva"
              className="w-full p-3 border-gray-200 rounded-xl focus:ring-[#68ef3f] focus:border-[#68ef3f]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">WhatsApp</label>
            <InputText 
              value={telefone} 
              onChange={(e) => setTelefone(e.target.value)} 
              placeholder="(00) 00000-0000"
              className="w-full p-3 border-gray-200 rounded-xl focus:ring-[#68ef3f] focus:border-[#68ef3f]"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-gray-700">Data do Jogo</label>
          <Calendar 
            value={dataSelecionada} 
            onChange={(e) => {
              setDataSelecionada(e.value as Date);
              setHorarioSelecionado(null);
            }} 
            minDate={new Date()}
            dateFormat="dd/mm/yy"
            placeholder="Selecione o dia"
            inputClassName="w-full p-3 border-gray-200 rounded-xl focus:ring-[#68ef3f] focus:border-[#68ef3f]"
            className="w-full"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-gray-700">Horários Disponíveis</label>
          <TimeSlotPicker 
            slots={slots} 
            onSelectSlot={setHorarioSelecionado} 
            slotSelecionado={horarioSelecionado}
            loading={loading}
          />
        </div>

        <button 
          type="submit"
          disabled={!horarioSelecionado || !nome || !dataSelecionada}
          className="w-full mt-4 bg-black text-[#68ef3f] p-4 rounded-xl font-bold text-lg hover:bg-gray-900 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed transition-all duration-300"
        >
          Confirmar Reserva da Arena
        </button>
      </form>
    </div>
  );
}