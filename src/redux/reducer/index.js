import { combineReducers } from "redux";
import bookingReducer from "./booking";
import cinemaReducer from "./cinema";
import movieReducer from "./movie";
import userReducer from "./user";

const rootReducers = combineReducers({
  movieReducer,
  cinemaReducer,
  userReducer,
  bookingReducer,
});

export default rootReducers;
