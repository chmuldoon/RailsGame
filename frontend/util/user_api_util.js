export const fetchUsers = () => {
  return $.ajax({
    method: "GET",
    url: "/api/users/"
  });
};
export const fetchHashtags = () => {
  return $.ajax({
    method: "GET",
    url: "/api/hashtags"
  })
}

export const fetchUser = id => {
  return $.ajax({
    method: "GET",
    url: `/api/users/${id}`
  });
};
export const followUser = id =>
  $.ajax({
    url: `api/follows`,
    method: "POST",
    data: {id: id} 
  });
export const unfollowUser = id =>
  $.ajax({
    url: `api/follows/${id}`,
    method: "DELETE"
  });
export const updateUser = user => {
  debugger
  return $.ajax({
    method: "PATCH",
    url: `/api/users/${user.id}`,
    data: user.formData,
    contentType: false,
    processData: false
  });
};
