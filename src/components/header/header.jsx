import React from 'react';

// styles
import style from './header.module.css';

// components
import User from '../user/user';

const Header = () => {
  return (
    <header className={style.boardHeader}>
      <div className={style.boardInner}>
        <h1>WorkUp</h1>
        <User />
      </div>
    </header>
  );
};

export default Header;
