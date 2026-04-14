"use client";

import React from "react";
import { Typography, Box, Divider, UserCard } from "@awaymess/ui";
import CodeBlock from "@/components/CodeBlock";

const codeExample = `import { UserCard } from "@awaymess/ui";

export default function UserCardExample() {
  return (
    <UserCard
      name="Jane Doe"
      role="Product Designer"
      avatarUrl="https://i.pravatar.cc/150?img=47"
    />
  );
}`;

export default function UserCardPage() {
  return (
    <Box sx={{ maxWidth: 800 }}>
      <Typography variant="h3" gutterBottom>UserCard</Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        A profile card component built on top of the GlassCard. Perfect for displaying 
        user information in a modern, elegant way.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" gutterBottom>Example</Typography>
      
      <Box sx={{ p: 4, mb: 4, bgcolor: "background.default", borderRadius: 4, display: "flex", gap: 4, flexWrap: "wrap" }}>
        <UserCard
          name="Jane Doe"
          role="Product Designer"
          avatarUrl="https://i.pravatar.cc/150?img=47"
        />
        
        <UserCard
          name="John Smith"
          role="Software Engineer"
          avatarUrl="https://i.pravatar.cc/150?img=11"
        />
      </Box>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" gutterBottom>Usage Code</Typography>
      <CodeBlock code={codeExample} />
    </Box>
  );
}
