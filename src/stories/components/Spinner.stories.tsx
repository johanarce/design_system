import type { Meta, StoryObj } from '@storybook/react-vite';
import { Spinner } from '../../design-system';
import { Inline, Button } from '../../design-system';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  parameters: { layout: 'padded' },
};
export default meta;
type Story = StoryObj<typeof Spinner>;

export const Sizes: Story = {
  render: () => (
    <Inline gap="lg" align="center">
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
      <Spinner size="xl" />
    </Inline>
  ),
};

export const OnAccent: Story = {
  render: () => (
    <Inline gap="md">
      <Button variant="primary" loading>Loading</Button>
      <div style={{ background: 'var(--color-accent)', padding: '12px', borderRadius: '8px', display:'flex', alignItems:'center' }}>
        <Spinner size="md" onAccent />
      </div>
    </Inline>
  ),
};
