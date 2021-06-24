import React from "react";
import s from "./messages.module.scss";
import Message from "../message";

const Messages = () => {
  return (
    <div className={s.messages}>
      <Message/>
    </div>
  );
};

export default Messages;
