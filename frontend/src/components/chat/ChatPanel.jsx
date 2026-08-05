import { useState } from "react";
import ChatInput from "./ChatInput";
import ChatMessages from "./ChatMessages";

export default function ChatPanel() {
    const [messages, setMessages] = useState([]);

  return (

    <div className="w-full max-w-md border-l border-slate-800 flex flex-col">

      <ChatMessages messages={messages} />

      <ChatInput
        messages={messages}
        setMessages={setMessages}
      />

    </div>
  );
}