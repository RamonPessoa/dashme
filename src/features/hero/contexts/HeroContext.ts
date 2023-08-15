'use client'
import { useContext, createContext } from "react";

export const HeroContext = createContext<{
  title: string;
  slogan: string;
} | null>(null);

export function useHeroContext() {
  const context = useContext(HeroContext);
  if (!context) {
    throw new Error("useHeroContext must be used within a HeroContext");
  }
  return context;
}
