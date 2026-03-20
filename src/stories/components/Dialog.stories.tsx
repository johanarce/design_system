import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Dialog } from '../../design-system';
import { Button } from '../../design-system';
import { Stack, Inline } from '../../design-system';

const meta: Meta<typeof Dialog> = {
  title: 'Components/Popover/Dialog',
  component: Dialog,
  parameters: { layout: 'padded' },
};
export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="primary" onClick={() => setOpen(true)}>Open Dialog</Button>
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          title="Confirm action"
          description="Are you sure you want to proceed? This action cannot be undone."
          onConfirm={() => { setOpen(false); }}
        />
      </>
    );
  },
};

export const Destructive: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="destructive" onClick={() => setOpen(true)}>Delete item</Button>
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          title="Delete item"
          description="This will permanently delete the item and all its data. This action cannot be undone."
          confirmLabel="Delete"
          variant="destructive"
          onConfirm={() => { setOpen(false); }}
        />
      </>
    );
  },
};

export const AllVariants: Story = {
  render: () => {
    const [which, setWhich] = useState<string | null>(null);
    return (
      <Stack gap="md">
        <Inline gap="sm">
          <Button variant="secondary" onClick={() => setWhich('default')}>Default</Button>
          <Button variant="secondary" onClick={() => setWhich('destructive')}>Destructive</Button>
          <Button variant="secondary" onClick={() => setWhich('info')}>Info only</Button>
        </Inline>
        <Dialog
          open={which === 'default'}
          onClose={() => setWhich(null)}
          title="Confirm action"
          description="Are you sure you want to continue?"
          onConfirm={() => setWhich(null)}
        />
        <Dialog
          open={which === 'destructive'}
          onClose={() => setWhich(null)}
          title="Delete permanently"
          description="This will delete the record and cannot be undone."
          confirmLabel="Delete"
          variant="destructive"
          onConfirm={() => setWhich(null)}
        />
        <Dialog
          open={which === 'info'}
          onClose={() => setWhich(null)}
          title="Update complete"
          description="Your changes have been saved successfully."
          cancelLabel="Close"
        />
      </Stack>
    );
  },
};
