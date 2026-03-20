import type { Meta, StoryObj } from '@storybook/react-vite';
import { Grid } from '../../design-system';
import { color, radius, spacing } from '../../design-system/tokens';

const meta: Meta<typeof Grid> = {
  title: 'Primitives/Grid',
  component: Grid,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof Grid>;

const Card = ({ label }: { label: string }) => (
  <div
    style={{
      background: color.surface,
      border: `1px solid ${color.border}`,
      borderRadius: radius.md,
      padding: spacing.lg,
      color: color.text,
      fontSize: '13px',
    }}
  >
    {label}
  </div>
);

export const TwoColumns: Story = {
  render: () => (
    <Grid cols={2} gap="md">
      {Array.from({ length: 4 }, (_, i) => (
        <Card key={i} label={`Card ${i + 1}`} />
      ))}
    </Grid>
  ),
};

export const ThreeColumns: Story = {
  render: () => (
    <Grid cols={3} gap="md">
      {Array.from({ length: 6 }, (_, i) => (
        <Card key={i} label={`Card ${i + 1}`} />
      ))}
    </Grid>
  ),
};

export const FourColumns: Story = {
  render: () => (
    <Grid cols={4} gap="sm">
      {Array.from({ length: 8 }, (_, i) => (
        <Card key={i} label={`Item ${i + 1}`} />
      ))}
    </Grid>
  ),
};
