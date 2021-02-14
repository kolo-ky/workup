import React from 'react';

// styles
import classnames from "classnames";
import style from "./login-layout.module.css";

const LoginLayout = ({children}) => {
  return (
    <main className={classnames(style.boardAppLogin)}>
      {children}
    </main>
  );
};

export default LoginLayout;
