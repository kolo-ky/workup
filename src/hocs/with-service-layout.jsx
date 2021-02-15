import React from 'react';

// components
import LoginLayout from "../components/layouts/service-layout/service-layout";

export const withServiceLayout = (Component) => {
  return (props) => (
    <LoginLayout>
      <Component {...props}/>
    </LoginLayout>
  );
};
