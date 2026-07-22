"use client";
import { createContext, useState } from "react";

export const LanguageContext = createContext<{
  lan: "ar" | "en";
  setLan: React.Dispatch<React.SetStateAction<"ar" | "en">>;
} | null>(null);

export default function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lan, setLan] = useState<"ar" | "en">("ar");

  return (
    <LanguageContext.Provider value={{ lan, setLan }}>
      {children}
    </LanguageContext.Provider>
  );
}
