import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './Dialog.module.css';

export interface DialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm?: () => void;
  /** 'destructive' styles the confirm button in error red */
  variant?: 'default' | 'destructive';
  children?: React.ReactNode;
}

export function Dialog({
  open,
  onClose,
  title,
  description,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  onConfirm,
  variant = 'default',
  children,
}: DialogProps) {
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open, onClose]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!open) return null;

  return createPortal(
    <div
      className={styles.overlay}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="dialog-title"
      aria-describedby={description ? 'dialog-description' : undefined}
    >
      <div className={styles.dialog}>
        <h3 id="dialog-title" className={styles.title}>
          {title}
        </h3>
        {description && (
          <p id="dialog-description" className={styles.description}>
            {description}
          </p>
        )}
        {children && <div className={styles.content}>{children}</div>}
        <div className={styles.actions}>
          <button className={styles.cancelButton} type="button" onClick={onClose}>
            {cancelLabel}
          </button>
          {onConfirm && (
            <button
              type="button"
              className={[
                styles.confirmButton,
                variant === 'destructive' ? styles.destructive : '',
              ]
                .filter(Boolean)
                .join(' ')}
              onClick={onConfirm}
            >
              {confirmLabel}
            </button>
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
}
