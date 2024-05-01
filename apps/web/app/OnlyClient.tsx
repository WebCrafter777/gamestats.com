"use client";
import React, { useEffect, useState } from "react";
import { useDarkMode } from "./hooks/useDarkMode";
import { SessionProvider } from "next-auth/react";

interface Props {
  children: React.ReactNode;
}

export const OnlyClient = ({ children }: Props) => {
  const [hasMounted, setHasMounted] = useState<boolean>(false);
  const {setIsDarkMode} = useDarkMode()
  useEffect(() => {
    setHasMounted(true);
  }, []);
  const updateTheme = (darkMode: boolean) => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    
    if (savedDarkMode !== null) {
      setIsDarkMode(savedDarkMode === "true");
      updateTheme(savedDarkMode === "true");
    }
  }, []);
  if (!hasMounted) {
    return null;
  }
  return <SessionProvider>{children}</SessionProvider>;
};
