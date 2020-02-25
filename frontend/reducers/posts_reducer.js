import { CREATE_POST, DELETE_POST, RECEIVE_POSTS_BY_HASHTAG, RECEIVE_ALL_POSTS, RECEIVE_POST, RECEIVE_USER_POSTS, RECEIVE_FEED, RECEIVE_EXPLORE } from "../actions/post_actions";

const initialState = {
  post: null,
  posts: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case RECEIVE_USER_POSTS:
    case RECEIVE_ALL_POSTS:
    case RECEIVE_EXPLORE:
    case RECEIVE_FEED:
    case RECEIVE_POSTS_BY_HASHTAG:
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