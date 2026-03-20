import type { Meta, StoryObj } from '@storybook/react-vite';
import { color, fontFamily, fontSize, fontWeight, lineHeight, radius, shadow, spacing } from '../design-system/tokens';

const meta: Meta = {
  title: 'Design System/Tokens',
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj;

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div style={{ marginBottom: spacing['2xl'] }}>
    <h3
      style={{
        fontFamily: fontFamily.sans,
        fontSize: fontSize.md,
        fontWeight: fontWeight.semibold,
        color: color.text,
        marginBottom: spacing.md,
        paddingBottom: spacing.xs,
        borderBottom: `1px solid ${color.border}`,
      }}
    >
      {title}
    </h3>
    {children}
  </div>
);

const Row = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: spacing.sm }}>
    {children}
  </div>
);

export const Spacing: Story = {
  render: () => (
    <Section title="Spacing">
      <Row>
        {(Object.entries(spacing) as [string, string][]).map(([key, value]) => (
          <div key={key} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: spacing.xs }}>
            <div
              style={{
                width: value,
                height: value,
                background: color.accent,
                borderRadius: radius.sm,
                minWidth: '4px',
                minHeight: '4px',
              }}
            />
            <span style={{ fontFamily: fontFamily.mono, fontSize: fontSize.xs, color: color.textSubtle }}>
              {key}
            </span>
            <span style={{ fontFamily: fontFamily.mono, fontSize: fontSize.xs, color: color.text }}>
              {value}
            </span>
          </div>
        ))}
      </Row>
    </Section>
  ),
};

export const Colors: Story = {
  render: () => (
    <Section title="Colors">
      <Row>
        {(Object.entries(color) as [string, string][]).map(([key, value]) => (
          <div key={key} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: spacing.xs }}>
            <div
              style={{
                width: '48px',
                height: '48px',
                background: value,
                borderRadius: radius.md,
                border: `1px solid ${color.border}`,
              }}
            />
            <span style={{ fontFamily: fontFamily.mono, fontSize: fontSize.xs, color: color.textSubtle, textAlign: 'center', maxWidth: '80px' }}>
              {key}
            </span>
          </div>
        ))}
      </Row>
    </Section>
  ),
};

export const Radius: Story = {
  render: () => (
    <Section title="Radius">
      <Row>
        {(Object.entries(radius) as [string, string][]).map(([key, value]) => (
          <div key={key} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: spacing.xs }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                background: color.accentSubtle,
                border: `1px solid ${color.accent}`,
                borderRadius: value,
              }}
            />
            <span style={{ fontFamily: fontFamily.mono, fontSize: fontSize.xs, color: color.textSubtle }}>
              {key}
            </span>
            <span style={{ fontFamily: fontFamily.mono, fontSize: fontSize.xs, color: color.text }}>
              {value}
            </span>
          </div>
        ))}
      </Row>
    </Section>
  ),
};

export const Typography: Story = {
  render: () => (
    <div>
      <Section title="Font Sizes">
        {(Object.entries(fontSize) as [string, string][]).map(([key, value]) => (
          <div key={key} style={{ display: 'flex', alignItems: 'baseline', gap: spacing.md, marginBottom: spacing.sm }}>
            <span style={{ fontFamily: fontFamily.mono, fontSize: fontSize.xs, color: color.textSubtle, width: '40px', flexShrink: 0 }}>
              {key}
            </span>
            <span style={{ fontFamily: fontFamily.sans, fontSize: value, color: color.text, lineHeight: lineHeight.normal }}>
              The quick brown fox
            </span>
            <span style={{ fontFamily: fontFamily.mono, fontSize: fontSize.xs, color: color.textSubtle }}>
              {value}
            </span>
          </div>
        ))}
      </Section>
      <Section title="Font Weights">
        {(Object.entries(fontWeight) as [string, string][]).map(([key, value]) => (
          <div key={key} style={{ display: 'flex', alignItems: 'baseline', gap: spacing.md, marginBottom: spacing.sm }}>
            <span style={{ fontFamily: fontFamily.mono, fontSize: fontSize.xs, color: color.textSubtle, width: '80px', flexShrink: 0 }}>
              {key}
            </span>
            <span style={{ fontFamily: fontFamily.sans, fontSize: fontSize.xl, fontWeight: value as React.CSSProperties['fontWeight'], color: color.text }}>
              The quick brown fox
            </span>
          </div>
        ))}
      </Section>
    </div>
  ),
};

export const Shadows: Story = {
  render: () => (
    <Section title="Shadows">
      <Row>
        {(Object.entries(shadow) as [string, string][]).map(([key, value]) => (
          <div key={key} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: spacing.sm }}>
            <div
              style={{
                width: '96px',
                height: '64px',
                background: color.surface,
                borderRadius: radius.md,
                boxShadow: value,
                border: key === 'none' ? `1px solid ${color.border}` : undefined,
              }}
            />
            <span style={{ fontFamily: fontFamily.mono, fontSize: fontSize.xs, color: color.textSubtle }}>
              {key}
            </span>
          </div>
        ))}
      </Row>
    </Section>
  ),
};
