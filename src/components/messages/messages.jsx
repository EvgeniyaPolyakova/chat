import React from "react";
import s from "./messages.module.scss";
import Message from "../message";
import {socket} from "../app/app";

const Messages = ({ messagesArray }) => {
  socket.on("message", (data) => {
    console.log(data)
  })
  return (
    <div className={s.messages}>
      {messagesArray.map(({ id, message }) =>
          <Message key={id} message={message} />
        
      )}
    </div>
  );
};

export default Messages;
