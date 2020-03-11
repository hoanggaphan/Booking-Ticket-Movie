import * as ActionTypes from "./../constants/ActionTypes";

const initialState = {
  listMovie: [],
  trailerMovie: {
    movie: {},
    isOpen: false
  },
  keyword: ""
};

const movieReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case ActionTypes.GET_LIST_MOVIE_API:
      state.listMovie = actions.listMovie;
      return { ...state };
    case ActionTypes.VIEW_TRAILER:
      state.trailerMovie = { ...state.trailerMovie, ...actions.trailerMovie };
      return { ...state };
    case ActionTypes.SEARCH:
      state.keyword = actions.keyword;
      return { ...state };
    default:
      return { ...state };
  }
};

export default movieReducer;
