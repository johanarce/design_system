import type { Meta, StoryObj } from '@storybook/react-vite';
import { Switch } from '../../design-system';
import { Stack, Inline } from '../../design-system';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const States: Story = {
  render: () => (
    <Stack gap="sm">
      <Switch label="Off (default)" />
      <Switch label="On" defaultChecked />
      <Switch label="Disabled off" disabled />
      <Switch label="Disabled on" disabled defaultChecked />
    </Stack>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Stack gap="sm">
      <Switch label="Small" size="sm" defaultChecked />
      <Switch label="Medium" size="md" defaultChecked />
      <Switch label="Large" size="lg" defaultChecked />
    </Stack>
  ),
};

export const SettingsExample: Story = {
  render: () => (
    <Stack gap="md" style={{ maxWidth: 400 }}>
      <Inline justify="space-between">
        <span style={{ fontFamily: 'var(--font-family-sans)', fontSize: 'var(--font-size-md)', color: 'var(--color-text)' }}>
          Email notifications
        </span>
        <Switch defaultChecked />
      </Inline>
      <Inline justify="space-between">
        <span style={{ fontFamily: 'var(--font-family-sans)', fontSize: 'var(--font-size-md)', color: 'var(--color-text)' }}>
          Push notifications
        </span>
        <Switch />
      </Inline>
      <Inline justify="space-between">
        <span style={{ fontFamily: 'var(--font-family-sans)', fontSize: 'var(--font-size-md)', color: 'var(--color-text)' }}>
          Marketing emails
        </span>
        <Switch disabled />
      </Inline>
    </Stack>
  ),
};
