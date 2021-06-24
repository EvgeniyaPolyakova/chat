import React from "react";
import DialogPreview from "../dialog-preview/dialog-preview";
import s from "./chat-list.module.scss";

const ChatList = () => {
  return (
    <ul className={s.list}>
      <li>
        <DialogPreview />
      </li>
      <li>
        <DialogPreview />
      </li>
      <li>
        <DialogPreview />
      </li>
      <li>
        <DialogPreview />
      </li>
      <li>
        <DialogPreview />
      </li>
      <li>
        <DialogPreview />
      </li>
      <li>
        <DialogPreview />
      </li>
      <li>
        <DialogPreview />
      </li>
      <li>
        <DialogPreview />
      </li>
      <li>
        <DialogPreview />
      </li>
    </ul>
  );
};

export default ChatList;
