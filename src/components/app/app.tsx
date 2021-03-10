import React, {FC, useEffect} from 'react';
import {BrowserRouter, useHistory, Route, Switch} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";

// actions
import {fetchTasks} from "../../store/async-actions/tasks";
import {fetchCheckAuth} from "../../store/async-actions/user";

// selectors
import {getUser, getPending} from "../../store/reducers/user-reducer/selectors";

// components
import {MainScreen} from '../screens/main-screen/';
import {LoginScreen} from '../screens/login-screen';
import {ProfileScreen} from "../screens/pfofile-screen";
import {NotFoundScreen} from '../screens/notfound-screen';
import {AuthScreen} from "../screens/auth-screen/auth-screen";
import PrivateRoute from "../private-route/private-route";

// routes
import {routes} from "../../routes";

const App: FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => getUser(state));
  const pending = useSelector((state) => getPending(state));

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchCheckAuth(user)).then(() => {
      dispatch(fetchTasks());
    }).catch(() => {});
  }, []);

  if (pending) {
    return <AuthScreen />;
  }

  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute path={routes(`home`)} exact component={MainScreen}/>
        <Route path={routes(`login`)} exact component={LoginScreen} />
        <PrivateRoute path={routes(`profile`)} exact component={ProfileScreen}/>
        <Route path="*" component={NotFoundScreen}/>
      </Switch>
    </BrowserRouter>
  );
};

export {App};
