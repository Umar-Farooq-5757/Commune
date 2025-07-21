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

  return (
    <>
      <Header isDark={isDark} setIsDark={setIsDark} />
      <main className="mt-1 pl-4 flex justify-around">
        <ContactOne messages={messages} setMessages={setMessages} />
        <ContactTwo messages={messages} setMessages={setMessages} />
      </main>
      {/* <Footer/> */}
    </>
  );
}

export default App;
