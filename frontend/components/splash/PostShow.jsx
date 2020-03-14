import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
import {
  likePost,
  unlikePost,
  fetchPost,
  fetchUserPosts,
  likeModalPost,
  unlikeModalPost
} from "../../actions/post_actions";
import { Link } from 'react-router-dom'
import Comment from '../comment/Comment'
unlikeModalPost
const PostShow = ({
  post: { id, photoUrl, hashtags, caption, author_id, username, profilePic, comments, hasLiked },
  unlikePost,
  likePost,
  kind,
  fetchPost,
  postId,
  sessionId
}) => {
  // useEffect(() => {
  //   fetchUserPosts(author_id)
  // }, [fetchUserPosts])
  debugger
  const commentSection = comments.map(comment => {
    return (
      <CommentMain>
        <Link to={`/users/${comment.author_id}`}>
          <ProfilePhoto
            style={{ width: "32px", height: "32px" }}
            src={comment.photo}
          />
        </Link>
        <Link className="extraDetailName" to={`/users/${comment.author_id}`}>
          {comment.username}
        </Link>
        <p>{comment.content}</p>
      </CommentMain>
    );
  });
  const hashtagIdByContent = function(string) {
    return hashtags.filter(tag => tag.content == string)[0].id;
  };
  const listcombiner = function(list1, list2) {
    if (!list2) {
      return caption;
    }
    let i = 0;
    let output = [];
    while (i + 1 <= list2.length) {
      output.push(list1[i]);
      output.push(list2[i]);
      i++;
    }
    output.push(list1[i]);
    return output;
  };
  let base = caption;
  let tags = base.match(/#[\p{L}]+/giu);
  let withoutTags = base.replace(/\#\S+/g, "˧").split("˧");
  let combined = listcombiner(withoutTags, tags);

  let parsedCaption =
    hashtags.length === 0
      ? caption
      : combined.map(word => {
          if (word[0] !== "#") {
            return <p>{word}</p>;
          } else {
            return (
              <Link
                className="hashtag"
                to={`/hashtags/${hashtagIdByContent(word)}`}
              >{` ${word} `}</Link>
            );
          }
        });
  return (
    <Fragment>
      {id && hashtags ? (
        <IndexItem>
          <PostImage src={photoUrl} />
          <SideBox>
            <NameBar>
              <ProfilePhoto
                style={{ width: "32px", height: "32px" }}
                src={profilePic}
              />
              <Link className="extraDetailName" to={`users/${author_id}`}>
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
            <Comments>
              <CommentMain className="commentCaption">
                <Link to={`/users/${author_id}`}>
                  <ProfilePhoto
                    style={{ width: "32px", height: "32px" }}
                    src={profilePic}
                  />
                </Link>
                <Link className="extraDetailName" to={`/users/${author_id}`}>
                  {`${username} `}
                </Link>
                {parsedCaption}
              </CommentMain>
              {commentSection}
            </Comments>
            <LowerSection>
              {hasLiked ? (
                <i
                  style={{ color: "red", fontSize: "30px" }}
                  className="fas fa-heart"
                  onClick={e => unlikePost(id, kind)}
                ></i>
              ) : (
                <i
                  style={{ color: "black", fontSize: "30px" }}
                  className="far fa-heart"
                  onClick={e => likePost(id, kind)}
                ></i>
              )}
              <Comment kind={kind} postId={id} style={{ bottom: "0" }} />
            </LowerSection>
          </SideBox>
        </IndexItem>
      ) : (
        <Fragment></Fragment>
      )}
    </Fragment>
  );
}
const CommentMain = styled.div`
  padding: 18px;
  min-height: 59px;
  margin-top: 12px;
`
const LowerSection = styled.div`
  min-height: 80px;
  padding-left: 30px;
  padding-right: 60px;
  position: absolute;
  bottom: 46px;
`;
const Comments = styled.div`
  height: 65%;
  overflow-y: scroll;
  margin: none;
  width: 375px;
`;
const IndexItem = styled.div`
  width: 975px;
  background-color: white;
  max-height: 600px;
  margin-bottom: 50px;
  display: flex;
`
const SideBox = styled.div`
  height: 100%
  width: 375px;
  position: relative
`;
const ProfilePhoto = styled.img`
  object-fit: cover;
  border-radius: 50%;
`
const NameBar = styled.header`
  padding: 18px;
  width: 375px;

  height: 72px
  background-color: white;
  justify-content: center;

`;
const PostImage = styled.img`
  width: 600px;
  max-height: 600px;
  object-fit: cover;
`;



PostShow.propTypes = {
  // post: PropTypes.object.isRequired,
  likePost: PropTypes.func.isRequired,
  unlikePost: PropTypes.func.isRequired,
  fetchPost: PropTypes.func.isRequired,
  fetchUserPosts: PropTypes.func.isRequired,
};
const mapStateToProps = (state, props) => {
  return {
    // postId: props.postId,
    // post: props.location.state.post,
    sessionId: state.session.id
  }
}
export default connect(mapStateToProps, { likePost, unlikePost, fetchPost, fetchUserPosts })(PostShow);