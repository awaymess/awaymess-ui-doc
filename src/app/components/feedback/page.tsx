"use client";

import React from "react";
import { Typography, Box, Divider, Alert, Stack, LinearProgress, Chip } from "@awaymess/ui";
import CodeBlock from "@/components/CodeBlock";

const codeExample = `import { Alert, LinearProgress, Stack } from "@awaymess/ui";

export default function FeedbackExample() {
  return (
    <Stack spacing={2}>
      <Alert severity="success">Your data has been successfully saved.</Alert>
      <Alert severity="error">Failed to complete the transaction.</Alert>
      
      <LinearProgress variant="indeterminate" color="primary" />
    </Stack>
  );
}`;

export default function FeedbackPage() {
  return (
    <Box sx={{ maxWidth: 800 }}>
      <Typography variant="h3" gutterBottom>Feedback Components</Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        Alerts, progress bars, and chips automatically utilize the glass tokens, 
        giving them a translucent and modern look.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" gutterBottom>Example</Typography>

      <Box sx={{ p: 4, mb: 4, bgcolor: "background.default", borderRadius: 4 }}>
        <Typography variant="h5" gutterBottom>Alerts</Typography>
        <Stack spacing={2} sx={{ mb: 6 }}>
          <Alert severity="success">Your data has been successfully saved to the server.</Alert>
          <Alert severity="info">A new update is available for your application.</Alert>
          <Alert severity="warning">Your subscription is about to expire in 3 days.</Alert>
          <Alert severity="error">Failed to complete the transaction. Please try again.</Alert>
        </Stack>

        <Typography variant="h5" gutterBottom>Progress</Typography>
        <Box sx={{ mb: 6 }}>
          <LinearProgress variant="determinate" value={45} sx={{ mb: 2 }} />
          <LinearProgress variant="indeterminate" color="secondary" />
        </Box>

        <Typography variant="h5" gutterBottom>Chips</Typography>
        <Stack direction="row" sx={{ flexWrap: "wrap", gap: 1 }}>
          <Chip label="Primary" color="primary" />
          <Chip label="Success" color="success" />
          <Chip label="Warning" color="warning" />
          <Chip label="Error" color="error" />
          <Chip label="Outlined" variant="outlined" />
        </Stack>
      </Box>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" gutterBottom>Usage Code</Typography>
      <CodeBlock code={codeExample} />
    </Box>
  );
}
