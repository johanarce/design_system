import styles from './Avatar.module.css';

type AvatarColor = 'blue' | 'green' | 'amber' | 'red' | 'purple' | 'teal';

export interface AvatarProps {
  name?: string;
  src?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color?: AvatarColor;
}

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

const colorOrder: AvatarColor[] = ['blue', 'green', 'amber', 'red', 'purple', 'teal'];

function colorFromName(name: string): AvatarColor {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return colorOrder[Math.abs(hash) % colorOrder.length];
}

export function Avatar({ name = '', src, size = 'md', color }: AvatarProps) {
  const resolvedColor = color ?? colorFromName(name);

  return (
    <span className={[styles.avatar, styles[size], styles[resolvedColor]].join(' ')} aria-label={name || undefined}>
      {src ? (
        <img src={src} alt={name} className={styles.image} />
      ) : (
        name ? getInitials(name) : '?'
      )}
    </span>
  );
}
