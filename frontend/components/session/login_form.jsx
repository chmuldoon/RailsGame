import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
class LoginForm extends React.Component {
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
  // handleDemo(e) {
  //   e.preventDefault();
  //   // debugger
  //   const demoUser = Object.assign({}, { username: 'dali', password: 'DemoUser' })
  //   this.props.processDemo(demoUser)

  // }
  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }
  render() {
    return (
      <Fragment>
        <div className="imageLocation"></div>
        <form className="form-signin" onSubmit={this.handleSubmit.bind(this)}>
          <h2 className="form-signin-heading">Please login</h2>
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
            Login
          </button>
          {this.props.navLink}
        </form>
      </Fragment>
    );
  }
}
export default LoginForm;
