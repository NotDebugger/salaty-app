"use client";
import { useState, createContext } from "react";

interface Location {
  name: string;
  country: string;
}
interface LocationData {
  results: Location[];
  setResults: React.Dispatch<React.SetStateAction<Location[]>>;
}

export const LocationDataContext = createContext<LocationData | null>(null);

export default function LocationDataProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [results, setResults] = useState<Location[]>([]);

  return (
    <LocationDataContext.Provider value={{ results, setResults }}>
      {children}
    </LocationDataContext.Provider>
  );
}
