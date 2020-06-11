import Axios from "axios";
import * as ActionTypes from "../constants/ActionTypes";

export const actGetFilm24hNews = () => async (dispatch) => {
  try {
    const response = await Axios.get(
      "https://5e8d7b0622d8cd0016a794f9.mockapi.io/film"
    );
    
    dispatch({ type: ActionTypes.GET_FILM24H_NEWS, film24h: response.data });

  } catch (error) {
    console.error(error);
  }
};

export const actGetReviewNews = () => async (dispatch) => {
  try {
    const response = await Axios.get(
      "https://5e8d7b0622d8cd0016a794f9.mockapi.io/review"
    );

    dispatch({ type: ActionTypes.GET_REVIEW_NEWS, review: response.data });

  } catch (error) {
    console.error(error);
  }
};

export const actGetPromotionNews = () => async (dispatch) => {
  try {
    const response = await Axios.get(
      "https://5e8d7b0622d8cd0016a794f9.mockapi.io/promotion"
    );

    dispatch({ type: ActionTypes.GET_PROMOTION_NEWS, promotion: response.data });
    
  } catch (error) {
    console.error(error);
  }
};
