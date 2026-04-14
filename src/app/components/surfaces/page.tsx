"use client";

import React from "react";
// import { Typography, Box, Divider, Card,  Button, Paper, Stack } from "@awaymess/ui";
// import { CardContent, CardActions } from '@mui/material'
import { Typography, Box, Divider, Card, CardContent, CardActions, Button, Paper, Stack } from "@awaymess/ui";
import CodeBlock from "@/components/CodeBlock";

const codeExample = `import { Card, CardContent, CardActions, Typography, Button } from "@awaymess/ui";

export default function CardExample() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5">Lizard</Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}`;

export default function SurfacesPage() {
  return (
    <Box sx={{ maxWidth: 800 }}>
      <Typography variant="h3" gutterBottom>Paper & Card</Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        In Material Design, the physical properties of paper are translated to the screen. 
        Cards are surfaces that display content and actions on a single topic.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" gutterBottom>Example</Typography>

      <Box sx={{ p: 4, mb: 4, background: 'linear-gradient(135deg, #FF9500 0%, #FF3B30 100%)', borderRadius: 4 }}>
        <Typography variant="h6" color="white" gutterBottom>Paper Elevations</Typography>
        <Stack direction="row" spacing={3} sx={{ mb: 6, flexWrap: "wrap", gap: 2 }}>
          <Paper elevation={0} sx={{ p: 3, width: 120, height: 120, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography>Elevation 0</Typography>
          </Paper>
          <Paper elevation={1} sx={{ p: 3, width: 120, height: 120, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography>Elevation 1</Typography>
          </Paper>
          <Paper elevation={2} sx={{ p: 3, width: 120, height: 120, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography>Elevation 2</Typography>
          </Paper>
        </Stack>

        <Typography variant="h6" color="white" gutterBottom>Basic Card</Typography>
        <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Box>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" gutterBottom>Usage Code</Typography>
      <CodeBlock code={codeExample} />
    </Box>
  );
}
