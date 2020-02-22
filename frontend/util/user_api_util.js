export const fetchUsers = () => {
  return $.ajax({
    method: "GET",
    url: "/api/users/"
  });
};

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