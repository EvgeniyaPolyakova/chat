import React from "react";
import s from "./messages.module.scss";
import Message from "../message";

const Messages = (messagesArray) => {
  return (
    <div className={s.messages}>
      
        <Message  />
      
    </div>
  );
};

export default Messages;

//{messagesArray.map(({ id, message }) => (
  //))
      //}