import React from 'react';
import styles from './MultiOptionToggle.module.css';

export interface ToggleOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface MultiOptionToggleProps {
  options: ToggleOption[];
  value: string;
  onChange: (value: string) => void;
  size?: 'small' | 'medium';
  disabled?: boolean;
  /** Accessible name for the group */
  name?: string;
}

export function MultiOptionToggle({
  options,
  value,
  onChange,
  size = 'medium',
  disabled = false,
  name,
}: MultiOptionToggleProps) {
  return (
    <div
      className={[
        styles.toggle,
        styles[size],
        disabled ? styles.disabled : '',
      ]
        .filter(Boolean)
        .join(' ')}
      role="radiogroup"
      aria-label={name}
    >
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          role="radio"
          aria-checked={value === option.value}
          className={[
            styles.option,
            value === option.value ? styles.selected : '',
            option.disabled || disabled ? styles.optionDisabled : '',
          ]
            .filter(Boolean)
            .join(' ')}
          disabled={option.disabled || disabled}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
