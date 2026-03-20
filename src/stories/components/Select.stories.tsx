import type { Meta, StoryObj } from '@storybook/react-vite';
import { Select } from '../../design-system';
import { Stack } from '../../design-system';

const COUNTRIES: { value: string; label: string }[] = [
  { value: 'us', label: 'United States' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'ca', label: 'Canada' },
  { value: 'au', label: 'Australia' },
  { value: 'de', label: 'Germany' },
];

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: () => (
    <Stack gap="md" style={{ maxWidth: 400 }}>
      <Select label="Country" options={COUNTRIES} placeholder="Select a country" />
    </Stack>
  ),
};

export const States: Story = {
  render: () => (
    <Stack gap="md" style={{ maxWidth: 400 }}>
      <Select label="Default" options={COUNTRIES} placeholder="Select..." />
      <Select label="With hint" options={COUNTRIES} placeholder="Select..." hint="Choose your region" />
      <Select label="With error" options={COUNTRIES} defaultValue="us" error="This selection is not available." />
      <Select label="Disabled" options={COUNTRIES} defaultValue="ca" disabled />
      <Select label="Required" options={COUNTRIES} placeholder="Select..." required />
    </Stack>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Stack gap="md" style={{ maxWidth: 400 }}>
      <Select label="Small" size="sm" options={COUNTRIES} placeholder="Select..." />
      <Select label="Medium" size="md" options={COUNTRIES} placeholder="Select..." />
      <Select label="Large" size="lg" options={COUNTRIES} placeholder="Select..." />
    </Stack>
  ),
};
