import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import React, { Component, Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { fetchCurrentUser, fetchUsers, fetchHashtags } from "../../actions/user_actions";
// import SearchContainer from "./search_container";
import Search2 from "./Search2";
import NewPostContainer from "../posts/NewPostContainer";
// Search2
const NavBar = ({currentUserId,  logout, fetchUsers, fetchHashtags, fetchCurrentUser, history}) => {
  useEffect(() => {
    fetchCurrentUser(currentUserId);
    fetchUsers();
    fetchHashtags();

  }, [fetchCurrentUser, fetchUsers, fetchHashtags]);
  debugger
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
            <Search2 />
            <div className="navbar-right">
              {/* <div
                className="daLink2"
                // onClick={() => openModal("upload")}
              >
                <Link onClick={() => toggleModal(!displayModal)} style={{ color: "#262626" }}>
                  <i className="far fa-plus-square"></i>
                </Link>
              </div> */}
              <Link className="navbar-right-link" to={`/explore`}>
                <i className="far fa-compass"></i>
              </Link>

              <Link
                className="navbar-right-link"
                to={`/users/${currentUserId}`}
              >
                <i className="far fa-user"></i>
              </Link>
              <a className="navbar-right-link">
                <i class="fas fa-sign-out-alt" onClick={e => logout()}></i>
              </a>
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
  fetchUsers: PropTypes.func.isRequired,
  fetchHashtags: PropTypes.func.isRequired
};
const mapStateToProps = ({ session }) => {
  return {
    currentUserId: session.id,
  }
}
export default connect(mapStateToProps, {logout,fetchUsers, fetchHashtags, fetchCurrentUser})(NavBar);
