import * as api from "../api";

export const getPopularMovies = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPopularMovies();

    dispatch({
      type: "FETCH_POPULAR_MOVIES",
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const getTopratedMovies = () => async (dispatch) => {
  try {
    const { data } = await api.fetchTopratedMovies();

    dispatch({
      type: "FETCH_TOPRATED_MOVIES",
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};
