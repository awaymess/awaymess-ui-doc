"use client";

import React from "react";
import { Typography, Box, Divider, ExampleForm } from "@awaymess/ui";
import CodeBlock from "@/components/CodeBlock";

const codeExample = `import { ExampleForm } from "@awaymess/ui";

export default function FormExample() {
  return (
    <Box sx={{ p: 4, borderRadius: 4, background: "linear-gradient(135deg, rgba(90, 200, 250, 0.1) 0%, rgba(88, 86, 214, 0.1) 100%)" }}>
      <ExampleForm />
    </Box>
  );
}`;

export default function FormPage() {
  return (
    <Box sx={{ maxWidth: 800 }}>
      <Typography variant="h3" gutterBottom>Forms & Inputs</Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        Input fields, selects, and controls have been styled to match the frosted glass aesthetic. 
        They feature a translucent background with sharp, modern borders.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" gutterBottom>Example</Typography>
      <Box sx={{ p: 4, mb: 4, bgcolor: "background.default", borderRadius: 4, background: "linear-gradient(135deg, rgba(90, 200, 250, 0.1) 0%, rgba(88, 86, 214, 0.1) 100%)" }}>
        <ExampleForm />
      </Box>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" gutterBottom>Usage Code</Typography>
      <CodeBlock code={codeExample} />
    </Box>
  );
}
