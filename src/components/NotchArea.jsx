import React from "react";
import { GiNetworkBars } from "react-icons/gi";
import { WifiIcon, Battery50Icon } from "@heroicons/react/24/outline";
import getTime from '../hooks/useTime.js'

const NotchArea = () => {
  const {hours,minutes,amOrPm} = getTime()

  return (
    <div className="text-gray-200 flex justify-between items-center bg-black px-4 md:px-6 py-[2px]">
      <span className="text-sm">
        {hours}:{minutes} <span className="text-[10px]">{amOrPm}</span>
      </span>
      <div className="flex justify-center items-center gap-1">
        <WifiIcon className="w-[18px] h-[18px]" />
        <GiNetworkBars className="w-[16px] h-[16px]" />
        <GiNetworkBars className="w-[16px] h-[16px]" />
        <div className="flex justify-center items-center gap-1">
          <span className="text-sm">57</span>
          <Battery50Icon className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default NotchArea;
