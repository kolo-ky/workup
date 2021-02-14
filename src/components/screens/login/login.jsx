import React from "react";

// hocs
import {WithLoginLayout} from '../../../hocs/with-login-layout';

// styles
import style from './login.module.css';
import classnames from 'classnames';
import buttonStyle from "../../../assets/common-styles/comon.style.css";

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
        <p>
          <a className={classnames(style.authLink)} href="/auth">В первый раз? Зарегистрироваться</a>
        </p>
      </form>
    </section>
  );
};

export default WithLoginLayout(Login);
