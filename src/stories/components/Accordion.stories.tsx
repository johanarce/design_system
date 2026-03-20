import type { Meta, StoryObj } from '@storybook/react-vite';
import { Accordion } from '../../design-system';
import { Stack, Text, Alert } from '../../design-system';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: { layout: 'padded' },
};
export default meta;
type Story = StoryObj<typeof Accordion>;

const ITEMS = [
  {
    value: 'what',
    title: 'What is a design system?',
    content: <Text color="subtle">A design system is a collection of reusable components and guidelines that help teams build consistent user interfaces at scale.</Text>,
  },
  {
    value: 'why',
    title: 'Why use tokens?',
    subtitle: 'Recommended',
    content: <Text color="subtle">Tokens abstract design decisions (colors, spacing, typography) into named values, making it easy to update the entire system from one place.</Text>,
    defaultOpen: true,
  },
  {
    value: 'how',
    title: 'How do layout primitives work?',
    content: (
      <Stack gap="sm">
        <Text color="subtle">Layout primitives (Stack, Inline, Grid, Container) own all spacing. Components never set their own margins.</Text>
        <Alert variant="info" title="Key rule">No margins on components — spacing via layout primitives only.</Alert>
      </Stack>
    ),
  },
];

export const Default: Story = {
  render: () => (
    <div style={{ maxWidth: 560 }}>
      <Accordion items={ITEMS} />
    </div>
  ),
};

export const AllowMultiple: Story = {
  render: () => (
    <div style={{ maxWidth: 560 }}>
      <Accordion items={ITEMS} allowMultiple />
    </div>
  ),
};

export const Borderless: Story = {
  render: () => (
    <div style={{ maxWidth: 560 }}>
      <Accordion items={ITEMS} bordered={false} />
    </div>
  ),
};
