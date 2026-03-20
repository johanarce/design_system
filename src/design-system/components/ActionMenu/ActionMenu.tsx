import React from 'react';
import { Menu, type MenuProps } from '../Menu';
import { Button } from '../Button';

export interface ActionMenuProps extends Omit<MenuProps, 'trigger'> {
  label: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium';
  disabled?: boolean;
  iconName?: string;
}

export function ActionMenu({
  label,
  variant = 'secondary',
  size = 'medium',
  disabled,
  iconName,
  ...menuProps
}: ActionMenuProps) {
  return (
    <Menu
      {...menuProps}
      trigger={
        <Button variant={variant} size={size} disabled={disabled} iconName={iconName}>
          {label} ▾
        </Button>
      }
    />
  );
}
