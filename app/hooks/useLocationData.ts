"use client";
import { useQuery } from "./useQuery";
import { useEffect, useContext, useRef } from "react";
import { LocationDataContext } from "../contexts/LocationDataProvider";

export function useLocationData(lan: "ar" | "en") {
  const { query } = useQuery();
  const context = useContext(LocationDataContext);

  if (!context) throw new Error("Error in Location Context");
  const { results, setResults } = context;

  const controllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    async function search() {
      controllerRef.current?.abort();
      controllerRef.current = new AbortController();

      try {
        const res = await fetch(
          `https://geocoding-api.open-meteo.com/v1/search?name=${query}&language=${lan}`,
          {
            signal: controllerRef.current.signal,
          },
        );
        const data = await res.json();
        setResults(data.results ?? []);
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") {
          console.log("Request aborted");
        } else {
          console.log(error);
        }
      }
    }

    search();

    return () => {
      controllerRef.current?.abort();
    };
  }, [lan, query, setResults]);

  const cities = results?.map((c) => {
    return { name: c.name, country: c.country };
  });

  return { cities, setResults };
}
