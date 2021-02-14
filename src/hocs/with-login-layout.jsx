import React from 'react';

// components
import LoginLayout from "../components/layouts/login-layout/login-layout";

export const WithLoginLayout = Component => {
  return props => (
    <LoginLayout>
      <Component {...props}/>
    </LoginLayout>
  );
};
