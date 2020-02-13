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
            <div className="navbar-left">
              <Link className="daLink" to={`/`}>
                <i className="fab fa-instagram"></i>
              </Link>
              <Link className="daLink" to={`/`}>
                <p>Clonestagram</p>
              </Link>
            </div>
            {/* <SearchContainer /> */}
            <div className="navbar-right">
              <div
                className="daLink2"
                // onClick={() => this.props.openModal("upload")}
              >
                <Link to={`/newpost`}>
                  <i className="far fa-plus-square"></i>
                </Link>
              </div>
              <Link className="navbar-right-link" to={`/explore`}>
                <i className="far fa-compass"></i>
              </Link>

              {/* <Link
                className="navbar-right-link"
                // to={`/users/${currentUser.id}`}
              >
                <i className="far fa-user"></i>

              </Link> */}
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
