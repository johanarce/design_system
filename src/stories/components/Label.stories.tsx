import type { Meta, StoryObj } from '@storybook/react-vite';
import { Label } from '../../design-system';
import { Stack } from '../../design-system';

const meta: Meta<typeof Label> = {
  title: 'Components/Inputs/Label',
  component: Label,
  parameters: { layout: 'padded' },
};
export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: { children: 'Email address', htmlFor: 'email' },
};

export const Variants: Story = {
  render: () => (
    <Stack gap="sm">
      <Label htmlFor="a">Default label</Label>
      <Label htmlFor="b" required>Required label</Label>
      <Label htmlFor="c" optional>Optional label</Label>
      <Label htmlFor="d" required hint="Found in your account settings">API Key</Label>
    </Stack>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Stack gap="sm">
      <Label htmlFor="m" size="medium">Medium label</Label>
      <Label htmlFor="s" size="small">Small label</Label>
    </Stack>
  ),
};
