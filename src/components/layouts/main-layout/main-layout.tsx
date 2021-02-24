import React, {Fragment, FC, ReactElement} from "react";
import PropTypes from 'prop-types';

// components
import {Header} from '../../header';

// style
import style from './main-layout.module.css';
import classnames from 'classnames';

const MainLayout: FC<{children?: ReactElement}> = ({children}) => {
  return (
    <Fragment>
      <Header/>
      <main className={classnames(style.boardMain)}>
        <div className={style.boardInner}>
          {children}
        </div>
      </main>
    </Fragment>
  );
};

export {MainLayout};
