import type { Meta, StoryObj } from '@storybook/react-vite';
import { ButtonGroup } from '../../design-system';
import { Button } from '../../design-system';
import { Stack } from '../../design-system';

const meta: Meta<typeof ButtonGroup> = {
  title: 'Components/Actions/ButtonGroup',
  component: ButtonGroup,
  parameters: { layout: 'padded' },
};
export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const Horizontal: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="secondary" size="medium">Day</Button>
      <Button variant="secondary" size="medium">Week</Button>
      <Button variant="secondary" size="medium">Month</Button>
    </ButtonGroup>
  ),
};

export const Vertical: Story = {
  render: () => (
    <ButtonGroup orientation="vertical">
      <Button variant="secondary" size="medium">Option A</Button>
      <Button variant="secondary" size="medium">Option B</Button>
      <Button variant="secondary" size="medium">Option C</Button>
    </ButtonGroup>
  ),
};

export const WithPrimary: Story = {
  render: () => (
    <Stack gap="md">
      <ButtonGroup>
        <Button variant="primary" size="small">Save</Button>
        <Button variant="secondary" size="small">Cancel</Button>
      </ButtonGroup>
    </Stack>
  ),
};
