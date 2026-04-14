"use client";

import React, { useState } from "react";
import { Typography, Box, Divider, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, GlassCard } from "@awaymess/ui";
import CodeBlock from "@/components/CodeBlock";

const codeExample = `import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@awaymess/ui";
import { useState } from "react";

export default function DialogExample() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="outlined" onClick={() => setOpen(true)}>
        Open dialog
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Let Google help apps determine location.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Disagree</Button>
          <Button onClick={() => setOpen(false)} autoFocus variant="contained">
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}`;

export default function DialogsPage() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ maxWidth: 800 }}>
      <Typography variant="h3" gutterBottom>Dialogs</Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.
        Our dialogs use heavy glass effects to focus attention while maintaining context.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" gutterBottom>Example</Typography>

      <GlassCard sx={{ p: 4, mb: 4 }}>
        <Typography variant="h6" gutterBottom>Basic Dialog</Typography>
        <Button variant="outlined" onClick={handleClickOpen}>
          Open alert dialog
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Use Google's location service?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Let Google help apps determine location. This means sending anonymous
              location data to Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button onClick={handleClose} autoFocus variant="contained">
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </GlassCard>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" gutterBottom>Usage Code</Typography>
      <CodeBlock code={codeExample} />
    </Box>
  );
}
