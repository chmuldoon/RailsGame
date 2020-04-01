import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PostIndexItem from "./PostIndexItem";
import { connect } from "react-redux";
import { fetchAllPosts, fetchFeed } from "../../actions/post_actions";
import NewPostContainer from "../posts/NewPostContainer";
import { fetchUsers } from "../../actions/user_actions";
const PostIndex = ({index, fetchUsers, fetchFeed, fetchAllPosts, posts}) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchAllPosts()
    fetchUsers()
    setTimeout(() => setIsLoading(true), 700);

  },[fetchFeed])
  let thePosts = index.map(key =>
    <PostIndexItem key={key} post={posts[key]}/>
  )
  return (
    <Fragment>
      <title>Clonestagram</title>

      {!isLoading && (
        <div
          style={{
            zIndex: "3",
            position: "fixed",
            backgroundColor: "#ececec",
            width: "100%",
            height: "120%",
            justifyContent: "center"
          }}
        >
          {/* <i
            className="fab fa-instagram"
            style={{
              color: "gray",
              fontSize: "80px",
              marginLeft: "48%",
              marginTop: "150px"
            }}
          ></i> */}
        </div>
      )}
      <div style={{ display: "flex" }}>
        {index.length === 0 ? (
          <Fragment>
            <div className="NoPosts">
              <div style={{ marginTop: "400px" }}>
                Your feed is empty 😭 Make a post or find some people to follow
                using the explore tab or search bar
              </div>
              <NewPostContainer margin={0} />
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <div>{thePosts}</div>
            <div style={{ width: "250px" }}></div>
            {index.length && <NewPostContainer margin={640} />}
          </Fragment>
        )}
      </div>
    </Fragment>
  );
}
PostIndex.propTypes = {
  fetchAllPosts: PropTypes.func.isRequired,
  fetchFeed: PropTypes.func.isRequired,
  index: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  index: Object.values(state.entities.posts.posts)
    .filter(post => post.author_id === state.session.id || post.followedPost)
    .map(post => post.id)
    .reverse(),
  posts: state.entities.posts.posts
});
export default connect( mapStateToProps, {fetchAllPosts, fetchUsers, fetchFeed} )(PostIndex);