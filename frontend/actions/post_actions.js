import * as PostApiUtil from "../util/post_api_util"
export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const CREATE_POST = "CREATE_POST";
export const DELETE_POST = "DELETE_POST";

export const LIKE_POST = "LIKE_POST";
export const UNLIKE_POST = "UNLIKE_POST";


export const fetchPost = id => dispatch =>
  PostApiUtil.fetchPost(id).then(post => dispatch(receivePost(post)));
  
export const fetchAllPosts = () => dispatch =>
  PostApiUtil.fetchPosts().then(posts => dispatch(receiveAllPosts(posts)));

export const createPost = post => dispatch =>
  PostApiUtil.createPost(post).then(post => dispatch(receivePost(post)));

export const likePost = id => dispatch =>
  PostApiUtil.likePost(id).then(post => dispatch(likePost(post)))

export const unlikePost = id => dispatch =>
  PostApiUtil.unlikePost(id).then(post => dispatch(unlikePost(post)))





const receiveAllPosts = posts => ({
  type: RECEIVE_ALL_POSTS,
  payload: posts
});
const receivePost = post => ({
  type: RECEIVE_POST,
  payload: post
});