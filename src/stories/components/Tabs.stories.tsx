import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tabs, TabPanel } from '../../design-system';
import { Stack, Card, Badge, Alert } from '../../design-system';
import { useState } from 'react';
import { color, fontFamily, fontSize } from '../../design-system/tokens';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

const TABS = [
  { value: 'overview', label: 'Overview' },
  { value: 'activity', label: 'Activity' },
  { value: 'settings', label: 'Settings' },
];

export const Line: Story = {
  render: () => {
    const [tab, setTab] = useState('overview');
    return (
      <Tabs tabs={TABS} value={tab} onChange={setTab} variant="line">
        <TabPanel value="overview" activeValue={tab}>
          <Stack gap="md">
            <Alert variant="info" title="Overview tab">This is the overview panel.</Alert>
          </Stack>
        </TabPanel>
        <TabPanel value="activity" activeValue={tab}>
          <Stack gap="md">
            <Alert variant="success" title="Activity tab">Recent activity will appear here.</Alert>
          </Stack>
        </TabPanel>
        <TabPanel value="settings" activeValue={tab}>
          <Stack gap="md">
            <Alert variant="warning" title="Settings tab">Configure your preferences here.</Alert>
          </Stack>
        </TabPanel>
      </Tabs>
    );
  },
};

export const Pills: Story = {
  render: () => {
    const [tab, setTab] = useState('overview');
    return (
      <Tabs tabs={TABS} value={tab} onChange={setTab} variant="pills">
        <TabPanel value="overview" activeValue={tab}>
          <p style={{ fontFamily: fontFamily.sans, fontSize: fontSize.md, color: color.textSubtle }}>Overview content</p>
        </TabPanel>
        <TabPanel value="activity" activeValue={tab}>
          <p style={{ fontFamily: fontFamily.sans, fontSize: fontSize.md, color: color.textSubtle }}>Activity content</p>
        </TabPanel>
        <TabPanel value="settings" activeValue={tab}>
          <p style={{ fontFamily: fontFamily.sans, fontSize: fontSize.md, color: color.textSubtle }}>Settings content</p>
        </TabPanel>
      </Tabs>
    );
  },
};

export const WithDisabled: Story = {
  render: () => {
    const [tab, setTab] = useState('overview');
    const tabs = [
      { value: 'overview', label: 'Overview' },
      { value: 'reports', label: 'Reports' },
      { value: 'billing', label: 'Billing', disabled: true },
    ];
    return (
      <Tabs tabs={tabs} value={tab} onChange={setTab} variant="line">
        <TabPanel value="overview" activeValue={tab}>
          <p style={{ fontFamily: fontFamily.sans, fontSize: fontSize.md, color: color.textSubtle }}>Overview content</p>
        </TabPanel>
        <TabPanel value="reports" activeValue={tab}>
          <p style={{ fontFamily: fontFamily.sans, fontSize: fontSize.md, color: color.textSubtle }}>Reports content</p>
        </TabPanel>
      </Tabs>
    );
  },
};

export const WithBadges: Story = {
  render: () => {
    const [tab, setTab] = useState('open');
    const tabs = [
      { value: 'open', label: 'Open' },
      { value: 'closed', label: 'Closed' },
      { value: 'archived', label: 'Archived' },
    ];
    return (
      <Stack gap="md">
        <Tabs tabs={tabs} value={tab} onChange={setTab} variant="line" />
        <Card>
          <Stack gap="sm">
            {tab === 'open' && (
              <>
                <Badge variant="warning" dot>Pending review</Badge>
                <Badge variant="info" dot>In progress</Badge>
              </>
            )}
            {tab === 'closed' && <Badge variant="success" dot>Resolved</Badge>}
            {tab === 'archived' && <Badge variant="default">Archived</Badge>}
          </Stack>
        </Card>
      </Stack>
    );
  },
};
