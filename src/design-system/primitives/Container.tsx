import React from 'react';
import { spacing } from '../tokens';

export interface ContainerProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'full';
}

const maxWidths = {
  sm: '640px',
  md: '1024px',
  lg: '1280px',
  full: '100%',
} as const;

export function Container({ children, size = 'lg' }: ContainerProps) {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: maxWidths[size],
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: spacing.lg,
        paddingRight: spacing.lg,
      }}
    >
      {children}
    </div>
  );
}
