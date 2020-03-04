import PropTypes from "prop-types";
import { connect } from "react-redux";
import UserProfile from "./UserProfile";
import { fetchUserPosts } from "../../actions/post_actions";
import { fetchUser, unfollowUser, followUser } from "../../actions/user_actions";
import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
import Loader from "../Loader";

// import PostShowContainer from '../posts/post_show_container';

class OtherUser extends Component {
  constructor(props) {
    super(props);
    // debugger
    this.fetchUser = this.props.fetchUser.bind(this);
    this.followUser = this.props.followUser.bind(this);
    this.unfollowUser = this.props.unfollowUser.bind(this);


  }
  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
      // this.fetchPost(this.props.post.id)
    };
  }

  componentDidMount() {
    this.fetchUser(parseInt(this.props.match.params.id));
    // this.props.fetchUserPosts(parseInt(this.props.match.params.id));
  }

  render() {
    const { profile, currentUser, loading } = this.props;

    if (!profile) return null;
    let postCount = profile.posts.length;
    let space = [];
    if (postCount < 3) {
      space = new Array(3 - postCount).fill(0);
    }
    let extras = space.map(spot => (
      <div className="gallery-item" tabindex="0"></div>
    ));
    return (
      <Fragment>
        {currentUser && profile && !loading ? (
          <Fragment>
            <div className="user-page">
              <div className="UserProfile">
                <div className="profile">
                  <div className="profile-image">
                    <img src={profile.photoUrl} />
                  </div>

                  <div className="profile-user-settings">
                    <h1 className="profile-user-name">{profile.username}</h1>
                    {currentUser.id !== profile.id ? (
                      <Fragment>
                        {profile.hasFollowed ? (
                          <button
                            onClick={e =>
                              this.unfollowUser(profile.id)
                            }
                            className="btn profile-edit-btn"
                          >
                            Unfollow
                          </button>
                        ) : (
                          <button
                            onClick={e =>
                              this.followUser(profile.id)
                            }
                            className="btn profile-edit-btn"
                          >
                            Follow
                          </button>
                        )}
                      </Fragment>
                    ) : (
                      <Link to="/edit">
                        <button className="btn profile-edit-btn">
                          Edit Profile
                        </button>
                      </Link>
                    )}

                    <button
                      className="btn profile-settings-btn"
                      aria-label="profile settings"
                    >
                      <i className="fas fa-cog" aria-hidden="true"></i>
                    </button>
                  </div>

                  <div className="profile-stats">
                    <ul>
                      <li>
                        <span className="profile-stat-count">{postCount}</span>{" "}
                        posts
                      </li>
                      <li>
                        <span className="profile-stat-count">
                          {profile.followers.length}
                        </span>{" "}
                        followers
                      </li>
                      <li>
                        <span className="profile-stat-count">
                          {profile.followings.length}
                        </span>{" "}
                        following
                      </li>
                    </ul>
                  </div>

                  <div className="profile-bio">
                    <span className="profile-real-name">{profile.name}</span>
                    <p>{profile.bio}</p>
                  </div>
                </div>
              </div>
              <div className="posts-section">
                <div className="gallery">
                  {profile.posts.reverse().map(post => (
                    <div className="gallery-item" tabindex="0">
                      <img src={post.photo} className="gallery-image" alt="" />

                      <div className="gallery-item-info">
                        <ul>
                          <li className="gallery-item-likes">
                            <span className="visually-hidden">Likes:</span>
                            <i
                              className="fas fa-heart"
                              aria-hidden="true"
                            ></i>{" "}
                            {post.likeCount}
                          </li>
                          <li className="gallery-item-comments">
                            <span className="visually-hidden">Comments:</span>
                            <i
                              className="fas fa-comment"
                              aria-hidden="true"
                            ></i>{" "}
                            {post.commentCount}
                          </li>
                        </ul>
                      </div>
                    </div>
                  ))}
                  {extras}
                </div>
              </div>
            </div>
          </Fragment>
        ) : (
          <Loader />
        )}
      </Fragment>
    );
  }
};

// export default OtherUser;
const msp = (state, ownProps) => {
  return {
    profile: state.entities.users.users[parseInt(ownProps.match.params.id)],
    // posts: state.entities.posts.posts,
    currentUser: state.entities.users.currentUser
  };
};

const mdp = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
  followUser: id => dispatch(followUser(id)),
  unfollowUser: id => dispatch(unfollowUser(id))
  // fetchUserPosts: (id) => dispatch(fetchUserPosts(id))
});

export default connect(msp, mdp)(OtherUser);


