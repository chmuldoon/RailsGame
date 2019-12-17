import { connect } from "react-redux";
import { splash } from "./splash";
import { logout } from "../../actions/session_actions";

const mapStateToProps = ({ session, entities: { users } }) => {
  // debugger
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(splash);
