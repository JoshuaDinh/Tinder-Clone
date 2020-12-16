import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import Chats from "./components/Chat/Chats";
import TinderCards from "./components/Tinder/TinderCards";
import SwipeButtons from "./components/SwipeButtons/SwipeButtons";
import Chat from "./components/Chat/Chat";
import ChatScreen from "./components/Chat/ChatScreen";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chat/:person">
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>
          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
