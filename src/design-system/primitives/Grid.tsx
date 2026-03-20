import React from 'react';
import { spacing, type Spacing } from '../tokens';

export interface GridProps {
  children: React.ReactNode;
  cols?: 1 | 2 | 3 | 4 | 6 | 12;
  gap?: Spacing;
  align?: 'start' | 'center' | 'end' | 'stretch';
  as?: React.ElementType;
}

export function Grid({ children, cols = 2, gap = 'md', align = 'stretch', as: Tag = 'div' }: GridProps) {
  return (
    <Tag
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
        gap: spacing[gap],
        alignItems: align,
      }}
    >
      {children}
    </Tag>
  );
}
