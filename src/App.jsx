import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ContactOne from "./components/ContactOne";
import ContactTwo from "./components/ContactTwo";
import Footer from "./components/Footer";
// import messagesData from "./data/messages.js";

function App() {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDark")) || false
  );
  const [messages, setMessages] = useState(
    JSON.parse(localStorage.getItem("messagesData")) || []
  );
  const [isSoundEnabled, setIsSoundEnabled] = useState(false);
  return (
    <>
      <Header
        isSoundEnabled={isSoundEnabled}
        setIsSoundEnabled={setIsSoundEnabled}
        isDark={isDark}
        setIsDark={setIsDark}
      />
      <main
        className={`py-4 transition-all ${
          isDark ? "bg-[#23272f] yes" : "no"
        } flex pt-8 pb-8 md:flex-row flex-col items-center gap-5 md:gap-0 md:justify-around`}
      >
        <ContactOne
          isSoundEnabled={isSoundEnabled}
          messages={messages}
          setMessages={setMessages}
          isDark={isDark}
        />
        <ContactTwo
          isSoundEnabled={isSoundEnabled}
          messages={messages}
          setMessages={setMessages}
          isDark={isDark}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
