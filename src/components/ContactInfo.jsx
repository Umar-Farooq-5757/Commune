import React from "react";
import {
  ArrowLeftIcon,
  UserCircleIcon,
  VideoCameraIcon,
  PhoneIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/outline";

const ContactInfo = ({ contactName, contactImageSrc,isDark }) => {
  return (
    <div className={`${isDark?'bg-[#1c1f26] text-white':'bg-white text-black'} flex items-center justify-between shadow-xs shadow-gray-700 px-2 py-1`}>
      <div className="flex items-center justify-center gap-1">
        <ArrowLeftIcon className="w-5 h-5" />
        <div className="flex items-center select-none px-1 py-1 pr-2 hover:bg-slate-200 justify-center gap-2">
          {contactImageSrc ? (
            <img className="w-7 h-7 rounded-full" src={contactImageSrc} alt="Profile picture" />
          ) : (
            <UserCircleIcon className="w-7 h-7" />
          )}
          <span className="font-semibold">{contactName}</span>
        </div>
      </div>
      <div className="flex items-center justify-center gap-1">
        <button className="p-2 hover:bg-slate-200 rounded-full"><VideoCameraIcon className="w-[22px] h-[22px] " /></button>
        <button className="p-2 hover:bg-slate-200 rounded-full"><PhoneIcon className="w-5 h-5" /></button>
        <button className="p-2 hover:bg-slate-200 rounded-full"><EllipsisVerticalIcon className="w-[22px] h-[22px]" /></button>
      </div>
    </div>
  );
};

export default ContactInfo;
