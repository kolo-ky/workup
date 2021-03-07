import React, {FC} from 'react';

interface IMessage {
  className: string,
  message: string
}

const PopupMessage: FC<IMessage> = ({className, message}) => {
  return (
    <li className={className}>
      {message}
    </li>
  );
};

export {PopupMessage}
