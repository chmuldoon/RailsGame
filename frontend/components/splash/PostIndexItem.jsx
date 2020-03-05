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
  const parseTimeSince = function(date) {
    // const datePosted; 
    let dayPosted = {
      year: parseInt(date.slice(0, 4)),
      month: parseInt(date.slice(5, 7)),
      day: parseInt(date.slice(8, 10)),
      hour: parseInt(date.slice(11, 13)),
      minute: parseInt(date.slice(14, 16))
    };
    let current_datetime = new Date()
    let today = {
      year: current_datetime.getFullYear(),
      month: current_datetime.getMonth() + 1,
      day: current_datetime.getDate(),
      hour: current_datetime.getHours(),
      minute: current_datetime.getMinutes()
    };
    let difference = {
      year: today["year"] - dayPosted["year"],
      month: today["month"] - dayPosted["month"],
      day: today["day"] - dayPosted["day"],
      hour: today["hour"] - dayPosted["hour"],
      minute: today["minute"] - dayPosted["minute"]
    };
    if(difference["year"]){
      return difference["year"] === 1 ? "1 year ago" : `${difference["year"]} years ago`;
    }
    if(difference["month"]){
      if(difference["month"] === 1 && difference["day"] < 0) {
        return `${30 + difference["day"]} days ago`
      }
      return `${difference["month"]} months ago`
    }
    if(difference["day"]){
      if (difference["day"] === 1 && difference["hour"] < 0) {
        return `${24 + difference["hour"]} hours ago`;
      }
      return difference["day"] === 1 ? "1 day ago" : `${difference["day"]} days ago`;
    }
    if(difference["hour"]){
      return difference["hour"] === 1 ? "1 hour ago" : `${difference["hour"]} hours ago`;
    }
    if(difference["minute"]){
      return difference["minute"] === 1 ? "1 minute ago" : `${difference["minute"]} minutes ago`;
    }
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
                  style={{ fontSize: "30px", marginLeft: "5px" }}
                ></i>
                {/* </Link> */}
              </Fragment>
            ) : (
              <Fragment>
                <i
                  style={{ color: "black", fontSize: "30px" }}
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
            <Comment postId={id} />
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

              <PostShow kind={"indexitem"} post={ { id, photoUrl, hashtags, caption, author_id, username, profilePic, comments, hasLiked }}/>
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

