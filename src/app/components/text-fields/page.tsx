"use client";

import React from "react";
import { Typography, Box, Divider, TextField, Stack, Card } from "@awaymess/ui";
import CodeBlock from "@/components/CodeBlock";

const codeExample = `import { TextField, Stack } from "@awaymess/ui";

export default function TextFieldExample() {
  return (
    <Stack spacing={3}>
      <TextField label="Outlined (Default)" variant="outlined" />
      <TextField label="Filled" variant="filled" />
      <TextField label="Standard" variant="standard" />
      <TextField label="Disabled" variant="outlined" disabled defaultValue="Cannot edit" />
      <TextField label="Error" variant="outlined" error helperText="Incorrect entry." />
    </Stack>
  );
}`;

export default function TextFieldsPage() {
  return (
    <Box sx={{ maxWidth: 800 }}>
      <Typography variant="h3" gutterBottom>Text Fields</Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        Text fields let users enter and edit text. They have been beautifully customized with our glass aesthetic.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" gutterBottom>Example</Typography>

      <Card sx={{ p: 4, mb: 4 }}>
        <Typography variant="h6" gutterBottom>Basic Inputs</Typography>
        <Stack spacing={3} sx={{ mb: 4 }}>
          <TextField label="Outlined (Default)" variant="outlined" />
          <TextField label="Filled" variant="filled" />
          <TextField label="Standard" variant="standard" />
        </Stack>

        <Typography variant="h6" gutterBottom>States</Typography>
        <Stack spacing={3} sx={{ mb: 4 }}>
          <TextField label="Disabled" variant="outlined" disabled defaultValue="Cannot edit this" />
          <TextField label="Error" variant="outlined" error helperText="Incorrect entry." defaultValue="Invalid data" />
          <TextField label="Password" variant="outlined" type="password" defaultValue="secret123" />
        </Stack>

        <Typography variant="h6" gutterBottom>Multiline</Typography>
        <Stack spacing={3}>
          <TextField
            label="Multiline"
            multiline
            rows={4}
            variant="outlined"
            defaultValue="Type something long here..."
          />
        </Stack>
      </Card>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" gutterBottom>Usage Code</Typography>
      <CodeBlock code={codeExample} />
    </Box>
  );
}
