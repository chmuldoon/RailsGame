import HighScore from "./highscore";
import { connect } from "react-redux";
import React from "react";
import { fetchAllScores } from "../../actions/score_actions";

const mapStateToProps = (state) => {
  // debugger
  // let highscores = {}
  let scores = Object.values(state.entities.scores).sort((a, b) =>
      a.score > b.score ? -1 : b.score > a.score ? 1 : 0
  );
  // debugger
  let currentId = state.session.id
  // let playersBest = scores.filter(score => score.player_id === currentId)[0]
  debugger
  return {
    scoresBest: scores.slice(0, 10),
    scoresAll: scores,
    currentId,

    // userBest: scores.filter(score => score.player_id === currentId)[0].score
  };


}
const mapDispatchToProps = dispatch => ({
  fetchAllScores: () => dispatch(fetchAllScores()),
});


export default connect(mapStateToProps, mapDispatchToProps)(HighScore);
