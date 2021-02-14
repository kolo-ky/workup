import React from "react";
import PropTypes from 'prop-types';

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

NotFoundLayout.propTypes = {
  children: PropTypes.object
};

export default NotFoundLayout;
