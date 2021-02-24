import React, {FC} from 'react';
import {Link} from 'react-router-dom';

// routes
import {routes} from "../../routes";

// styles
import style from './header.module.css';

// components
import {User} from "../user";

const Header: FC = () => {
  return (
    <header className={style.boardHeader}>
      <div className={style.boardInner}>
        <h1><Link to={routes(`home`)}>WorkUp</Link></h1>
        <User />
      </div>
    </header>
  );
};

export {Header};
