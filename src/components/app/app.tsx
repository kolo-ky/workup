import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// components
import {MainScreen} from '../screens/main-screen/';
import {LoginScreen} from '../screens/login-screen';
import {ProfileScreen} from "../screens/pfofile-screen";
import {NotFoundScreen} from '../screens/notfound-screen';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={MainScreen} />
        <Route path="/login" exact component={LoginScreen} />
        <Route path="/profile" exact component={ProfileScreen} />
        <Route path="*" component={NotFoundScreen}/>
      </Switch>
    </BrowserRouter>
  );
};

export {App};
