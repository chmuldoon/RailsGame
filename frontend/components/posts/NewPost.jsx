import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link, withRouter } from "react-router-dom";

const NewPost = ({ posts: { post, loading }}) => {

  // handleFile(e) {
  //   // this.setState({ photoFile: e.currentTarget.files[0] });
  //   const reader = new FileReader();
  //   const file = e.currentTarget.files[0];
  //   reader.onloadend = () =>
  //     this.setState({ photoUrl: reader.result, photoFile: file, status: "Change" });

  //   if (file) {
  //     reader.readAsDataURL(file);
  //   } else {
  //     this.setState({ photoUrl: "", photoFile: null });
  //   }
  // }
  // update(field) {
  //   return e => this.setState({
  //     [field]: e.target.value
  //   })
  // }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("post[caption]", this.state.caption);
  //   formData.append("post[photo]", this.state.photoFile);
  //   this.props.createPost(formData)
  //     .then(() => { this.props.closeModal() })      
  //     .then(() => { this.props.history.push("/") })
  // }
  return (
    <div>
      
    </div>
  )
}

NewPost.propTypes = {

}
const mapStateToProps = state => ({posts: state.posts})

export default connect(mapStateToProps, {})(withRouter(NewPost))
