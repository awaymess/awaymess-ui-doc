import type { NextConfig } from "next";
import path from "node:path";

const localNodeModules = (packageName: string) =>
  path.join(process.cwd(), "node_modules", packageName);

const packageAliases = {
  "@awaymess/ui": path.join(process.cwd(), "src/local-awaymess-ui.ts"),
  react: localNodeModules("react"),
  "react-dom": localNodeModules("react-dom"),
  "@emotion/react": localNodeModules("@emotion/react"),
  "@emotion/styled": localNodeModules("@emotion/styled"),
  "@mui/material": localNodeModules("@mui/material"),
  "@mui/icons-material": localNodeModules("@mui/icons-material"),
  "@mui/x-date-pickers": localNodeModules("@mui/x-date-pickers"),
};

const nextConfig: NextConfig = {
  experimental: {
    externalDir: true,
  },
  webpack: (config) => {
    config.resolve.symlinks = false;
    config.resolve.alias = {
      ...config.resolve.alias,
      ...packageAliases,
    };

    return config;
  },
};

export default nextConfig;
