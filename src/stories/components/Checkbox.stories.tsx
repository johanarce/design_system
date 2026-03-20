import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from '../../design-system';
import { Stack } from '../../design-system';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const States: Story = {
  render: () => (
    <Stack gap="sm">
      <Checkbox label="Unchecked" />
      <Checkbox label="Checked" defaultChecked />
      <Checkbox label="Indeterminate" indeterminate />
      <Checkbox label="Disabled" disabled />
      <Checkbox label="Disabled checked" disabled defaultChecked />
      <Checkbox label="With error" error="This field is required." />
    </Stack>
  ),
};

export const WithHint: Story = {
  render: () => (
    <Stack gap="sm">
      <Checkbox
        label="Send me product updates"
        hint="We'll only email you about major releases."
        defaultChecked
      />
      <Checkbox
        label="Marketing emails"
        hint="Occasional tips and promotions."
      />
    </Stack>
  ),
};

export const Group: Story = {
  render: () => (
    <Stack gap="sm">
      <Checkbox label="Option A" defaultChecked />
      <Checkbox label="Option B" />
      <Checkbox label="Option C (disabled)" disabled />
      <Checkbox label="Option D" defaultChecked />
    </Stack>
  ),
};
