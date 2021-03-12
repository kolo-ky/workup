import React, {FC} from 'react';

// types
import {IMessage} from "../../interfaces/message.interface";

const PopupMessage: FC<IMessage> = ({className, message}) => {
  return (
    <li className={className}>
      {message}
    </li>
  );
};

export {PopupMessage}
