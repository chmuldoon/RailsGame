import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { likePost, unlikePost } from '../../actions/post_actions'
import { Link } from 'react-router-dom'
import Comment from '../comment/Comment'
import PostShow from './PostShow'
const PostIndexItem = ({
  post: { id, photoUrl, hashtags, caption, postedAt, author_id, username, profilePic, comments, hasLiked },
  unlikePost,
  likePost,
  sessionId,
}) => {
  const [displayModal, toggleModal] = useState(false);

  const commentSection = comments.length < 3 ? comments.map(comment => {
    return (
      <div className="commentCaption">
        <Link className="extraDetailName" to={`/users/${comment.author_id}`}>
          {comment.username}
        </Link>
        <p>{comment.content}</p>
      </div>
    );
  }) :  [0, null, comments.length - 1].map(comment => {
    if(comment === null){
    return (
      <p
        style={{cursor: "pointer"}}
        onClick={() => toggleModal(!displayModal)}
      >{`View all ${comments.length} comments`}</p>
    );
    } else {
      return (
        <div className="commentCaption">
          <Link className="extraDetailName" to={`/users/${comments[comment].author_id}`}>
            {comments[comment].username}
          </Link>
          <p>{comments[comment].content}</p>
        </div>
      );
    }
  })
  const hashtagIdByContent = function(string) {
    return hashtags.filter(tag => tag.content == string)[0].id
  }
  const parseTimeSince = function(date) {
    // const datePosted; 
    let formattedTime = new Date(date)
    return `${formattedTime}`.slice(4, 10) +", " +  `${formattedTime}`.slice(11, 16)
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


  return (
    <Fragment>
      {id ? (
        <IndexItem>
          <NameBar>
            <ProfilePhoto
              style={{ width: "45px", height: "45px" }}
              src={profilePic}
            />
            <Link
              style={{
                display: "inline",
                color: "black",
                fontWeight: "500",
                marginLeft: "10px",
                marginTop: "15px",
                fontSize: "18px",
                height: "100%"
              }}
              to={`users/${author_id}`}
            >
              <p>{username}</p>
            </Link>
          </NameBar>
          <PostImage src={photoUrl} />
          <LowerSection>
            {hasLiked ? (
              <Fragment>
                <i
                  style={{ color: "red", fontSize: "30px" }}
                  className="fas fa-heart"
                  onClick={e => unlikePost(id, "indexitem")}
                ></i>
                {/* <Link
                  to={{
                    pathname: `/posts/${id}`,
                    state: {
                      post: {
                        id,
                        photoUrl,
                        hashtags,
                        caption,
                        author_id,
                        username,
                        profilePic,
                        comments,
                        hasLiked
                      }
                    }
                  }}
                > */}
                <i
                  onClick={() => toggleModal(!displayModal)}
                  class="far fa-comment"
                  style={{
                    fontSize: "30px",
                    marginLeft: "5px",
                    cursor: "hand"
                  }}
                ></i>
                {/* </Link> */}
              </Fragment>
            ) : (
              <Fragment>
                <i
                  style={{
                    color: "black",
                    fontSize: "30px",
                    cursor: "hand"
                  }}
                  className="far fa-heart"
                  onClick={e => likePost(id, "indexitem")}
                ></i>

                {/* <Link
                  to={{
                    pathname: `/posts/${id}`,
                    state: {
                      post: {
                        id,
                        photoUrl,
                        hashtags,
                        caption,
                        author_id,
                        username,
                        profilePic,
                        comments,
                        hasLiked
                      }
                    }
                  }}
                > */}
                <i
                  onClick={() => toggleModal(!displayModal)}
                  class="far fa-comment"
                  style={{ fontSize: "30px", marginLeft: "5px" }}
                ></i>
                {/* </Link> */}
              </Fragment>
            )}
            <div className="commentCaption">
              <Link className="extraDetailName" to={`/users/${author_id}`}>
                {`${username} `}
              </Link>
              {parsedCaption}
            </div>
            {parseTimeSince(postedAt)}
            {commentSection}
            <Comment kind="indexitem" postId={id} />
          </LowerSection>
        </IndexItem>
      ) : (
        <Fragment></Fragment>
      )}
      {displayModal && (
        <div
          className="modal-background"
          onClick={() => toggleModal(!displayModal)}
        >
          <div className="modal-child" onClick={e => e.stopPropagation()}>
            <PostShow
              kind={"indexitem"}
              post={{
                id,
                photoUrl,
                hashtags,
                caption,
                author_id,
                username,
                profilePic,
                comments,
                hasLiked
              }}
            />
          </div>
        </div>
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
  display: flex;

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

