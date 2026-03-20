import React from 'react';
import styles from './Textarea.module.css';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  hint?: string;
  error?: string;
  required?: boolean;
  maxLength?: number;
  rows?: number;
}

export function Textarea({
  label,
  hint,
  error,
  required,
  maxLength,
  id,
  className,
  value,
  defaultValue,
  onChange,
  rows = 4,
  ...props
}: TextareaProps) {
  const [charCount, setCharCount] = React.useState(() => {
    const initial = value ?? defaultValue ?? '';
    return String(initial).length;
  });

  const textareaId = id ?? (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCharCount(e.target.value.length);
    onChange?.(e);
  };

  const nearLimit = maxLength ? charCount >= maxLength * 0.8 : false;
  const atLimit = maxLength ? charCount >= maxLength : false;

  const charCountClass = [
    styles.charCount,
    atLimit ? styles.atLimit : nearLimit ? styles.nearLimit : '',
  ].filter(Boolean).join(' ');

  return (
    <div className={styles.wrapper}>
      {label && (
        <label className={styles.label} htmlFor={textareaId}>
          {label}
          {required && <span className={styles.required} aria-hidden="true">*</span>}
        </label>
      )}
      <textarea
        id={textareaId}
        rows={rows}
        maxLength={maxLength}
        value={value}
        defaultValue={defaultValue}
        onChange={handleChange}
        className={[styles.textarea, error ? styles.error : '', className ?? ''].filter(Boolean).join(' ')}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${textareaId}-error` : hint ? `${textareaId}-hint` : undefined}
        required={required}
        {...props}
      />
      <div className={styles.footer}>
        <div>
          {error && (
            <span id={`${textareaId}-error`} className={styles.errorMessage} role="alert">{error}</span>
          )}
          {!error && hint && (
            <span id={`${textareaId}-hint`} className={styles.hint}>{hint}</span>
          )}
        </div>
        {maxLength && (
          <span className={charCountClass}>{charCount}/{maxLength}</span>
        )}
      </div>
    </div>
  );
}
