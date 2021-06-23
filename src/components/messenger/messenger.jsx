import React, { useState } from "react";
import MessengerForm from "../messenger-form/messenger-form";
import s from "./messenger.module.scss";
import Message from "../message/message";

const Messenger = () => {

  return (
    <div className={s.messenger}>
      <Message /> 
      <MessengerForm />
    </div>
  );
};

export default Messenger;
