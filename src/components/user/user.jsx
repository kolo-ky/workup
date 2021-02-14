import React from 'react';
import {Link, useLocation} from 'react-router-dom';

// styles
import style from './user.module.css';
import classnames from 'classnames';

// settings
import settings from "./settings";

const User = () => {
  const {pathname} = useLocation();

  const isHideRoute = () => {
    return !pathname.includes(settings.hideForRoute);
  };

  return (
    <ul className={classnames(style.user)}>
      <li className={classnames(style.userAvatar)}>
        A
      </li>
      {
        isHideRoute()
        ?
            <li className={classnames(style.userMenu)}>
              <ul className={classnames(style.menu)}>
                <li className={classnames(style.menuItem)}>
                  <Link to="/profile">
                    Профиль
                  </Link>
                </li>
                <li className={classnames(style.menuItem)}>
                  <Link to="/">
                    Выйти
                  </Link>
                </li>
              </ul>
            </li>
          :
            null
      }
    </ul>
  );
};

export default User;
