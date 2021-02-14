import React from 'react';

// layout
import NotFoundLayout from "../layouts/not-found-layout/not-found-layout";

export const WithNotFoundLayout = Component => {
  return props => (
    <NotFoundLayout>
      <Component {...props}/>
    </NotFoundLayout>
  );
};
