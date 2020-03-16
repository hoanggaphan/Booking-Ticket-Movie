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
  keyword: ""
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
      // Chia list movie ra list sắp chiếu và đang chiếu
      state.listMovieShowing = listMovieSorted.filter(
        movie => new Date() - new Date(movie.ngayKhoiChieu) >= 0
      );
      state.listMovieComming = listMovieSorted.filter(
        movie => new Date() - new Date(movie.ngayKhoiChieu) < 0
      );
      //list movie tổng
      state.listMovie = listMovieSorted;
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

    case ActionTypes.SEARCH:
      state.keyword = actions.keyword;
      return { ...state };

    default:
      return { ...state };
  }
};

export default movieReducer;
