import React from "react";

import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import NavBarContainer from "./navbar/navbar_container";

import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import SplashContainer from "./splash/splash_container";

import { AuthRoute, ProtectedRoute } from "../util/route_util";
const App = () => (
  <div>
    <header>
      <NavBarContainer />
    </header>
    <Route exact path="/" component={SplashContainer} />

    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;
