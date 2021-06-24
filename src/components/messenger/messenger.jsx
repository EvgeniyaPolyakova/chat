import React, { useState } from "react";
import MessengerForm from "../messenger-form/messenger-form";
import s from "./messenger.module.scss";
import Messages from "../messages/messages";
import CurrentUser from "../current-user/current-user";

const Messenger = () => {
  const [messagesArray, setMessagesArray]=useState([]);

  const sendMessageHandler = (message) => {
    const newMessage = {
      id: Date.now(),
      message,
    };
    setMessagesArray((prev) => {
      return [...prev, newMessage]
    })
  }
  
  return (
    <main className={s.messenger}>
      <CurrentUser />
      <Messages messagesArray={messagesArray}/>
      <MessengerForm sendMessage={sendMessageHandler}/>
    </main>
  );
};

export default Messenger;
