import * as UserApiUtil from "../util/user_api_util";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_USER = "RECEIVE_USER";
// export const RECEIVE_FOLLOWS = "RECEIVE_FOLLOWS";

export const fetchUser = id => dispatch =>
  UserApiUtil.fetchUser(id).then(user => dispatch(receiveUser(user)));

export const fetchUsers = () => dispatch =>
  UserApiUtil.fetchUsers().then(users => dispatch(receiveAllUsers(users)));

// export const updateUser = user => dispatch => {
//   return UserApiUtil.updateUser(user).then(user => dispatch(receiveUser(user)));
// };

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user: user
});
const receiveAllUsers = users => ({
  type: RECEIVE_ALL_USERS,
  users
});
const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});
