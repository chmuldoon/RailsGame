import React, { Component } from "react";
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from "react-router-dom";
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
import CurrentUser from "./user/CurrentUser";
import OtherUser from "./user/OtherUser";
import PostShow from "./splash/PostShow";
import HashtagPage from "./posts/HashtagPage";
class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}
const Scroll = withRouter(ScrollToTop);
const App = () => (
  <div>
    <Modal />
    <header>
      <NavBarContainer />
    </header>
    <section className="container">
      <Scroll>
        <Switch>
          <Route exact path="/" component={SplashContainer} />
          <AuthRoute exact path="/login" component={LoginFormContainer} />
          <AuthRoute exact path="/signup" component={SignupFormContainer} />
          <ProtectedRoute exact path="/newpost" component={NewPostContainer} />
          <ProtectedRoute exact path="/users/:id" component={OtherUser} />
          <ProtectedRoute exact path="/posts/:id" component={PostShow} />

          <ProtectedRoute exact path="/me" component={CurrentUser} />

          <ProtectedRoute exact path="/explore" component={Explore} />
          <ProtectedRoute exact path="/hashtags/:id" component={HashtagPage} />
          <ProtectedRoute exact path="/edit" component={EditUser} />
        </Switch>
      </Scroll>
    </section>
  </div>
);

export default App;
