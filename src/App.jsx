import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ContactOne from "./components/ContactOne";
import ContactTwo from "./components/ContactTwo";
import Footer from "./components/Footer";
import messagesData from "./data/messages.js";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [messages, setMessages] = useState(messagesData);
  const [isSoundEnabled, setIsSoundEnabled] = useState(false);
  return (
    <>
      <Header
        isSoundEnabled={isSoundEnabled}
        setIsSoundEnabled={setIsSoundEnabled}
        isDark={isDark}
        setIsDark={setIsDark}
      />
      <main className="py-4 flex md:flex-row flex-col items-center gap-5 md:gap-0 md:justify-around">
        <ContactOne
          isSoundEnabled={isSoundEnabled}
          messages={messages}
          setMessages={setMessages}
        />
        <ContactTwo
          isSoundEnabled={isSoundEnabled}
          messages={messages}
          setMessages={setMessages}
        />
      </main>
      {/* <Footer/> */}
    </>
  );
}

export default App;
