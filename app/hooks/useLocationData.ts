"use client";
import { useQuery } from "./useQuery";
import { useEffect, useContext } from "react";
import { LocationDataContext } from "../contexts/LocationDataProvider";

export function useLocationData(lan: "ar" | "en") {
  const { query } = useQuery();
  const context = useContext(LocationDataContext);

  if (!context) throw new Error("Error in Location Context");
  const { results, setResults } = context;

  useEffect(() => {
    fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${query}&language=${lan}`,
    )
      .then((res) => res.json())
      .then((data) => setResults(data.results));
  }, [lan, query, setResults]);

  const data = results?.map((c) => {
    return { name: c.name, country: c.country };
  });

  return data;
}
