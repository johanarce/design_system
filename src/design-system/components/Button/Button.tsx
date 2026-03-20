import React from 'react';
import styles from './Button.module.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'destructive';
  size?: 'small' | 'medium' | 'sm' | 'md' | 'lg';
  loading?: boolean;
  pressed?: boolean;
  selected?: boolean;
  iconName?: string;
  as?: React.ElementType;
  href?: string;
  target?: string;
}

export function Button({
  variant = 'primary',
  size = 'medium',
  loading = false,
  pressed = false,
  selected = false,
  disabled,
  children,
  className,
  as: Tag = 'button',
  iconName,
  href,
  target,
  ...props
}: ButtonProps) {
  const Component = (href ? 'a' : Tag) as React.ElementType;

  const classes = [
    styles.button,
    styles[variant],
    styles[size],
    loading ? styles.loading : '',
    pressed ? styles.pressed : '',
    selected ? styles.selected : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Component
      className={classes}
      disabled={Component === 'button' ? (disabled || loading) : undefined}
      aria-busy={loading || undefined}
      aria-pressed={pressed || undefined}
      href={href}
      target={target}
      {...props}
    >
      {loading && <span className={styles.spinner} aria-hidden="true" />}
      {iconName && !loading && (
        <span className={styles.iconSlot} aria-hidden="true">{iconName}</span>
      )}
      {children}
    </Component>
  );
}
