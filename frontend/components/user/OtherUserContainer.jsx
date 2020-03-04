

// import {
//   fetchUser,
//   unfollowUser,
//   followUser
// } from "../../actions/user_actions";

const msp = (state, ownProps) => {
  return {
    profile: state.entities.users.users[parseInt(ownProps.match.params.id)],
    // posts: state.entities.posts.posts,
    currentUser: state.entities.users.currentUser
  };
};

const mdp = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
  followUser: id => dispatch(followUser(id)),
  unfollowUser: id => dispatch(unfollowUser(id))
  // fetchUserPosts: (id) => dispatch(fetchUserPosts(id))
});

export default connect(msp, mdp)(OtherUser);
