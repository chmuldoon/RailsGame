import { Link } from "react-router-dom";

import React, { Component } from "react";

export class NavBar extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this); 

  }
  handleLogout(e) {
    e.preventDefault();
    // debugger
    this.props.logout()
      .then(() => this.props.history.push('/'));
  };
  render() {
    let display;
    let { currentUser } = this.props;
    // console.log(currentUser)
    if (currentUser) {
      display = (
        <nav className="navbar">
          <div className="navbar-util">
            <h1> HELLO {currentUser.username}</h1>
            <div className="logoutBoxDiv" onClick={this.handleLogout}>
              <div>Log Out</div>
            </div>
          </div>
        </nav>
      );
    } else {
      display = (
        <nav className="unused">
          <br />
          <br />
          <br />
        </nav>
      );
    }
    return <div>{display}</div>;
  }
}

export default NavBar;
