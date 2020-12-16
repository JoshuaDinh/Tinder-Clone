import React from "react";
import "./chat.css";
import Chat from "./Chat.js";

const Chats = () => {
  return (
    <div className="chats">
      <Chat
        name="Mark"
        message="Yo whats Up"
        timestamp="40 seconds ago"
        profilepic="..."
      />
      <Chat
        name="Jeff"
        message="Want to sign up for amazon"
        timestamp="30 seconds ago"
        profilepic="..."
      />
      <Chat
        name="Elon"
        message="Hip"
        timestamp="10 seconds ago"
        profilepic="..."
      />
    </div>
  );
};

export default Chats;
