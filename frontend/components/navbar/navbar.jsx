import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React, { Component, Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { fetchCurrentUser } from "../../actions/user_actions";

const NavBar = ({currentUserId, logout, fetchCurrentUser, history}) => {
  useEffect(() => {
    fetchCurrentUser(currentUserId);
  }, [fetchCurrentUser]);
  const handleLogout = e => {
    e.preventDefault();
    // debugger
    logout()
      .then(() => history.push('/'));
  };
  return (
    <Fragment>
      {currentUserId ? (
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
                // onClick={() => openModal("upload")}
              >
                <Link to={`/newpost`}>
                  <i className="far fa-plus-square"></i>
                </Link>
              </div>
              <Link className="navbar-right-link" to={`/explore`}>
                <i className="far fa-compass"></i>
              </Link>

              <Link
                className="navbar-right-link"
                to={`/users/${currentUserId}`}
              >
                <i className="far fa-user"></i>
              </Link>
            </div>
          </div>
        </nav>
      ) : (
        <nav className="unused">
          <br />
          <br />
          <br />
        </nav>
      )}
    </Fragment>
  );
}

NavBar.propTypes = {
  logout: PropTypes.func.isRequired,
  currentUserId: PropTypes.number.isRequired,
  fetchCurrentUser: PropTypes.func.isRequired,
};
const mapStateToProps = ({ session }) => {
  return {
    currentUserId: session.id
  }
}
export default connect(mapStateToProps, {logout, fetchCurrentUser})(NavBar);
