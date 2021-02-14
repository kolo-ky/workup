import React from 'react';
import {Link} from 'react-router-dom';

// styles
import style from './user.module.css';
import classnames from 'classnames';

const User = () => {
  return (
    <ul className={classnames(style.user)}>
      <li className={classnames(style.userAvatar)}>
        A
      </li>
      <li className={classnames(style.userMenu)}>
        <ul className={classnames(style.menu)}>
          <li className={classnames(style.menuItem)}>
            <Link to="/profile">
              Профиль
            </Link>
          </li>
          <li className={classnames(style.menuItem)}>
            <a href="/">Выйти</a>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default User;
