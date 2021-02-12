import React from 'react';

// styles
import style from './header.module.css';

const Header = () => {
  return (
    <header className={style.boardHeader}>
      <div className={style.boardInner}>
        <h1>WorkUp</h1>
      </div>
    </header>
  );
};

export default Header;
