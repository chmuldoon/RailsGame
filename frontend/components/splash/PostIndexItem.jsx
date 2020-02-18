import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
const PostIndexItem = ({
  post: { id, photoUrl, caption, author_id, username, profilePic }
}) => {
  return (
    <IndexItem>
      <NameBar>
        <ProfilePhoto
          style={{ width: "32px", height: "32px" }}
          src={profilePic}
        />
        <p
          style={{ marginTop: "auto", marginBottom: "auto", display: "inline" }}
        >
          {username}
        </p>
      </NameBar>
      <PostImage src={photoUrl}/>
    </IndexItem>
  );
};
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
}
const mapStateToProps = (state, props) => {
  return {
    post: props.post
  }
}
export default connect(mapStateToProps, {})(PostIndexItem);

