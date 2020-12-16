import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

const Chat = ({ name, message, profilepic, timestamp }) => {
  return (
    <Link to={`/chat/${name}`}>
      <div className="chat">
        <Avatar className="chat__image" alt="avatar" />
        <div className="chat__details">
          <h2>{name}</h2>
          <p>{message}</p>
        </div>
        <p className="timestamp">{timestamp}</p>
      </div>
    </Link>
  );
};

export default Chat;
