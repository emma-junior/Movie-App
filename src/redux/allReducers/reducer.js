export const popularReducer = (popularmovies = [], action) => {
  switch (action.type) {
    case "FETCH_POPULAR_MOVIES":
      return action.payload;
    default:
      return popularmovies;
  }
};

export const topratedReducer = (topratedmovies = [], action) => {
  switch (action.type) {
    case "FETCH_TOPRATED_MOVIES":
      return action.payload;
    default:
      return topratedmovies;
  }
};
