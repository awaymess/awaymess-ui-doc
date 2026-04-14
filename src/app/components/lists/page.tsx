"use client";

import React from "react";
import { Typography, Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, GlassCard } from "@awaymess/ui";
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import CodeBlock from "@/components/CodeBlock";

const codeExample = `import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@awaymess/ui";
import InboxIcon from '@mui/icons-material/Inbox';

export default function ListExample() {
  return (
    <List>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItemButton>
      </ListItem>
    </List>
  );
}`;

export default function ListsPage() {
  return (
    <Box sx={{ maxWidth: 800 }}>
      <Typography variant="h3" gutterBottom>Lists</Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        Lists are continuous, vertical indexes of text or images.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" gutterBottom>Example</Typography>

      <GlassCard sx={{ p: 4, mb: 4 }}>
        <Typography variant="h6" gutterBottom>Basic List</Typography>
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', borderRadius: 2 }}>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Drafts" />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Trash" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list">
                <ListItemText primary="Spam" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </GlassCard>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" gutterBottom>Usage Code</Typography>
      <CodeBlock code={codeExample} />
    </Box>
  );
}
