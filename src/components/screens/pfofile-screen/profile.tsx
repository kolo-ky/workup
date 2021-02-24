import React from 'react';

// hocs
import {withMainLayout} from '../../../hocs/with-main-layout';

const Profile = () => {
  return (
    <section>
      Здесь будут данные профиля
    </section>
  );
};

const ProfileScreen = withMainLayout(Profile);
export {ProfileScreen};