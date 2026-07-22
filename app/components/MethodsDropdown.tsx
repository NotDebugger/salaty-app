"use client";
import { useState } from "react";
import { useLanguage } from "../hooks/useLanguage";

export default function MethodsDropdown({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const { lan } = useLanguage();

  return (
    <div className="relative">
      <button
        className="flex justify-center items-center gap-1 py-1 px-2 border hover:cursor-pointer hover:bg-secondary/40 transition border-secondary rounded-full"
        onClick={() => setOpen(!open)}
      >
        <svg
          className={`-rotate-90 transition ${open && "rotate-90"}`}
          xmlns="http://www.w3.org/2000/svg"
          height="10px"
          viewBox="0 -960 960 960"
          width="10px"
          fill="#c9a227"
        >
          <path d="M624-96 240-480l384-384 68 68-316 316 316 316-68 68Z" />
        </svg>
        {lan === "ar" ? "حسـاب الـمـواقـيـت" : "Method Calculations"}
      </button>
      {open && children}
    </div>
  );
}
