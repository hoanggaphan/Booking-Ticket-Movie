import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import cinemaReducer from "./cinemaReducer";
import userReducer from './userReducer';
import bookingReducer from './bookingReducer';

const rootReducers = combineReducers({
  movieReducer,
  cinemaReducer,
  userReducer,
  bookingReducer
});

export default rootReducers;
