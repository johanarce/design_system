import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from '../../design-system';
import { Stack, Grid } from '../../design-system';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: () => (
    <Stack gap="md" style={{ maxWidth: 400 }}>
      <Input label="Email" placeholder="you@example.com" type="email" />
      <Input label="Password" placeholder="••••••••" type="password" />
    </Stack>
  ),
};

export const States: Story = {
  render: () => (
    <Stack gap="md" style={{ maxWidth: 400 }}>
      <Input label="Default" placeholder="Placeholder text" />
      <Input label="With hint" placeholder="Enter value" hint="This is a helpful hint message." />
      <Input label="With error" placeholder="Enter value" error="This field is required." defaultValue="invalid input" />
      <Input label="Disabled" placeholder="Cannot edit" disabled defaultValue="Locked value" />
      <Input label="Read only" readOnly defaultValue="Read only value" />
      <Input label="Required" placeholder="Required field" required />
    </Stack>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Stack gap="md" style={{ maxWidth: 400 }}>
      <Input label="Normal" size="normal" placeholder="Normal input" />
      <Input label="Large" size="large" placeholder="Large input" />
    </Stack>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Stack gap="md" style={{ maxWidth: 400 }}>
      <Input label="Search" prefix={<span style={{ fontSize: 14 }}>🔍</span>} placeholder="Search..." />
      <Input label="Email" prefix={<span style={{ fontSize: 14 }}>✉</span>} placeholder="you@example.com" />
      <Input label="URL" suffix={<span style={{ fontSize: 14 }}>↗</span>} placeholder="https://" />
    </Stack>
  ),
};

export const FormExample: Story = {
  render: () => (
    <Stack gap="md" style={{ maxWidth: 480 }}>
      <Grid cols={2} gap="md">
        <Input label="First name" placeholder="Johan" required />
        <Input label="Last name" placeholder="Arce" required />
      </Grid>
      <Input label="Email address" type="email" placeholder="you@example.com" required />
      <Input label="Company" placeholder="Acme Inc." hint="Optional" />
    </Stack>
  ),
};
