import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { likePost, unlikePost } from '../../actions/post_actions'
import { Link } from 'react-router-dom'
import Comment from '../comment/Comment'
const PostIndexItem = ({
  post: { id, photoUrl, hashtags, caption, author_id, username, profilePic, comments, hasLiked },
  unlikePost,
  likePost,
  sessionId
}) => {

  const commentSection = comments.map(comment => {
    return (
      <div className="commentCaption">
        <Link className="extraDetailName" to={`/users/${comment.author_id}`}>
          {comment.username}
        </Link>
        <p>{comment.content}</p>
      </div>
    );
  });
  const hashtagIdByContent = function(string) {
    return hashtags.filter(tag => tag.content == string)[0].id
  }
  const listcombiner = function(list1, list2){
    if(!list2){ return caption }
    let i = 0
    let output = []
    while(i + 1 <= list2.length){
      output.push(list1[i])
      output.push(list2[i])
      i++
    }
    output.push(list1[i])
    return output
  }
    let base = caption
    let tags = base.match(/#[\p{L}]+/ugi)
    let withoutTags = base.replace(/\#\S+/g, '˧').split('˧')
    let combined = listcombiner(withoutTags, tags)

    let parsedCaption = hashtags.length === 0 ? caption :
        combined.map(word => {
        if(word[0] !== "#"){
          return <p>{word}</p>
        }else{
          return <Link className="hashtag" to={`/hashtags/${hashtagIdByContent(word)}`}>{` ${word} `}</Link>
        }
      })


  debugger
  return (
    <Fragment>
      {id ? (
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
            <div className="commentCaption">
              <Link
                className="extraDetailName"
                to={`/users/${author_id}`}
              >
                {`${username} `}
              </Link>
              {parsedCaption}

            </div>

            {commentSection}
            <Comment postId={id} />
          </LowerSection>
        </IndexItem>
      ) : (
        <Fragment></Fragment>
      )}
    </Fragment>
  );
};
export const LowerSection = styled.div`
min-height: 80px;
padding-left: 30px;
padding-right: 60px;

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

