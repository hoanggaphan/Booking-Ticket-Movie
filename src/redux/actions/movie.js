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
  return async (dispatch) => {
    dispatch({ type: ActionTypes.GET_DETAIL_MOVIE, detailMovie: null });

    try {
      const response = await callAPI(
        "GET",
        `QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`
      );
      dispatch({
        type: ActionTypes.GET_DETAIL_MOVIE,
        detailMovie: response.data,
      });
    } catch (error) {
      console.error(error.response.data);
    }
  };
};

export const actViewTrailer = (trailer) => {
  return {
    type: ActionTypes.VIEW_TRAILER,
    trailer,
  };
};

export const actSearchMovie = (q) => async (dispatch) => {
  if (q) {
    try {
      const response = await callAPI(
        "GET",
        `QuanLyPhim/LayDanhSachPhim?maNhom=GP10&tenPhim=${q}`
      );
      dispatch({
        type: ActionTypes.SEARCH_MOVIE,
        listSearch: response.data,
        q,
        isTyping: false,
      });
    } catch (error) {
      console.error(error.response.data);
    }
  } else {
    dispatch({ type: ActionTypes.SEARCH_MOVIE, listSearch: null, isTyping: false });
  }
};

export const actTyping = () => (dispatch) => {
  dispatch({ type: ActionTypes.SEARCH_MOVIE, isTyping: true });
};
