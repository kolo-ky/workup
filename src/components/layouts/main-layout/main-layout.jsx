import React, {Fragment} from "react";

//components
import Header from '../../header/header';

// style
import style from './main-layout.module.css';
import classnames from 'classnames';

const MainLayout = ({children}) => {
  return (
    <Fragment>
      <Header />
      <main className={classnames(style.boardMain)}>
        <div className={style.boardInner}>
          {children}
        </div>
      </main>
    </Fragment>
  );
};

export default MainLayout;
