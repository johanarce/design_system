import { createContext } from 'react';
import type { ToastItem } from './Toast';

export interface ToastContextValue {
  toast: (item: Omit<ToastItem, 'id'>) => void;
}

export const ToastContext = createContext<ToastContextValue | null>(null);
