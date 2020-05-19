import * as ActionTypes from "redux/constants/ActionTypes";
const initialState = {
  roomInfo: null,
  isFetching: true,
  listBooking: [],
  open: false,
  isPaying: false,
  message: "",
  status: "",
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_ROOM_INFO_REQUEST:
      return { ...state, isFetching: true };
    case ActionTypes.GET_ROOM_INFO_SUCCESS:
      return { ...state, roomInfo: action.payload, isFetching: false };
    case ActionTypes.GET_ROOM_INFO_FAILURE:
      console.log(action.message);
      return { ...state, isFetching: false };
    case ActionTypes.ADD_CHAIR_BOOKING:
      return {
        ...state,
        listBooking: [...state.listBooking, action.chairInfo],
      };
    case ActionTypes.REMOVE_CHAIR_BOOKING:
      const listBooking = [...state.listBooking];
      listBooking.splice(action.index, 1);
      state.listBooking = listBooking;
      return { ...state };
    case ActionTypes.CLEAR_LIST_BOOKING:
      return { ...state, listBooking: [] };
    case ActionTypes.POST_BOOKING_CHAIR_REQUEST:
      return { ...state, isPaying: true, message: "", status: "" };
    case ActionTypes.POST_BOOKING_CHAIR_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        isPaying: false,
        message: action.message,
        status: action.status,
      };
    case ActionTypes.POST_BOOKING_CHAIR_FAILURE:
      return {
        ...state,
        isPaying: false,
        message: action.message,
        status: action.status,
      };
    case ActionTypes.CLEAR_MESSAGE:
      return { ...state, message: "" };
    case ActionTypes.OPEN_PAYMENT_BOX:
      return { ...state, open: action.status };
    default:
      return { ...state };
  }
};

export default bookingReducer;
