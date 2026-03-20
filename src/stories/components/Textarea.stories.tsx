import type { Meta, StoryObj } from '@storybook/react-vite';
import { Textarea } from '../../design-system';
import { Stack } from '../../design-system';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: { layout: 'padded' },
};
export default meta;
type Story = StoryObj<typeof Textarea>;

export const States: Story = {
  render: () => (
    <Stack gap="md" style={{ maxWidth: 480 }}>
      <Textarea label="Default" placeholder="Write something..." />
      <Textarea label="With hint" placeholder="Write something..." hint="Markdown is supported." />
      <Textarea label="With error" defaultValue="bad input" error="This field is required." />
      <Textarea label="Disabled" defaultValue="Cannot edit this" disabled />
      <Textarea label="Required" placeholder="Required field" required />
    </Stack>
  ),
};

export const WithCharCount: Story = {
  render: () => (
    <Stack gap="md" style={{ maxWidth: 480 }}>
      <Textarea
        label="Description"
        placeholder="Describe your project..."
        maxLength={280}
        hint="Keep it concise."
        rows={4}
      />
    </Stack>
  ),
};
