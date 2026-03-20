import type { Meta, StoryObj } from '@storybook/react-vite';
import { Modal } from '../../design-system';
import { Button, Stack, Input, Alert } from '../../design-system';
import { useState } from 'react';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="Confirm action"
          footer={
            <>
              <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
              <Button variant="primary" onClick={() => setOpen(false)}>Confirm</Button>
            </>
          }
        >
          <p style={{ fontFamily: 'var(--font-family-sans)', fontSize: 'var(--font-size-md)', color: 'var(--color-text-subtle)', margin: 0 }}>
            Are you sure you want to proceed? This action cannot be undone.
          </p>
        </Modal>
      </>
    );
  },
};

export const FormModal: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Invite member</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="Invite team member"
          size="md"
          footer={
            <>
              <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
              <Button variant="primary" onClick={() => setOpen(false)}>Send invite</Button>
            </>
          }
        >
          <Stack gap="md">
            <Input label="Email address" type="email" placeholder="colleague@example.com" required />
            <Input label="Role" placeholder="e.g. Designer, Engineer" />
          </Stack>
        </Modal>
      </>
    );
  },
};

export const DestructiveModal: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="destructive" onClick={() => setOpen(true)}>Delete account</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="Delete account"
          size="sm"
          footer={
            <>
              <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
              <Button variant="destructive" onClick={() => setOpen(false)}>Delete permanently</Button>
            </>
          }
        >
          <Stack gap="md">
            <Alert variant="error" title="This cannot be undone">
              All your data will be permanently deleted.
            </Alert>
            <Input label="Type DELETE to confirm" placeholder="DELETE" />
          </Stack>
        </Modal>
      </>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const [size, setSize] = useState<'sm' | 'md' | 'lg' | null>(null);
    return (
      <>
        <Stack gap="sm" style={{ flexDirection: 'row', display: 'flex' }}>
          {(['sm', 'md', 'lg'] as const).map((s) => (
            <Button key={s} variant="secondary" onClick={() => setSize(s)}>
              Open {s}
            </Button>
          ))}
        </Stack>
        <Modal
          open={size !== null}
          onClose={() => setSize(null)}
          title={`Modal — size="${size}"`}
          size={size ?? 'md'}
          footer={<Button onClick={() => setSize(null)}>Close</Button>}
        >
          <p style={{ fontFamily: 'var(--font-family-sans)', fontSize: 'var(--font-size-md)', color: 'var(--color-text-subtle)', margin: 0 }}>
            Modal content goes here.
          </p>
        </Modal>
      </>
    );
  },
};
