import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchUsers, fetchHashtags } from "../../actions/user_actions";
import Search from "./Search";
const mapStateToProps = (state, ownProps) => {
  debugger;
  return {
    users: state.entities.users.users,
    hashtags: state.entities.users.hashtags
  };
};

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),
  fetchHashtags: () => dispatch(fetchHashtags())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));