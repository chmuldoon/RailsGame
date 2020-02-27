import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { likePost, unlikePost, fetchPost, likeModalPost, unlikeModalPost } from '../../actions/post_actions'
import { Link } from 'react-router-dom'
import Comment from '../comment/Comment'
unlikeModalPost
const PostShow = ({
  post: { id, photoUrl, hashtags, caption, author_id, username, profilePic, comments, hasLiked },
  unlikePost,
  likePost,
  fetchPost,
  postId,
  sessionId
}) => {
  // debugger
  // useEffect(() => {
  //   fetchPost(postId)
  // }, [fetchPost])
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
              <Comments>
                <div className="commentCaption">
                  <Link className="extraDetailName" to={`/users/${author_id}`}>
                    {`${username} `}
                  </Link>
                  {parsedCaption}
                </div>
                {commentSection}
              </Comments>
            <LowerSection>
              {hasLiked ? (
                <i
                  style={{ color: "red", fontSize: "30px" }}
                  className="fas fa-heart"
                  onClick={e => unlikePost(id, author_id)}
                ></i>
              ) : (
                <i
                  style={{ color: "black", fontSize: "30px" }}
                  className="far fa-heart"
                  onClick={e => likePost(id, author_id)}
                ></i>
              )}
              <Comment postId={id} style={{bottom: "0"}} />
            </LowerSection>
          </SideBox>
        </IndexItem>
      ) : (
        <Fragment></Fragment>
      )}
    </Fragment>
  );
}
const LowerSection = styled.div`
  min-height: 80px;
  padding-left: 30px;
  padding-right: 60px;
  position: absolute;
  bottom: 46px;
`;
const Comments = styled.div`
height:62%;`
const IndexItem = styled.div`
  width: 975px;
  background-color: white;

  margin-bottom: 50px;
  display: flex;
`
const SideBox = styled.div`
height: 100%
position: relative
`;
const ProfilePhoto = styled.img`
  object-fit: cover;
  border-radius: 50%;
`
const NameBar = styled.header`
  padding: 18px;
  width: 100%
  height: 72px
  background-color: white;
  justify-content: center;

`
const PostImage = styled.img`
  width: 600px;
  max-height: 600px;
  object-fit: cover;
`;



PostShow.propTypes = {
  // post: PropTypes.object.isRequired,
  likePost: PropTypes.func.isRequired,
  unlikePost: PropTypes.func.isRequired,
  fetchPost: PropTypes.func.isRequired
};
const mapStateToProps = (state) => {
  return {
    // postId: props.post,
    sessionId: state.session.id
  }
}
export default connect(mapStateToProps, { likePost, unlikePost, fetchPost })(PostShow);