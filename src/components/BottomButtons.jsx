import React from "react";
// import { ArrowUturnLeftIcon } from "@heroicons/react/16/outline";

const BottomButtons = () => {
  return (
    <div className="bg-white flex items-center justify-around py-1">
      <button className="hover:bg-gray-300 rounded-2xl transition-all px-5 py-1">
        <svg
        width="15"
        height="15"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="5"
          y="5"
          width="90"
          height="90"
          fill="none"
          stroke="black"
          strokeWidth="9"
        />
      </svg>
      </button>
      <button className="hover:bg-gray-300 rounded-2xl transition-all px-5 py-1">
        <svg
        width="18"
        height="18"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="black"
          strokeWidth="9"
        />
      </svg>
      </button>
      <button className="hover:bg-gray-300 rounded-2xl transition-all px-5 py-1">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
  <path fillRule="evenodd" d="M7.793 2.232a.75.75 0 0 1-.025 1.06L3.622 7.25h10.003a5.375 5.375 0 0 1 0 10.75H10.75a.75.75 0 0 1 0-1.5h2.875a3.875 3.875 0 0 0 0-7.75H3.622l4.146 3.957a.75.75 0 0 1-1.036 1.085l-5.5-5.25a.75.75 0 0 1 0-1.085l5.5-5.25a.75.75 0 0 1 1.06.025Z" clipRule="evenodd" />
</svg>

      </button>
    </div>
  );
};

export default BottomButtons;
