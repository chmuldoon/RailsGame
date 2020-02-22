import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { likePost, unlikePost } from '../../actions/post_actions'
import { Link } from 'react-router-dom'
const PostIndexItem = ({
  post: { id, photoUrl, caption, author_id, username, profilePic, likes, hasLiked },
  unlikePost,
  likePost,
  sessionId
}) => {
  // debugger
  return (
    <IndexItem>
      <NameBar>
        <ProfilePhoto
          style={{ width: "32px", height: "32px" }}
          src={profilePic}
        />
        <Link to={`users/${author_id}`}>
          <p
            style={{
              marginTop: "auto",
              marginBottom: "auto",
              display: "inline"
            }}
          >
            {username}
          </p>
        </Link>
      </NameBar>
      <PostImage src={photoUrl} />
      <LowerSection>
        {hasLiked ? (
          <i
            style={{ color: "red", fontSize: "30px" }}
            className="fas fa-heart"
            onClick={e => unlikePost(id)}
          ></i>
        ) : (
          <i
            style={{ color: "black", fontSize: "30px" }}
            className="far fa-heart"
            onClick={e => likePost(id)}
          ></i>
        )}
      </LowerSection>
    </IndexItem>
  );
};
export const LowerSection = styled.div`
height: 80px;

`
export const IndexItem = styled.div`
  width: 614px;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 15px;
  margin-bottom: 50px;
`
export const ProfilePhoto = styled.img`
  object-fit: cover;
  border-radius: 50%;
`
export const NameBar = styled.header`
  padding: 18px;
  width: 100%
  height: 60px
  background-color: white;
  justify-content: center;

`
export const PostImage= styled.img`
  width: 614px;
`



PostIndexItem.propTypes = {
  post: PropTypes.object.isRequired,
  likePost: PropTypes.func.isRequired,
  unlikePost: PropTypes.func.isRequired,

}
const mapStateToProps = (state, props) => {
  return {
    post: props.post,
    sessionId: state.session.id
  }
}
export default connect(mapStateToProps, {likePost, unlikePost})(PostIndexItem);
