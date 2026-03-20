import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tag } from '../../design-system';
import { Inline } from '../../design-system';
import { useState } from 'react';

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
  parameters: { layout: 'padded' },
};
export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  render: () => (
    <Inline gap="sm">
      <Tag>Design</Tag>
      <Tag>System</Tag>
      <Tag>Tokens</Tag>
    </Inline>
  ),
};

export const Interactive: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>(['react']);
    const tags = ['react', 'typescript', 'css', 'storybook', 'vite'];
    return (
      <Inline gap="sm">
        {tags.map((t) => (
          <Tag
            key={t}
            selected={selected.includes(t)}
            onClick={() =>
              setSelected((prev) =>
                prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t],
              )
            }
          >
            {t}
          </Tag>
        ))}
      </Inline>
    );
  },
};

export const Removable: Story = {
  render: () => {
    const [tags, setTags] = useState(['Design', 'System', 'Tokens', 'Components']);
    return (
      <Inline gap="sm">
        {tags.map((t) => (
          <Tag key={t} onRemove={() => setTags((prev) => prev.filter((x) => x !== t))}>
            {t}
          </Tag>
        ))}
      </Inline>
    );
  },
};
