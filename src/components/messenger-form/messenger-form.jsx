import React, { useState } from "react";
import s from "./messenger-form.module.scss";

const MessengerForm = ({ sendMessage }) => {
  const [message, setMessage] = useState("");

  return (
    <div className={s.formMessageDiv}>
      <form
        className={s.formMessage}
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage(message);
          setMessage("");
        }}
      >
        <input
          required
          type="text"
          className={s.input}
          placeholder="Сообщение"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" className={s.sendButton}>
          <img
            src="/images/send-icon.png"
            height="30px"
            width="30px"
            className={s.sendImg}
          />
        </button>
      </form>
    </div>
  );
};

export default MessengerForm;
