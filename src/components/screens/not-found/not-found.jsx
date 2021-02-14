import React from "react";
import {Link} from 'react-router-dom';

// hocs
import {WithNotFoundLayout} from '../../hocs/with-not-found-layout';

// styles
import classnames from "classnames";
import style from "./not-found.module.css";

const NotFound = () => {
  return (
    <section className={classnames(style.notFoundSection)}>
      <h1 className={classnames(style.notFoundTitle)}>404</h1>
      <article className={classnames(style.notFoundCard)}>
        <h2 className={classnames(style.notFoundSubTitle)}>Упс! Что вы наделали?!</h2>
        <p>
          Но мы никому не скажем.<br/>
          Срочно возвращайтесь <Link to="/">на главную страницу</Link>, пока этого никто не увидел.
        </p>
      </article>
    </section>
  );
};

export default WithNotFoundLayout(NotFound);
