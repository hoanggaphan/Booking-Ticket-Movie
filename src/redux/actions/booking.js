import * as ActionTypes from "redux/constants/ActionTypes";
import { callAPI } from "redux/utils/callAPI";

export const actGetRoomInfo = (maLichChieu) => (dispatch) => {
  dispatch({ type: ActionTypes.GET_ROOM_INFO_REQUEST });
  return callAPI(
    "GET",
    `QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
    null,
    null
  )
    .then((response) =>
      dispatch({
        type: ActionTypes.GET_ROOM_INFO_SUCCESS,
        payload: response.data,
      })
    )
    .catch((error) =>
      dispatch({
        type: ActionTypes.GET_ROOM_INFO_FAILURE,
        message: error.response.data,
      })
    );
};
export const actPostBookingChair = (info, token, history) => (dispatch) => {
  dispatch({ type: ActionTypes.POST_BOOKING_CHAIR_REQUEST });
  return callAPI("POST", "QuanLyDatVe/DatVe", info, token)
    .then((response) => {
      dispatch({
        type: ActionTypes.POST_BOOKING_CHAIR_SUCCESS,
        payload: response.config.data,
        message: "Đặt ghế thành công",
        status: "success",
      });
      history.replace("/home/account");
    })
    .catch((error) =>
      dispatch({
        type: ActionTypes.POST_BOOKING_CHAIR_FAILURE,
        message: error.response.data,
        status: "error",
      })
    );
};

export const actOpenPaymentBox = (status) => {
  return { type: ActionTypes.OPEN_PAYMENT_BOX, status };
};

export const actAddChairBooking = (chairInfo) => ({
  type: ActionTypes.ADD_CHAIR_BOOKING,
  chairInfo,
});
export const actRemoveChairBooking = (index) => ({
  type: ActionTypes.REMOVE_CHAIR_BOOKING,
  index,
});
export const actClearListBooking = () => ({
  type: ActionTypes.CLEAR_LIST_BOOKING,
});
