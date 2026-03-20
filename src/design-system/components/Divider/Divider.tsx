import styles from './Divider.module.css';

export interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  strong?: boolean;
}

export function Divider({ orientation = 'horizontal', strong = false }: DividerProps) {
  return (
    <hr
      className={[
        styles.divider,
        styles[orientation],
        strong ? styles.strong : '',
      ]
        .filter(Boolean)
        .join(' ')}
      aria-orientation={orientation}
    />
  );
}
