import React, {Fragment} from 'react';

//components
import ProfileHeader from '../../profile-header/profile-header';

// styles
import classnames from "classnames";
import style from "../profile-layout/profile-layout.module.css";

const ProfileLayout = ({children}) => {
  return (
    <Fragment>
      <ProfileHeader />
      <main className={classnames(style.profileLayoutBoardMain)}>
        <div className={style.profileLayoutBoardInner}>
          {children}
        </div>
      </main>
    </Fragment>
  );
};

export default ProfileLayout;
