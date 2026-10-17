import { Clock } from 'lucide-react';
import type { SlotHorario } from '../types/agendamento';

interface TimeSlotPickerProps {
  slots: SlotHorario[];
  onSelectSlot: (horario: string) => void;
  slotSelecionado: string | null;
  loading: boolean;
}

export const TimeSlotPicker = ({ slots, onSelectSlot, slotSelecionado, loading }: TimeSlotPickerProps) => {
  if (loading) {
    return <div className="animate-pulse flex space-x-4 h-12 bg-gray-100 rounded w-full mt-4"></div>;
  }

  if (slots.length === 0) {
    return <p className="text-gray-500 text-sm mt-4">Selecione uma data para ver os horários da arena.</p>;
  }

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 mt-4">
      {slots.map((slot) => (
        <button
          key={slot.horario}
          type="button"
          disabled={!slot.disponivel}
          onClick={() => onSelectSlot(slot.horario)}
          className={`flex items-center justify-center gap-2 p-3 rounded-xl font-medium transition-all duration-200 border-2 
            ${!slot.disponivel 
              ? 'bg-gray-50 text-gray-400 border-gray-100 cursor-not-allowed opacity-70' 
              : slotSelecionado === slot.horario 
                ? 'bg-[#68ef3f] text-black border-[#68ef3f] shadow-[0_4px_14px_rgba(104,239,63,0.4)]' 
                : 'bg-white text-gray-700 border-gray-200 hover:border-[#68ef3f] hover:text-black'
            }`}
        >
          <Clock size={18} strokeWidth={slotSelecionado === slot.horario ? 2.5 : 2} />
          {slot.horario}
        </button>
      ))}
    </div>
  );
};