import Axios from "axios";
import * as ActionTypes from "redux/constants/ActionTypes";

export const actGetListCommentAPI = () => async (dispatch) => {
  dispatch({ type: ActionTypes.GET_LIST_COMMENT, listComment: null });

  try {
    const response = await Axios({
      method: "GET",
      url: "https://5e8d7b0622d8cd0016a794f9.mockapi.io/listcomment",
    });

    dispatch({
      type: ActionTypes.GET_LIST_COMMENT,
      listComment: response.data,
    });
  } catch (error) {
    console.error(error);
  }
};

export const actPostCommentAPI = (comment) => async (dispatch) => {
  try {
    const response = Axios({
      method: "POST",
      url: "https://5e8d7b0622d8cd0016a794f9.mockapi.io/listcomment",
      data: comment,
    });

    dispatch({ type: ActionTypes.POST_COMMENT_API, comment: response.data });
  } catch (error) {
    console.error(error);
  }
};

export const actPutCommentAPI = (id, comment) => async (dispatch) => {
  try {
    const response = Axios({
      url: `https://5e8d7b0622d8cd0016a794f9.mockapi.io/listcomment/${id}`,
      method: "PUT",
      data: comment,
    });

    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};
