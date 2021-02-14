import React from 'react';

// components
import LoginLayout from "../layouts/login-layout/login-layout";

export const WithLoginLayout = Component => {
  return props => (
    <LoginLayout>
      <Component {...props}/>
    </LoginLayout>
  );
};
