import NewPost from "./NewPost";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createPost } from "../../actions/post_actions";


const mapStateToProps = state => ({
  post: {caption: '', author_id: state.session.id}
});
const mapDispatchToProps = dispatch => ({
  createPost: post => dispatch(createPost(post))
  // closeModal: () => dispatch(closeModal())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NewPost)
);
