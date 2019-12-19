import * as ScoreApiUtil from "../util/score_api_util";
export const RECEIVE_SCORE = "RECEIVE_SCORE";
export const RECEIVE_ALL_SCORES = "RECEIVE_ALL_SCORES";
const receiveAllScores = scores => ({
  type: RECEIVE_ALL_SCORES,
  scores
});
const receiveScore = score => ({
  type: RECEIVE_SCORE,
  score
});
export const createScore = score => dispatch => {
  return ScoreApiUtil.createScore(score).then(score => {
    dispatch(receiveScore(score));
  });
};
export const fetchAllScores = () => dispatch => {
  return ScoreApiUtil.fetchAllScores().then(scores =>
    dispatch(receiveAllScores(scores))
  );
};

