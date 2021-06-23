import React from "react";
import Navigation from "../navigation";
import s from "./app.module.scss";
import Aside from '../aside';
import Messenger from "../messenger/messenger";

const App = () => {
  return (
    <div className={s.app}>
      <Aside/>
      <Navigation/>
      <Messenger/>
    </div>
  );
};

export default App;
