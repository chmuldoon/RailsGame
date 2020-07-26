import React, { useEffect, Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchExplore, clearPosts } from '../../actions/post_actions'
import { ProfilePhoto } from '../splash/PostIndexItem'
import { followUser, unfollowUser } from '../../actions/user_actions'
import { Link } from 'react-router-dom'
import CurrentUser from '../user/CurrentUser'
import PostShow from '../splash/PostShow'
const Explore = ({explore, exploreIdx, clearPosts, exploreProfiles, fetchExplore, unfollowUser, followUser}) => {
  useEffect(() => {
    fetchExplore();
    return () => {
      clearPosts()
    }
  }, [fetchExplore]);
  const [displayModal, toggleModal] = useState(false);
  const [CurrentPost, setCurrentPost] = useState(null);
  let displayGallery = exploreIdx.map(idx => (
    <div
      className="Explore-Post"
      onClick={() => {
        toggleModal(!displayModal)
        setCurrentPost(idx)
      }}
    >
      <div className="Overlay" id="profile">
        <p style={{ zIndex: 8 }}>
          {`${explore[idx].likeCount}`} <i className="fas fa-heart" /> 
          {` ${explore[idx].comments.length}`}
          {"  "} <i className="fas fa-comment"></i>
        </p>
      </div>
      <img width="292px" height="292x" src={explore[idx].photoUrl} />
      {/* <img src={post.photoUrl} /> */}
    </div>
    // <UserProfile photoUrl={post.photoUrl} likes={post.likes.length}/>
    // <div className="gallery-item" style={{width: "30%", margin:"5px"}} tabindex="0">
    //   <img src={explore[idx].photoUrl} className="gallery-image" alt="" />

    //   <div
    //     className="gallery-item-info"
    //     onClick={() => {
    //       setCurrentPost(explore[idx].id);
    //       toggleModal(!displayModal);
    //     }}
    //   >
    //     <ul>
    //       <li className="gallery-item-likes">
    //         <span className="visually-hidden">Likes:</span>
    //         <i className="fas fa-heart" aria-hidden="true"></i>{" "}
    //         {explore[idx].likes.length}
    //       </li>
    //       <li className="gallery-item-comments">
    //         <span className="visually-hidden">Comments:</span>
    //         <i className="fas fa-comment" aria-hidden="true"></i>{" "}
    //         {explore[idx].comments.length}
    //       </li>
    //     </ul>
    //   </div>
    // </div>
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
      <title>Explore!</title>

      <div className="user-page">
        <p style={{ fontWeight: "500", fontSize: "48px", marginTop: "30px" }}>
          Explore Users
        </p>
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
                <Link
                  to={`/users/${user.id}`}
                  style={{
                    fontWeight: "500",
                    color: "black",
                    cursor: "pointer"
                  }}
                >
                  {user.username}
                </Link>
                {/* <p>{user.followers.length}</p> */}
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
                  <div>
                    <button onClick={e => followUser(user.id)}>Follow</button>
                  </div>
                )}
              </div>
            ))
          ) : (
            <Fragment></Fragment>
          )}
        </div>
        <p
          style={{
            fontWeight: "500",
            fontSize: "48px",
            marginTop: "30px",
            marginBottom: "30px"
          }}
        >
          Explore Posts
        </p>
        {/* className="posts-section" */}
        <div>
          {/* className="gallery" */}
          <div className="Explore-Whole">{displayGallery}</div>
        </div>
      </div>
      {displayModal && (
        <div
          className="modal-background"
          onClick={() => toggleModal(!displayModal)}
        >
          <div
            style={{ display: "flex" }}
            className="modal-child"
            onClick={e => e.stopPropagation()}
          >
            {exploreIdx.indexOf(CurrentPost) !== 0 && (
              <i
                onClick={() =>
                  setCurrentPost(
                    exploreIdx[exploreIdx.indexOf(CurrentPost) - 1]
                  )
                }
                style={{
                  margin: "10px",
                  cursor: "pointer",
                  height: "15px",
                  color: "darkGrey",
                  fontSize: "30px",
                  marginTop: "25%"
                }}
                class="fas fa-arrow-left"
              ></i>
            )}
            <PostShow kind={"explore"} post={explore[CurrentPost]} />
            {exploreIdx.indexOf(CurrentPost) !== exploreIdx.length - 1 && (
              <i
                onClick={() =>
                  setCurrentPost(
                    exploreIdx[exploreIdx.indexOf(CurrentPost) + 1]
                  )
                }
                style={{
                  margin: "10px",
                  cursor: "pointer",
                  height: "15px",
                  color: "darkGrey",
                  fontSize: "30px",
                  marginTop: "25%",
                  zIndex: "10"
                }}
                class="fas fa-arrow-right"
              ></i>
            )}
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
const mapStateToProps = state => {
  // let explorePosts = Object.values(state.entities.posts.posts).filter(
  //   post => post.author_id !== state.session.id && !post.followedPost
  // );
  let explorePosts = Object.values(state.entities.posts.posts);
  let exploreIdx = explorePosts.map(post => post.id).reverse()
  let explore = {}
  explorePosts.forEach(post => explore[post.id] = post)
  return {
  explore,
  exploreIdx,
  exploreProfiles: Object.values(state.entities.users.users).filter(user => !user.hasFollowed && user.id !== state.session.id) 
}
};

export default connect(mapStateToProps, {
  fetchExplore,
  clearPosts,
  followUser,
  unfollowUser,
})(Explore);
