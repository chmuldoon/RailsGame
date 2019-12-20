import HighScore from "./highscore";
import { connect } from "react-redux";
import React from "react";
import { fetchAllScores } from "../../actions/score_actions";

const mapStateToProps = (state) => {
  // debugger
  return {
    scores: Object.values(state.entities.scores)
  }


}
const mapDispatchToProps = dispatch => ({
  fetchAllScores: () => dispatch(fetchAllScores()),
});


export default connect(mapStateToProps, mapDispatchToProps)(HighScore);
