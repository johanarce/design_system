import React, { useRef } from 'react';
import styles from './Search.module.css';

export interface SearchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Called when the clear button is clicked */
  onClear?: () => void;
  size?: 'normal' | 'large';
  placeholder?: string;
  disabled?: boolean;
  /** Custom width */
  width?: string;
}

export function Search({
  value,
  onChange,
  onClear,
  size = 'normal',
  placeholder = 'Search...',
  disabled,
  width,
  className,
  style,
  ...props
}: SearchProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClear = () => {
    onClear?.();
    inputRef.current?.focus();
  };

  return (
    <div
      className={[
        styles.wrapper,
        styles[size],
        disabled ? styles.disabled : '',
        className ?? '',
      ]
        .filter(Boolean)
        .join(' ')}
      style={width ? { width, ...style } : style}
    >
      <span className={styles.searchIcon} aria-hidden="true">
        🔍
      </span>
      <input
        ref={inputRef}
        type="search"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={styles.input}
        {...props}
      />
      {value && !disabled && (
        <button
          type="button"
          className={styles.clearButton}
          onClick={handleClear}
          aria-label="Clear search"
          tabIndex={-1}
        >
          ✕
        </button>
      )}
    </div>
  );
}
