import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ActionMenu } from '../../design-system';
import { Inline, Stack } from '../../design-system';

const meta: Meta<typeof ActionMenu> = {
  title: 'Components/Actions/ActionMenu',
  component: ActionMenu,
  parameters: { layout: 'padded' },
};
export default meta;
type Story = StoryObj<typeof ActionMenu>;

const items = [
  { key: 'edit', label: 'Edit' },
  { key: 'duplicate', label: 'Duplicate' },
  { key: 'sep', separator: true as const },
  { key: 'delete', label: 'Delete', destructive: true },
];

export const Default: Story = {
  render: () => (
    <ActionMenu
      label="Actions"
      items={items}
      onSelect={(key) => console.log('selected:', key)}
    />
  ),
};

export const Variants: Story = {
  render: () => (
    <Inline gap="sm">
      <ActionMenu label="Primary" variant="primary" items={items} onSelect={() => {}} />
      <ActionMenu label="Secondary" variant="secondary" items={items} onSelect={() => {}} />
      <ActionMenu label="Tertiary" variant="tertiary" items={items} onSelect={() => {}} />
    </Inline>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Inline gap="sm" align="center">
      <ActionMenu label="Small" size="small" items={items} onSelect={() => {}} />
      <ActionMenu label="Medium" size="medium" items={items} onSelect={() => {}} />
    </Inline>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <Stack gap="sm">
      <ActionMenu
        label="Export"
        iconName="↓"
        items={[
          { key: 'csv', label: 'Export as CSV' },
          { key: 'pdf', label: 'Export as PDF' },
          { key: 'xlsx', label: 'Export as XLSX' },
        ]}
        onSelect={(key) => console.log('selected:', key)}
      />
    </Stack>
  ),
};
