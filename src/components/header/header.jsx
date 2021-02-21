import React from 'react';
import {Link} from 'react-router-dom';

// styles
import style from './header.module.css';

// components
import User from "../user/user";

const Header = () => {
  return (
    <header className={style.boardHeader}>
      <div className={style.boardInner}>
        <h1><Link to="/">WorkUp</Link></h1>
        <User />
      </div>
    </header>
  );
};

export default Header;
