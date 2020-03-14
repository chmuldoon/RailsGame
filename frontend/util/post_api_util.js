export const fetchPosts = () => {
  return $.ajax({
    method: "GET",
    url: "/api/posts/"
  });
};
export const fetchFeed = () => {
  return $.ajax({
    method: "GET",
    url: "/api/feed"
  });
};
export const fetchExplore = (id) => {
  return $.ajax({
    method: "GET",
    url: `/api/feed/${id}`
  });
};
// export const fetchExplore = id => {
//   return $.ajax({
//     method: "GET",
//     url: `/api/feed/${id}`
//   });
// };
export const fetchPostsByHashtag = id => {
  // debugger
  return $.ajax({
    method: "GET",
    url: `/api/hashtags/${id}`
  });
};
export const fetchUserPosts = id => {
  return $.ajax({
    method: "GET",
    url: `/api/userposts/${id}`
  })
}

export const fetchPost = id => {
  return $.ajax({
    method: "GET",
    url: `/api/posts/${id}`
  });
};

export const createPost = formData =>
  $.ajax({
    url: "api/posts",
    method: "POST",
    data: formData,
    contentType: false,
    processData: false
  });

export const deletePost = id =>
  $.ajax({
    url: `api/posts/${id}`,
    method: "DELETE"
  });

export const likePost = (id, kind) =>
  $.ajax({
    url: `api/likes`,
    method: "POST",
    data: { post_id: id, kind: kind }
  });
export const unlikePost = (id, kind) =>
  $.ajax({
    url: `api/likes/${id}`,
    method: "DELETE",
    data: { kind: kind }
  });

export const createComment = (comment, kind) =>
  $.ajax({
    method: "POST",
    url: `/api/comments`,
    data: { comment: comment, kind: kind }
  });