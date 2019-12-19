import {
  RECEIVE_SCORE,
  RECEIVE_ALL_SCORES
} from "../actions/score_actions";
import merge from "lodash/merge";

const scoresReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_SCORES:
      return merge({}, oldState, action.scores);

    case RECEIVE_SCORE:
      return merge({}, state, { [action.score.id]: action.score });
    default:
      return state;
  }
};
export default scoresReducer;
