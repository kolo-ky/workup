import React, {FC} from "react";
import {useHistory} from "react-router-dom";

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
import {fetchRegistration} from "../../../store/async-actions/user";

// styles
import style from './registration-screen.module.css';
import classnames from 'classnames';

const Registration: FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const buttonTitle = 'Зарегистрироваться'

  const handleSend = (userForm: IUserForm) => {
    const formData = {
      id: Date.now(),
      authorized: false,
      email: userForm.email
    };
    // @ts-ignore
    dispatch(fetchRegistration(formData)).then(() => {
      history.push(routes(`login`));
    });
  };

  return (
    <ServiceLayout>
      <section className={classnames(style.registrationSection)}>
        <h1 className={classnames(style.registrationTitle)}>
          WorkUp /
          <span className={classnames(style.registrationSubTitle)}>
            регистрация
          </span>
        </h1>
        <UserForm sendUserData={handleSend} buttonTitle={buttonTitle}/>
      </section>
    </ServiceLayout>
  );
};

export {Registration as RegistrationScreen};
