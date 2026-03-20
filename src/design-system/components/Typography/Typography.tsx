import React from 'react';
import styles from './Typography.module.css';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type TextColor = 'default' | 'subtle' | 'disabled' | 'accent' | 'error' | 'success' | 'warning';
type TextWeight = 'regular' | 'medium' | 'semibold' | 'bold';
type TextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface HeadingProps {
  level?: HeadingLevel;
  as?: React.ElementType;
  color?: TextColor;
  children: React.ReactNode;
  className?: string;
}

export function Heading({ level = 'h2', as, color, children, className }: HeadingProps) {
  const Tag = as ?? level;
  return (
    <Tag
      className={[
        styles.heading,
        styles[level],
        color && color !== 'default' ? styles[color] : '',
        className ?? '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </Tag>
  );
}

export interface TextProps {
  size?: TextSize;
  color?: TextColor;
  weight?: TextWeight;
  mono?: boolean;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
}

export function Text({
  size = 'md',
  color,
  weight,
  mono = false,
  as: Tag = 'p',
  children,
  className,
}: TextProps) {
  return (
    <Tag
      className={[
        styles.text,
        styles[size],
        color && color !== 'default' ? styles[color] : '',
        weight ? styles[weight] : '',
        mono ? styles.mono : '',
        className ?? '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </Tag>
  );
}
