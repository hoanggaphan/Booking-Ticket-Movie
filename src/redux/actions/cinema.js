import * as ActionTypes from "redux/constants/ActionTypes";
import { callAPI } from "helpers/callAPI";

export const actGetCinemaLogo = () => (dispatch) => {
  callAPI("GET", "QuanLyRap/LayThongTinHeThongRap")
    .then((response) =>
      dispatch({
        type: ActionTypes.GET_CINEMA_LOGO,
        listCinemaLogo: response.data,
      })
    )
    .catch((error) => console.error(error));
};

export const actGetCinemaList = () => (dispatch) => {
  callAPI(
    "GET",
    "QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP10",
    null,
    null
  )
    .then((response) =>
      dispatch({
        type: ActionTypes.GET_CINEMA_LIST,
        listCinemaDetail: response.data,
      })
    )
    .catch((error) => console.error(error));
};
