import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Search } from '../../design-system';
import { Stack } from '../../design-system';

const meta: Meta<typeof Search> = {
  title: 'Components/Inputs/Search',
  component: Search,
  parameters: { layout: 'padded' },
};
export default meta;
type Story = StoryObj<typeof Search>;

function SearchDemo(props: Partial<React.ComponentProps<typeof Search>>) {
  const [value, setValue] = useState('');
  return (
    <Search
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onClear={() => setValue('')}
      {...props}
    />
  );
}

export const Default: Story = {
  render: () => <SearchDemo style={{ maxWidth: 320 }} />,
};

export const Sizes: Story = {
  render: () => (
    <Stack gap="sm" style={{ maxWidth: 320 }}>
      <SearchDemo size="normal" />
      <SearchDemo size="large" />
    </Stack>
  ),
};

export const Disabled: Story = {
  render: () => <SearchDemo disabled style={{ maxWidth: 320 }} />,
};

export const WithValue: Story = {
  render: () => {
    const [value, setValue] = useState('Apollo');
    return (
      <Search
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onClear={() => setValue('')}
        style={{ maxWidth: 320 }}
      />
    );
  },
};
