import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { MultiOptionToggle } from '../../design-system';
import { Stack } from '../../design-system';

const meta: Meta<typeof MultiOptionToggle> = {
  title: 'Components/Inputs/MultiOptionToggle',
  component: MultiOptionToggle,
  parameters: { layout: 'padded' },
};
export default meta;
type Story = StoryObj<typeof MultiOptionToggle>;

const timeOptions = [
  { value: 'day', label: 'Day' },
  { value: 'week', label: 'Week' },
  { value: 'month', label: 'Month' },
];

function Demo(props: Partial<React.ComponentProps<typeof MultiOptionToggle>>) {
  const [value, setValue] = useState('week');
  return <MultiOptionToggle options={timeOptions} value={value} onChange={setValue} {...props} />;
}

export const Default: Story = { render: () => <Demo /> };

export const Sizes: Story = {
  render: () => (
    <Stack gap="md">
      <Demo size="small" />
      <Demo size="medium" />
    </Stack>
  ),
};

export const Disabled: Story = { render: () => <Demo disabled /> };

export const WithDisabledOption: Story = {
  render: () => (
    <Demo
      options={[
        { value: 'day', label: 'Day' },
        { value: 'week', label: 'Week', disabled: true },
        { value: 'month', label: 'Month' },
      ]}
    />
  ),
};
