import React from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

const Header = ({ isDark, setIsDark }) => {
  return (
    <header className="bg-[#ff3e00] text-white mb-4 py-2 px-2 sm:px-10 md:px-12 lg:px-16 flex justify-between items-center">
      <h1 className="font-bold text-3xl select-none flex justify-start items-end">
        <span className="text-5xl">C</span>ommune
      </h1>
      <button className="cursor-pointer p-2 hover:bg-[#ffffff46] transition-all rounded-full">
        {isDark ? (
          <SunIcon className="w-7 h-7" title="light theme" />
        ) : (
          <MoonIcon className="w-7 h-7" title="dark theme" />
        )}
      </button>
    </header>
  );
};

export default Header;
