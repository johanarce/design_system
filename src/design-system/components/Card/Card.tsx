import React from 'react';
import styles from './Card.module.css';

export interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'raised';
  padding?: 'none' | 'sm' | 'md';
  interactive?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  className?: string;
}

export function Card({
  children,
  variant = 'default',
  padding = 'md',
  interactive = false,
  onClick,
  className,
}: CardProps) {
  const paddingClass = padding === 'md' ? styles.padded : padding === 'sm' ? styles['padded-sm'] : '';

  const classes = [
    styles.card,
    styles[variant],
    interactive || onClick ? styles.interactive : '',
    paddingClass,
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} onClick={onClick} role={onClick ? 'button' : undefined} tabIndex={onClick ? 0 : undefined}>
      {children}
    </div>
  );
}
