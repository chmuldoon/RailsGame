import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PostIndexItem from "./PostIndexItem";
import { connect } from "react-redux";
import { fetchAllPosts } from "../../actions/post_actions";
const PostIndex = ({index, fetchAllPosts}) => {
  useEffect(() => {
    fetchAllPosts()
  },[fetchAllPosts])
  let posts = Object.keys(index).reverse().map(key =>

      <PostIndexItem key={key} post={index[key]}/>
    )
  return(
    <Fragment>
      {posts}
    </Fragment>
  )
}
PostIndex.propTypes = {
  fetchAllPosts: PropTypes.func.isRequired,
  index: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  index: state.entities.posts.posts
});
export default connect( mapStateToProps, {fetchAllPosts} )(PostIndex);