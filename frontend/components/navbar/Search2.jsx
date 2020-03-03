import React, { useState, useEffect, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchUsers, fetchHashtags } from '../../actions/user_actions'
import { Link } from 'react-router-dom'
const Search2 = (props) => {
  // useEffect(() => {
  //   fetchUsers();
  //   fetchHashtags();

  // },[fetchUsers, fetchHashtags])
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
  const total = props.users.concat(props.hashtags).sort(function(a, b) {
    const nameA = a.username.toLowerCase(),
      nameB = b.username.toLowerCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });
  const results = !searchTerm
    ? []
    : total.filter(person =>
        person.username.toLowerCase().includes(searchTerm.toLocaleLowerCase())
      );
  debugger
  return (
    <Fragment>
      {props.users.length ? (
        <div className="nav-search">
          <input
            className="nav-search-input"
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleChange}
          />
          {results.length > 0 ?
            <ul>
              {results.map(item =>
                item.type === "user" ? (
                  <li>
                    <Link to={`/users/${item.id}`}>{item.username}</Link>
                  </li>
                ) : (
                  <li>
                    <Link to={`/hashtags/${item.id}`}>{item.content}</Link>
                  </li>
                )
              )}
            </ul> : <Fragment></Fragment>
          }
        </div>
      ) : (
        <Fragment></Fragment>
      )}
    </Fragment>
  );
}

Search2.propTypes = {
  users: PropTypes.array.isRequired,
  hashtags: PropTypes.array.isRequired,
  fetchUsers: PropTypes.func.isRequired,
  fetchHashtags: PropTypes.func.isRequired
};
const mapStateToProps = (state) => {
  return {
    users: Object.values(state.entities.users.users),
    hashtags: Object.values(state.entities.users.hashtags)
  };
};

export default connect(mapStateToProps, { fetchUsers, fetchHashtags })(Search2)

