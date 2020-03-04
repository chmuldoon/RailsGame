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
  handleDemo(e) {
    e.preventDefault();
    // debugger
    const demoUser = Object.assign({}, { username: 'DemoUser', password: 'DemoUser' })
    this.props.processDemo(demoUser)

  }
  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }
  render() {
    return (
        <div className="notiphone">
          <div className="sessionbox">
            <h1 className="logo">Dronestagram</h1>
            <div className="signupbox">
              <h2 className="signup-message">
                Sign up to see photos and videos from your fellow clones.
              </h2>
              <div className="demo-div">
                <button
                  type="button"
                  onClick={this.handleDemo.bind(this)}
                  className="demo-button"
                >
                  Try our Demo User
                </button>
              </div>

              <h3 className="or">──────── or ────────</h3>

              <div className="signupbox-info">
                <form onSubmit={this.handleSubmit.bind(this)}>
                  <div>
                    <div className="session-inputs">
                      <input
                        type="text"
                        value={this.state.username}
                        onChange={this.update("username")}
                        className="login-input"
                        placeholder="username"
                      />
                    </div>

                    <div className="session-inputs">
                      <input
                        type="password"
                        value={this.state.password}
                        onChange={this.update("password")}
                        className="login-input"
                        placeholder="password"
                      />
                    </div>
                    <div className="session-submit">
                      <input type="submit" value="Login" />
                    </div>

                    <br />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="session-type-switcher-container">
            {this.props.navLink}
          </div>
        </div>
    );
  }
}
export default LoginForm;
