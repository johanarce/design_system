import React from 'react';
import styles from './Label.module.css';

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
  optional?: boolean;
  hint?: string;
  size?: 'small' | 'medium';
}

export function Label({
  children,
  required,
  optional,
  hint,
  size = 'medium',
  className,
  ...props
}: LabelProps) {
  return (
    <div className={styles.wrapper}>
      <label
        className={[styles.label, styles[size], className ?? ''].filter(Boolean).join(' ')}
        {...props}
      >
        {children}
        {required && (
          <span className={styles.required} aria-hidden="true">
            *
          </span>
        )}
        {optional && <span className={styles.optional}>(optional)</span>}
      </label>
      {hint && <span className={styles.hint}>{hint}</span>}
    </div>
  );
}
