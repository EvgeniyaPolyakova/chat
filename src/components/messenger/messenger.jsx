import React, { useEffect, useState } from "react";
import MessengerForm from "../messenger-form/messenger-form";
import s from "./messenger.module.scss";
import Messages from "../messages/messages";
import CurrentUser from "../current-user/current-user";
import { socket } from "../app/app";

const Messenger = () => {
  const [messagesArray, setMessagesArray] = useState([]);
  //console.log("socket: ", socket);

  const sendMessageHandler = (message) => {
    const newMessage = {
      id: Date.now(),
      message,
      sender: socket.id,
    };
    setMessagesArray((prev) => {
      return [...prev, newMessage];
    });
  };

  useEffect(() => {
    socket.on("message", (data) => {
      console.log("socket message: ", data);      
      sendMessageHandler(data);
    });
  },[])
  
  return (
    <main className={s.messenger}>
      <CurrentUser />
      <Messages messagesArray={messagesArray} />
      <MessengerForm sendMessage={sendMessageHandler} />
    </main>
  );
};

export default Messenger;
