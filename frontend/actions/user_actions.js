import * as UserApiUtil from "../util/user_api_util";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_CURRENT_USER_DATA = "RECEIVE_CURRENT_USER_DATA";
export const RECEIVE_HASHTAGS = "RECEIVE_HASHTAGS";



export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_USER = "RECEIVE_USER";
// export const RECEIVE_FOLLOWS = "RECEIVE_FOLLOWS";

export const fetchUser = id => dispatch =>
  UserApiUtil.fetchUser(id).then(user => dispatch(receiveUser(user)));

export const fetchCurrentUser = id => dispatch =>
  UserApiUtil.fetchUser(id).then(user => dispatch(receiveCurrentUser(user)));

export const fetchUsers = () => dispatch =>
  UserApiUtil.fetchUsers().then(users => dispatch(receiveAllUsers(users)));
export const fetchHashtags = () => dispatch =>
    UserApiUtil.fetchHashtags().then(hashtags => dispatch(receiveHashtags(hashtags)));

export const followUser = id => dispatch =>
  UserApiUtil.followUser(id).then(users => dispatch(receiveAllUsers(users)));

export const unfollowUser = id => dispatch =>
  UserApiUtil.unfollowUser(id).then(users => dispatch(receiveAllUsers(users)));
// export const updateUser = user => dispatch => {
//   return UserApiUtil.updateUser(user).then(user => dispatch(receiveUser(user)));
// };
export const updateUser = user => dispatch => {
  return UserApiUtil.updateUser(user).then(users => dispatch(receiveAllUsers(users)));
};

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER_DATA,
  payload: user
});
const receiveAllUsers = users => ({
  type: RECEIVE_ALL_USERS,
  payload: users
});
const receiveHashtags = hashtags => ({
  type: RECEIVE_HASHTAGS,
  payload: hashtags
});
const receiveUser = user => ({
  type: RECEIVE_USER,
  payload: user
});
