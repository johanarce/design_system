import React from 'react';
import styles from './Input.module.css';

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'> {
  label?: string;
  hint?: string;
  error?: string | boolean;
  size?: 'normal' | 'large' | 'sm' | 'md' | 'lg';
  /** Leading icon/element inside the input */
  prefix?: React.ReactNode;
  /** Trailing icon/element inside the input */
  suffix?: React.ReactNode;
  required?: boolean;
  readOnly?: boolean;
  /** Called when Enter key is pressed */
  onPressEnter?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  /** Custom width, defaults to 100% */
  width?: string;
}

export function Input({
  label,
  hint,
  error,
  size = 'normal',
  prefix,
  suffix,
  required,
  readOnly,
  onPressEnter,
  width,
  id,
  className,
  style,
  onKeyDown,
  ...props
}: InputProps) {
  const inputId = id ?? (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const errorMessage = typeof error === 'string' ? error : undefined;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onPressEnter) onPressEnter(e);
    onKeyDown?.(e);
  };

  const inputClasses = [
    styles.input,
    styles[size],
    error ? styles.inputError : '',
    prefix ? styles.hasPrefix : '',
    suffix ? styles.hasSuffix : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={styles.wrapper} style={width ? { width, ...style } : style}>
      {label && (
        <label className={styles.label} htmlFor={inputId}>
          {label}
          {required && (
            <span className={styles.required} aria-hidden="true">
              *
            </span>
          )}
        </label>
      )}
      <div className={styles.inputWrapper}>
        {prefix && <span className={styles.prefix}>{prefix}</span>}
        <input
          id={inputId}
          className={inputClasses}
          aria-invalid={error ? true : undefined}
          aria-describedby={
            errorMessage
              ? `${inputId}-error`
              : hint
                ? `${inputId}-hint`
                : undefined
          }
          required={required}
          readOnly={readOnly}
          onKeyDown={handleKeyDown}
          {...props}
        />
        {suffix && <span className={styles.suffix}>{suffix}</span>}
      </div>
      {errorMessage && (
        <span id={`${inputId}-error`} className={styles.errorMessage} role="alert">
          {errorMessage}
        </span>
      )}
      {!error && hint && (
        <span id={`${inputId}-hint`} className={styles.hint}>
          {hint}
        </span>
      )}
    </div>
  );
}
