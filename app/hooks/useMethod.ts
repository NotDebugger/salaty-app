"use client";
import { useContext } from "react";
import { MethodContext } from "../contexts/MethodProvider";

export function useMethod() {
  const context = useContext(MethodContext);
  if (!context) {
    throw new Error("Navbar must be inside MethodProvider");
  }
  return context;
}
