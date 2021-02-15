import React from "react";
import MainLayout from "../components/layouts/main-layout/main-layout";

export const withMainLayout = (Component) => {
  return (props) => (
    <MainLayout>
      <Component {...props} />
    </MainLayout>
  );
};
