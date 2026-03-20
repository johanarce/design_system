import type { Meta, StoryObj } from '@storybook/react-vite';
import { Inline } from '../../design-system';
import { color, radius, spacing } from '../../design-system/tokens';

const meta: Meta<typeof Inline> = {
  title: 'Primitives/Inline',
  component: Inline,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof Inline>;

const Chip = ({ label }: { label: string }) => (
  <div
    style={{
      background: color.accentSubtle,
      border: `1px solid ${color.accent}`,
      borderRadius: radius.full,
      padding: `${spacing.xs} ${spacing.sm}`,
      color: color.accent,
      fontSize: '13px',
      fontWeight: 500,
      whiteSpace: 'nowrap',
    }}
  >
    {label}
  </div>
);

export const Default: Story = {
  render: () => (
    <Inline gap="sm">
      <Chip label="Design" />
      <Chip label="System" />
      <Chip label="Tokens" />
      <Chip label="Components" />
    </Inline>
  ),
};

export const SpaceBetween: Story = {
  render: () => (
    <Inline gap="sm" justify="space-between">
      <Chip label="Left" />
      <Chip label="Right" />
    </Inline>
  ),
};

export const NoWrap: Story = {
  render: () => (
    <div style={{ width: '200px', border: `1px dashed ${color.border}`, padding: spacing.sm }}>
      <Inline gap="sm" wrap={false}>
        <Chip label="Alpha" />
        <Chip label="Beta" />
        <Chip label="Gamma" />
        <Chip label="Delta" />
      </Inline>
    </div>
  ),
};
