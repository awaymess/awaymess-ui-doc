"use client";

import React from "react";
import { Typography, Box, Divider, Stack, Card } from "@awaymess/ui";
import CodeBlock from "@/components/CodeBlock";

const codeExample = `import { Typography, Stack } from "@awaymess/ui";

export default function TypographyExample() {
  return (
    <Stack spacing={2}>
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="body1" color="text.secondary">
        This is a body paragraph with secondary text color.
      </Typography>
      <Typography variant="button" sx={{ display: 'block' }}>
        BUTTON TEXT
      </Typography>
    </Stack>
  );
}`;

export default function TypographyPage() {
  return (
    <Box sx={{ maxWidth: 800 }}>
      <Typography variant="h3" gutterBottom>Typography</Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        Use typography to present your design and content as clearly and efficiently as possible.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" gutterBottom>Example</Typography>

      <Card sx={{ p: 4, mb: 4 }}>
        <Stack spacing={2}>
          <Typography variant="h1" gutterBottom>h1. Heading</Typography>
          <Typography variant="h2" gutterBottom>h2. Heading</Typography>
          <Typography variant="h3" gutterBottom>h3. Heading</Typography>
          <Typography variant="h4" gutterBottom>h4. Heading</Typography>
          <Typography variant="h5" gutterBottom>h5. Heading</Typography>
          <Typography variant="h6" gutterBottom>h6. Heading</Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="subtitle1" gutterBottom>subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Typography>
          <Typography variant="subtitle2" gutterBottom>subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="body1" gutterBottom>body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.</Typography>
          <Typography variant="body2" gutterBottom>body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.</Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="button" sx={{ display: 'block' }} gutterBottom>button text</Typography>
          <Typography variant="caption" sx={{ display: 'block' }} gutterBottom>caption text</Typography>
          <Typography variant="overline" sx={{ display: 'block' }} gutterBottom>overline text</Typography>
        </Stack>
      </Card>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" gutterBottom>Usage Code</Typography>
      <CodeBlock code={codeExample} />
    </Box>
  );
}
