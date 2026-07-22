"use client";

import { useMethodCalculations } from "../hooks/useMethodCalculations";
import { useMethod } from "../hooks/useMethod";

export default function PrayerMethods() {
  const methods = useMethodCalculations();

  const { setMethod } = useMethod();

  return (
    <ul className="absolute top-14 w-70 right-0 bg-surface rounded-3xl shadow shadow-white/10">
      {methods?.map((method, i) => (
        <li
          className={`flex justify-between px-3 py-2 hover:cursor-pointer hover:bg-secondary/15 ${i === 0 && "rounded-t-3xl"} ${i === 3 && "rounded-b-3xl"}`}
          key={method.id}
          onClick={() => setMethod(method.id)}
        >
          {method.name}
        </li>
      ))}
    </ul>
  );
}
