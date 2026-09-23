import { useEffect, type ReactNode } from "react";
import { X } from "lucide-react";
import { Button } from "primereact/button";

export function ConfirmModal({
  open,
  title,
  description,
  children,
  confirmLabel = "Confirmar",
  cancelLabel = "Voltar",
  onConfirm,
  onCancel,
  tone = "default",
}: {
  open: boolean;
  title: string;
  description?: string | undefined;
  children?: ReactNode;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm?: (() => void) | undefined;
  onCancel: () => void;
  tone?: "default" | "danger";
}) {
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onCancel();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onCancel]);

  if (!open) return null;

  return (
    <div className="modal-overlay" role="presentation" onClick={onCancel}>
      <div
        className="modal-card"
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="modal-head">
          <div>
            <h3>{title}</h3>
            {description && <p>{description}</p>}
          </div>
          <button type="button" className="modal-close" aria-label="Fechar" onClick={onCancel}>
            <X size={17} aria-hidden="true" />
          </button>
        </div>
        {children && <div className="modal-body">{children}</div>}
        <div className="modal-foot">
          <Button className="button button-outline" onClick={onCancel}>
            {cancelLabel}
          </Button>
          {onConfirm && (
            <Button
              className={tone === "danger" ? "button button-danger" : "button button-primary"}
              onClick={onConfirm}
            >
              {confirmLabel}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
