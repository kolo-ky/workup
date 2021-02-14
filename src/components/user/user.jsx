import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

// styles
import style from './user.module.css';
import classnames from 'classnames';

const User = ({showUserMenu}) => {
  return (
    <ul className={classnames(style.user)}>
      <li className={classnames(style.userAvatar)}>
        A
      </li>
      {
        showUserMenu
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

User.propTypes = {
  showUserMenu: PropTypes.bool.isRequired
};

export default User;
