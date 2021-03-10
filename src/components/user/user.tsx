import React, {FC} from 'react';
import {Link, useHistory} from 'react-router-dom';

// redux
import {useSelector, useDispatch} from "react-redux";

// selectors
import {getAuth, getUser} from "../../store/reducers/user-reducer/selectors";

// actions
import {fetchLogout} from "../../store/async-actions/user";

// styles
import style from './user.module.css';
import classnames from 'classnames';

// routes
import {routes} from "../../routes";

const User: FC = () => {
  const user = useSelector((state) => getUser(state));
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = (event) => {
    event.preventDefault();
    // @ts-ignore
    dispatch(fetchLogout(user)).then(() => {
      history.push(routes(`login`));
    });
  };

  return (
    <ul className={classnames(style.user)}>
      <li className={classnames(style.userAvatar)}>
        {user.email && user.email[0].toUpperCase()}
      </li>
      <li className={classnames(style.userMenu)}>
        <ul className={classnames(style.menu)}>
          <li className={classnames(style.menuItem)}>
            <Link to={routes(`profile`)}>
              Профиль
            </Link>
          </li>
          <li className={classnames(style.menuItem)}>
            <a onClick={(event) => handleClick(event)}>
              Выйти
            </a>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export {User};
