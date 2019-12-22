import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {logout} from '../../actions/session_actions';
import Game from './game';
import { updateHighScore } from '../../util/session_api_util';
import { createScore } from '../../actions/score_actions';
const mapStateToProps = (state) => {
    debugger
    let user = state.entities.users[state.session.id];
    // let score = {
    //     score: null,
    //     player_id: state.session.id
    // }
    return {
       user,
       sessionId: state.session.id
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createScore: score => dispatch(createScore(score)),
        logout: () => dispatch(logout())
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Game));