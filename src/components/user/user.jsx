import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

// styles
import style from './user.module.css';
import classnames from 'classnames';

const ALLOWED_SCREENS = [`Main`];

const User = ({screen}) => {
  return (
    <ul className={classnames(style.user)}>
      <li className={classnames(style.userAvatar)}>
        A
      </li>
      {
        ALLOWED_SCREENS.includes(screen) && (
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
        )
      }
    </ul>
  );
};

User.propTypes = {
  screen: PropTypes.string.isRequired
};

export default User;
