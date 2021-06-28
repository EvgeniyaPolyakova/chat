import React, { useEffect } from "react";
import Navigation from "../navigation";
import s from "./app.module.scss";
import Aside from "../aside";
import Messenger from "../messenger/messenger";
import { io } from "socket.io-client";

export const socket = io("http://localhost:3001");

const App = () => {
  useEffect(() => {
    socket.on("connected", (messageSocket) => {
      console.log("handle connected: ", messageSocket);
    });

    socket.on("disconnect", (data) => {
      console.log("disconnect ", data);
    });
  },[]);

  return (
    <div className={s.app}>
      <Aside />
      <Navigation />
      <Messenger />
    </div>
  );
};

export default App;
