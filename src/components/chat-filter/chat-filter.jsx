import React from "react";
import s from './chat-filter.module.scss'

const ChatFilter = () => {
    return (
        <input type="text" className={s.input} placeholder="Поиск"/>
    )
};

export default ChatFilter;