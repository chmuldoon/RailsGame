import merge from "lodash/merge";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import {
  RECEIVE_USER,
  RECEIVE_ALL_USERS,
  RECEIVE_CURRENT_USER_DATA,
} from "../actions/user_actions";
const initialState = {
  currentUser: null,
  profile: null,
  users: [],
  loading: true,
  error: {}
};
export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case RECEIVE_CURRENT_USER_DATA:
      return {
        ...state,
        currentUser: payload,
        loading: false
      }
    case RECEIVE_ALL_USERS:
      // debugger
      return {
        ...state,
        users: payload,
        loading: false
      }
    case RECEIVE_USER:
      return {
        ...state,
        profile: payload,
        loading: false
      };

    default:
      return state;
  }
};