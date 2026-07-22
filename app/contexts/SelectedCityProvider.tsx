"use client";

import React, { createContext, useState } from "react";
import { City } from "../types/city";

export const SelectedCityContext = createContext<City | null>(null);

export default function SelectedCityProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [selectedCity, setSelectedCity] = useState<{
    name: string;
    country: string;
  }>({
    name: "",
    country: "",
  });

  return (
    <SelectedCityContext.Provider value={{ selectedCity, setSelectedCity }}>
      {children}
    </SelectedCityContext.Provider>
  );
}
