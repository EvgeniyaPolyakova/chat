import React from "react";
import s from "./message.module.scss";

const Message = () => {
  return (
    <div>
      <p className={s.userName}>Имя пользователя</p>
      <p className={s.textMessage}>Сообщение</p>
    </div>
  );
};

export default Message;
