"use client";

import React, { useState } from "react";
import {
  Typography,
  Box,
  Divider,
  Stack,
  GlassCard,
} from "@awaymess/ui";
import {
  DatePicker,
  DesktopDatePicker,
  MobileDatePicker,
  DateTimePicker,
  TimePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import CodeBlock from "@/components/CodeBlock";

const codeExample = `import { Stack } from "@awaymess/ui";
import {
  DatePicker,
  DateTimePicker,
  TimePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

export default function DatePickersExample() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <DatePicker
          label="Basic Date Picker"
          defaultValue={dayjs("2026-07-08")}
        />
        <DateTimePicker
          label="Date & Time Picker"
          defaultValue={dayjs("2026-07-08T14:30")}
        />
        <TimePicker
          label="Time Picker"
          defaultValue={dayjs("2026-07-08T14:30")}
        />
      </Stack>
    </LocalizationProvider>
  );
}`;

export default function DatePickersPage() {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(
    dayjs("2026-07-08")
  );

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ maxWidth: 800 }}>
        <Typography variant="h3" gutterBottom>
          Date & Time Pickers
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          Date and Time Pickers allow users to select dates and times from a
          pre-configured calendar and clock interface. They are styled with sleek
          liquid glass aesthetics and customized iOS-style picker icons.
        </Typography>

        <Divider sx={{ my: 4 }} />

        <Typography variant="h5" gutterBottom>
          Example
        </Typography>

        <GlassCard sx={{ p: 4, mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Standard Pickers
          </Typography>
          <Stack spacing={3} sx={{ mb: 6 }}>
            <DatePicker
              label="Standard Date Picker"
              value={selectedDate}
              onChange={(newValue) => setSelectedDate(newValue)}
            />
            <DateTimePicker
              label="Date & Time Picker"
              defaultValue={dayjs("2026-07-08T14:30")}
            />
            <TimePicker
              label="Time Picker"
              defaultValue={dayjs("2026-07-08T14:30")}
            />
          </Stack>

          <Typography variant="h6" gutterBottom>
            Variants & Views
          </Typography>
          <Stack spacing={3} sx={{ mb: 6 }}>
            <DesktopDatePicker
              label="Desktop Date Picker"
              defaultValue={dayjs("2026-07-08")}
            />
            <MobileDatePicker
              label="Mobile Date Picker"
              defaultValue={dayjs("2026-07-08")}
            />
            <DatePicker
              label="Year & Month Selection"
              views={["year", "month"]}
              defaultValue={dayjs("2026-07-08")}
            />
          </Stack>

          <Typography variant="h6" gutterBottom>
            States
          </Typography>
          <Stack spacing={3}>
            <DatePicker
              label="Disabled Picker"
              disabled
              defaultValue={dayjs("2026-07-08")}
            />
            <DatePicker
              label="Read Only Picker"
              readOnly
              defaultValue={dayjs("2026-07-08")}
            />
          </Stack>
        </GlassCard>

        <Divider sx={{ my: 4 }} />

        <Typography variant="h5" gutterBottom>
          Usage Code
        </Typography>
        <CodeBlock code={codeExample} />
      </Box>
    </LocalizationProvider>
  );
}
