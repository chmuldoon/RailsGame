import React from 'react';
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
      <div>
        <title>Game</title>

        <div>
          <div>
            <div>
              {/* <div className="demo-div">
                <button
                  type="button"
                  onClick={this.handleDemo.bind(this)}
                  className="demo-button"
                >
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
  
                        placeholder="username"
                      />
                    </div>

                    <div>
                      <input
                        type="password"
                        value={this.state.password}
                        onChange={this.update("password")}
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
          <div>
            {this.props.navLink}
          </div>
        </div>
      </div>
    );
  }
}
export default LoginForm;
