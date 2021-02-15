import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

// styles
import style from './header.module.css';

const Header = ({children}) => {
  return (
    <header className={style.boardHeader}>
      <div className={style.boardInner}>
        <h1><Link to="/">WorkUp</Link></h1>
        {children}
      </div>
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.object
};

export default Header;
