import React, { useState } from 'react';
import styles from './Accordion.module.css';

export interface AccordionItem {
  value: string;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  defaultOpen?: boolean;
}

export interface AccordionProps {
  items: AccordionItem[];
  bordered?: boolean;
  allowMultiple?: boolean;
}

export function Accordion({ items, bordered = true, allowMultiple = false }: AccordionProps) {
  const [open, setOpen] = useState<Set<string>>(
    () => new Set(items.filter((i) => i.defaultOpen).map((i) => i.value)),
  );

  const toggle = (value: string) => {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(value)) {
        next.delete(value);
      } else {
        if (!allowMultiple) next.clear();
        next.add(value);
      }
      return next;
    });
  };

  return (
    <div className={[styles.accordion, bordered ? styles.bordered : ''].filter(Boolean).join(' ')}>
      {items.map((item) => {
        const isOpen = open.has(item.value);
        return (
          <div key={item.value} className={styles.item}>
            <button
              className={styles.trigger}
              onClick={() => toggle(item.value)}
              aria-expanded={isOpen}
              aria-controls={`accordion-panel-${item.value}`}
              id={`accordion-trigger-${item.value}`}
            >
              <span className={styles.titleGroup}>
                <span className={styles.title}>{item.title}</span>
                {item.subtitle && <span className={styles.subtitle}>{item.subtitle}</span>}
              </span>
              <svg
                className={[styles.chevron, isOpen ? styles.open : ''].filter(Boolean).join(' ')}
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {isOpen && (
              <div
                id={`accordion-panel-${item.value}`}
                role="region"
                aria-labelledby={`accordion-trigger-${item.value}`}
                className={styles.panel}
              >
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
