import * as ActionTypes from "./../constants/ActionTypes";

const initialState = {
  listMovie: [],
  listMovieShowing: [],
  listMovieComming: [],
  showtimesInfo: [],
  listCinema: [],
  trailer: {
    movie: {},
    isOpen: false
  },
  isLoading: true,
};

const movieReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case ActionTypes.GET_LIST_MOVIE_API:
      // Sắp xếp lại listmovie theo ngày tháng năm tăng dần
      const listMovieSorted = actions.listMovie.sort(
        (movie1, movie2) =>
          new Date(movie1.ngayKhoiChieu).getTime() -
          new Date(movie2.ngayKhoiChieu).getTime()
      );
      
      state.listMovieShowing = listMovieSorted.filter(
        movie => new Date() - new Date(movie.ngayKhoiChieu) >= 0
      );
      state.listMovieComming = listMovieSorted.filter(
        movie => new Date() - new Date(movie.ngayKhoiChieu) < 0
      );
      state.listMovie = listMovieSorted;
      state.isLoading = false;
      return { ...state };

    case ActionTypes.GET_SHOWTIMES_INFO_API:
      let listCinema = [];
      actions.showtimesInfo.heThongRapChieu.forEach(item =>
        item.cumRapChieu.forEach(item => listCinema.push(item))
      );
      state.showtimesInfo = actions.showtimesInfo;
      state.listCinema = listCinema;
      return { ...state };

    case ActionTypes.VIEW_TRAILER:
      state.trailer = { ...state.trailer, ...actions.trailer };
      return { ...state };
    default:
      return { ...state };
  }
};

export default movieReducer;
