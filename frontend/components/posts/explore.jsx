import React, { useEffect, Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchExplore } from '../../actions/post_actions'
import { ProfilePhoto } from '../splash/PostIndexItem'
import { followUser, unfollowUser } from '../../actions/user_actions'
import { Link } from 'react-router-dom'
import CurrentUser from '../user/CurrentUser'
import PostShow from '../splash/PostShow'
const Explore = ({explore, exploreProfiles, fetchExplore, unfollowUser, followUser}) => {
  useEffect(() => {
    fetchExplore();
  }, [fetchExplore]);
  const [displayModal, toggleModal] = useState(false);
  const [CurrentPost, setCurrentPost] = useState(null);

  let displayGallery = Object.values(explore)
    .map(post => (
      // <UserProfile photoUrl={post.photoUrl} likes={post.likes.length}/>
      <div className="gallery-item" tabindex="0">
        <img src={post.photoUrl} className="gallery-image" alt="" />

        <div
          className="gallery-item-info"
          onClick={() => {
            setCurrentPost(post.id)
            toggleModal(!displayModal);
          }}
        >
          <ul>
            <li className="gallery-item-likes">
              <span className="visually-hidden">Likes:</span>
              <i className="fas fa-heart" aria-hidden="true"></i>{" "}
              {post.likes.length}
            </li>
            <li className="gallery-item-comments">
              <span className="visually-hidden">Comments:</span>
              <i className="fas fa-comment" aria-hidden="true"></i>{" "}
              {post.comments.length}
            </li>
          </ul>
        </div>
      </div>
    ));
  let postCount = Object.keys(explore).length;
  let space = [];
  if (postCount < 3) {
    space = new Array(3 - postCount).fill(0);
  }
  let extras = space.map(spot => (
    <div className="gallery-item" tabindex="0">
      <img src="https://www.colorhexa.com/ececec.png" className="gallery-image" alt="" />
    </div>
  ));
  return (
    <Fragment>
      <div className="user-page">
        <p>Explore Users</p>
        <div className="suggestedUsers">
          {exploreProfiles.length ? (
            exploreProfiles.map(user => (
              <div className="suggestedUser">
                <Link to={`/users/${user.id}`}>
                  <ProfilePhoto
                    style={{ width: "64px", height: "64px" }}
                    src={user.photoUrl}
                  />
                </Link>
                <Link to={`/users/${user.id}`}>{user.username}</Link>
                {user.hasFollowed ? (
                  <div className="EditSubmit">
                    <button
                      style={{ color: "black", backgroundColor: "white" }}
                      onClick={e => unfollowUser(user.id)}
                    >
                      Following
                    </button>
                  </div>
                ) : (
                  <div className="EditSubmit">
                    <button onClick={e => followUser(user.id)}>Follow</button>
                  </div>
                )}
              </div>
            ))
          ) : (
            <Fragment></Fragment>
          )}
        </div>
        <p>Explore Posts</p>

        <div className="posts-section">
          <div className="gallery">
            {displayGallery}
            {extras}
          </div>
        </div>
      </div>
      {displayModal && (
        <div
          className="modal-background"
          onClick={() => toggleModal(!displayModal)}
        >
          <div className="modal-child" onClick={e => e.stopPropagation()}>
            <PostShow
              kind={"explore"} post={explore[CurrentPost]}
            />
          </div>
        </div>
      )}
    </Fragment>
  );
}

Explore.propTypes = {
  explore: PropTypes.object.isRequired,
  fetchExplore: PropTypes.func.isRequired,
  followUser: PropTypes.func.isRequired,
  unfollowUser: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  explore: state.entities.posts.posts,
  exploreProfiles: Object.values(state.entities.users.users).filter(user => !user.hasFollowed && user.id !== state.session.id) 
});

export default connect(mapStateToProps, { fetchExplore, followUser, unfollowUser })(Explore)
