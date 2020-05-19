import { combineReducers } from "redux";
import bookingReducer from "./bookingReducer";
import cinemaReducer from "./cinemaReducer";
import movieReducer from "./movieReducer";
import userReducer from "./userReducer";

const rootReducers = combineReducers({
  movieReducer,
  cinemaReducer,
  userReducer,
  bookingReducer,
});

export default rootReducers;
