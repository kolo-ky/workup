import React, {FC, ReactElement} from 'react';
import PropTypes from 'prop-types';

// styles
import classnames from "classnames";
import style from "./service-layout.module.css";

const ServiceLayout: FC<{children?: ReactElement}> = ({children}) => {
  return (
    <main className={classnames(style.boardAppService)}>
      {children}
    </main>
  );
};

export {ServiceLayout};
