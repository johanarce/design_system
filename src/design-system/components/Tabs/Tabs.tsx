import React from 'react';
import styles from './Tabs.module.css';

export interface Tab {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface TabsProps {
  tabs: Tab[];
  value: string;
  onChange: (value: string) => void;
  variant?: 'line' | 'pills';
  children?: React.ReactNode;
}

export function Tabs({ tabs, value, onChange, variant = 'line', children }: TabsProps) {
  return (
    <div className={styles.tabs}>
      <div className={[styles.list, styles[variant]].join(' ')} role="tablist">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            role="tab"
            aria-selected={value === tab.value}
            aria-controls={`panel-${tab.value}`}
            id={`tab-${tab.value}`}
            disabled={tab.disabled}
            className={[styles.trigger, value === tab.value ? styles.active : '']
              .filter(Boolean)
              .join(' ')}
            onClick={() => !tab.disabled && onChange(tab.value)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {children && <div className={styles.panel}>{children}</div>}
    </div>
  );
}

export interface TabPanelProps {
  value: string;
  activeValue: string;
  children: React.ReactNode;
}

export function TabPanel({ value, activeValue, children }: TabPanelProps) {
  if (value !== activeValue) return null;
  return (
    <div
      role="tabpanel"
      id={`panel-${value}`}
      aria-labelledby={`tab-${value}`}
    >
      {children}
    </div>
  );
}
