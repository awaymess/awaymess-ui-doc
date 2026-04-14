"use client";

import React from "react";
import { Typography, Box, Divider, Button, GlassCard } from "@awaymess/ui";
import CodeBlock from "@/components/CodeBlock";

const codeExample = `import { GlassCard, Typography, Button, Box } from "@awaymess/ui";

export default function GlassCardExample() {
  return (
    <Box sx={{ p: 6, background: "linear-gradient(135deg, #0A84FF 0%, #5856D6 100%)" }}>
      <GlassCard sx={{ p: 4, maxWidth: 400 }}>
        <Typography variant="h4" gutterBottom>Hello Glass</Typography>
        <Typography variant="body2" sx={{ mb: 3 }}>
          This card uses backdrop-filter to blur the vibrant background behind it, 
          creating a modern iOS-like glass effect.
        </Typography>
        <Button variant="contained" fullWidth>Action</Button>
      </GlassCard>
    </Box>
  );
}`;

export default function GlassCardPage() {
  return (
    <Box sx={{ maxWidth: 800 }}>
      <Typography variant="h3" gutterBottom>GlassCard</Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        A core component of our Liquid Glass Design system. It provides a frosted-glass 
        surface that beautifully overlays any content or background underneath.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" gutterBottom>Example</Typography>
      
      <Box 
        sx={{ 
          p: 6, 
          borderRadius: 4,
          background: "linear-gradient(135deg, #0A84FF 0%, #5856D6 100%)",
          display: "flex", 
          justifyContent: "center",
          alignItems: "center",
          mb: 4
        }}
      >
        <GlassCard sx={{ p: 4, maxWidth: 400 }}>
          <Typography variant="h4" gutterBottom>Hello Glass</Typography>
          <Typography variant="body2" sx={{ mb: 3 }}>
            This card uses backdrop-filter to blur the vibrant background behind it, 
            creating a modern iOS-like glass effect.
          </Typography>
          <Button variant="contained" fullWidth>Action</Button>
        </GlassCard>
      </Box>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" gutterBottom>Usage Code</Typography>
      <CodeBlock code={codeExample} />
    </Box>
  );
}
