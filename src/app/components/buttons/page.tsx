"use client";

import React from "react";
import { Typography, Box, Divider, Button, Stack, GlassCard, IconButton } from "@awaymess/ui";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CodeBlock from "@/components/CodeBlock";

const codeExample = `import { Button, IconButton, Stack } from "@awaymess/ui";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function ButtonExample() {
  return (
    <Stack direction="row" spacing={3}>
      <Button variant="contained" color="primary">Primary</Button>
      <Button variant="outlined" color="secondary">Secondary</Button>
      <Button variant="text" color="success">Text</Button>
      <IconButton color="error" aria-label="add to favorites">
        <FavoriteIcon />
      </IconButton>
    </Stack>
  );
}`;

export default function ButtonsPage() {
  return (
    <Box sx={{ maxWidth: 800 }}>
      <Typography variant="h3" gutterBottom>Buttons & Icons</Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        Buttons communicate actions that users can take. They are typically placed throughout your UI.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" gutterBottom>Example</Typography>

      <GlassCard sx={{ p: 4, mb: 4 }}>
        <Typography variant="h6" gutterBottom>Variants</Typography>
        <Stack direction="row" spacing={3} sx={{ mb: 4 }}>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
          <Button variant="text">Text</Button>
        </Stack>

        <Typography variant="h6" gutterBottom>Colors</Typography>
        <Stack direction="row" spacing={3} sx={{ mb: 4, flexWrap: "wrap", gap: 2 }}>
          <Button variant="contained" color="primary">Primary</Button>
          <Button variant="contained" color="secondary">Secondary</Button>
          <Button variant="contained" color="success">Success</Button>
          <Button variant="contained" color="error">Error</Button>
          <Button variant="contained" color="warning">Warning</Button>
        </Stack>
        
        <Typography variant="h6" gutterBottom>Outlined Colors</Typography>
        <Stack direction="row" spacing={3} sx={{ flexWrap: "wrap", gap: 2, mb: 4 }}>
          <Button variant="outlined" color="primary">Primary</Button>
          <Button variant="outlined" color="secondary">Secondary</Button>
          <Button variant="outlined" color="success">Success</Button>
          <Button variant="outlined" color="error">Error</Button>
          <Button variant="outlined" color="warning">Warning</Button>
        </Stack>

        <Typography variant="h6" gutterBottom>Icon Buttons</Typography>
        <Stack direction="row" spacing={3} sx={{ flexWrap: "wrap", gap: 2 }}>
          <IconButton color="primary" aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton color="secondary" aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton color="error" aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
        </Stack>
      </GlassCard>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" gutterBottom>Usage Code</Typography>
      <CodeBlock code={codeExample} />
    </Box>
  );
}
