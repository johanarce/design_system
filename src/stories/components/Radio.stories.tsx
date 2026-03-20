import type { Meta, StoryObj } from '@storybook/react-vite';
import { RadioGroup } from '../../design-system';
import { Stack } from '../../design-system';
import { useState } from 'react';

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/Radio',
  component: RadioGroup,
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('monthly');
    return (
      <RadioGroup
        name="billing"
        label="Billing cycle"
        value={value}
        onChange={setValue}
        options={[
          { value: 'monthly', label: 'Monthly' },
          { value: 'quarterly', label: 'Quarterly' },
          { value: 'annual', label: 'Annual' },
        ]}
      />
    );
  },
};

export const WithDescriptions: Story = {
  render: () => {
    const [value, setValue] = useState('standard');
    return (
      <RadioGroup
        name="plan"
        label="Select a plan"
        value={value}
        onChange={setValue}
        options={[
          { value: 'starter', label: 'Starter', description: 'For individuals and small teams up to 5 users.' },
          { value: 'standard', label: 'Standard', description: 'For growing teams with advanced collaboration needs.' },
          { value: 'enterprise', label: 'Enterprise', description: 'Custom pricing for large organizations.' },
        ]}
      />
    );
  },
};

export const WithDisabled: Story = {
  render: () => {
    const [value, setValue] = useState('b');
    return (
      <Stack gap="lg">
        <RadioGroup
          name="options"
          label="Options"
          value={value}
          onChange={setValue}
          options={[
            { value: 'a', label: 'Option A' },
            { value: 'b', label: 'Option B' },
            { value: 'c', label: 'Option C (unavailable)', disabled: true },
          ]}
        />
        <RadioGroup
          name="disabled-group"
          label="Disabled group"
          value="x"
          onChange={() => {}}
          disabled
          options={[
            { value: 'x', label: 'Option X' },
            { value: 'y', label: 'Option Y' },
          ]}
        />
      </Stack>
    );
  },
};
