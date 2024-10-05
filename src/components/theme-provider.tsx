"use client";
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import ThemeToggle from "./theme";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = React.useState(false);
  const [isThemeLoaded, setIsThemeLoaded] = React.useState(false);
  console.log({ isThemeLoaded });

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <NextThemesProvider {...props}>
      {isThemeLoaded ? children : null}

      <ThemeToggle onThemeLoad={setIsThemeLoaded} />
    </NextThemesProvider>
  );
}
