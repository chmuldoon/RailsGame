import PropTypes from "prop-types";
import { connect } from "react-redux";
import UserProfile from "./UserProfile";
import { fetchUserPosts } from "../../actions/post_actions";
import { fetchUser, unfollowUser, followUser } from "../../actions/user_actions";
import React, { Component, Fragment, useState } from 'react'
import { Link, withRouter } from 'react-router-dom';
import Loader from "../Loader";
import PostShow from "../splash/PostShow";
// import PostShowContainer from '../posts/post_show_container';
class OtherUser extends Component {
  constructor(props) {
    super(props);
    this._isMounted
    this.fetchUser = this.props.fetchUser.bind(this);
    this.followUser = this.props.followUser.bind(this);
    this.unfollowUser = this.props.unfollowUser.bind(this);
    this.fetchUserPosts = this.props.fetchUserPosts.bind(this);

    this.state = { 
      displayModal: false, 
      CurrentPost: null,
      isLoading: false
    }

  }
  update(form) {
    if(this._isMounted){
      this.setState(form)
    }
  }

  componentDidMount() {
    this._isMounted = true;
    this.fetchUser(parseInt(this.props.match.params.id));
    this.fetchUserPosts(parseInt(this.props.match.params.id));
    setTimeout(() => this.setState({...this.state, isLoading: true}), 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if(parseInt(this.props.match.params.id) !== parseInt(prevProps.match.params.id)){
      this.fetchUser(parseInt(this.props.match.params.id));
      this.fetchUserPosts(parseInt(this.props.match.params.id));
      // setTimeout(() => this.setState({ ...this.state, isLoading: true }), 1000);

    }
  }
  componentWillUnmount(){
    this._isMounted = false;
  }
  render() {
    const { profile, currentUser, loading, posts, postsIdx } = this.props;
    
    if (!profile) return null;
    let thePosts = profile.posts
    let postCount = Object.values(posts).length;

    let space = [];
    if (postCount < 3) {
      space = new Array(3 - postCount).fill(0);
    }
    let extras = space.map(spot => (
      <div className="gallery-item" tabindex="0"></div>
    ));
    return (
      <Fragment>
        {!this.state.isLoading && (
          <div
            style={{
              zIndex: "3",
              position: "absolute",
              backgroundColor: "#ececec",
              width: "100%",
              height: "100%",
              justifyContent: "center"
            }}
          >
            <i
              className="fab fa-instagram"
              style={{
                color: "gray",
                fontSize: "80px",
                marginLeft: "48%",
                marginTop: "150px"
              }}
            ></i>
          </div>
        )}

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
                            onClick={e => this.unfollowUser(profile.id)}
                            className="btn profile-edit-btn"
                          >
                            Unfollow
                          </button>
                        ) : (
                          <button
                            onClick={e => this.followUser(profile.id)}
                            className="btn profile-edit-btn"
                          >
                            Follow
                          </button>
                        )}
                      </Fragment>
                    ) : (
                      <Link
                        style={{
                          decoration: "none",
                          color: "black",
                          cursor: "pointer"
                        }}
                        to="/edit"
                      >
                        <button
                          className="btn profile-edit-btn"
                          style={{ cursor: "pointer" }}
                        >
                          Edit Profile
                        </button>
                      </Link>
                    )}
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
                <div className="Explore-Whole">
                  {postsIdx.map(postIdx => (
                    <div
                      className="Explore-Post"
                      onClick={() =>
                        this.setState({
                          displayModal: true,
                          CurrentPost: posts[postIdx].id
                        })
                      }
                    >
                      <div className="Overlay" id="profile">
                        <p style={{ zIndex: 8 }}>
                          {posts[postIdx].likeCount}{" "}
                          <i className="fas fa-heart" />
                          {posts[postIdx].comments.length}
                          {"  "} <i className="fas fa-comment"></i>
                        </p>
                      </div>
                      <img
                        width="292px"
                        height="292x"
                        src={posts[postIdx].photoUrl}
                      />
                      {/* <img src={post.photoUrl} /> */}
                    </div>
                    // <div className="gallery-item" tabindex="0">
                    //   <img src={posts[postIdx].photoUrl} className="gallery-image" alt="" />

                    //   <div
                    //     className="gallery-item-info"
                    //     onClick={() =>
                    //       this.update({
                    //         CurrentPost: postIdx,
                    //         displayModal: true
                    //       })
                    //     }
                    //   >
                    //     <ul>
                    //       <li className="gallery-item-likes">
                    //         <span className="visually-hidden">Likes:</span>
                    //         <i
                    //           className="fas fa-heart"
                    //           aria-hidden="true"
                    //         ></i>{" "}
                    //         {posts[postIdx].likeCount}

                    //       </li>
                    //       <li className="gallery-item-comments">
                    //         <span className="visually-hidden">Comments:</span>
                    //         <i
                    //           className="fas fa-comment"
                    //           aria-hidden="true"
                    //         ></i>{" "}
                    //         {posts[postIdx].comments.length}
                    //       </li>
                    //     </ul>
                    //   </div>
                    // </div>
                  ))}
                </div>
              </div>
            </div>
          </Fragment>
        ) : (
          <Loader />
        )}
        {this.state.displayModal && (
          <div
            className="modal-background"
            onClick={() =>
              this.update({ CurrentPost: null, displayModal: false })
            }
          >
            <div
              className="modal-child"
              style={{ display: "flex" }}
              onClick={e => {
                e.stopPropagation();
                this.fetchUserPosts(profile.id);
              }}
            >
              {postsIdx.indexOf(this.state.CurrentPost) !== 0 && (
                <i
                  onClick={() =>
                    this.update({
                      CurrentPost:
                        postsIdx[postsIdx.indexOf(this.state.CurrentPost) - 1],
                      displayModal: true
                    })
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
              <PostShow
                kind={profile.id}
                post={posts[this.state.CurrentPost]}
              />
              {postsIdx.indexOf(this.state.CurrentPost) !==
                postsIdx.length - 1 && (
                <i
                  onClick={() =>
                    this.update({
                      CurrentPost:
                        postsIdx[postsIdx.indexOf(this.state.CurrentPost) + 1],
                      displayModal: true
                    })
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
};

// export default OtherUser;
const msp = (state, ownProps) => {
  let ogPosts = state.entities.posts.posts;
  let postsIdx = Object.values(state.entities.posts.posts).map(post => post.id).reverse()
  let posts = {};
  postsIdx.forEach(postId => posts[postId] = ogPosts[postId])
  return {
    profile: state.entities.users.users[parseInt(ownProps.match.params.id)],
    posts,
    postsIdx,
    currentUser: state.entities.users.currentUser
  };
};

const mdp = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
  followUser: id => dispatch(followUser(id)),
  unfollowUser: id => dispatch(unfollowUser(id)),
  fetchUserPosts: (id) => dispatch(fetchUserPosts(id))
});
export default withRouter(connect(msp, mdp)(OtherUser));


