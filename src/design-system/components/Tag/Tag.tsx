import React from 'react';
import styles from './Tag.module.css';

export interface TagProps {
  children: React.ReactNode;
  selected?: boolean;
  onClick?: () => void;
  onRemove?: () => void;
  disabled?: boolean;
}

export function Tag({ children, selected = false, onClick, onRemove, disabled = false }: TagProps) {
  const isInteractive = !!(onClick || onRemove);

  const classes = [
    styles.tag,
    isInteractive ? styles.clickable : '',
    selected ? styles.selected : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span
      className={classes}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick && !disabled ? 0 : undefined}
      onClick={disabled ? undefined : onClick}
      onKeyDown={onClick && !disabled ? (e) => e.key === 'Enter' && onClick() : undefined}
      aria-pressed={onClick ? selected : undefined}
      aria-disabled={disabled || undefined}
    >
      {children}
      {onRemove && (
        <button
          className={styles.removeButton}
          onClick={(e) => { e.stopPropagation(); if (!disabled) onRemove(); }}
          aria-label="Remove"
          tabIndex={-1}
        >
          ✕
        </button>
      )}
    </span>
  );
}
