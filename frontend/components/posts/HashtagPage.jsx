import React, { useEffect, Fragment, useState, Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPostsByHashtag } from "../../actions/post_actions";
import PostShow from "../splash/PostShow";
import Loader from "../Loader";
import { fetchHashtags, fetchHashtag } from "../../actions/user_actions";
import { withRouter } from "react-router-dom";
import { ExplorePost } from "./ExplorePost";
class HashtagPage extends Component {
  constructor(props) {
    super(props);
    this.fetchHashtag = this.props.fetchHashtag.bind(this);
    this.fetchPostsByHashtag = this.props.fetchPostsByHashtag.bind(this);
    this.state = {
      displayModal: false,
      CurrentPost: null,
      isLoading: false
    };
  }
  componentDidMount() {
    this.fetchHashtag(parseInt(this.props.match.params.id));
    this.fetchPostsByHashtag(parseInt(this.props.match.params.id));
    setTimeout(() => this.setState({ ...this.state, isLoading: true }), 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      parseInt(this.props.match.params.id) !==
      parseInt(prevProps.match.params.id)
    ) {
      this.fetchHashtag(parseInt(this.props.match.params.id));
      this.fetchPostsByHashtag(parseInt(this.props.match.params.id));
      setTimeout(() => this.setState({ ...this.state, isLoading: true }), 1000);
    }
  }

  render() {
    const { match, explore, hashtag, loading, exploreIdx } = this.props;
    if(!explore || !hashtag) return null
  
    let postCount = Object.keys(explore).length;
    let space = [];
    if (postCount < 3) {
      space = new Array(3 - postCount).fill(0);
    }

    let posts = Object.values(explore).map(post => {
      return (
        <div
          className="Explore-Post"
          onClick={() =>
            this.setState({ displayModal: true, CurrentPost: post.id })
          }
        >
          <div className="Overlay" id="profile">
            <p style={{ zIndex: 8 }}>
              {post.likeCount} <i className="fas fa-heart" />
              {post.comments.length}
              {"  "} <i className="fas fa-comment"></i>
            </p>
          </div>
          <img width="292px" height="292x" src={post.photoUrl} />
          {/* <img src={post.photoUrl} /> */}
        </div>
      );
    });

    let extras = space.map(spot => (
      <div className="gallery-item" tabindex="0"></div>
    ));
    return (
      <Fragment>
        <title>{`${hashtag.content} hashtag`}</title>
        {!this.state.isLoading && (
          <div
            style={{
              zIndex: "3",
              position: "absolute",
              backgroundColor: "#ececec",
              width: "100%",
              height: "100%",
              justifyContent: "center"
            }}
          >
            <i
              className="fab fa-instagram"
              style={{
                color: "gray",
                fontSize: "80px",
                marginLeft: "48%",
                marginTop: "150px"
              }}
            ></i>
          </div>
        )}
        {explore && hashtag ? (
          <Fragment>
            <div className="user-page">
              <p
                style={{
                  fontWeight: "500",
                  fontSize: "48px",
                  marginTop: "30px",
                  marginBottom: "30px"
                }}
              >
                {hashtag.content}
              </p>
              <p
                style={{
                  fontWeight: "500",
                  fontSize: "30px",
                  color: "gray"
                }}
              >
                {exploreIdx.length === 1
                  ? "1 post"
                  : `${exploreIdx.length} posts`}
              </p>
              <div className="posts-section">
                <div className="Explore-Whole">{posts}</div>
              </div>
            </div>
            {this.state.displayModal && (
              <div
                className="modal-background"
                onClick={() =>
                  this.setState({ CurrentPost: null, displayModal: false })
                }
              >
                <div
                  style={{ display: "flex" }}
                  className="modal-child"
                  onClick={e => {
                    e.stopPropagation();
                    this.fetchPostsByHashtag(hashtag.id);
                  }}
                >
                  {exploreIdx.indexOf(this.state.CurrentPost) !== 0 && (
                    <i
                      onClick={() =>
                        this.setState({
                          CurrentPost:
                            exploreIdx[
                              exploreIdx.indexOf(this.state.CurrentPost) - 1
                            ],
                          displayModal: true
                        })
                      }
                      style={{
                        margin: "10px",
                        cursor: "pointer",
                        height: "15px",
                        color: "darkGrey",
                        fontSize: "30px",
                        marginTop: "25%"
                      }}
                      class="fas fa-arrow-left"
                    ></i>
                  )}
                  <PostShow
                    kind={`hashtag${parseInt(match.params.id)}`}
                    post={explore[this.state.CurrentPost]}
                  />
                  {exploreIdx.indexOf(this.state.CurrentPost) !==
                    exploreIdx.length - 1 && (
                    <i
                      onClick={() =>
                        this.setState({
                          CurrentPost:
                            exploreIdx[
                              exploreIdx.indexOf(this.state.CurrentPost) + 1
                            ],
                          displayModal: true
                        })
                      }
                      style={{
                        margin: "10px",
                        cursor: "pointer",
                        height: "15px",
                        color: "darkGrey",
                        fontSize: "30px",
                        marginTop: "25%",
                        zIndex: "10"
                      }}
                      class="fas fa-arrow-right"
                    ></i>
                  )}
                </div>
              </div>
            )}
          </Fragment>
        ) : (
          <Loader />
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let explorePosts = Object.values(state.entities.posts.posts);
  let explore = {};
  explorePosts.forEach(post => (explore[post.id] = post));
  return {
    hashtag: state.entities.users.hashtags[ownProps.match.params.id],
    explore,
    exploreIdx: explorePosts.map(post => post.id)
  };
};
const mapDispatchToProps = dispatch => ({
  fetchPostsByHashtag: id => dispatch(fetchPostsByHashtag(id)),
  fetchHashtag: id => dispatch(fetchHashtag(id))

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(
  HashtagPage
));
