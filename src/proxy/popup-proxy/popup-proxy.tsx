import React, {FC} from 'react';
import {createPortal} from "react-dom";

// popup
import {Popup} from "../../components/popup";

// types
import {IMessage} from "../../interfaces/message.interface";

const PopupProxy: FC = () => {
  return createPortal(<Popup />, document.getElementById('popup'));
};

export {PopupProxy};
