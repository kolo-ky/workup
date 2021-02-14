import React from 'react';

// hocs
import {WithProfileLayout} from '../../hocs/with-profile-layout';

const Profile = () => {
  return (
    <section>
      Здесь будут данные профиля
    </section>
  );
};

export default WithProfileLayout(Profile);
