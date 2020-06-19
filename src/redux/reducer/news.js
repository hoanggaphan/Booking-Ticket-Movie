import * as ActionTypes from "../constants/ActionTypes";

const initialState = {
  film24hList: [],
  film24hDetail: null,

  reviewList: [],
  reviewDetail: null,

  promotionList: [],
  promotionDetail: null,
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_FILM24H_LIST:
      return { ...state, film24hList: action.film24hList };

    case ActionTypes.GET_FILM24H_DETAIL_REQUEST:
      state.film24hDetail = action.film24hDetail;
      return { ...state };

    case ActionTypes.GET_FILM24H_DETAIL_FAILED:
      console.error(action.error);
      return { ...state };

    case ActionTypes.GET_FILM24H_DETAIL_SUCCESS:
      state.film24hDetail = action.film24hDetail;
      return { ...state };

    case ActionTypes.GET_REVIEW_LIST:
      return { ...state, reviewList: action.reviewList };

    case ActionTypes.GET_REVIEW_DETAIL_REQUEST:
      state.reviewDetail = action.reviewDetail;
      return { ...state };

    case ActionTypes.GET_REVIEW_DETAIL_FAILED:
      console.error(action.error);
      return { ...state };

    case ActionTypes.GET_REVIEW_DETAIL_SUCCESS:
      state.reviewDetail = action.reviewDetail;
      return { ...state };

    case ActionTypes.GET_PROMOTION_LIST:
      return { ...state, promotionList: action.promotionList };

    case ActionTypes.GET_PROMOTION_DETAIL_REQUEST:
      state.promotionDetail = action.promotionDetail;
      return { ...state };

    case ActionTypes.GET_PROMOTION_DETAIL_FAILED:
      console.error(action.error);
      return { ...state };

    case ActionTypes.GET_PROMOTION_DETAIL_SUCCESS:
      state.promotionDetail = action.promotionDetail;
      return { ...state };

    default:
      return { ...state };
  }
};

export default newsReducer;
