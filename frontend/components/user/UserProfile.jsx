import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { fetchUser, followUser, unfollowUser } from '../../actions/user_actions'
import { connect } from 'react-redux'
import Loader from '../Loader'
import { fetchUserPosts } from '../../actions/post_actions'
const UserProfile = ({fetchUser, followUser, unfollowUser, fetchUserPosts, users: {currentUser, profile, loading}, match, posts:{posts} }) => {
  //
  useEffect(() => {
    fetchUserPosts(parseInt(match.params.id))
    fetchUser(parseInt(match.params.id))
  }, [fetchUser, fetchUserPosts])
  let displayGallery = Object.values(posts).reverse().map(post =>
        <div className="gallery-item" tabindex="0"> 

          <img src={post.photoUrl} className="gallery-image" alt=""/>

          <div className="gallery-item-info">

            <ul>
              <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true"></i> {post.likes.length}</li>
              <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true"></i> 2</li>
            </ul>

          </div>
        </div>

    )
  let postCount = Object.keys(posts).length
  
  return (
    <Fragment>
      {posts && profile && !loading ? (
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
                        <button onClick={e => unfollowUser(profile.id)} className="btn profile-edit-btn">
                          Unfollow
                        </button>
                      ) : (
                        <button onClick={e => followUser(profile.id)} className="btn profile-edit-btn">
                          Follow
                        </button>
                      )}
                    </Fragment>
                  ) : (
                    <button className="btn profile-edit-btn">
                      Edit Profile
                    </button>
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
                  <span className="profile-real-name">Jane Doe</span>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit
                    📷✈️🏕️ Lorem ipsum dolor sit, amet consectetur adipisicing
                    elit 📷✈️🏕️ Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit 📷✈️🏕️
                  </p>
                </div>
              </div>
            </div>
            <div className="posts-section">
              <div className="gallery">{displayGallery}</div>
            </div>
          </div>
        </Fragment>
      ) : (
        <Loader />
      )}
    </Fragment>
  );
}
UserProfile.propTypes = {
  fetchUser: PropTypes.func.isRequired,
  fetchUserPosts: PropTypes.func.isRequired,
  followUser: PropTypes.func.isRequired,
  unfollowUser: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
}

const mapStateToProps = state => {
  return {
    users: state.entities.users,
    posts: state.entities.posts
  };
}

export default connect(mapStateToProps, {fetchUser, unfollowUser, followUser, fetchUserPosts})(UserProfile)
