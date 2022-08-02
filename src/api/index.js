import axios from "axios";

const url =
  "https://api.themoviedb.org/3/movie/popular?api_key=52aed924a722cc546176d6109695af74";

const topratedUrl =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=52aed924a722cc546176d6109695af74";

export const fetchPopularMovies = () => axios.get(url);
export const fetchTopratedMovies = () => axios.get(topratedUrl);
