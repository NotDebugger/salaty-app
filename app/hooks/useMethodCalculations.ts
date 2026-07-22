"use client";
import { useEffect, useState } from "react";

export function useMethodCalculations() {
  const [methods, setMethods] = useState<
    {
      id: number;
      name: string;
    }[]
  >([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("https://api.aladhan.com/v1/methods", {
          next: {
            revalidate: 86400,
          },
        });
        const result = await response.json();
        const keys = ["MWL", "ISNA", "EGYPT", "MAKKAH"];

        const data = keys.map((key) => ({
          id: result.data[key].id,
          name: result.data[key].name,
        }));

        setMethods(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return methods;
}
