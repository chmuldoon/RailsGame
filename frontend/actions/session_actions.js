import * as APIUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  };
};

export const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const signup = user => dispatch =>
  APIUtil.signup(user).then(
    user => {
      dispatch(receiveCurrentUser(user));
    },
    err => dispatch(receiveSessionErrors(err.responseJSON))
  );

export const login = user => dispatch =>
  APIUtil.login(user).then(
    user => dispatch(receiveCurrentUser(user)),
    err => dispatch(receiveSessionErrors(err.responseJSON))
  );

export const logout = () => dispatch =>
  APIUtil.logout().then(() => dispatch(logoutCurrentUser()));

  // export const update = (user, highscore) => dispatch =>
  //   APIUtil.updateHighScore(user, highscore).then(
  //     () => dispatch(receiveCurrentUser(user)),
  //     // err => dispatch(receiveErrors(err.response.data))
  //   );

  // export const fetchHighscores = () => dispatch =>
  //   APIUtil.fetchHighscores().then(scores =>
  //     dispatch(receiveAllScores(scores))
  //   );