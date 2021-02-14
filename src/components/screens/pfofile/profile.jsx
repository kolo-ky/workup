import React from 'react';

// hocs
import {WithMainLayout} from '../../hocs/with-main-layout';

const Profile = () => {
  return (
    <section>
      Здесь будут данные профиля
    </section>
  );
};

export default WithMainLayout(Profile);
