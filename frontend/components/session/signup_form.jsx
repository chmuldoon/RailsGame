import React from "react";
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
      <div>
        <title>Game</title>
        <div>
          <div>
            <div>
              {/* <div>
                <button type="button" onClick={this.handleDemo.bind(this)}>
                  Try our Demo User
                </button>
              </div> */}

              <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                  <div>
                    <div>
                      <input
                        type="text"
                        value={this.state.username}
                        onChange={this.update("username")}
                        // className="login-input"
                        placeholder="username"
                      />
                    </div>

                    <div className="session-inputs">
                      <input
                        type="password"
                        value={this.state.password}
                        onChange={this.update("password")}
                        // className="login-input"
                        placeholder="password"
                      />
                    </div>
                    <div>
                      <input type="submit" value="Sign Up" />
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
      </div>
    );
  }
}
export default SignupForm;
