import React, {FC, useEffect} from 'react';

// styles
import classnames from "classnames";
import style from './popup.module.css';

// components
import {PopupMessage} from './popup-message';

// redux
import {useDispatch, useSelector} from "react-redux";

// selectors
import {getMessages} from "../../store/reducers/message-reducer/selectors";

// actions
import {removeMessageAction} from "../../store/actions/messages";

interface IMessage {
  type?: string,
  message?: string
}

enum MessageTypes {
  success = 'Success',
  fail = 'Fail',
}

const Popup: FC = () => {
  const dispatch = useDispatch();
  const messages: Array<IMessage> = useSelector((state) => getMessages(state));

  let timer: any = null;
  const getClassName = (message: IMessage):string => {
    return `${classnames(style.popupItem, style[`popupItem${MessageTypes[message.type]}`])}`;
  };

  const timerCallBack = (timer: number): void => {
    if (messages.length <= 1) {
      clearTimeout(timer);
    }

    dispatch(removeMessageAction());
  };

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
