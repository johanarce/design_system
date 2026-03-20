import React from 'react';
import styles from './Radio.module.css';

export interface RadioOption {
  value: string;
  label: string;
  description?: string;
  disabled?: boolean;
}

export interface RadioGroupProps {
  name: string;
  label?: string;
  options: RadioOption[];
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
}

export function RadioGroup({ name, label, options, value, onChange, disabled }: RadioGroupProps) {
  return (
    <div className={styles.group} role="radiogroup" aria-labelledby={label ? `${name}-label` : undefined}>
      {label && (
        <div id={`${name}-label`} className={styles.groupLabel}>
          {label}
        </div>
      )}
      {options.map((opt) => {
        const isDisabled = disabled || opt.disabled;
        return (
          <label
            key={opt.value}
            className={[styles.row, isDisabled ? styles.disabled : ''].filter(Boolean).join(' ')}
          >
            <input
              type="radio"
              name={name}
              value={opt.value}
              checked={value === opt.value}
              disabled={isDisabled}
              onChange={() => onChange?.(opt.value)}
              className={styles.input}
            />
            <span className={styles.circle} />
            <span>
              <span className={styles.labelText}>{opt.label}</span>
              {opt.description && (
                <div className={styles.description}>{opt.description}</div>
              )}
            </span>
          </label>
        );
      })}
    </div>
  );
}
