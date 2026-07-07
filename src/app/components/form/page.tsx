"use client";

import React from "react";
import {
  Typography,
  Box,
  Divider,
  ExampleForm,
  Stack,
  GlassCard,
} from "@awaymess/ui";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import CodeBlock from "@/components/CodeBlock";

const codeExample = `import { ExampleForm } from "@awaymess/ui";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

export default function FormExample() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ p: 4, borderRadius: 4, background: "linear-gradient(135deg, rgba(90, 200, 250, 0.1) 0%, rgba(88, 86, 214, 0.1) 100%)" }}>
        <ExampleForm />
        <Box sx={{ mt: 4, maxWidth: 500, mx: "auto" }}>
          <DatePicker
            label="Event Date"
            defaultValue={dayjs("2026-07-08")}
            sx={{ width: "100%" }}
          />
        </Box>
      </Box>
    </LocalizationProvider>
  );
}`;

export default function FormPage() {
  return (
    <Box sx={{ maxWidth: 800 }}>
      <Typography variant="h3" gutterBottom>Forms & Inputs</Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        Input fields, selects, date pickers, and controls have been styled to match the frosted glass aesthetic. 
        They feature a translucent background with sharp, modern borders.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" gutterBottom>Example Form</Typography>
      <Box sx={{ p: 4, mb: 4, bgcolor: "background.default", borderRadius: 4, background: "linear-gradient(135deg, rgba(90, 200, 250, 0.1) 0%, rgba(88, 86, 214, 0.1) 100%)" }}>
        <ExampleForm />
      </Box>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" gutterBottom>Date Picker in Forms</Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        For dates and times, use our custom styled DatePicker with localized adapters.
      </Typography>
      <GlassCard sx={{ p: 4, mb: 4 }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Stack spacing={3} sx={{ maxWidth: 400 }}>
            <DatePicker
              label="Registration Date"
              defaultValue={dayjs("2026-07-08")}
              sx={{ width: "100%" }}
            />
          </Stack>
        </LocalizationProvider>
      </GlassCard>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" gutterBottom>Usage Code</Typography>
      <CodeBlock code={codeExample} />
    </Box>
  );
}
