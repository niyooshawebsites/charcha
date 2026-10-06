"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import React from "react";

const ThemeRegistry = ({ children }: { children: React.ReactNode }) => {
  return <AppRouterCacheProvider>{children}</AppRouterCacheProvider>;
};

export default ThemeRegistry;
