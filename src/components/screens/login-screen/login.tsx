import React, {FC} from "react";
import {Link} from "react-router-dom";

// routes
import {routes} from "../../../routes";

// components
import {ServiceLayout} from "../../layouts/service-layout";

// styles
import style from './login.module.css';
import cn from 'classnames';

const Login: FC = () => {
  return (
    <ServiceLayout>
      <section className={cn(style.loginSection)}>
        <h1 className={cn(style.loginTitle)}>WorkUp</h1>
        <form action="#" className={cn(style.loginForm)} aria-label="Форма авторизации">
          <label htmlFor="login">Логин</label>
          <input type="text" name="login" id="login" placeholder="Ваш логин..." required />

          <label htmlFor="password">Пароль</label>
          <input type="password" name="password" id="password" placeholder="Ваш пароль..." required />

          <button className={cn(style.loginButton)} type="submit">
            <span>Войти</span>
          </button>
        </form>
        <p>
          <Link className={cn(style.authLink)} to={routes('auth')}>В первый раз? Зарегистрироваться</Link>
        </p>
      </section>
    </ServiceLayout>
  );
};

export {Login as LoginScreen};
