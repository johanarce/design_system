import React, { useState } from 'react';
import styles from './Tooltip.module.css';

export interface TooltipProps {
  content: React.ReactNode;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  children: React.ReactElement;
  disabled?: boolean;
}

export function Tooltip({ content, placement = 'top', children, disabled = false }: TooltipProps) {
  const [visible, setVisible] = useState(false);

  if (disabled) return children;

  return (
    <span
      className={styles.wrapper}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      {children}
      {visible && (
        <span className={[styles.tooltip, styles[placement]].join(' ')} role="tooltip">
          {content}
        </span>
      )}
    </span>
  );
}
