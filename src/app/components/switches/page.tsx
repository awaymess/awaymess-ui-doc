"use client";

import React from "react";
import { Typography, Box, Divider, Stack, GlassCard, Switch, Checkbox, FormControlLabel, FormGroup } from "@awaymess/ui";
import CodeBlock from "@/components/CodeBlock";

const codeExample = `import { Switch, Checkbox, FormControlLabel, FormGroup } from "@awaymess/ui";

export default function SwitchesExample() {
  return (
    <FormGroup>
      <FormControlLabel control={<Switch defaultChecked />} label="Switch" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Checkbox" />
      <FormControlLabel control={<Checkbox defaultChecked color="success" />} label="Success" />
    </FormGroup>
  );
}`;

export default function SwitchesPage() {
  return (
    <Box sx={{ maxWidth: 800 }}>
      <Typography variant="h3" gutterBottom>Switches & Checkboxes</Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        Switches toggle the state of a single setting on or off. Checkboxes allow the user to select one or more items from a set.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" gutterBottom>Example</Typography>

      <GlassCard sx={{ p: 4, mb: 4 }}>
        <Typography variant="h6" gutterBottom>Switches</Typography>
        <FormGroup sx={{ mb: 4 }}>
          <FormControlLabel control={<Switch defaultChecked />} label="Label" />
          <FormControlLabel required control={<Switch />} label="Required" />
          <FormControlLabel disabled control={<Switch />} label="Disabled" />
        </FormGroup>

        <Typography variant="h6" gutterBottom>Checkboxes</Typography>
        <FormGroup>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
          <FormControlLabel required control={<Checkbox />} label="Required" />
          <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
          <FormControlLabel control={<Checkbox defaultChecked color="success" />} label="Success Color" />
          <FormControlLabel control={<Checkbox defaultChecked color="error" />} label="Error Color" />
        </FormGroup>
      </GlassCard>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" gutterBottom>Usage Code</Typography>
      <CodeBlock code={codeExample} />
    </Box>
  );
}
