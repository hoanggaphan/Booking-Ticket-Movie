import * as ActionTypes from "redux/constants/ActionTypes";
import { callAPI } from "redux/utils/callAPI";

export const actGetRoomInfo = (maLichChieu) => (dispatch) => {
  dispatch({ type: ActionTypes.GET_ROOM_INFO_REQUEST, roomInfo: null });

  callAPI("GET", `QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`)
    .then((response) =>
      dispatch({
        type: ActionTypes.GET_ROOM_INFO_SUCCESS,
        roomInfo: response.data,
      })
    )
    .catch((error) =>
      dispatch({ type: ActionTypes.GET_ROOM_INFO_FAILED, error: error })
    );
};
export const actBookingChair = (info, token, history, enqueueSnackbar) => (
  dispatch
) => {
  callAPI("POST", "QuanLyDatVe/DatVe", info, token)
    .then((response) => {
      enqueueSnackbar(response.data, { variant: "success" });
      history.replace("/home/account");
    })
    .catch((error) =>
      enqueueSnackbar(error.response.data, { variant: "error" })
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
