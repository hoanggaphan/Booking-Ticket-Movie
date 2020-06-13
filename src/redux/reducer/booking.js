import * as ActionTypes from "redux/constants/ActionTypes";
const initialState = {
  roomInfo: null,
  listBooking: [],
  open: false,
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_ROOM_INFO_REQUEST:
      state.roomInfo = action.roomInfo;
      return { ...state };

    case ActionTypes.GET_ROOM_INFO_FAILED:
      console.error(action.error);
      return { ...state };

    case ActionTypes.GET_ROOM_INFO_SUCCESS:
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

    case ActionTypes.OPEN_PAYMENT_BOX:
      return { ...state, open: action.status };

    default:
      return { ...state };
  }
};

export default bookingReducer;
