export const fetchAllScores = () => {
  return $.ajax({
    method: "GET",
    url: "/api/scores/"
  });
};
export const createScore = score =>
  $.ajax({
    method: "POST",
    url: "api/scores",
    data: { score }
  });


export const fetchScore = id => {
  return $.ajax({
    method: "GET",
    url: `/api/scores/${id}`
  });
};
