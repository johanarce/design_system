import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tooltip } from '../../design-system';
import { Button, Inline, Stack } from '../../design-system';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: { layout: 'padded' },
};
export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Placements: Story = {
  render: () => (
    <Stack gap="xl" style={{ padding: '60px 0', alignItems: 'center' }}>
      <Inline gap="xl">
        <Tooltip content="Tooltip on top" placement="top">
          <Button variant="secondary">Top</Button>
        </Tooltip>
        <Tooltip content="Tooltip on bottom" placement="bottom">
          <Button variant="secondary">Bottom</Button>
        </Tooltip>
      </Inline>
      <Inline gap="xl">
        <Tooltip content="Tooltip on left" placement="left">
          <Button variant="secondary">Left</Button>
        </Tooltip>
        <Tooltip content="Tooltip on right" placement="right">
          <Button variant="secondary">Right</Button>
        </Tooltip>
      </Inline>
    </Stack>
  ),
};

export const LongContent: Story = {
  render: () => (
    <Inline gap="md" style={{ padding: '60px 0' }}>
      <Tooltip content="This is a longer tooltip that wraps onto multiple lines when it exceeds the max width." placement="bottom">
        <Button variant="secondary">Hover me</Button>
      </Tooltip>
    </Inline>
  ),
};
