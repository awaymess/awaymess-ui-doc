"use client";

import React from "react";
import { Typography, Box, Divider, AppBar, Toolbar, IconButton, Button, GlassCard, Drawer, List, ListItem, ListItemButton, ListItemText } from "@awaymess/ui";
import MenuIcon from '@mui/icons-material/Menu';
import CodeBlock from "@/components/CodeBlock";

const codeExample = `import { AppBar, Toolbar, IconButton, Typography, Button } from "@awaymess/ui";
import MenuIcon from '@mui/icons-material/Menu';

export default function AppBarExample() {
  return (
    <AppBar position="static" sx={{ background: 'transparent' }}>
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>News</Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}`;

export default function AppBarDrawerPage() {
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setState(open);
  };

  return (
    <Box sx={{ maxWidth: 800 }}>
      <Typography variant="h3" gutterBottom>AppBar & Drawer</Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        The App Bar displays information and actions relating to the current screen. 
        Navigation drawers provide access to destinations in your app.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" gutterBottom>Example</Typography>

      <GlassCard sx={{ p: 4, mb: 4 }}>
        <Typography variant="h6" gutterBottom>AppBar Demo</Typography>
        <Box sx={{ flexGrow: 1, mb: 4 }}>
          <AppBar position="static" sx={{ background: 'transparent' }}>
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                News
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </Box>

        <Typography variant="h6" gutterBottom>Drawer Demo</Typography>
        <Button variant="outlined" onClick={toggleDrawer(true)}>Open Temporary Drawer</Button>
        <Drawer
          anchor="left"
          open={state}
          onClose={toggleDrawer(false)}
        >
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <List>
              {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
            <List>
              {['All mail', 'Trash', 'Spam'].map((text) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </GlassCard>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" gutterBottom>Usage Code</Typography>
      <CodeBlock code={codeExample} />
    </Box>
  );
}
