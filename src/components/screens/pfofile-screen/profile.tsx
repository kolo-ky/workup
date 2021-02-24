import React, {FC} from 'react';

// hocs
import {withMainLayout} from '../../../hocs/with-main-layout';

const Profile: FC = () => {
  return (
    <section>
      Здесь будут данные профиля
    </section>
  );
};

const ProfileScreen = withMainLayout(Profile);
export {ProfileScreen};
