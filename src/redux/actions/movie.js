import * as ActionTypes from "redux/constants/ActionTypes";
import { callAPI } from "redux/utils/callAPI";

export const actgetMovieList = () => (dispatch) => {
  callAPI("GET", "QuanLyPhim/LayDanhSachPhim?maNhom=GP10", null, null)
    .then((response) =>
      dispatch({
        type: ActionTypes.GET_MOVIE_LIST,
        movieList: response.data,
      })
    )
    .catch((error) => console.error(error.response.data));
};

export const actGetMovieDetail = (maPhim) => (dispatch) => {
  dispatch({ type: ActionTypes.GET_MOVIE_DETAIL_REQUEST, movieDetail: null });

  callAPI("GET", `QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`)
    .then((response) =>
      dispatch({
        type: ActionTypes.GET_MOVIE_DETAIL_SUCCESS,
        movieDetail: response.data,
      })
    )
    .catch((error) =>
      dispatch({
        type: ActionTypes.GET_MOVIE_DETAIL_FAILED,
        error: error,
      })
    );
};

export const actGetShowtimesInfoAPI = (maPhim) => (dispatch) => {
  callAPI(
    "GET",
    `QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
    null,
    null
  )
    .then((response) =>
      dispatch({
        type: ActionTypes.GET_SHOWTIMES_INFO,
        showtimesInfo: response.data,
      })
    )
    .catch((error) => console.error(error));
};

export const actSearchMovie = (q) => (dispatch) => {
  if (q) {
    callAPI("GET", `QuanLyPhim/LayDanhSachPhim?maNhom=GP10&tenPhim=${q}`)
      .then((response) =>
        dispatch({
          type: ActionTypes.SEARCH_MOVIE,
          listSearch: response.data,
          isTyping: false,
        })
      )
      .catch((error) => console.error(error.response.data));
  } else {
    dispatch({
      type: ActionTypes.SEARCH_MOVIE,
      listSearch: [],
      isTyping: false,
    });
  }
};

export const actTyping = () => (dispatch) => {
  dispatch({ type: ActionTypes.SEARCH_MOVIE, isTyping: true });
};

export const actViewTrailer = (trailer) => {
  return {
    type: ActionTypes.VIEW_TRAILER,
    trailer,
  };
};


