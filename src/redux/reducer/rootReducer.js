import { combineReducers } from "redux";
import movieReducer from './movieReducer';
import cinemaReducer from './cinemaReducer';

const rootReducers = combineReducers({
    movieReducer,
    cinemaReducer
});

export default rootReducers;
