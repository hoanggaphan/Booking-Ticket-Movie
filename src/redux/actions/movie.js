import * as ActionTypes from "redux/constants/ActionTypes";
import { callAPI } from "redux/utils/callAPI";

export const actgetMovieList = () => async (dispatch) => {
  try {
    const response = await callAPI(
      "GET",
      "QuanLyPhim/LayDanhSachPhim?maNhom=GP10",
      null,
      null
    );
    dispatch({
      type: ActionTypes.GET_MOVIE_LIST,
      movieList: response.data,
    });
  } catch (error) {
    console.error(error);
  }
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
    dispatch({
      type: ActionTypes.SEARCH_MOVIE,
      listSearch: null,
      isTyping: false,
    });
  }
};

export const actTyping = () => (dispatch) => {
  dispatch({ type: ActionTypes.SEARCH_MOVIE, isTyping: true });
};
