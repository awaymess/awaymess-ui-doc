"use client";

import React, { createContext, useContext, useState, useMemo } from "react";
import { LibThemeProvider } from "@awaymess/ui";

interface ThemeModeContextType {
  mode: "light" | "dark";
  toggleColorMode: () => void;
}

const ThemeModeContext = createContext<ThemeModeContextType>({
  mode: "light",
  toggleColorMode: () => {},
});

export const useThemeMode = () => useContext(ThemeModeContext);

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const colorMode = useMemo(
    () => ({
      mode,
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    [mode]
  );

  return (
    <ThemeModeContext.Provider value={colorMode}>
      <LibThemeProvider mode={mode}>{children}</LibThemeProvider>
    </ThemeModeContext.Provider>
  );
}
