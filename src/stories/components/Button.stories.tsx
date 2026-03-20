import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../../design-system';
import { Inline, Stack } from '../../design-system';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Variants: Story = {
  render: () => (
    <Inline gap="sm">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
    </Inline>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Inline gap="sm" align="center">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </Inline>
  ),
};

export const States: Story = {
  render: () => (
    <Stack gap="md">
      <Inline gap="sm">
        <Button variant="primary">Default</Button>
        <Button variant="primary" disabled>Disabled</Button>
        <Button variant="primary" loading>Loading</Button>
      </Inline>
      <Inline gap="sm">
        <Button variant="secondary">Default</Button>
        <Button variant="secondary" disabled>Disabled</Button>
        <Button variant="secondary" loading>Loading</Button>
      </Inline>
      <Inline gap="sm">
        <Button variant="ghost">Default</Button>
        <Button variant="ghost" disabled>Disabled</Button>
        <Button variant="ghost" loading>Loading</Button>
      </Inline>
      <Inline gap="sm">
        <Button variant="destructive">Default</Button>
        <Button variant="destructive" disabled>Disabled</Button>
        <Button variant="destructive" loading>Loading</Button>
      </Inline>
    </Stack>
  ),
};

export const AllCombinations: Story = {
  render: () => (
    <Stack gap="lg">
      {(['primary', 'secondary', 'ghost', 'destructive'] as const).map((variant) => (
        <Inline key={variant} gap="sm" align="center">
          {(['sm', 'md', 'lg'] as const).map((size) => (
            <Button key={size} variant={variant} size={size}>
              {variant} {size}
            </Button>
          ))}
        </Inline>
      ))}
    </Stack>
  ),
};
