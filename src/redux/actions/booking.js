import * as ActionTypes from "redux/constants/ActionTypes";
import { callAPI } from "redux/utils/callAPI";

export const actGetRoomInfo = (maLichChieu) => async (dispatch) => {
  dispatch({ type: ActionTypes.GET_ROOM_INFO, roomInfo: null });
  try {
    const response = await callAPI(
      "GET",
      `QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`
    );
    dispatch({
      type: ActionTypes.GET_ROOM_INFO,
      roomInfo: response.data,
    });
  } catch (error) {
    console.error(error.response.data);
  }
};
export const actPostBookingChair = (info, token, history) => async (
  dispatch
) => {
  try {
    const response = await callAPI("POST", "QuanLyDatVe/DatVe", info, token);
    dispatch({
      type: ActionTypes.POST_BOOKING_CHAIR,
      message: response.data,
      status: "success",
    });
    history.replace("/home/account");
  } catch (error) {
    dispatch({
      type: ActionTypes.POST_BOOKING_CHAIR,
      message: error.response.data,
      status: "error",
    });
  }
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
