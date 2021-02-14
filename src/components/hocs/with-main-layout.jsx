import React from "react";
import MainLayout from "../layouts/main-layout/main-layout";

export const WithMainLayout = Component => {
  return props => (
    <MainLayout>
      <Component {...props} />
    </MainLayout>
  );
};
