import * as ActionTypes from "./../constants/ActionTypes";
import Axios from "axios";

export const actGetListMovieAPI = () => {
  return dispatch => {
    Axios({
      url:
        "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP10",
      method: "GET"
    })
      .then(result =>
        dispatch({
          type: ActionTypes.GET_LIST_MOVIE_API,
          listMovie: result.data
        })
      )
      .catch(err => console.log(err));
  };
};

export const actViewTrailer = trailerMovie => {
  return {
    type: ActionTypes.VIEW_TRAILER,
    trailerMovie
  }
}