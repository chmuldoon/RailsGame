import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PostIndexItem from "./PostIndexItem";
const PostIndex = ({}) => {
  let posts = [0,1,2,3,4,5].map(post =>
      <PostIndexItem number={post}/>
    )
  return(
    <Fragment>
      {posts}
    </Fragment>
  )
}
PostIndex.propTypes = {};

export default PostIndex;