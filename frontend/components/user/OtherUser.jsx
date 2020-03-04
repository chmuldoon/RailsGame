import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import UserProfile from "./UserProfile";
import { fetchUserPosts } from "../../actions/post_actions";
import { fetchUser } from "../../actions/user_actions";
const OtherUser = ({ profile, posts }) => {
  useEffect(() => {
    debugger;
    // fetchUser(userId);
    // fetchUserPosts(userId);
    fetchUserPosts(parseInt(match.params.id));
    fetchUser(parseInt(match.params.id));
  });
  return (
    <Fragment>
      <UserProfile profile={profile} posts={posts} />
    </Fragment>
  );
};

OtherUser.propTypes = {
  fetchUser: PropTypes.func.isRequired,
  fetchUserPosts: PropTypes.func.isRequired
};
const mapStateToProps = state => {
  return {
    profile: state.entities.users.profile,
    posts: state.entities.posts.posts
  };
};

export default connect(mapStateToProps, { fetchUser, fetchUserPosts })(
  OtherUser
);
