import React, { useState } from "react";
import ChatIcon from "../../assets/Image/Chatbot.png";
import ChatWindow from "./ChatWindow";
function ChatComponent() {
  const [isChatVisible, setIsChatVisible] = useState(false);

  const handleIconClick = () => {
    setIsChatVisible(!isChatVisible);
  };

  return (
    <div>
      <img
        src={ChatIcon}
        alt="Chat"
        onClick={handleIconClick}
        className="fixed cursor-pointer w-14 h-14 right-7 bottom-7"
      />
      {isChatVisible && (
        <div className="chat-window">
          <ChatWindow />
        </div>
      )}
    </div>
  );
}

export default ChatComponent;
