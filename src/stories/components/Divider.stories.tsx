import type { Meta, StoryObj } from '@storybook/react-vite';
import { Divider } from '../../design-system';
import { Stack, Inline, Text } from '../../design-system';

const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
  parameters: { layout: 'padded' },
};
export default meta;
type Story = StoryObj<typeof Divider>;

export const Horizontal: Story = {
  render: () => (
    <Stack gap="md" style={{ maxWidth: 400 }}>
      <Text>Content above</Text>
      <Divider />
      <Text>Content below</Text>
      <Divider strong />
      <Text>Content below strong divider</Text>
    </Stack>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Inline gap="md" style={{ height: 40 }}>
      <Text>Left</Text>
      <Divider orientation="vertical" />
      <Text>Middle</Text>
      <Divider orientation="vertical" />
      <Text>Right</Text>
    </Inline>
  ),
};
