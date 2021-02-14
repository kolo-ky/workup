import React from 'react';

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
            Профиль
          </li>
          <li className={classnames(style.menuItem)}>
            Выйти
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default User;
