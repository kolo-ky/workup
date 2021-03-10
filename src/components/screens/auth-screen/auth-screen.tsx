import React, {FC} from "react";

// components
import {ServiceLayout} from "../../layouts/service-layout";

// styles
import classnames from "classnames";
import style from "./auth-screen.module.css";

const AuthScreen: FC = () => {
  return (
    <ServiceLayout>
      <section className={classnames(style.authSection)}>
        <h1 className={classnames(style.authTitle)}>Авторизация</h1>
      </section>
    </ServiceLayout>
  );
};

export {AuthScreen};
