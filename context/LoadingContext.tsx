// context/LoadingContext.tsx
"use client";

import { createContext } from "react";

export const LoadingContext = createContext({
  isBackgroundVisible: false,
});