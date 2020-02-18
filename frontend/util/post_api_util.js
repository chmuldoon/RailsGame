export const fetchPosts = () => {
  return $.ajax({
    method: "GET",
    url: "/api/posts/"
  });
};

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
    url: `api/posts/${id}/likes`,
    method: "POST"
  });
export const unlikePost = id =>
  $.ajax({
    url: `api/posts/${id}/likes`,
    method: "DELETE"
  });