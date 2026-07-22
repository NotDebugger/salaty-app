"use client";
import { useContext } from "react";
import { SelectedCityContext } from "../contexts/SelectedCityProvider";

export function useSelectedCity() {
  const context = useContext(SelectedCityContext);
  if (!context) {
    throw new Error("Navbar must be inside CityProvider");
  }
  return context;
}
