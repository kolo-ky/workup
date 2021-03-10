import React, {FC} from "react";
import {Link, useHistory} from "react-router-dom";

// types
import {IUserForm} from "../../../interfaces/user-form.interface";

// routes
import {routes} from "../../../routes";

// components
import {ServiceLayout} from "../../layouts/service-layout";
import {UserForm} from "../../user-form";

// redux
import {useDispatch} from "react-redux";

// actions
import {fetchLogin} from "../../../store/async-actions/user";

// styles
import style from './login.module.css';
import classnames from 'classnames';

const Login: FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const buttonTitle = 'Войти';

  const handleSend = (userForm: IUserForm) => {
    // @ts-ignore
    dispatch(fetchLogin(userForm)).then(() => {
      history.push(routes(`home`));
    });
  };

  return (
    <ServiceLayout>
      <section className={classnames(style.loginSection)}>
        <h1 className={classnames(style.loginTitle)}>WorkUp</h1>
        <UserForm sendUserData={handleSend} buttonTitle={buttonTitle}/>
        <p>
          <Link className={classnames(style.authLink)} to={routes('registration')}>В первый раз? Зарегистрироваться</Link>
        </p>
      </section>
    </ServiceLayout>
  );
};

export {Login as LoginScreen};
