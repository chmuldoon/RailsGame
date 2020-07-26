import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import UserProfile from './UserProfile'
import { fetchUserPosts, clearPosts } from '../../actions/post_actions'
import { fetchUser } from '../../actions/user_actions'
const CurrentUser = ({userId, fetchUser, clearPosts, fetchUserPosts}) => {
  useEffect(() => {
    debugger
    fetchUser(userId)
    fetchUserPosts(userId)
    return () => {
      clearPosts()
    }
  })
  return (
    <Fragment>
      <UserProfile key={userId} userId={userId}/>
    </Fragment>
  )
}

CurrentUser.propTypes = {
  userId: PropTypes.number.isRequired,
  fetchUser: PropTypes.func.isRequired,
  fetchUserPosts: PropTypes.func.isRequired,

};
const mapStateToProps = state => {
  return {
    userId: state.session.id
  };
};


export default connect(mapStateToProps, {fetchUser, fetchUserPosts, clearPosts})(CurrentUser)
