import type { Meta, StoryObj } from '@storybook/react-vite';
import { Heading, Text } from '../../design-system';
import { Stack, Divider } from '../../design-system';

const meta: Meta = {
  title: 'Components/Typography',
  parameters: { layout: 'padded' },
};
export default meta;
type Story = StoryObj;

export const Headings: Story = {
  render: () => (
    <Stack gap="md">
      {(['h1','h2','h3','h4','h5','h6'] as const).map((level) => (
        <Heading key={level} level={level}>{level.toUpperCase()} — The quick brown fox</Heading>
      ))}
    </Stack>
  ),
};

export const TextSizes: Story = {
  render: () => (
    <Stack gap="sm">
      {(['xl','lg','md','sm','xs'] as const).map((size) => (
        <Text key={size} size={size}>size="{size}" — The quick brown fox jumps over the lazy dog</Text>
      ))}
    </Stack>
  ),
};

export const Colors: Story = {
  render: () => (
    <Stack gap="sm">
      <Text>default — Primary content text</Text>
      <Text color="subtle">subtle — Secondary and supporting text</Text>
      <Text color="disabled">disabled — Unavailable state text</Text>
      <Text color="accent">accent — Interactive and brand text</Text>
      <Text color="success">success — Positive status text</Text>
      <Text color="warning">warning — Caution status text</Text>
      <Text color="error">error — Destructive or error text</Text>
    </Stack>
  ),
};

export const Weights: Story = {
  render: () => (
    <Stack gap="sm">
      {(['regular','medium','semibold','bold'] as const).map((w) => (
        <Text key={w} weight={w} size="lg">{w} — The quick brown fox</Text>
      ))}
    </Stack>
  ),
};

export const Mixed: Story = {
  render: () => (
    <Stack gap="md" style={{ maxWidth: 560 }}>
      <Heading level="h2">Getting started</Heading>
      <Text color="subtle">
        This design system is built around three values: constraint, composability, and predictability.
        Every decision has one correct answer. There are no arbitrary values — only tokens.
      </Text>
      <Divider />
      <Heading level="h4">Installation</Heading>
      <Text size="sm" color="subtle">
        Import components from the design system index. All spacing and color decisions are handled by tokens.
      </Text>
      <Text size="sm" mono>
        import {'{ Button, Stack }'} from './design-system';
      </Text>
    </Stack>
  ),
};
