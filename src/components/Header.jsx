import React from "react";
import { useState } from "react";
import Settings from "../Modals/Settings";
import { GoGear } from "react-icons/go";

const Header = ({ isDark, setIsDark, isSoundEnabled, setIsSoundEnabled }) => {
  const [areSettingsOpen, setAreSettingsOpen] = useState(false);

  return (
    <header className="bg-[#ff3e00] text-white mb-0 py-2 px-2 sm:px-10 md:px-12 lg:px-16 flex justify-between items-center">
      <h1 className="font-bold text-3xl select-none flex justify-start items-end">
        <span className="text-5xl">C</span>ommune
      </h1>
      <button
        onClick={() => setAreSettingsOpen(true)}
        className="cursor-pointer p-2 hover:bg-[#ffffff46] transition-all rounded-full"
      >
        <GoGear className="size-7" />
      </button>
      <Settings
        isSoundEnabled={isSoundEnabled}
        setIsSoundEnabled={setIsSoundEnabled}
        isDark={isDark}
        setIsDark={setIsDark}
        areSettingsOpen={areSettingsOpen}
        setAreSettingsOpen={setAreSettingsOpen}
      />
    </header>
  );
};

export default Header;