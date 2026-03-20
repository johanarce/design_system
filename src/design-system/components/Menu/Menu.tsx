import React, { useEffect, useRef, useState } from 'react';
import styles from './Menu.module.css';

export interface MenuItem {
  key: string;
  label: string;
  disabled?: boolean;
  destructive?: boolean;
  iconName?: string;
  separator?: never;
}

export interface MenuSeparator {
  key: string;
  separator: true;
  label?: never;
  disabled?: never;
  destructive?: never;
  iconName?: never;
}

export type MenuItemOrSeparator = MenuItem | MenuSeparator;

export interface MenuProps {
  items: MenuItemOrSeparator[];
  onSelect: (key: string) => void;
  trigger: React.ReactNode;
  placement?: 'bottom-start' | 'bottom-end';
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function Menu({
  items,
  onSelect,
  trigger,
  placement = 'bottom-start',
  open: controlledOpen,
  onOpenChange,
}: MenuProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : internalOpen;
  const containerRef = useRef<HTMLDivElement>(null);

  const setOpen = (value: boolean) => {
    if (!isControlled) setInternalOpen(value);
    onOpenChange?.(value);
  };

  useEffect(() => {
    if (!open) return;
    const handleMouseDown = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('keydown', handleKey);
    };
  }, [open]);

  return (
    <div ref={containerRef} className={styles.container}>
      <div onClick={() => setOpen(!open)}>{trigger}</div>
      {open && (
        <ul
          className={[
            styles.menu,
            placement === 'bottom-end' ? styles.alignEnd : styles.alignStart,
          ].join(' ')}
          role="menu"
        >
          {items.map((item) =>
            item.separator ? (
              <li key={item.key} className={styles.separator} role="separator" />
            ) : (
              <li key={item.key} role="none">
                <button
                  type="button"
                  role="menuitem"
                  className={[
                    styles.item,
                    item.destructive ? styles.destructiveItem : '',
                    item.disabled ? styles.disabledItem : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  disabled={item.disabled}
                  onClick={() => {
                    if (!item.disabled) {
                      onSelect(item.key);
                      setOpen(false);
                    }
                  }}
                >
                  {item.iconName && (
                    <span className={styles.itemIcon} aria-hidden="true">
                      {item.iconName}
                    </span>
                  )}
                  {item.label}
                </button>
              </li>
            ),
          )}
        </ul>
      )}
    </div>
  );
}
