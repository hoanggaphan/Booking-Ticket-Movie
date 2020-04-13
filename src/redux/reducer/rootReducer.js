import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import cinemaReducer from "./cinemaReducer";
import userReducer from './userReducer';

const rootReducers = combineReducers({
  movieReducer,
  cinemaReducer,
  userReducer
});

export default rootReducers;
