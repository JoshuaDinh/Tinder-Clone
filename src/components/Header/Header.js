import React from "react";
import "./header.css";
import { Link, useHistory } from "react-router-dom";
import Person from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";

function Header({ backButton }) {
  const history = useHistory();
  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIosIcon fontSize="large" className="icon" />
        </IconButton>
      ) : (
        <IconButton>
          <Person fontSize="large" className="icon" />
        </IconButton>
      )}

      <Link to="/home">
        <img
          src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
          alt="logo"
        />
      </Link>
      <Link to="/chat">
        <IconButton>
          <ChatBubbleIcon fontSize="large" className="icon" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
