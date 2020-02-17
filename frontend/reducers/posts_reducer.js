import { CREATE_POST, DELETE_POST, RECEIVE_ALL_POSTS, RECEIVE_POST } from "../actions/post_actions";

const initialState = {
  post: null,
  posts: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case RECEIVE_ALL_POSTS:
      // debugger
      return {
        ...state,
        posts: payload,
        loading: false
      }
    case RECEIVE_POST:
      return {
        ...state,
        post: payload,
        loading: false
      }
    case CREATE_POST:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}