import React, {FC, useState, useEffect} from 'react';

// styles
import classnames from "classnames";
import style from './popup.module.css';

// components
import {PopupMessage} from './popup-message';

interface IMessage {
  type?: string,
  message?: string
}

enum MessageTypes {
  success = 'Success',
  fail = 'Fail',
}

const Popup: FC<{message: IMessage}> = ({message}) => {
  const [messages, updateMessages] = useState([]);

  let timer: any = null;
  const getClassName = (message: IMessage):string => {
    return `${classnames(style.popupItem, style[`popupItem${MessageTypes[message.type]}`])}`;
  };

  const timerCallBack = (timer: number): void => {
    const sliceCount: number = 1;

    updateMessages((prevState) => {
      if (prevState.length <= sliceCount) {
        clearTimeout(timer);
      }

      return prevState.slice(sliceCount);
    });
  };

  useEffect(() => {
    updateMessages((prevState) => {
      return [...prevState, message]
    });
  }, [message]);

  useEffect(() => {
    if (messages.length) {
      timer = setInterval(() => timerCallBack(timer), 2000);
    }

    return () => clearTimeout(timer);
  }, [messages]);

  return (
    <ul className={classnames(style.popupWrap)}>
      {messages.map(item =>
        <PopupMessage message={item.message} className={getClassName(item)} key={`message-${item.type}-${Math.random()}`}/>
        )}
    </ul>
  );
};

export {Popup};
