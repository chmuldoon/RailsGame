import React, { Fragment } from "react";
export default (photoUrl, likes) => {
  return (
    <div className="gallery-item" tabindex="0">
      <img src={photoUrl} className="gallery-image" alt="" />

      <div className="gallery-item-info">
        <ul>
          <li className="gallery-item-likes">
            <span className="visually-hidden">Likes:</span>
            <i className="fas fa-heart" aria-hidden="true"></i>{" "}
            {likes}
          </li>
          <li className="gallery-item-comments">
            <span className="visually-hidden">Comments:</span>
            <i className="fas fa-comment" aria-hidden="true"></i> 2
          </li>
        </ul>
      </div>
    </div>
  );
};
