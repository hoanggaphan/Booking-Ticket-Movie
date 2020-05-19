import * as ActionTypes from "redux/constants/ActionTypes";
import { callAPI } from "redux/utils/callAPI";

export const actgetListMovie = () => (dispatch) => {
  callAPI("GET", "QuanLyPhim/LayDanhSachPhim?maNhom=GP10", null, null)
    .then((response) =>
      dispatch({
        type: ActionTypes.GET_LIST_MOVIE_API,
        payload: response.data,
      })
    )
    .catch((error) => console.log(error.response.data));
};

export const actgetDetailMovieAPI = (maPhim) => {
  return (dispatch) => {
    dispatch({ type: ActionTypes.GET_DETAIL_MOVIE_REQUEST });
    callAPI("GET", `QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`)
      .then((result) =>
        dispatch({
          type: ActionTypes.GET_DETAIL_MOVIE_SUCCESS,
          detailMovie: result.data,
        })
      )
      .catch((error) =>
        dispatch({ type: ActionTypes.GET_DETAIL_MOVIE_FAILURE, message: error })
      );
  };
};

export const actViewTrailer = (trailer) => {
  return {
    type: ActionTypes.VIEW_TRAILER,
    trailer,
  };
};

export const actSearchMovie = (value) => (dispatch) => {
  if (value) {
    return callAPI(
      "GET",
      `QuanLyPhim/LayDanhSachPhim?maNhom=GP10&tenPhim=${value}`
    )
      .then((response) =>
        dispatch({
          type: ActionTypes.SEARCH_MOVIE_SUCCESS,
          payload: response.data,
          value,
        })
      )
      .catch((error) =>
        dispatch({ type: ActionTypes.SEARCH_MOVIE_FAILURE, message: error })
      );
  } else {
    dispatch({ type: ActionTypes.SEARCH_MOVIE_SUCCESS, payload: [] });
  }
};

export const actSearching = () => {
  return { type: ActionTypes.SEARCH_MOVIE_REQUEST };
};
