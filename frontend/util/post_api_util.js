export const fetchPosts = () => {
  return $.ajax({
    method: "GET",
    url: "/api/posts/"
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

export const likePost = id =>
  $.ajax({
    url: `api/likes`,
    method: "POST",
    data: { post_id: id }
  });
export const unlikePost = id =>
  $.ajax({
    url: `api/likes/${id}`,
    method: "DELETE"
  });