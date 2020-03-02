import React, { Component } from "react";
import { Link } from "react-router-dom";


export class Search extends Component {
  constructor(props) {
    super(props);
    debugger
    this.state = {
      search: "",
      results: [],
    
    };
  }
  componentDidMount() {
    this.props.fetchUsers();
    this.props.fetchHashtags();

  }
  componentDidUpdate(prevProps) {
    prevProps.location.pathname !== this.props.location.pathname
      ? this.setState({ search: "", users: [] })
      : null;
  }
  update(field) {
    return e => {
      debugger
      let searched = this.props.users.filter(
        user =>
          user.username.includes(e.target.value) ||
          user.name.includes(e.target.value)
      );
      if (e.target.value === "") {
        searched = [];
      }
      this.setState({ [field]: e.target.value, users: searched });
    };
  }

  render() {
    // debugger
    return (
      <div className="nav-search">
        <input
          className="nav-search-input"
          type="text"
          onChange={this.update("search")}
          value={this.state.search}
          placeholder="search"
        />
        <ul>
          {this.state.results.map(user => {
            return (
              <Link to={`/users/${user.id}`}>
                <li key={user.id}>
                  <div className="nav-search-item">
                    <div className="search-photo">
                      <img src={user.photoUrl} />
                    </div>

                    <div className="search-info'">
                      <div className="search-username">{user.username}</div>
                      <div className="search-fullname">{user.full_name}</div>
                    </div>
                  </div>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    );
  }
}



export default Search
