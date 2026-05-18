"use client";

import React, { useState } from "react";
import { Typography, Box, Divider, Tabs, Tab, Stepper, Step, StepLabel, Button, GlassCard } from "@awaymess/ui";
import CodeBlock from "@/components/CodeBlock";

const codeExample = `import { Tabs, Tab, Box } from "@awaymess/ui";
import { useState } from "react";

export default function TabsExample() {
  const [tabValue, setTabValue] = useState(0);

  return (
    <Box>
      <Tabs value={tabValue} onChange={(e, newValue) => setTabValue(newValue)}>
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
    </Box>
  );
}`;

const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

export default function TabsStepperPage() {
  const [tabValue, setTabValue] = useState(0);
  const [activeStep, setActiveStep] = useState(1);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ maxWidth: 800 }}>
      <Typography variant="h3" gutterBottom>Tabs & Stepper</Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        Tabs make it easy to explore and switch between different views. Steppers convey progress through numbered steps.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" gutterBottom>Example</Typography>

      <GlassCard sx={{ p: 4, mb: 4 }}>
        <Typography variant="h6" gutterBottom>Tabs</Typography>
        <Box sx={{ width: '100%', mb: 6 }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={tabValue} onChange={handleTabChange} aria-label="basic tabs example">
              <Tab label="Item One" />
              <Tab label="Item Two" />
              <Tab label="Item Three" />
            </Tabs>
          </Box>
          <Box sx={{ p: 3 }}>
            <Typography>Content for Item {tabValue + 1}</Typography>
          </Box>
        </Box>

        <Typography variant="h6" gutterBottom>Stepper</Typography>
        <Box sx={{ width: '100%' }}>
          <Stepper activeStep={activeStep}>
            {steps.map((label) => {
              const stepProps: { completed?: boolean } = {};
              const labelProps: {
                optional?: React.ReactNode;
              } = {};
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          <React.Fragment>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 4 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleNext} disabled={activeStep === steps.length}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </Box>
          </React.Fragment>
        </Box>
      </GlassCard>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" gutterBottom>Usage Code</Typography>
      <CodeBlock code={codeExample} />
    </Box>
  );
}
