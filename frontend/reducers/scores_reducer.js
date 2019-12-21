import {
  RECEIVE_SCORE,
  RECEIVE_ALL_SCORES
} from "../actions/score_actions";
import merge from "lodash/merge";

const scoresReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_ALL_SCORES:
      return merge({}, oldState, action.scores);

    case RECEIVE_SCORE:
      return merge({}, oldState, { [action.score.id]: action.score });
    default:
      return oldState;
  }
};
export default scoresReducer;
