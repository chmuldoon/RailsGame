import React from "react";
import SignupFormContainer from "../session/signup_form_container";
import GameContainer from "../game/game_container";

// import PostIndexContainer from "../posts/post_index_container";
// import NewPostContainer from "../posts/new_post_container";
// import { Link } from "react-router-dom";
// import SideSplashContainer from "./side_splash_container";

//import post idex when its made

export const splash = ({ currentUser }) => {
  if (currentUser) {
    return (
      <div className="splash-omni">
        <h1>logged in </h1>
        <GameContainer />
      </div>
    );
  } else {
    return <SignupFormContainer />;
  }
};
