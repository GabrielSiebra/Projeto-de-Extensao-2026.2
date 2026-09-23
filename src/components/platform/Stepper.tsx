import { Check } from "lucide-react";

export interface StepItem {
  label: string;
}

export function Stepper({ steps, current }: { steps: string[]; current: number }) {
  return (
    <ol className="stepper" aria-label="Etapas da reserva">
      {steps.map((label, index) => {
        const state = index < current ? "done" : index === current ? "current" : "";
        return (
          <li key={label} className={`stepper-item ${state}`}>
            <span className="stepper-dot" aria-hidden="true">
              {index < current ? <Check size={14} /> : index + 1}
            </span>
            <span>{label}</span>
          </li>
        );
      })}
    </ol>
  );
}
