"use client";

import React from "react";
import { Typography, Box, Divider, Card, useTheme, useMediaQuery } from "@awaymess/ui";
import CodeBlock from "@/components/CodeBlock";

const codeExample = `import { useTheme, useMediaQuery, Box } from "@awaymess/ui";

export default function HooksExample() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Box sx={{ color: theme.palette.primary.main }}>
      {matches ? 'Desktop View' : 'Mobile View'}
    </Box>
  );
}`;

export default function HooksPage() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'), { noSsr: true });

  return (
    <Box sx={{ maxWidth: 800 }}>
      <Typography variant="h3" gutterBottom>Hooks</Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        Exported hooks like <code>useTheme</code> and <code>useMediaQuery</code> allow you to access the theme variables and build responsive designs directly in your components.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" gutterBottom>Example</Typography>

      <Card sx={{ p: 4, mb: 4 }}>
        <Typography variant="h6" gutterBottom>useMediaQuery</Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Current screen is {matches ? 'wider' : 'narrower'} than the SM breakpoint.
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Try resizing your browser window.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" gutterBottom>useTheme</Typography>
        <Box sx={{ p: 2, bgcolor: theme.palette.primary.main, color: theme.palette.primary.contrastText, borderRadius: 2, textAlign: 'center' }}>
          This box uses the primary main color from the theme.
        </Box>
      </Card>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" gutterBottom>Usage Code</Typography>
      <CodeBlock code={codeExample} />
    </Box>
  );
}
