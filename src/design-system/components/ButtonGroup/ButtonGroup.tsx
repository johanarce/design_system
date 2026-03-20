import React from 'react';
import styles from './ButtonGroup.module.css';

export interface ButtonGroupProps {
  children: React.ReactNode;
  orientation?: 'horizontal' | 'vertical';
}

export function ButtonGroup({ children, orientation = 'horizontal' }: ButtonGroupProps) {
  return (
    <div
      className={[styles.group, styles[orientation]].join(' ')}
      role="group"
    >
      {children}
    </div>
  );
}
