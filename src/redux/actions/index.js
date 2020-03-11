import * as ActionTypes from "./../constants/ActionTypes";
import { callAPI } from "./../utils/callAPI";

export const actGetListMovieAPI = () => {
  return dispatch => {
    callAPI("GET", "QuanLyPhim/LayDanhSachPhim?maNhom=GP10", null, null)
      .then(result =>
        dispatch({
          type: ActionTypes.GET_LIST_MOVIE_API,
          listMovie: result.data
        })
      )
      .catch(err => console.log(err));
  };
};

export const actViewTrailer = trailer => {
  return {
    type: ActionTypes.VIEW_TRAILER,
    trailer
  };
};

export const actOnSearch = keyword => {
  return {
    type: ActionTypes.SEARCH,
    keyword
  };
};
