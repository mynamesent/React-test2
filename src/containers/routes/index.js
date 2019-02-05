import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Home";
import Login from "../users/login/login";


export default () => (
  <Switch>
    <Route exact path="/" component={Login} />
    
    <Route exact path="/login" component={Login} />
    
  </Switch>
);
