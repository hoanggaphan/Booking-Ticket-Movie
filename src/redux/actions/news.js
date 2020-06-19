import Axios from "axios";
import * as ActionTypes from "../constants/ActionTypes";

export const actGetFilm24hList = () => (dispatch) => {
  Axios({
    method: "GET",
    url: "https://5e8d7b0622d8cd0016a794f9.mockapi.io/film",
  })
    .then((response) =>
      dispatch({
        type: ActionTypes.GET_FILM24H_LIST,
        film24hList: response.data,
      })
    )
    .catch((error) => console.error(error));
};

export const actGetFilm24hDetail = (id) => (dispatch) => {
  dispatch({
    type: ActionTypes.GET_FILM24H_DETAIL_REQUEST,
    film24hDetail: null,
  });

  Axios({
    method: "GET",
    url: `https://5e8d7b0622d8cd0016a794f9.mockapi.io/film/${id}`,
  })
    .then((response) =>
      dispatch({
        type: ActionTypes.GET_FILM24H_DETAIL_SUCCESS,
        film24hDetail: response.data,
      })
    )
    .catch((error) =>
      dispatch({
        type: ActionTypes.GET_FILM24H_DETAIL_FAILED,
        error: error,
      })
    );
};

export const actGetReviewList = () => (dispatch) => {
  Axios({
    method: "GET",
    url: "https://5e8d7b0622d8cd0016a794f9.mockapi.io/review",
  })
    .then((response) =>
      dispatch({ type: ActionTypes.GET_REVIEW_LIST, reviewList: response.data })
    )
    .catch((error) => console.error(error));
};

export const actGetReviewDetail = (id) => (dispatch) => {
  dispatch({ type: ActionTypes.GET_REVIEW_DETAIL_REQUEST, reviewDetail: null });

  Axios({
    method: "GET",
    url: `https://5e8d7b0622d8cd0016a794f9.mockapi.io/review/${id}`,
  })
    .then((response) =>
      dispatch({
        type: ActionTypes.GET_REVIEW_DETAIL_SUCCESS,
        reviewDetail: response.data,
      })
    )
    .catch((error) =>
      dispatch({
        type: ActionTypes.GET_REVIEW_DETAIL_FAILED,
        error: error,
      })
    );
};

export const actGetPromotionList = () => (dispatch) => {
  Axios({
    method: "GET",
    url: "https://5e8d7b0622d8cd0016a794f9.mockapi.io/promotion",
  })
    .then((response) =>
      dispatch({
        type: ActionTypes.GET_PROMOTION_LIST,
        promotionList: response.data,
      })
    )
    .catch((error) => console.error(error));
};

export const actGetPromotionDetail = (id) => (dispatch) => {
  dispatch({
    type: ActionTypes.GET_PROMOTION_DETAIL_REQUEST,
    promotionDetail: null,
  });

  Axios({
    method: "GET",
    url: `https://5e8d7b0622d8cd0016a794f9.mockapi.io/promotion/${id}`,
  })
    .then((response) =>
      dispatch({
        type: ActionTypes.GET_PROMOTION_DETAIL_SUCCESS,
        promotionDetail: response.data,
      })
    )
    .catch((error) =>
      dispatch({
        type: ActionTypes.GET_PROMOTION_DETAIL_FAILED,
        error: error,
      })
    );
};
