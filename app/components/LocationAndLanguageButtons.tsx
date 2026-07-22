"use client";
// HOOKS ==========
import { useQuery } from "../hooks/useQuery";
import { useLanguage } from "../hooks/useLanguage";
import { useSelectedCity } from "../hooks/useSelectedCity";
import { useState } from "react";
// COMPONENTS ==========
import SuggestedCities from "./SuggestedCities";

export default function LocationAndLanguageButtons() {
  const { setQuery } = useQuery();
  const { selectedCity, setSelectedCity } = useSelectedCity();
  const { lan, setLan } = useLanguage();
  const [open, setOpen] = useState(false);
  const yourLocation: string = lan === "ar" ? "موقعك الحالى" : "Your Location";

  const languageClass = (l: "ar" | "en") =>
    `${lan === l && "bg-secondary text-primary"} rounded-full py-0.5 px-2 transition duration-300`;

  return (
    <>
      <button
        className="w-fit h-5 py-4 px-1 text-sm flex justify-center items-center border hover:cursor-pointer hover:bg-secondary/40 transition border-secondary rounded-full"
        onClick={() => {
          setSelectedCity({ name: "", country: "" });
          if (lan === "ar") setLan("en");
          else setLan("ar");
        }}
      >
        <span className={languageClass("en")}>EN</span>
        <span className={languageClass("ar")}>عربى</span>
      </button>
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
          {selectedCity.name.length > 0 ? selectedCity.name : yourLocation}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="15px"
            viewBox="0 -960 960 960"
            width="15px"
            fill="#c9a227"
          >
            <path d="M531-501q21-21 21-51t-21-51q-21-21-51-21t-51 21q-21 21-21 51t21 51q21 21 51 21t51-21Zm-51 310q119-107 179.5-197T720-549q0-105-68.5-174T480-792q-103 0-171.5 69T240-549q0 71 60.5 161T480-191Zm0 95Q323-227 245.5-339.5T168-549q0-134 89-224.5T480-864q133 0 222.5 90.5T792-549q0 97-77 209T480-96Zm0-456Z" />
          </svg>
        </button>
        {open && (
          <div className="absolute top-12 right-0 bg-surface p-2 rounded-3xl shadow shadow-white/10">
            <input
              className="px-2 py-1 outline-none w-56 rounded-full bg-[#122035]"
              type="text"
              placeholder="Search..."
              onChange={(e) => setQuery(e.target.value)}
            />
            <SuggestedCities lan={lan} setOpen={setOpen} />
          </div>
        )}
      </div>
    </>
  );
}
