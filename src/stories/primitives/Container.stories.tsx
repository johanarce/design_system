import type { Meta, StoryObj } from '@storybook/react-vite';
import { Container, Stack } from '../../design-system';
import { color, radius, spacing } from '../../design-system/tokens';

const meta: Meta<typeof Container> = {
  title: 'Primitives/Container',
  component: Container,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Container>;

const Block = ({ label }: { label: string }) => (
  <div
    style={{
      background: color.surface,
      border: `1px solid ${color.border}`,
      borderRadius: radius.md,
      padding: spacing.lg,
      color: color.textSubtle,
      fontSize: '13px',
    }}
  >
    {label}
  </div>
);

export const Default: Story = {
  render: () => (
    <div style={{ background: color.background, padding: `${spacing.xl} 0` }}>
      <Container>
        <Stack gap="md">
          <Block label="Full-width container (lg, 1280px max)" />
          <Block label="Content block" />
          <Block label="Content block" />
        </Stack>
      </Container>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ background: color.background, padding: `${spacing.xl} 0` }}>
      <Stack gap="xl">
        {(['sm', 'md', 'lg'] as const).map((size) => (
          <Container key={size} size={size}>
            <Block label={`Container size="${size}"`} />
          </Container>
        ))}
      </Stack>
    </div>
  ),
};
