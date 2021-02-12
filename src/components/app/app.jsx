import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

//components
import Main from '../../components/screens/main/main';
import Login from '../../components/screens/login/login';
import NotFound from '../../components/screens/not-found/not-found';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
      </Switch>
      <Switch>
        <Route path="/login" exact component={Login} />
      </Switch>
      <Switch>
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
