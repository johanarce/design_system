import styles from './Spinner.module.css';

export interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  onAccent?: boolean;
  label?: string;
}

export function Spinner({ size = 'md', onAccent = false, label = 'Loading…' }: SpinnerProps) {
  return (
    <span
      className={[styles.spinner, styles[size], onAccent ? styles.onAccent : '']
        .filter(Boolean)
        .join(' ')}
      role="status"
      aria-label={label}
    />
  );
}
