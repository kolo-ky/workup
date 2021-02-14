import React from "react";

// styles
import style from './not-found-layout.module.css';
import classnames from 'classnames';

const NotFoundLayout = ({children}) => {
  return (
    <main className={classnames(style.boardAppNotFound)}>
      {children}
    </main>
  );
};

export default NotFoundLayout;
