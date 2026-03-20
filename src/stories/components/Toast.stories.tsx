import type { Meta, StoryObj } from '@storybook/react-vite';
import { ToastProvider, useToast } from '../../design-system';
import { Button, Inline, Stack } from '../../design-system';

const meta: Meta = {
  title: 'Components/Toast',
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    ),
  ],
  parameters: { layout: 'padded' },
};
export default meta;
type Story = StoryObj;

function ToastDemo() {
  const { toast } = useToast();
  return (
    <Stack gap="sm">
      <Inline gap="sm">
        <Button variant="secondary" onClick={() => toast({ title: 'Default notification', description: 'Something happened.' })}>
          Default
        </Button>
        <Button variant="secondary" onClick={() => toast({ title: 'Saved successfully', description: 'Your changes have been saved.', variant: 'success' })}>
          Success
        </Button>
        <Button variant="secondary" onClick={() => toast({ title: 'Something went wrong', description: 'Please try again later.', variant: 'error' })}>
          Error
        </Button>
        <Button variant="secondary" onClick={() => toast({ title: 'Heads up', description: 'This may affect other users.', variant: 'warning' })}>
          Warning
        </Button>
        <Button variant="secondary" onClick={() => toast({ title: 'Update available', variant: 'info' })}>
          Info
        </Button>
      </Inline>
    </Stack>
  );
}

export const Playground: Story = {
  render: () => <ToastDemo />,
};
