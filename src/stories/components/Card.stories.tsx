import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from '../../design-system';
import { Grid, Stack, Inline, Badge, Button } from '../../design-system';
import { color, fontFamily, fontSize, fontWeight } from '../../design-system/tokens';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof Card>;

const SampleContent = () => (
  <Stack gap="sm">
    <Inline justify="space-between" align="center">
      <span style={{ fontFamily: fontFamily.sans, fontSize: fontSize.md, fontWeight: fontWeight.semibold, color: color.text }}>
        Card Title
      </span>
      <Badge variant="success" dot>Active</Badge>
    </Inline>
    <p style={{ fontFamily: fontFamily.sans, fontSize: fontSize.sm, color: color.textSubtle, margin: 0 }}>
      This is a sample card with some descriptive content. It uses layout primitives for spacing.
    </p>
    <Inline gap="sm">
      <Button size="sm" variant="primary">Action</Button>
      <Button size="sm" variant="ghost">Cancel</Button>
    </Inline>
  </Stack>
);

export const Variants: Story = {
  render: () => (
    <Grid cols={2} gap="lg">
      <div>
        <p style={{ fontFamily: fontFamily.sans, fontSize: fontSize.xs, color: color.textSubtle, marginBottom: '8px' }}>default</p>
        <Card variant="default"><SampleContent /></Card>
      </div>
      <div>
        <p style={{ fontFamily: fontFamily.sans, fontSize: fontSize.xs, color: color.textSubtle, marginBottom: '8px' }}>raised</p>
        <Card variant="raised"><SampleContent /></Card>
      </div>
    </Grid>
  ),
};

export const Interactive: Story = {
  render: () => (
    <Grid cols={3} gap="md">
      {Array.from({ length: 3 }, (_, i) => (
        <Card key={i} interactive onClick={() => alert(`Card ${i + 1} clicked`)}>
          <Stack gap="xs">
            <span style={{ fontFamily: fontFamily.sans, fontSize: fontSize.md, fontWeight: fontWeight.semibold, color: color.text }}>
              Item {i + 1}
            </span>
            <span style={{ fontFamily: fontFamily.sans, fontSize: fontSize.sm, color: color.textSubtle }}>
              Click me
            </span>
          </Stack>
        </Card>
      ))}
    </Grid>
  ),
};

export const NoPadding: Story = {
  render: () => (
    <Card padding="none" style={{ maxWidth: 320 }}>
      <div style={{ background: color.surfaceSubtle, height: 160, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontFamily: fontFamily.sans, fontSize: fontSize.sm, color: color.textSubtle }}>Image area</span>
      </div>
      <Stack gap="sm" style={{ padding: '16px' }}>
        <span style={{ fontFamily: fontFamily.sans, fontSize: fontSize.md, fontWeight: fontWeight.semibold, color: color.text }}>
          Media Card
        </span>
        <span style={{ fontFamily: fontFamily.sans, fontSize: fontSize.sm, color: color.textSubtle }}>
          With full-bleed header
        </span>
      </Stack>
    </Card>
  ),
};
