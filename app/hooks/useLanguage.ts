"use client";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageProvider";

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("Navbar must be inside LanguageProvider");

  return context;
}
