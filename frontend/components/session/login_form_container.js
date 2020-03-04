
import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { login } from "../../actions/session_actions";
import LoginForm from "./login_form";

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "login",
    navLink: (
      <p style={{ margin: "15px" }}>
        Don't have an account?{" "}
        <Link
          className="switchLink"
          style={{ textDecoration: "none" }}
          to="/signup"
        >
          Sign up
        </Link>
      </p>
    )
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => dispatch(login(user)),
    processDemo: demoUser => dispatch(login(demoUser))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);