import React from 'react';
import { spacing, type Spacing } from '../tokens';

export interface InlineProps {
  children: React.ReactNode;
  gap?: Spacing;
  align?: 'start' | 'center' | 'end' | 'baseline';
  justify?: 'start' | 'center' | 'end' | 'space-between' | 'space-around';
  wrap?: boolean;
  as?: React.ElementType;
}

export function Inline({
  children,
  gap = 'sm',
  align = 'center',
  justify = 'start',
  wrap = true,
  as: Tag = 'div',
}: InlineProps) {
  return (
    <Tag
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: wrap ? 'wrap' : 'nowrap',
        gap: spacing[gap],
        alignItems: align,
        justifyContent: justify,
      }}
    >
      {children}
    </Tag>
  );
}
