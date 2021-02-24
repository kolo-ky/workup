import React, {FC} from 'react';
import {Link} from 'react-router-dom';

// styles
import style from './user.module.css';
import classnames from 'classnames';

// routes
import {routes} from "../../routes";

const User: FC = () => {
  return (
    <ul className={classnames(style.user)}>
      <li className={classnames(style.userAvatar)}>
        A
      </li>
      <li className={classnames(style.userMenu)}>
        <ul className={classnames(style.menu)}>
          <li className={classnames(style.menuItem)}>
            <Link to={routes(`profile`)}>
              Профиль
            </Link>
          </li>
          <li className={classnames(style.menuItem)}>
            <Link to={routes(`home`)}>
              Выйти
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export {User};
