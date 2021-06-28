import React from "react";
import s from "./messages.module.scss";
import Message from "../message";
import { socket } from "../app/app";

const Messages = ({ messagesArray }) => {
 // socket.on("message", (data) => {
 //   console.log("socket message: ", data);
  //});
  return (
    <div className={s.messages}>
      {messagesArray.map(({ id, message, sender }) => (
        <Message key={id} message={message} sender={sender}/>
      ))}
    </div>
  );
};

export default Messages;
