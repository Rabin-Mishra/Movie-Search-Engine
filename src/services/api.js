const API_KEY = "f012dd656e0462a0f8832fd99b719742";
const BASE_URL = "https://api.themoviedb.org/3";

//means that the async is asynchronous and its gonna take a a second before we get the result
export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  //since its async we need to wait for the response to come back
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  //take the query and encode to the URI component
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  //since its async we need to wait for the response to come back
  const data = await response.json();
  return data.results;
};
