import React from 'react';
import styles from './Alert.module.css';

const defaultIcons: Record<string, string> = {
  info: 'ℹ',
  success: '✓',
  warning: '⚠',
  error: '✕',
};

export interface AlertProps {
  variant?: 'info' | 'success' | 'warning' | 'error';
  title?: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  onClose?: () => void;
}

export function Alert({
  variant = 'info',
  title,
  children,
  icon,
  onClose,
}: AlertProps) {
  const iconContent = icon !== undefined ? icon : defaultIcons[variant];

  return (
    <div className={[styles.alert, styles[variant]].join(' ')} role="alert">
      {iconContent && (
        <span className={styles.iconSlot} aria-hidden="true">
          {iconContent}
        </span>
      )}
      <div className={styles.body}>
        {title && <div className={styles.title}>{title}</div>}
        {children && <div className={styles.description}>{children}</div>}
      </div>
      {onClose && (
        <button className={styles.closeButton} onClick={onClose} aria-label="Dismiss">
          ✕
        </button>
      )}
    </div>
  );
}
