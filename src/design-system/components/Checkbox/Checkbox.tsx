import React from 'react';
import styles from './Checkbox.module.css';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  hint?: string;
  error?: string;
  indeterminate?: boolean;
}

export function Checkbox({
  label,
  hint,
  error,
  indeterminate = false,
  disabled,
  id,
  className,
  ...props
}: CheckboxProps) {
  const checkboxId = id ?? (label ? `checkbox-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined);
  const ref = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (ref.current) {
      ref.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  const rowClasses = [
    styles.row,
    disabled ? styles.disabled : '',
    error ? styles.error : '',
    indeterminate ? styles.indeterminate : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={styles.wrapper}>
      <label className={rowClasses}>
        <input
          ref={ref}
          type="checkbox"
          id={checkboxId}
          className={styles.input}
          disabled={disabled}
          aria-invalid={error ? true : undefined}
          {...props}
        />
        <span className={styles.box}>
          <svg className={styles.check} width="10" height="8" viewBox="0 0 10 8" fill="none">
            <path d="M1 4l3 3 5-6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className={styles.dash} />
        </span>
        {label && <span className={styles.labelText}>{label}</span>}
      </label>
      {error && <span className={styles.errorMessage} role="alert">{error}</span>}
      {!error && hint && <span className={styles.hint}>{hint}</span>}
    </div>
  );
}
