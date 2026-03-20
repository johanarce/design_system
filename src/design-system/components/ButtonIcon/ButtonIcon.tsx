import React from 'react';
import styles from './ButtonIcon.module.css';

export interface ButtonIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Icon content — use an SVG, emoji, or icon component */
  iconName: string;
  /** Accessible label (required for icon-only buttons) */
  label: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium';
  pressed?: boolean;
  selected?: boolean;
  as?: React.ElementType;
  href?: string;
  target?: string;
}

export function ButtonIcon({
  iconName,
  label,
  variant = 'secondary',
  size = 'medium',
  pressed = false,
  selected = false,
  disabled,
  className,
  as: Tag = 'button',
  href,
  target,
  ...props
}: ButtonIconProps) {
  const Component = (href ? 'a' : Tag) as React.ElementType;

  const classes = [
    styles.buttonIcon,
    styles[variant],
    styles[size],
    pressed ? styles.pressed : '',
    selected ? styles.selected : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Component
      className={classes}
      disabled={Component === 'button' ? disabled : undefined}
      aria-label={label}
      aria-pressed={pressed || undefined}
      href={href}
      target={target}
      {...props}
    >
      <span className={styles.icon} aria-hidden="true">
        {iconName}
      </span>
    </Component>
  );
}
