import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { signup, login } from "../../actions/session_actions";
import SignupForm from "./signup_form";

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "signup",
    navLink: (
      <p style={{ margin: "15px" }}>
        Have an account?{" "}
        <Link
          // className="switchLink"
          style={{ textDecoration: "none" }}
          to="/login"
        >
          Log in
        </Link>
      </p>
    )
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => dispatch(signup(user)),
    // processDemo: demoUser => dispatch(login(demoUser))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
