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
      <Button variant="tertiary">Tertiary</Button>
      <Button variant="destructive">Destructive</Button>
    </Inline>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Inline gap="sm" align="center">
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
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
        <Button variant="primary" pressed>Pressed</Button>
        <Button variant="primary" selected>Selected</Button>
      </Inline>
      <Inline gap="sm">
        <Button variant="secondary">Default</Button>
        <Button variant="secondary" disabled>Disabled</Button>
        <Button variant="secondary" loading>Loading</Button>
        <Button variant="secondary" pressed>Pressed</Button>
        <Button variant="secondary" selected>Selected</Button>
      </Inline>
      <Inline gap="sm">
        <Button variant="tertiary">Default</Button>
        <Button variant="tertiary" disabled>Disabled</Button>
        <Button variant="tertiary" loading>Loading</Button>
        <Button variant="tertiary" pressed>Pressed</Button>
        <Button variant="tertiary" selected>Selected</Button>
      </Inline>
    </Stack>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <Inline gap="sm">
      <Button variant="primary" iconName="✚">Add item</Button>
      <Button variant="secondary" iconName="↓">Export</Button>
      <Button variant="tertiary" iconName="✎">Edit</Button>
    </Inline>
  ),
};

export const AllCombinations: Story = {
  render: () => (
    <Stack gap="lg">
      {(['primary', 'secondary', 'tertiary', 'destructive'] as const).map((variant) => (
        <Inline key={variant} gap="sm" align="center">
          {(['small', 'medium'] as const).map((size) => (
            <Button key={size} variant={variant} size={size}>
              {variant} {size}
            </Button>
          ))}
        </Inline>
      ))}
    </Stack>
  ),
};
