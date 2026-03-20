import type { Meta, StoryObj } from '@storybook/react-vite';
import { Link } from '../../design-system';
import { Stack, Text } from '../../design-system';

const meta: Meta<typeof Link> = {
  title: 'Components/Link',
  component: Link,
  parameters: { layout: 'padded' },
};
export default meta;
type Story = StoryObj<typeof Link>;

export const Variants: Story = {
  render: () => (
    <Stack gap="sm">
      <Link href="#">Default link</Link>
      <Link href="#" variant="subtle">Subtle link</Link>
    </Stack>
  ),
};

export const Inline: Story = {
  render: () => (
    <Stack gap="sm" style={{ maxWidth: 400 }}>
      <Text>
        Read our{' '}
        <Link href="#">terms of service</Link>
        {' '}and{' '}
        <Link href="#">privacy policy</Link>
        {' '}before continuing.
      </Text>
      <Text color="subtle">
        Already have an account?{' '}
        <Link href="#" variant="subtle">Sign in</Link>
      </Text>
    </Stack>
  ),
};
