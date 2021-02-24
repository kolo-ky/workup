import React from 'react';

// components
import {ServiceLayout} from "../../components/layouts/service-layout";

const withServiceLayout = (Component) => {
  return (props) => (
    <ServiceLayout>
      <Component {...props}/>
    </ServiceLayout>
  );
};

export {withServiceLayout};
