import React, {Fragment} from "react";
import PropTypes from 'prop-types';

// components
import Header from '../../header/header';

// style
import style from './main-layout.module.css';
import classnames from 'classnames';

const MainLayout = ({children}) => {
  const screen = children.type.name;

  return (
    <Fragment>
      <Header screen={screen}/>
      <main className={classnames(style.boardMain)}>
        <div className={style.boardInner}>
          {children}
        </div>
      </main>
    </Fragment>
  );
};

MainLayout.propTypes = {
  children: PropTypes.object
};

export default MainLayout;
