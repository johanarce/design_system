import type { Meta, StoryObj } from '@storybook/react-vite';
import { ButtonIcon } from '../../design-system';
import { Inline, Stack } from '../../design-system';

const meta: Meta<typeof ButtonIcon> = {
  title: 'Components/Actions/ButtonIcon',
  component: ButtonIcon,
  parameters: { layout: 'padded' },
};
export default meta;
type Story = StoryObj<typeof ButtonIcon>;

export const Default: Story = {
  args: { iconName: '✏️', label: 'Edit', variant: 'secondary', size: 'medium' },
};

export const Variants: Story = {
  render: () => (
    <Inline gap="sm">
      <ButtonIcon iconName="✏️" label="Edit (primary)" variant="primary" />
      <ButtonIcon iconName="✏️" label="Edit (secondary)" variant="secondary" />
      <ButtonIcon iconName="✏️" label="Edit (tertiary)" variant="tertiary" />
    </Inline>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Inline gap="sm" align="center">
      <ButtonIcon iconName="✏️" label="Small" size="small" />
      <ButtonIcon iconName="✏️" label="Medium" size="medium" />
    </Inline>
  ),
};

export const States: Story = {
  render: () => (
    <Stack gap="sm">
      <Inline gap="sm">
        <ButtonIcon iconName="★" label="Favorite" variant="secondary" />
        <ButtonIcon iconName="★" label="Favorite (selected)" variant="secondary" selected />
        <ButtonIcon iconName="★" label="Favorite (pressed)" variant="secondary" pressed />
        <ButtonIcon iconName="★" label="Favorite (disabled)" variant="secondary" disabled />
      </Inline>
    </Stack>
  ),
};
