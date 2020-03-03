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
          {results.length > 0 ? (
            <ul>
              {results.map(item =>
                item.type === "user" ? (
                  <Link to={`/users/${item.id}`}>
                    <li key={item.id}>
                      <div className="nav-search-item">
                        <div className="search-photo">
                          <img src={item.photoUrl} />
                        </div>

                        <div className="search-info'">
                          <div className="search-username">{item.username}</div>
                          <div className="search-fullname">{item.name}</div>
                        </div>
                      </div>
                    </li>
                  </Link>
                ) : (
                  <Link to={`/hashtags/${item.id}`}>
                    <li key={item.id}>
                      <div className="nav-search-item">
                        <div className="search-photo">
                          <img src="https://kazcm.com/wp-content/uploads/2018/02/Hashtag.jpg" />
                          
                        </div>

                        <div className="search-info'">
                          <div className="search-username">{item.content}</div>
                          <div className="search-fullname">
                            {item.postCount === 1 ? "1 post" : `${item.postCount} posts`}
                          </div>
                        </div>
                      </div>
                    </li>
                  </Link>
                )
              )}
            </ul>
          ) : (
            <Fragment></Fragment>
          )}
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

