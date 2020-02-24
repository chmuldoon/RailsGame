import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createComment } from '../../actions/post_actions'
const Comment = ({postId, createComment}) => {
  const [content, setContent] = useState("");

  return (
    <div className="commentAdd">
      <form onSubmit={e => {
          e.preventDefault();
          createComment({ post_id: postId, content: content });
          setContent("")
          }}
        >
        <input
          type="text"
          placeholder="Add a comment"
          value={content}
          onChange={e => setContent(e.target.value)}
        ></input>
        <input type="submit" value="Send"/>
      </form>
    </div>
  );
}

Comment.propTypes = {
  createComment: PropTypes.func.isRequired
}


export default connect(null, {createComment})(Comment)
