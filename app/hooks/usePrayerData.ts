"use client";
import { useSelectedCity } from "./useSelectedCity";
import { useEffect, useState } from "react";
import { useCurrentLocation } from "./useCurrentLocation";
import { useMethod } from "./useMethod";

export function UsePrayerData() {
  const date = new Date();
  const nowFormattedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  const { selectedCity } = useSelectedCity();
  const [prayerData, setPrayerData] = useState({});
  const location = useCurrentLocation();
  const { method } = useMethod();

  useEffect(() => {
    const dataFetching = () => {
      if (selectedCity.name.length === 0)
        return fetch(
          `https://api.aladhan.com/v1/timings/26-6-2026?latitude=${location?.latitude}&longitude=${location?.longitude}&method=${method}`,
        );

      return fetch(
        `https://api.aladhan.com/v1/timingsByCity/${nowFormattedDate}?city=${selectedCity.name}&country=${selectedCity.country}&method=${method}`,
      );
    };
    dataFetching()
      .then((res) => res.json())
      .then((result) => setPrayerData(result.data));
  }, [
    location?.latitude,
    location?.longitude,
    method,
    nowFormattedDate,
    selectedCity,
    selectedCity.country,
    selectedCity.name,
  ]);

  return prayerData;
}
