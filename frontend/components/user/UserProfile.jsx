import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { fetchUser } from '../../actions/user_actions'
import { connect } from 'react-redux'
const UserProfile = ({fetchUser, users: {profile, loading}, match }) => {
  //
  useEffect(() => {
    fetchUser(parseInt(match.params.id))
  }, [fetchUser])
  return (
    <Fragment>
    {profile && !loading ? (
        <div className="UserProfile">

      <div className="profile">

        <div className="profile-image">

          <img src={profile.photoUrl}/>
        </div>

        <div className="profile-user-settings">

        <h1 className="profile-user-name">{profile.username}</h1>

          <button className="btn profile-edit-btn">Edit Profile</button>

          <button className="btn profile-settings-btn" aria-label="profile settings"><i className="fas fa-cog" aria-hidden="true"></i></button>

        </div>

        <div className="profile-stats">

          <ul>
            <li><span className="profile-stat-count">164</span> posts</li>
            <li><span className="profile-stat-count">188</span> followers</li>
            <li><span className="profile-stat-count">206</span> following</li>
          </ul>

        </div>

        <div className="profile-bio">

          <p><span className="profile-real-name">Jane Doe</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️</p>

        </div>

      </div>

    </div>
    ) : (
      <Fragment>
      </Fragment>
    )}

    </Fragment>
  )
}
UserProfile.propTypes = {
  fetchUser: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
}

const mapStateToProps = state => {
  return {
    users: state.entities.users
  }
}

export default connect(mapStateToProps, {fetchUser})(UserProfile)
