import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stack } from '../../design-system';
import { color, radius, spacing } from '../../design-system/tokens';

const meta: Meta<typeof Stack> = {
  title: 'Primitives/Stack',
  component: Stack,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof Stack>;

const Box = ({ label }: { label: string }) => (
  <div
    style={{
      background: color.accentSubtle,
      border: `1px solid ${color.accent}`,
      borderRadius: radius.md,
      padding: spacing.md,
      color: color.accent,
      fontSize: '13px',
      fontWeight: 500,
    }}
  >
    {label}
  </div>
);

export const Default: Story = {
  render: () => (
    <Stack gap="md">
      <Box label="Item A" />
      <Box label="Item B" />
      <Box label="Item C" />
    </Stack>
  ),
};

export const AllGaps: Story = {
  render: () => (
    <Stack gap="xl">
      {(['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'] as const).map((gap) => (
        <div key={gap}>
          <div style={{ fontSize: '11px', color: color.textSubtle, marginBottom: spacing.xs }}>
            gap="{gap}"
          </div>
          <Stack gap={gap}>
            <Box label="A" />
            <Box label="B" />
          </Stack>
        </div>
      ))}
    </Stack>
  ),
};

export const AlignCenter: Story = {
  render: () => (
    <Stack gap="md" align="center">
      <Box label="Short" />
      <Box label="A longer item that takes up more width" />
      <Box label="Medium item" />
    </Stack>
  ),
};
