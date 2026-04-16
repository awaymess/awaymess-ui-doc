import React from "react";
import { Typography, Box, Divider, Paper } from "@awaymess/ui";

export default function IntroductionPage() {
  return (
    <Box sx={{ maxWidth: 800 }}>
      <Typography variant="h3" gutterBottom>
        Introduction
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        Welcome to the documentation for `@awaymess/ui`. This library provides a beautifully crafted 
        Liquid Glass Design system built on top of Material-UI (MUI).
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" gutterBottom>
        Installation
      </Typography>
      <Paper sx={{ p: 2, mb: 4, bgcolor: "background.paper", border: 1, borderColor: "divider" }}>
        <code>npm install @awaymess/ui</code>
        <br />
        <span style={{ color: "gray" }}># or</span>
        <br />
        <code>pnpm add @awaymess/ui</code>
      </Paper>

      <Typography variant="h5" gutterBottom>
        Basic Usage
        พหะด่หก่าิด่หกเิด่า้เหด่าหก้ด่าหก้ด่า
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        To get started, wrap your application with the `LibThemeProvider`. This will automatically 
        apply the glass tokens and custom theme to all standard MUI components exported from the library.
      </Typography>

      <Paper sx={{ p: 2, mb: 4, bgcolor: "background.paper", border: 1, borderColor: "divider" }}>
        <pre style={{ margin: 0, overflowX: "auto" }}>
          <code style={{ fontSize: 14 }}>
{`import { LibThemeProvider, Button } from '@awaymess/ui';

function App() {
  return (
    <LibThemeProvider mode="light">
      <Button variant="contained">Hello Glass Design!</Button>
    </LibThemeProvider>
  );
}`}
          </code>
        </pre>
      </Paper>
      
      <Typography variant="body1" color="text.secondary">
        Use the sidebar on the left to explore the available components and their interactive examples.
      </Typography>
    </Box>
  );
}
