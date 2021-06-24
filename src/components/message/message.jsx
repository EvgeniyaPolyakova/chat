import React from "react";
import s from "./message.module.scss";

const Message = ({id, message}) => {
  return (
    <div>
      <p className={s.textMessage} key={id}>
        {message}
      </p>
    </div>
  )
};

export default Message;
