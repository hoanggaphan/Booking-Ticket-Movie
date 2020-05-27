import * as ActionTypes from "redux/constants/ActionTypes";
import { callAPI } from "redux/utils/callAPI";

export const actGetShowtimesInfoAPI = (maPhim) => {
  return (dispatch) => {
    callAPI(
      "GET",
      `QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
      null,
      null
    )
      .then((result) =>
        dispatch({
          type: ActionTypes.GET_SHOWTIMES_INFO_API,
          showtimesInfo: result.data,
        })
      )
      .catch((err) => console.log(err));
  };
};

export const actGetListLogo = () => {
  return async (dispatch) => {
    try {
      const response = await callAPI("GET", "QuanLyRap/LayThongTinHeThongRap");
      dispatch({
        type: ActionTypes.GET_LIST_LOGO_CINEMA,
        listCinemaLogo: response.data,
      });
      
    } catch (error) {
      console.error(error.response.data);
    }
  };
};

export const actGetListCinemaDetail = () => {
  return (dispatch) => {
    callAPI(
      "GET",
      "QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP10",
      null,
      null
    )
      .then((result) =>
        dispatch({
          type: ActionTypes.GET_LIST_CINEMA_DETAIL,
          listCinemaDetail: result.data,
        })
      )
      .catch((err) => console.log(err));
  };
};
