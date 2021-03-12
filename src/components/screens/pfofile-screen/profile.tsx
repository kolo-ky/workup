import React, {FC} from 'react';

// components
import {MainLayout} from "../../layouts/main-layout";
import {ProfileTabs} from "./profile-tabs";

const Profile: FC = () => {
  return (
    <MainLayout>
      <section>
        <ProfileTabs />
      </section>
    </MainLayout>
  );
};

export {Profile as ProfileScreen};
