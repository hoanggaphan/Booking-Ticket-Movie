import * as ActionTypes from "redux/constants/ActionTypes";
const initialState = {
  roomInfo: null,
  listBooking: [],

  open: false,
  message: "",
  status: "",
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_ROOM_INFO:
      if (!action.roomInfo) return { ...state, roomInfo: action.roomInfo };
      state.roomInfo = action.roomInfo;
      return { ...state };

    case ActionTypes.ADD_CHAIR_BOOKING:
      state.listBooking = [...state.listBooking, action.chairInfo];
      return { ...state };

    case ActionTypes.REMOVE_CHAIR_BOOKING:
      const listBooking = [...state.listBooking];
      listBooking.splice(action.index, 1);
      state.listBooking = listBooking;
      return { ...state };

    case ActionTypes.CLEAR_LIST_BOOKING:
      return { ...state, listBooking: [] };

    case ActionTypes.POST_BOOKING_CHAIR:
      let { message, status } = action;
      return { ...state, message, status };

    case ActionTypes.CLEAR_MESSAGE:
      return { ...state, message: "" };

    case ActionTypes.OPEN_PAYMENT_BOX:
      return { ...state, open: action.status };

    default:
      return { ...state };
  }
};

export default bookingReducer;
