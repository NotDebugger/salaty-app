"use client";

import { createContext, useState } from "react";
import { Query } from "../types/query";

export const QueryContext = createContext<Query | null>(null);

export default function QueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [query, setQuery] = useState<string>("");

  return (
    <QueryContext.Provider value={{ query, setQuery }}>
      {children}
    </QueryContext.Provider>
  );
}
