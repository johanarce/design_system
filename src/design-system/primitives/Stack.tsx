import React from 'react';
import { spacing, type Spacing } from '../tokens';

export interface StackProps {
  children: React.ReactNode;
  gap?: Spacing;
  align?: 'start' | 'center' | 'end' | 'stretch';
  as?: React.ElementType;
}

export function Stack({ children, gap = 'md', align = 'stretch', as: Tag = 'div' }: StackProps) {
  return (
    <Tag
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: spacing[gap],
        alignItems: align,
      }}
    >
      {children}
    </Tag>
  );
}
