import * as ActionTypes from "../constants/ActionTypes";

const initialState = {
  film24h: [],
  review: [],
  promotion: []
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_FILM24H_NEWS:
      return { ...state, film24h: action.film24h };
    case ActionTypes.GET_REVIEW_NEWS:
        return { ...state, review: action.review };
    case ActionTypes.GET_PROMOTION_NEWS:
        return { ...state, promotion: action.promotion };
    default:
      return { ...state };
  }
};

export default newsReducer;
