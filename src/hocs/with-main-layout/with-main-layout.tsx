import React from "react";
import {MainLayout} from "../../components/layouts/main-layout";

// @ts-ignore
const withMainLayout = (Component) => {
  // @ts-ignore
  return (props) => (
    <MainLayout>
      <Component {...props} />
    </MainLayout>
  );
};

export {withMainLayout};
