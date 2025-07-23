import React from "react";
import { createPortal } from "react-dom";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

const Settings = ({
  areSettingsOpen,
  setAreSettingsOpen,
  isDark,
  setIsDark,
}) => {
  return createPortal(
    <div
      onClick={() => setAreSettingsOpen(false)}
      className={`fixed top-0 bottom-0 left-0 right-0 bg-black/20 ${
        areSettingsOpen ? "" : "hidden"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="absolute border border-gray-300 right-20 top-12 bg-white text-[#ff3e00] shadow-2xl text-sm font-semibold p-2 h-48 w-64 rounded-md"
      >
        <div className="theme my-2 transition-all hover:bg-black/10 select-none rounded-lg px-3 py-1 flex items-center justify-between">
          <span>Theme</span>
          <button className="text-black cursor-pointer">
            {isDark ? (
              <SunIcon className="size-7" title="light theme" />
            ) : (
              <MoonIcon className="size-7" title="dark theme" />
            )}
          </button>
        </div>
        <div className="notifications my-2 transition-all hover:bg-black/10 select-none rounded-lg px-3 py-2 flex items-center justify-between">
          <span>Notification Sound</span>
          <button className="text-black ">
            <label className="relative flex h-[18px] w-[40px] cursor-pointer items-center justify-center rounded-full bg-zinc-700 transition-colors duration-200">
              <input type="checkbox" id="checkboxInput" className="peer hidden" />
              <span className="absolute left-[3px] size-[14px] rounded-full border-4 peer-checked:border-[#ff3e00] border-white bg-white shadow-[5px_2px_7px_0px_rgba(8,8,8,0.26)] transition-all duration-200 peer-checked:bg-[#ff3e00] peer-checked:translate-x-[19px]"></span>
            </label>
          </button>
        </div>
      </div>
    </div>,
    document.querySelector("#portal")
  );
};

export default Settings;
