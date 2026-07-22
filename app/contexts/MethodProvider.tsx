"use client";

import { createContext, useState } from "react";
import { Method } from "../types/method";

export const MethodContext = createContext<Method | null>(null);

export default function MethodProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [method, setMethod] = useState<number>(5);

  return (
    <MethodContext.Provider value={{ method, setMethod }}>
      {children}
    </MethodContext.Provider>
  );
}
