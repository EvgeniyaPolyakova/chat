import React from "react";
import s from "./message.module.scss";

const Message = ({id, message}) => {
  return (
    <div className={s.oneMessage}>
      <p className={s.textMessage} key={id}>
        {message}
      </p>
    </div>
  )
};

export default Message;
