import React from "react";
import { useState } from "react";
import NotchArea from "./NotchArea";
import BottomButtons from "./BottomButtons";
import ContactInfo from "./ContactInfo";
import { PaperClipIcon, CameraIcon } from "@heroicons/react/24/outline";
import messagesData from "../data/messages.js";

const ContactOne = () => {
  const [messages, setMessages] = useState(messagesData);
  return (
    <section className="w-[400px] relative rounded-3xl overflow-hidden h-[750px] border-4 outline-4 border-gray-500 outline-[#0022ff]">
      <NotchArea />
      <div className="chatting bg-[#fcefe2] h-full">
        <ContactInfo contactName={"Contact One"} />
        <div className="messages px-1 pb-40 flex flex-col justify-end h-full">
          {messages.map((message) => {
            return message.from == "contactone" ? (
              <p className="text-white rounded-lg self-end py-3 px-2 leading-4 my-1 bg-[#ff3e00] w-[66%]">
                {message.message}
              </p>
            ) : (
              <p className="text-black rounded-lg py-3 px-2 leading-4 my-1 bg-white w-[66%]">
                {message.message}
              </p>
            );
          })}
        </div>
        <div className="absolute bottom-10 left-1 right-1 flex items-center">
          <input
            type="text"
            placeholder="Message"
            className="bg-white outline-none border border-gray-400 rounded-3xl w-full shadow-2xl pr-24 pl-5 py-2"
          />
          <PaperClipIcon className="w-6 h-6 absolute right-3 cursor-pointer" />
          <CameraIcon className="w-6 h-6 absolute right-12 cursor-pointer" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <BottomButtons />
      </div>
    </section>
  );
};

export default ContactOne;
