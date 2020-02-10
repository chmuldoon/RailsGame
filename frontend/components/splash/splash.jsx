// import React from "react";
import SignupFormContainer from "../session/signup_form_container";
// import GameContainer from "../game/game_container";
// import PostIndexContainer from "../posts/post_index_container";
// import NewPostContainer from "../posts/new_post_container";
// import { Link } from "react-router-dom";
// import SideSplashContainer from "./side_splash_container";
import { Link } from "react-router-dom";

//import post idex when its made
import React, { Component } from 'react'

export class splash extends Component{
  constructor(props){
    super(props)
  }
  render(){
    if (this.props.currentUser) {
      return (
        <div className="splash-omni">
          <h1>logged in </h1>
    
        </div>
      );
    } else {
      return <SignupFormContainer />;
    }

  }
};
export default splash
