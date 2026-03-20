import React from 'react';
import styles from './Link.module.css';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'default' | 'subtle';
  as?: React.ElementType;
}

export function Link({ variant = 'default', as: Tag = 'a', className, children, ...props }: LinkProps) {
  return (
    <Tag
      className={[styles.link, styles.inline, variant === 'subtle' ? styles.subtle : '', className ?? '']
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </Tag>
  );
}
