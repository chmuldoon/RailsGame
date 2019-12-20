

import React, { Component } from 'react'

export class HighScore extends Component {
  constructor(props){
    super(props)
    debugger
    this.renderScores = this.renderScores.bind(this)
  }
  componentDidMount(){
    this.fetchAllScores();
  }
  renderScores(){
    this.props.scores.map(score => {
      return(
      <div>
        <p>{score.username}{score.score}</p>
      </div>
      )
    })
  }
  render() {
    debugger
    if (this.props.scores == []){
      return null
    }
    return (
      <div>
        {this.renderScores()}
      </div>
    )
  }
}

export default HighScore

