import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar } from '../../design-system';
import { Inline, Stack } from '../../design-system';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: { layout: 'padded' },
};
export default meta;
type Story = StoryObj<typeof Avatar>;

export const Sizes: Story = {
  render: () => (
    <Inline gap="md" align="center">
      <Avatar name="Johan Arce" size="xs" />
      <Avatar name="Johan Arce" size="sm" />
      <Avatar name="Johan Arce" size="md" />
      <Avatar name="Johan Arce" size="lg" />
      <Avatar name="Johan Arce" size="xl" />
    </Inline>
  ),
};

export const Colors: Story = {
  render: () => (
    <Inline gap="sm">
      {(['blue','green','amber','red','purple','teal'] as const).map((c) => (
        <Avatar key={c} name={c} color={c} size="md" />
      ))}
    </Inline>
  ),
};

export const AutoColor: Story = {
  render: () => (
    <Inline gap="sm">
      {['Alice Brown', 'Bob Smith', 'Carol Jones', 'Dave Wilson', 'Eva Chen', 'Frank Lee'].map((name) => (
        <Avatar key={name} name={name} size="md" />
      ))}
    </Inline>
  ),
};

export const AvatarGroup: Story = {
  render: () => (
    <Stack gap="lg">
      <div style={{ display: 'flex' }}>
        {['Anna K', 'Ben R', 'Clara M', 'Dan F', 'Eva P'].map((name, i) => (
          <div key={name} style={{ marginLeft: i === 0 ? 0 : -8, zIndex: i }}>
            <Avatar name={name} size="md" />
          </div>
        ))}
        <div style={{ marginLeft: -8 }}>
          <Avatar name="+3" size="md" color="blue" />
        </div>
      </div>
    </Stack>
  ),
};
