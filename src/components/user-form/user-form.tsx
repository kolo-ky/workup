import React, {FC, useState} from 'react';

// styles
import classnames from "classnames";
import style from "./user-form.module.css";

// type
import {IUserForm} from "../../interfaces/user-form.interface";

interface IUserFormComponent {
  sendUserData(userForm: IUserForm):void,
  buttonTitle: string
}

const UserForm: FC<IUserFormComponent> = (props) => {
  const [userForm, setLoginForm] = useState({email: '', password: ''});

  const submitHandler = (event) => {
    event.persist();
    event.preventDefault();

    props.sendUserData(userForm);
  }

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
    <form action="#" className={classnames(style.userForm)} aria-label="Форма авторизации" onSubmit={(event) => submitHandler(event)}>
      <label htmlFor="login">Логин</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Ваш почтовый адрес..."
        value={userForm.email}
        onChange={(event) => handleChange(event)}
        required
      />

      <label htmlFor="password">Пароль</label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Ваш пароль..."
        value={userForm.password}
        onChange={(event) => handleChange(event)}
        required
      />

      <button className={classnames(style.userFormButton)} type="submit">
        <span>{props.buttonTitle}</span>
      </button>
    </form>
  );
};

export {UserForm};
