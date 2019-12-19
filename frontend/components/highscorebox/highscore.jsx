

import React, { Component } from 'react'

export class HighScore extends Component {
  constructor(props){
    super(props)
  }
  render() {
    if (!this.props.scores){
      return null
    }
    return (
      <div>
        
      </div>
    )
  }
}

export default HighScore

