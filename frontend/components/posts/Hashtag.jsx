import React, { useEffect, Fragment, useState, useRef } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPostsByHashtag } from "../../actions/post_actions";
import PostShow from "../splash/PostShow";
import Loader from "../Loader";
import { fetchHashtags, fetchHashtag } from "../../actions/user_actions";
const Hashtag = ({ match, explore, hashtag, loading, exploreIdx, fetchPostsByHashtag, fetchHashtag }) => {
  useEffect(() => {
    
    let id = parseInt(match.params.id);
    fetchHashtag(id);
    fetchPostsByHashtag(id);
  }, [fetchPostsByHashtag, fetchHashtag]);
  const [displayModal, toggleModal] = useState(false);
  const [CurrentPost, setCurrentPost] = useState(null);
  let displayGallery = Object.values(explore).map(post => (
    // <UserProfile photoUrl={post.photoUrl} likes={post.likes.length}/>
    // className="gallery-item"
    // tabindex="0"
    <div  >
      <img src={post.photoUrl}  alt="" />

      <div
        className="gallery-item-info"
        onClick={() => {
          setCurrentPost(post.id);
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
    <div className="gallery-item" tabindex="0"></div>
  ));
  debugger
  return (
    <Fragment>
      {explore && hashtag ? (
        <Fragment>
          <div className="user-page">
            <p
              style={{
                fontWeight: "500",
                fontSize: "48px",
                marginTop: "30px",
                marginBottom: "30px"
              }}
            >
              {hashtag.hashtag.content}
            </p>
            <div >
              {/* className="gallery" */}
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <div>
                  {displayGallery}
                  {extras}
                </div>
              </div>
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
                <PostShow
                  kind={`hashtag${parseInt(match.params.id)}`}
                  post={explore[CurrentPost]}
                />
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
      ) : (
        <Loader />
      )}
    </Fragment>
  );
};

Hashtag.propTypes = {
  explore: PropTypes.object.isRequired,
  fetchPostsByHashtag: PropTypes.func.isRequired
};
const mapStateToProps = state => {
  let explorePosts = Object.values(state.entities.posts.posts)
  let explore = {};
  explorePosts.forEach(post => (explore[post.id] = post));
  return {
    hashtag: state.entities.users.hashtag,
    loading: state.entities.users.loading,
    explore,
    exploreIdx: explorePosts.map(post => post.id),
  };
};

export default connect(mapStateToProps, { fetchPostsByHashtag, fetchHashtag })(Hashtag);
