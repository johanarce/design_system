import React, { useCallback, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './Toast.module.css';
import { ToastContext } from './ToastContext';

export type ToastVariant = 'default' | 'success' | 'error' | 'warning' | 'info';

export interface ToastItem {
  id: string;
  title: string;
  description?: string;
  variant?: ToastVariant;
  duration?: number;
}

const icons: Record<ToastVariant, string> = {
  default: '',
  success: '✓',
  error: '✕',
  warning: '⚠',
  info: 'ℹ',
};

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const dismiss = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const toast = useCallback(
    (item: Omit<ToastItem, 'id'>) => {
      const id = `toast-${Date.now()}-${Math.random()}`;
      const duration = item.duration ?? 4000;
      setToasts((prev) => [...prev, { ...item, id }]);
      if (duration > 0) setTimeout(() => dismiss(id), duration);
    },
    [dismiss],
  );

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      {createPortal(
        <div className={styles.region} role="region" aria-label="Notifications" aria-live="polite">
          {toasts.map((t) => (
            <div
              key={t.id}
              className={[styles.toast, t.variant ? styles[t.variant] : ''].filter(Boolean).join(' ')}
            >
              {t.variant && icons[t.variant] && (
                <span className={styles.icon} aria-hidden="true">
                  {icons[t.variant]}
                </span>
              )}
              <div className={styles.body}>
                <div className={styles.title}>{t.title}</div>
                {t.description && <div className={styles.description}>{t.description}</div>}
              </div>
              <button className={styles.closeButton} onClick={() => dismiss(t.id)} aria-label="Dismiss">
                ✕
              </button>
            </div>
          ))}
        </div>,
        document.body,
      )}
    </ToastContext.Provider>
  );
}
