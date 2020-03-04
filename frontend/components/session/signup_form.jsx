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
  handleDemo(e) {
    e.preventDefault();
    const demoUser = Object.assign(
      {},
      { username: "DemoUser", password: "DemoUser" }
    );
    this.props.processDemo(demoUser);
  }

  render() {
    return (
      // <Fragment>
      //   <form className="form-signin" onSubmit={this.handleSubmit.bind(this)}>
      //     <h2 className="form-signin-heading">Please Sign up</h2>
      //     <input
      //       type="text"
      //       value={this.state.username}
      //       onChange={this.update("username")}
      //       placeholder="username"
      //     />
      //     <input
      //       type="password"
      //       value={this.state.password}
      //       onChange={this.update("password")}
      //       placeholder="password"
      //     />
      //     <button className="btn btn-lg btn-primary btn-block" type="submit">
      //       Sign up
      //     </button>
      //     {this.props.navLink}
      //   </form>
      // </Fragment>
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
                  {/* dummy inputs */}
                  <div className="session-inputs">
                    <input
                      type="text"
                      value={this.state.email}
                      onChange={this.update("email")}
                      className="login-input"
                      placeholder="Email"
                    />
                  </div>
                  <div className="session-inputs">
                    <input
                      type="text"
                      value={this.state.name}
                      onChange={this.update("name")}
                      className="login-input"
                      placeholder="Full Name"
                    />
                  </div>
                  {/* end of dummys */}

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
                    <input type="submit" value="Sign Up" />
                  </div>

                  <div className="info-links">
                    <p className="info-statement">
                      By singing up, you agree to our
                      <a
                        target="_blank"
                        href="https://help.instagram.com/581066165581870"
                      >
                        {" "}
                        Terms,
                      </a>
                      <a
                        target="_blank"
                        href="https://help.instagram.com/519522125107875"
                      >
                        {" "}
                        Data Policy{" "}
                      </a>
                      and
                      <a
                        target="_blank"
                        href="https://help.instagram.com/1896641480634370?ref=ig"
                      >
                        {" "}
                        Cookies Policy
                      </a>
                      .
                    </p>
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
export default SignupForm;
