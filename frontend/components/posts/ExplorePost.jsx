import React from 'react'

export const ExplorePost = ({post}) => {
  return (
    <div className="Explore-Post">
        <div
          className="Overlay"
          id="profile"
        >
          <p style={{ zIndex: 8 }}>
            {post.likeCount} <i className="fas fa-heart" />
            {post.comments.length}
            {"  "} <i className="fas fa-comment"></i>
          </p>
        </div>
        <img
          width="275px"
          height="275px"
          src={post.photoUrl}
        />
        {/* <img src={post.photoUrl} /> */}
    </div>
  );
}
