import React from 'react';
import {Link} from 'react-router-dom';

// styles
import style from './profile-header.module.css';

// components
import User from '../user/user';

const ProfileHeader = () => {
  return (
    <header className={style.profileBoardHeader}>
      <div className={style.profileBoardInner}>
        <h1><Link to="/">WorkUp</Link></h1>
        <User showUserMenu={false}/>
      </div>
    </header>
  );
};

export default ProfileHeader;
