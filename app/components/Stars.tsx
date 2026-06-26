"use client";

import { useState } from "react";

export default function Stars() {
  const [stars] = useState(() =>
    Array.from({ length: 50 }).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() > 0.6 ? 2 : 1,
    })),
  );

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {stars.map((star, i) => (
        <span
          key={i}
          className="absolute bg-white rounded-full opacity-40 animate-pulse"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
        />
      ))}
    </div>
  );
}
