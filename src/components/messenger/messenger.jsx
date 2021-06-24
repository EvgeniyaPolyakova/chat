import React, { useState } from "react";
import MessengerForm from "../messenger-form/messenger-form";
import s from "./messenger.module.scss";
import Messages from "../messages/messages";
import CurrentUser from "../current-user/current-user";

const Messenger = () => {
  return (
    <main className={s.messenger}>
      <CurrentUser />
      <Messages />
      <MessengerForm />
    </main>
  );
};

export default Messenger;
