import React from 'react';
import PropTypes from 'prop-types';

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

LoginLayout.propTypes = {
  children: PropTypes.object
};

export default LoginLayout;
