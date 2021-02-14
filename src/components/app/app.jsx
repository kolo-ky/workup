import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

//components
import Main from '../../components/screens/main/main';
import Login from '../../components/screens/login/login';
import Profile from "../screens/pfofile/profile";
import NotFound from '../../components/screens/not-found/not-found';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/login" exact component={Login} />
        <Route path="/profile" exact component={Profile} />
        <Route path="*" component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
