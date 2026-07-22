"use client";
import { useState, useEffect } from "react";

export function useCurrentLocation() {
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => console.log(error.message),
    );
  }, []);

  if (!navigator.geolocation) {
    console.log("Geolocation not supported");
    return;
  }

  return location;
}
