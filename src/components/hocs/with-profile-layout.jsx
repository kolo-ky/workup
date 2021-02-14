import React from 'react';

// layout
import ProfileLayout from "../layouts/profile-layout/profile-layout";

export const WithProfileLayout = Component => {
  return props => (
    <ProfileLayout>
      <Component {...props}/>
    </ProfileLayout>
  );
};
