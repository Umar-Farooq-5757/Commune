import React from "react";
import { useState, useRef, useEffect } from "react";
import NotchArea from "./NotchArea";
import BottomButtons from "./BottomButtons";
import ContactInfo from "./ContactInfo";
import {
  PaperClipIcon,
  CameraIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import { format } from "date-fns";

const ContactTwo = ({ messages, setMessages }) => {
  const [messageFromContactTwo, setMessageFromContactTwo] = useState("");
  const messagesRef = useRef(null);
  const myDate = new Date();

  const handleSend = () => {
    if (messageFromContactTwo.trim()) {
      setMessages([
        ...messages,
        { message: messageFromContactTwo.trim(), from: "contacttwo" },
      ]);
      setMessageFromContactTwo("");
    }
  };
  const handleKeyDown = (e) => {
    if (e.key == "Enter") {
      handleSend();
    }
  };

  useEffect(() => {
    const el = messagesRef.current;
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  }, [messages]);

  return (
    <section className="w-[400px] overflow-hidden relative rounded-3xl h-[750px] border-4 outline-4 border-gray-500 outline-[#0022ff]">
      <NotchArea />
      {/* <div className="chatting bg-[#fcefe2] h-full"> */}
      <ContactInfo contactName={"Contact Two"} />
      <div
        ref={messagesRef}
        className="messages absolute overflow-y-auto px-2 pb-12 top-[75px] bottom-0 flex flex-col h-full max-h-[630px]"
      >
        <div className="date bg-white w-fit mx-auto font-semibold rounded-lg shadow-xl text-xs py-1 px-2 my-1">
          {format(myDate, "MMMM d, yyyy")}
        </div>
        {messages.map((message, i) => {
          return message.from == "contacttwo" ? (
            <p
              key={i}
              className="text-white contact-one rounded-lg self-end py-2 px-2 leading-5 my-1 bg-[#ff3e00] w-[66%]"
            >
              {message.message}
            </p>
          ) : (
            <p
              key={i}
              className="text-black contact-two rounded-lg py-2 px-2 leading-5 my-1 bg-white w-[66%]"
            >
              {message.message}
            </p>
          );
        })}
        {/* </div> */}
      </div>
      <div className="absolute bottom-10 left-1 right-1 flex items-center">
        <input
          type="text"
          onKeyDown={handleKeyDown}
          value={messageFromContactTwo}
          onChange={(e) => setMessageFromContactTwo(e.target.value)}
          placeholder="Message"
          className="bg-white outline-none border border-gray-400 rounded-3xl w-full shadow-2xl pr-24 pl-5 py-[7px]"
        />
        <PaperClipIcon className="w-6 h-6 absolute right-[55px] cursor-pointer" />
        <CameraIcon className="w-6 h-6 absolute right-[85px] cursor-pointer" />
        <button
          onClick={handleSend}
          className="bg-[#ff3e00] mx-1 hover:bg-[#dd3700] rounded-full p-[6px]"
        >
          <PaperAirplaneIcon className="w-6 h-6  text-white" />
        </button>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <BottomButtons />
      </div>
    </section>
  );
};

export default ContactTwo;
