import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Menu } from '../../design-system';
import { Button } from '../../design-system';
import { Inline } from '../../design-system';

const meta: Meta<typeof Menu> = {
  title: 'Components/Navigation/Menu',
  component: Menu,
  parameters: { layout: 'padded' },
};
export default meta;
type Story = StoryObj<typeof Menu>;

const baseItems = [
  { key: 'edit', label: 'Edit' },
  { key: 'duplicate', label: 'Duplicate' },
  { key: 'sep1', separator: true as const },
  { key: 'archive', label: 'Archive' },
  { key: 'delete', label: 'Delete', destructive: true },
];

export const Default: Story = {
  render: () => (
    <Menu
      items={baseItems}
      onSelect={(key) => console.log('selected:', key)}
      trigger={<Button variant="secondary">Actions ▾</Button>}
    />
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Menu
      items={[
        { key: 'edit', label: 'Edit', iconName: '✏️' },
        { key: 'copy', label: 'Copy', iconName: '📋' },
        { key: 'sep', separator: true as const },
        { key: 'delete', label: 'Delete', iconName: '🗑️', destructive: true },
      ]}
      onSelect={(key) => console.log('selected:', key)}
      trigger={<Button variant="secondary">More ▾</Button>}
    />
  ),
};

export const Placement: Story = {
  render: () => (
    <Inline gap="md" justify="between" style={{ width: 400 }}>
      <Menu
        items={baseItems}
        onSelect={() => {}}
        trigger={<Button variant="secondary">Bottom-start ▾</Button>}
        placement="bottom-start"
      />
      <Menu
        items={baseItems}
        onSelect={() => {}}
        trigger={<Button variant="secondary">Bottom-end ▾</Button>}
        placement="bottom-end"
      />
    </Inline>
  ),
};

export const WithDisabled: Story = {
  render: () => (
    <Menu
      items={[
        { key: 'edit', label: 'Edit' },
        { key: 'export', label: 'Export', disabled: true },
        { key: 'sep', separator: true as const },
        { key: 'delete', label: 'Delete', destructive: true },
      ]}
      onSelect={(key) => console.log('selected:', key)}
      trigger={<Button variant="secondary">Actions ▾</Button>}
    />
  ),
};
