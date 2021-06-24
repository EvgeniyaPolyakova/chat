import React, { useState } from "react";
import s from "./current-user.module.scss";

const CurrentUser = () => {

  return (
    <div className={s.currentUser}>
        <p className={s.userName}>Имя пользователя</p>
    </div>
  );
};

export default CurrentUser;
