import merge from "lodash/merge";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import {
  RECEIVE_USER,
  RECEIVE_ALL_USERS,
} from "../actions/user_actions";

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, {
        [action.currentUser.id]: action.currentUser
      });
    case RECEIVE_ALL_USERS:
      return merge({}, state, action.users);
    case RECEIVE_USER:
      return merge({}, state, { [action.user.id]: action.user });

    default:
      return state;
  }
};
export default usersReducer;
