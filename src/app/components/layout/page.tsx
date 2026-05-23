"use client";

import React from "react";
import { Typography, Box, Divider, Stack, Card, Paper } from "@awaymess/ui";
import CodeBlock from "@/components/CodeBlock";

const codeExample = `import { Stack, Box, Paper } from "@awaymess/ui";

export default function LayoutExample() {
  return (
    <Stack spacing={2}>
      <Paper sx={{ p: 2 }}>Item 1</Paper>
      <Paper sx={{ p: 2 }}>Item 2</Paper>
      
      {/* CSS Grid */}
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 2 }}>
        <Box sx={{ gridColumn: 'span 6' }}><Paper>Left</Paper></Box>
        <Box sx={{ gridColumn: 'span 6' }}><Paper>Right</Paper></Box>
      </Box>
    </Stack>
  );
}`;

export default function LayoutPage() {
  return (
    <Box sx={{ maxWidth: 800 }}>
      <Typography variant="h3" gutterBottom>Layout</Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        Material-UI provides Box, Stack, Container, and Grid to help you design responsive layouts easily.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" gutterBottom>Example</Typography>

      <Card sx={{ p: 4, mb: 4 }}>
        <Typography variant="h6" gutterBottom>Stack</Typography>
        <Stack spacing={2} sx={{ mb: 4, bgcolor: 'background.default', p: 2, borderRadius: 2 }}>
          <Paper sx={{ p: 2, textAlign: 'center' }}>Item 1</Paper>
          <Paper sx={{ p: 2, textAlign: 'center' }}>Item 2</Paper>
          <Paper sx={{ p: 2, textAlign: 'center' }}>Item 3</Paper>
        </Stack>

        <Typography variant="h6" gutterBottom>Grid (CSS Grid)</Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 2 }}>
            <Box sx={{ gridColumn: 'span 8' }}>
              <Paper sx={{ p: 2, textAlign: 'center' }}>xs=8</Paper>
            </Box>
            <Box sx={{ gridColumn: 'span 4' }}>
              <Paper sx={{ p: 2, textAlign: 'center' }}>xs=4</Paper>
            </Box>
            <Box sx={{ gridColumn: 'span 4' }}>
              <Paper sx={{ p: 2, textAlign: 'center' }}>xs=4</Paper>
            </Box>
            <Box sx={{ gridColumn: 'span 8' }}>
              <Paper sx={{ p: 2, textAlign: 'center' }}>xs=8</Paper>
            </Box>
          </Box>
        </Box>
      </Card>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" gutterBottom>Usage Code</Typography>
      <CodeBlock code={codeExample} />
    </Box>
  );
}
