import React, { useEffect, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchUser } from '../../actions/user_actions'
const EditUser = props => {
  // useEffect(() => {
  //   fet
    
  // }, [fetchUser])
  return (
    <div>
      
    </div>
  )
}

EditUser.propTypes = {
  currentUser: PropTypes.object.isRequired,
}
const mapStateToPros = state => {
  return {
    currentUser: state.entities.currentUser
  }
}
export default connect(mapStateToPros, {})(EditUser)
