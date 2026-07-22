// COMPONENTS ==========
import PrayerMethods from "./PrayerMethods";
import LocationAndLanguageButtons from "./LocationAndLanguageButtons";
import MethodsDropdown from "./MethodsDropdown";
// Image ======
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="h-16 w-2/3 mt-5 mx-auto rounded-full text-primary bg-[#7a8fa8]/5 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] shadow-white/10 flex px-16 justify-between items-center">
      <div className="flex flex-col">
        <span>10 محرم 1448 هـ</span>
        <span className="self-end text-[#7a8fa8]">الخميس</span>
      </div>
      <div className="flex items-center gap-2">
        <LocationAndLanguageButtons />
        <MethodsDropdown>
          <PrayerMethods />
        </MethodsDropdown>
      </div>
      <div className="flex gap-3">
        <div className="flex flex-col">
          <span>صلاتى</span>
          <span className="text-[#7a8fa8]">SALATY</span>
        </div>
        <Image
          className="self-center saturate-150"
          src="/moon5.png"
          alt="Moon Icon"
          width={30}
          height={20}
        />
      </div>
    </div>
  );
}
