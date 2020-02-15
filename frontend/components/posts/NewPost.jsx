import React, { Component, Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link, withRouter } from "react-router-dom";
import styled from 'styled-components';
import { createPost } from '../../actions/post_actions';
export class NewPost extends Component {
  constructor(props){
    super(props)
    this.state = { caption: "",
      photoFile: null, 
      photoUrl: "",
      status: "Upload"
    };
    this.handleFile = this.handleFile.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this); 
    this.uploading = false 
  }

  handleFile(e) {
    // this.setState({ photoFile: e.currentTarget.files[0] });
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () =>
      this.setState({ photoUrl: reader.result, photoFile: file, status: "Change" });

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ photoUrl: "", photoFile: null });
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("post[caption]", this.state.caption);
    formData.append("post[photo]", this.state.photoFile);
    this.props.createPost(formData)
      .then(() => { this.props.history.push("/") })
  }
  render(){
    const [displayChat, toggleChat] = useState(false);

    return (
      <NewPostModule>
        {this.uploading ? (
          <Uploading />
         ) : ( 
          <Fragment>
            <NewPostH1>Create Post</NewPostH1>
            <NewPostForm onSubmit={this.handleSubmit}>
              <div className="previewBox">
                <img src={this.state.photoUrl} alt="" />
              </div>
              <UploadLabel style={{ cursor: "pointer" }} htmlFor="files">
                {" "}
                {this.state.status}{" "}
              </UploadLabel>
              <Upload
                type="file"
                id="files"
                placeholder="Upload"
                onChange={this.handleFile.bind(this)}
              />
              <input
                type="text"
                placeholder="Write a caption..."
                onChange={this.update("caption")}
              />
              <input type="submit" value="Share" />
            </NewPostForm>
          </Fragment>
        )}
      </NewPostModule>
    );
  }
}
const NewPostModule = styled.div`
  height: 350px;
  width: 250px;
  background-color: white;
  border: solid 1px #efefef;
  border-radius: 2%;
  align-content: center;
`;
const Uploading = styled.div`
  z-index: 3;
  height: 100%;
  width: 100%;
  border-radius: 2%;
  background-color: red;
  position: relative;

`;
const NewPostH1 = styled.h1`
  text-align: center;
  font-weight: 600;
  color: #262626;
  font-size: 18px;
  padding-top: 20px;
  height: 40px;
  font-family: -apple-system, system-ui, "Segoe UI", Roboto, Helvetica, Arial,
    sans-serif;
`;
const NewPostForm = styled.form`
  text-align: center;
  align-content: center;
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
`;
const Upload = styled.input`
  color: transparent;
  visibility: hidden;
`;
const UploadLabel = styled.label`
  font-family: -apple-system, system-ui, "Segoe UI", Roboto, Helvetica, Arial;
  color: white;
  background-color: dodgerblue;
  padding: 5px;
  border-radius: 5px;
  margin-left: auto;
  margin-right: auto;
  width: 150px;
`;


// const mapStateToProps = state => ({posts: state.posts, currId: state.session.id  })
// const mapDispatchToProps = dispatch => ({
//   createPost: post => dispatch(createPost(post)),
//   // closeModal: () => dispatch(closeModal())
// });

export default NewPost;
