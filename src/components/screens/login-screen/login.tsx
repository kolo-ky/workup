import React, {FC, useState} from "react";
import {Link, useHistory} from "react-router-dom";

// routes
import {routes} from "../../../routes";

// components
import {ServiceLayout} from "../../layouts/service-layout";

// redux
import {useDispatch} from "react-redux";

// actions
import {fetchLogin} from "../../../store/async-actions/user";

// styles
import style from './login.module.css';
import classnames from 'classnames';

const Login: FC = () => {
  const [loginForm, setLoginForm] = useState({email: '', password: ''});
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    // @ts-ignore
    dispatch(fetchLogin(loginForm)).then(() => {
      history.push(routes(`home`));
    });
  };

  const handleChange = (event) => {
    event.persist();
    setLoginForm((prevState) => {
      return {
        ...prevState,
        [event.target.id]: event.target.value
      };
    });
  };

  return (
    <ServiceLayout>
      <section className={classnames(style.loginSection)}>
        <h1 className={classnames(style.loginTitle)}>WorkUp</h1>
        <form action="#" className={classnames(style.loginForm)} aria-label="Форма авторизации" onSubmit={(event) => handleSubmit(event)}>
          <label htmlFor="login">Логин</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Ваш почтовый адрес..."
            value={loginForm.email}
            onChange={(event) => handleChange(event)}
            required
          />

          <label htmlFor="password">Пароль</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Ваш пароль..."
            value={loginForm.password}
            onChange={(event) => handleChange(event)}
            required
          />

          <button className={classnames(style.loginButton)} type="submit">
            <span>Войти</span>
          </button>
        </form>
        <p>
          <Link className={classnames(style.authLink)} to={routes('auth')}>В первый раз? Зарегистрироваться</Link>
        </p>
      </section>
    </ServiceLayout>
  );
};

export {Login as LoginScreen};
