
import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  fetchUser,
  followUser,
  unfollowUser
} from "../../actions/user_actions";
import { fetchUserPosts } from "../../actions/post_actions";


class UserShow extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){

  }
  render() {
    return (
      <Fragment>
        {currentUser && posts && profile && !loading ? (
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
                            onClick={e => unfollowUser(profile.id)}
                            className="btn profile-edit-btn"
                          >
                            Unfollow
                          </button>
                        ) : (
                          <button
                            onClick={e => followUser(profile.id)}
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
                  {displayGallery}
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
}
const mapStateToProps = state => {
  return {
    currentUser: state.entities.users.currentUser,
    loading: state.entities.users.loading,
    profile: state.entities.users.profile,

    posts: state.entities.posts
  };
};
const mapDispatchToProps
