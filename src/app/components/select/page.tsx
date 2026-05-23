"use client";

import React, { useState } from "react";
import { Typography, Box, Divider, Stack, Card, Select, MenuItem, InputLabel, FormControl, Autocomplete, TextField } from "@awaymess/ui";
// import { InputLabel, FormControl} from "@mui/material";
import { SelectChangeEvent } from "@mui/material";
import CodeBlock from "@/components/CodeBlock";

const codeExample = `import { Select, MenuItem, FormControl, InputLabel, SelectChangeEvent } from "@awaymess/ui";
import { useState } from "react";

export default function SelectExample() {
  const [age, setAge] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Age</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
}`;

export default function SelectPage() {
  const [age, setAge] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const topFilms = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Dark Knight', year: 1974 },
    { label: '12 Angry Men', year: 1957 },
  ];

  return (
    <Box sx={{ maxWidth: 800 }}>
      <Typography variant="h3" gutterBottom>Select & Autocomplete</Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        Select components are used for collecting user provided information from a list of options.
        The dropdown menus feature a striking glassmorphism backdrop.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" gutterBottom>Example</Typography>

      <Card sx={{ p: 4, mb: 4 }}>
        <Typography variant="h6" gutterBottom>Basic Select</Typography>
        <Stack spacing={3} sx={{ mb: 6 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Stack>

        <Typography variant="h6" gutterBottom>Autocomplete</Typography>
        <Stack spacing={3}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={topFilms}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Movie" />}
          />
        </Stack>
      </Card>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" gutterBottom>Usage Code</Typography>
      <CodeBlock code={codeExample} />
    </Box>
  );
}
