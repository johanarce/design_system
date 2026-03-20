import type { Meta, StoryObj } from '@storybook/react-vite';
import { Alert } from '../../design-system';
import { Stack } from '../../design-system';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Variants: Story = {
  render: () => (
    <Stack gap="md">
      <Alert variant="info" title="Heads up">
        This is an informational message with some additional detail.
      </Alert>
      <Alert variant="success" title="All done!">
        Your changes have been saved successfully.
      </Alert>
      <Alert variant="warning" title="Proceed with caution">
        This action may affect other users in your workspace.
      </Alert>
      <Alert variant="error" title="Something went wrong">
        We couldn't process your request. Please try again.
      </Alert>
    </Stack>
  ),
};

export const TitleOnly: Story = {
  render: () => (
    <Stack gap="md">
      <Alert variant="info" title="New version available" />
      <Alert variant="success" title="Profile updated" />
      <Alert variant="warning" title="Storage almost full" />
      <Alert variant="error" title="Connection lost" />
    </Stack>
  ),
};

export const Dismissible: Story = {
  render: () => (
    <Stack gap="md">
      <Alert variant="info" title="Welcome back" onClose={() => {}}>
        You have 3 unread notifications.
      </Alert>
      <Alert variant="warning" title="Scheduled maintenance" onClose={() => {}}>
        The system will be unavailable on Sunday from 2–4 AM UTC.
      </Alert>
    </Stack>
  ),
};

export const NoIcon: Story = {
  render: () => (
    <Stack gap="md">
      <Alert variant="info" title="Plain alert" icon={null}>
        This alert has no icon — pass <code>icon={null}</code> to remove it.
      </Alert>
    </Stack>
  ),
};
