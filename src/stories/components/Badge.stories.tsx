import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from '../../design-system';
import { Inline, Stack } from '../../design-system';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Variants: Story = {
  render: () => (
    <Inline gap="sm">
      <Badge variant="default">Default</Badge>
      <Badge variant="accent">Accent</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="info">Info</Badge>
    </Inline>
  ),
};

export const WithDot: Story = {
  render: () => (
    <Inline gap="sm">
      <Badge variant="success" dot>Active</Badge>
      <Badge variant="warning" dot>Pending</Badge>
      <Badge variant="error" dot>Failed</Badge>
      <Badge variant="default" dot>Inactive</Badge>
    </Inline>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Stack gap="md">
      <Inline gap="sm" align="center">
        {(['default', 'accent', 'success', 'warning', 'error', 'info'] as const).map((v) => (
          <Badge key={v} variant={v} size="sm">{v}</Badge>
        ))}
      </Inline>
      <Inline gap="sm" align="center">
        {(['default', 'accent', 'success', 'warning', 'error', 'info'] as const).map((v) => (
          <Badge key={v} variant={v} size="md">{v}</Badge>
        ))}
      </Inline>
    </Stack>
  ),
};
