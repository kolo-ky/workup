import React, {FC} from "react";
import {Link} from 'react-router-dom';

// components
import {ServiceLayout} from "../../layouts/service-layout";

// styles
import classnames from "classnames";
import style from "./not-found.module.css";

// routes
import {routes} from "../../../routes";

const NotFound: FC = () => {
  return (
    <ServiceLayout>
      <section className={classnames(style.notFoundSection)}>
        <h1 className={classnames(style.notFoundTitle)}>404</h1>
        <article className={classnames(style.notFoundCard)}>
          <h2 className={classnames(style.notFoundSubTitle)}>Упс! Что вы наделали?!</h2>
          <p>
            Но мы никому не скажем.<br/>
            Срочно возвращайтесь <Link to={routes(`home`)}>на главную страницу</Link>, пока этого никто не увидел.
          </p>
        </article>
      </section>
    </ServiceLayout>
  );
};

export {NotFound as NotFoundScreen};
