import React, {FC} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// components
import {MainScreen} from '../screens/main-screen/';
import {LoginScreen} from '../screens/login-screen';
import {ProfileScreen} from "../screens/pfofile-screen";
import {NotFoundScreen} from '../screens/notfound-screen';

// routes
import {routes} from "../../routes";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={routes(`home`)} exact component={MainScreen} />
        <Route path={routes(`login`)} exact component={LoginScreen} />
        <Route path={routes(`profile`)} exact component={ProfileScreen} />
        <Route path="*" component={NotFoundScreen}/>
      </Switch>
    </BrowserRouter>
  );
};

export {App};
