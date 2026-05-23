"use client";

import React from "react";
import {
  Typography,
  Box,
  Divider,
  Card,
  CardContent,
  CardActions,
  Button,
  Stack,
} from "@awaymess/ui";
import CodeBlock from "@/components/CodeBlock";

const codeExample = `import { Card, CardContent, CardActions, Typography, Button } from "@awaymess/ui";

export default function CardExample() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5">Awaymess Card</Typography>
        <Typography variant="body2" color="text.secondary">
          Card is the default elevated content surface in @awaymess/ui.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}`;

export default function CardPage() {
  return (
    <Box sx={{ maxWidth: 800 }}>
      <Typography variant="h3" gutterBottom>
        Card
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        Card is the primary content surface for grouped information and actions.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" gutterBottom>
        Example
      </Typography>

      <Card sx={{ p: 4, mb: 4 }}>
        <Stack spacing={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Awaymess Card
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Use Card for compact content groups, previews, profiles, and
                action panels.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Stack>
      </Card>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" gutterBottom>
        Usage Code
      </Typography>
      <CodeBlock code={codeExample} />
    </Box>
  );
}
