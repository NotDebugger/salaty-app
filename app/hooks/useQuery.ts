"use client";
import { useContext } from "react";
import { QueryContext } from "../contexts/QueryProvider";

export function useQuery() {
  const context = useContext(QueryContext);
  if (!context) {
    throw new Error("Navbar must be inside QueryProvider");
  }
  return context;
}
