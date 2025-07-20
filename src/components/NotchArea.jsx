import React from "react";
import { useState,useEffect } from "react";
import { GiNetworkBars } from "react-icons/gi";
import {
  WifiIcon,
  Battery50Icon,
  ArrowUturnLeftIcon,
} from "@heroicons/react/24/outline";

const NotchArea = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000); // Update every second

    return () => {
      clearInterval(timerId);
    };
  }, []);
  let hours = time.getHours() % 12; // to get time in 12 hour format
  hours = hours == 0 ? 12 : hours; // set hour to 12 if 0
  let minutes = time.getMinutes();
  minutes = minutes<10?`0${minutes}`:minutes;
  return (
    <div className="text-gray-200 flex justify-between items-center bg-black px-6 py-[2px]">
      <span>
        {hours}:{minutes}
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
