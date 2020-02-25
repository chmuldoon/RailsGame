import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchExplore } from '../../actions/post_actions'
const Explore = ({explore, fetchExplore}) => {
  useEffect(() => {
    fetchExplore();
  }, [fetchExplore]);
  let displayGallery = Object.values(explore)
    .reverse()
    .map(post => (
      // <UserProfile photoUrl={post.photoUrl} likes={post.likes.length}/>
      <div className="gallery-item" tabindex="0">
        <img src={post.photoUrl} className="gallery-image" alt="" />

        <div className="gallery-item-info">
          <ul>
            <li className="gallery-item-likes">
              <span className="visually-hidden">Likes:</span>
              <i className="fas fa-heart" aria-hidden="true"></i>{" "}
              {post.likes.length}
            </li>
            <li className="gallery-item-comments">
              <span className="visually-hidden">Comments:</span>
              <i className="fas fa-comment" aria-hidden="true"></i> {post.comments.length}
            </li>
          </ul>
        </div>
      </div>
    ));
  let postCount = Object.keys(explore).length;
  let space = [];
  if (postCount < 3) {
    space = new Array(3 - postCount).fill(0);
  }
  let extras = space.map(spot => (
    <div className="gallery-item" tabindex="0"></div>
  ));
  return (
    <div className="user-page">
      <div className="posts-section">
        <div className="gallery">
          {displayGallery}
          {extras}
        </div>
      </div>
    </div>
  );
}

Explore.propTypes = {
  explore: PropTypes.object.isRequired,
  fetchExplore: PropTypes.func.isRequired,
}
const mapStateToProps = state => ({
  explore: state.entities.posts.posts
});

export default connect(mapStateToProps, { fetchExplore })(Explore)