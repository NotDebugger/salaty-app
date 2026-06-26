"use client";
import { useState } from "react";
import { useQuery } from "../hooks/useQuery";
import { useLocationData } from "../hooks/useLocationData";

export default function Navbar() {
  const { setQuery } = useQuery();
  const [lan, setLan] = useState<"ar" | "en">("ar");

  console.log(useLocationData(lan));
  return (
    <div className="h-20 text-white bg-[#070b1a] border-b border-white/10">
      <div>
        <span>10 محرم 1448 هـ</span>
        <span>الخميس</span>
      </div>
      <div>
        <button
          className="w-5 h-5"
          onClick={() => (lan === "ar" ? setLan("en") : setLan("ar"))}
        >
          en
        </button>
      </div>
      <div>
        <input type="text" onChange={(e) => setQuery(e.target.value)} />
      </div>
      <div>
        <span>صلاتى</span>
        <span>Salaty</span>
      </div>
    </div>
  );
}
