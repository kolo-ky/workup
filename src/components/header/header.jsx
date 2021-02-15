import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

// styles
import style from './header.module.css';

// components
import User from '../user/user';

const Header = ({screen}) => {
  return (
    <header className={style.boardHeader}>
      <div className={style.boardInner}>
        <h1><Link to="/">WorkUp</Link></h1>
        <User screen={screen}/>
      </div>
    </header>
  );
};

Header.propTypes = {
  screen: PropTypes.string.isRequired
};

export default Header;
