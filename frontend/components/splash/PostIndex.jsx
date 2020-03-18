import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PostIndexItem from "./PostIndexItem";
import { connect } from "react-redux";
import { fetchAllPosts, fetchFeed } from "../../actions/post_actions";
import NewPostContainer from "../posts/NewPostContainer";
const PostIndex = ({index, fetchFeed, fetchAllPosts}) => {
  useEffect(() => {
    fetchAllPosts()
  },[fetchFeed])
  let posts = index.reverse().map(key =>

      <PostIndexItem key={key} post={key}/>
    )
  return (
    <div style={{ display: "flex" }}>
      {index.length === 0 ? <NewPostContainer margin={-110} /> :
      <Fragment>
        <div>{posts}</div>
        <div style={{ width: "250px" }}></div>
        <NewPostContainer margin={640}/>
      </Fragment>
      }
    </div>
  );
}
PostIndex.propTypes = {
  fetchAllPosts: PropTypes.func.isRequired,
  fetchFeed: PropTypes.func.isRequired,
  index: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  index: Object.values(state.entities.posts.posts).filter(post => post.author_id === state.session.id || post.followedPost)
});
export default connect( mapStateToProps, {fetchAllPosts, fetchFeed} )(PostIndex);