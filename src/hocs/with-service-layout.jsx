import React from 'react';

// components
import {ServiceLayout} from "../components/layouts/service-layout";

export const withServiceLayout = (Component) => {
  return (props) => (
    <ServiceLayout>
      <Component {...props}/>
    </ServiceLayout>
  );
};
