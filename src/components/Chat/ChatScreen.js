import React, { useState } from "react";
import "./chatscreen.css";
import { Avatar } from "@material-ui/core";

const ChatScreen = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { name: "Jeff", image: "...", message: "whats up" },
    { name: "Jeff", image: "...", message: "Hows It Going" },
    { message: "whats up" },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };
  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        YOU MATCHED WITH jeff ON 10/20/200
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__message"
              alt={message.name}
              src={message.image}
            />
            <p>{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="user">{message.message}</p>
          </div>
        )
      )}
      <form className="chatScreen__input" action="">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Type a message"
        />
        <button onClick={handleSend} type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatScreen;
