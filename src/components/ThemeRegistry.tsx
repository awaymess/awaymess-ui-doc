"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
} from "react";
import { LibThemeProvider } from "@awaymess/ui";
import { GlobalStyles, useTheme } from "@mui/material";

interface ThemeModeContextType {
  mode: "light" | "dark";
  toggleColorMode: () => void;
}

const ThemeModeContext = createContext<ThemeModeContextType>({
  mode: "light",
  toggleColorMode: () => {},
});

export const useThemeMode = () => useContext(ThemeModeContext);

function DocumentThemeSync() {
  const theme = useTheme();

  useEffect(() => {
    const { background, text, mode } = theme.palette;

    document.documentElement.style.backgroundColor = background.default;
    document.documentElement.style.color = text.primary;
    document.documentElement.style.colorScheme = mode;
    document.body.style.backgroundColor = background.default;
    document.body.style.color = text.primary;
  }, [theme]);

  return null;
}

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
      <LibThemeProvider mode={mode}>
        <DocumentThemeSync />
        <GlobalStyles
          styles={(theme) => ({
            html: {
              minHeight: "100%",
              backgroundColor: theme.palette.background.default,
              color: theme.palette.text.primary,
              colorScheme: theme.palette.mode,
            },
            body: {
              minHeight: "100%",
              backgroundColor: theme.palette.background.default,
              color: theme.palette.text.primary,
            },
          })}
        />
        {children}
      </LibThemeProvider>
    </ThemeModeContext.Provider>
  );
}
