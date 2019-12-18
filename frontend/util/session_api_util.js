export const signup = user =>
  $.ajax({
    method: "POST",
    url: "/api/users",
    data: { user }
  });
export const login = user =>
  $.ajax({
    method: "POST",
    url: "/api/session",
    data: { user }
  });
export const logout = () =>
  $.ajax({
    method: "DELETE",
    url: "/api/session"
  });
// export const updateHighScore = (userData, highscore) => {
//   return axios.patch("/api/users/highscore/1", { userData, highscore });
// };

// export const fetchHighscores = () => {
//   return axios.get("/api/users/highscores");
// };