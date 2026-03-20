import { Container, Stack } from './design-system';
import { color, fontFamily, fontSize, fontWeight } from './design-system/tokens';

export function App() {
  return (
    <div style={{ background: color.background, minHeight: '100vh', fontFamily: fontFamily.sans }}>
      <Container>
        <Stack gap="lg">
          <div style={{ paddingTop: '64px' }}>
            <h1 style={{ fontSize: fontSize['3xl'], fontWeight: fontWeight.bold, color: color.text }}>
              Design System
            </h1>
            <p style={{ fontSize: fontSize.lg, color: color.textSubtle, marginTop: '8px' }}>
              Run <code style={{ fontFamily: fontFamily.mono }}>npm run storybook</code> to explore
              the component library.
            </p>
          </div>
        </Stack>
      </Container>
    </div>
  );
}

export default App;
