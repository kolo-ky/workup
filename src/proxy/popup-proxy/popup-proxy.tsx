import React, {FC} from 'react';
import {createPortal} from "react-dom";

// popup
import {Popup} from "../../components/popup";

// types
import {IMessage} from "../../interfaces/message.interface";

interface IPopup {
  message: IMessage
}

const PopupProxy: FC<IPopup> = (props) => {
  return createPortal(<Popup {...props}/>, document.getElementById('popup'));
};

export {PopupProxy};
