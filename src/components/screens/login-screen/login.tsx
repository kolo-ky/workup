import React from "react";
import {Link} from "react-router-dom";

// routes
import {routes} from "../../../routes";

// hocs
import {withServiceLayout} from '../../../hocs/with-service-layout';

// styles
import style from './login.module.css';
import classnames from 'classnames';

const Login = () => {
  return (
    <section className={classnames(style.loginSection)}>
      <h1 className={classnames(style.loginTitle)}>WorkUp</h1>
      <form className={classnames(style.loginForm)} aria-label="Форма авторизации">
        <label htmlFor="login">Логин</label>
        <input type="text" name="login" id="login" placeholder="Ваш логин..." required />

        <label htmlFor="password">Пароль</label>
        <input type="password" name="password" id="password" placeholder="Ваш пароль..." required />

        <button className={classnames(style.loginButton)} type="submit">
          <span>Войти</span>
        </button>
      </form>
      <p>
        <Link className={classnames(style.authLink)} to={routes('auth')}>В первый раз? Зарегистрироваться</Link>
      </p>
    </section>
  );
};

const LoginScreen = withServiceLayout(Login);
export {LoginScreen};
