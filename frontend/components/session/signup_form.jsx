import React, { Fragment } from "react";
import { Link } from "react-router-dom";
class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }
  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }
  // handleDemo(e) {
  //   e.preventDefault();
  //   const demoUser = Object.assign(
  //     {},
  //     { username: "DemoMan", password: "DemoUser" }
  //   );
  //   this.props.processDemo(demoUser);
  // }

  render() {
    return (
      <Fragment>
        <div className="imageLocation"></div>
        <form className="form-signin" onSubmit={this.handleSubmit.bind(this)}>
          <h2 className="form-signin-heading">Please Sign up</h2>
          <input
            type="text"
            value={this.state.username}
            onChange={this.update("username")}
            placeholder="username"
          />
          <input
            type="password"
            value={this.state.password}
            onChange={this.update("password")}
            placeholder="password"
          />
          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Sign up
          </button>
          {this.props.navLink}
        </form>
      </Fragment>
    );
  }
}
export default SignupForm;
