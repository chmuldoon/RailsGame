import React from "react";

import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import NavBarContainer from "./navbar/navbar_container";

import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import SplashContainer from "./splash/splash_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import NewPostContainer from "./posts/NewPostContainer";
import UserProfile from "./user/UserProfile";
import Explore from "./posts/explore";
import Hashtag from "./posts/Hashtag";
import Modal from "./modal/modal";
import EditUser from "./user/EditUser";
import Search2 from "./navbar/Search2";
const App = () => (
  <div>
    <Modal />
    <header>
      <NavBarContainer />
    </header>
    <section className="container">
      <Switch>
        <Route exact path="/" component={SplashContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <ProtectedRoute exact path="/newpost" component={NewPostContainer} />
        <ProtectedRoute exact path="/users/:id" component={UserProfile} />
        <ProtectedRoute exact path="/explore" component={Explore} />
        <ProtectedRoute exact path="/hashtags/:id" component={Hashtag} />
        <ProtectedRoute exact path="/edit" component={EditUser} />
        <ProtectedRoute exact path="/surch" component={Search2} />
      </Switch>
    </section>
  </div>
);

export default App;
