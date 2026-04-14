"use client";

import React from "react";
import { Typography, Box, Divider, Stack, Chip, Tooltip, GlassCard, IconButton } from "@awaymess/ui";
import DeleteIcon from '@mui/icons-material/Delete';
import CodeBlock from "@/components/CodeBlock";

const codeExample = `import { Chip, Tooltip, IconButton, Stack } from "@awaymess/ui";
import DeleteIcon from '@mui/icons-material/Delete';

export default function ChipTooltipExample() {
  return (
    <Stack direction="row" spacing={3}>
      <Chip label="Primary" color="primary" />
      <Chip label="Deletable" onDelete={() => {}} />
      <Tooltip title="Delete">
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </Stack>
  );
}`;

export default function ChipTooltipPage() {
  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  return (
    <Box sx={{ maxWidth: 800 }}>
      <Typography variant="h3" gutterBottom>Chip & Tooltip</Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        Chips are compact elements that represent an input, attribute, or action. 
        Tooltips display informative text when users hover over, focus on, or tap an element.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" gutterBottom>Example</Typography>

      <GlassCard sx={{ p: 4, mb: 4 }}>
        <Typography variant="h6" gutterBottom>Chips</Typography>
        <Stack direction="row" spacing={1} sx={{ mb: 4 }}>
          <Chip label="Clickable" onClick={() => {}} />
          <Chip label="Deletable" onDelete={handleDelete} />
          <Chip label="Clickable Deletable" onClick={() => {}} onDelete={handleDelete} />
        </Stack>

        <Typography variant="h6" gutterBottom>Chip Colors</Typography>
        <Stack direction="row" spacing={1} sx={{ mb: 4 }}>
          <Chip label="Primary" color="primary" />
          <Chip label="Success" color="success" />
          <Chip label="Warning" color="warning" />
          <Chip label="Error" color="error" />
        </Stack>

        <Typography variant="h6" gutterBottom>Tooltips</Typography>
        <Stack direction="row" spacing={3}>
          <Tooltip title="Delete">
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="This is a long tooltip explanation to show how it wraps and looks with the glass theme applied." arrow>
            <Typography sx={{ cursor: 'pointer', textDecoration: 'underline' }}>Hover me</Typography>
          </Tooltip>
        </Stack>
      </GlassCard>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" gutterBottom>Usage Code</Typography>
      <CodeBlock code={codeExample} />
    </Box>
  );
}
