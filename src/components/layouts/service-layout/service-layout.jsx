import React from 'react';
import PropTypes from 'prop-types';

// styles
import classnames from "classnames";
import style from "./service-layout.module.css";

const ServiceLayout = ({children}) => {
  return (
    <main className={classnames(style.boardAppService)}>
      {children}
    </main>
  );
};

ServiceLayout.propTypes = {
  children: PropTypes.object
};

export default ServiceLayout;
