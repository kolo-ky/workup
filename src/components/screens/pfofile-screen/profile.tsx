import React, {FC} from 'react';

// components
import {MainLayout} from "../../layouts/main-layout";

const Profile: FC = () => {
  return (
    <MainLayout>
      <section>
        Здесь будут данные профиля
      </section>
    </MainLayout>
  );
};

export {Profile as ProfileScreen};
