import { useLocationData } from "../hooks/useLocationData";
import { useSelectedCity } from "../hooks/useSelectedCity";
import { useQuery } from "../hooks/useQuery";
import { Almarai } from "next/font/google";

const almarai = Almarai({
  weight: "300",
  subsets: ["arabic"],
});

export default function SuggestedCities({
  lan,
  setOpen,
}: {
  lan: "ar" | "en";
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { cities, setResults } = useLocationData(lan);
  const { setSelectedCity } = useSelectedCity();
  const { setQuery } = useQuery();

  return (
    <div
      className={`absolute top-14 w-59 right-0 bg-surface rounded-3xl shadow shadow-white/10`}
    >
      <ul>
        {cities?.slice(0, 6).map((city, i) => {
          return (
            <li
              className={`flex justify-between px-3 py-2 hover:cursor-pointer hover:bg-secondary/15 ${i === 0 && "rounded-t-3xl"} ${i === 5 && "rounded-b-3xl"}`}
              key={`${city.name}-${city.country}`}
              onClick={() => {
                setSelectedCity({ name: city.name, country: city.country });
                setOpen(false);
                setQuery("");
                setResults([]);
              }}
            >
              <span className="text-[#e8d9b8]">{city.name}</span>
              <span className={`${almarai.className} text-sm text-muted`}>
                {city.country}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
