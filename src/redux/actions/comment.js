import Axios from "axios";
import * as ActionTypes from "redux/constants/ActionTypes";

export const actGetListCommentAPI = () => {
  return async (dispatch) => {
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
      console.error(error.response.data);
    }
  };
};

export const actPostCommentAPI = (comment) => {
  return (dispatch) => {
    Axios({
      method: "POST",
      url: "https://5e8d7b0622d8cd0016a794f9.mockapi.io/listcomment",
      data: comment,
    })
      .then((result) =>
        dispatch({ type: ActionTypes.POST_COMMENT_API, comment: result.data })
      )
      .catch((error) => console.log(error));
  };
};

export const actPutCommentAPI = (id, comment) => {
  return (dispatch) => {
    Axios({
      url: `https://5e8d7b0622d8cd0016a794f9.mockapi.io/listcomment/${id}`,
      method: "PUT",
      data: comment,
    })
      .then((result) => console.log(result.data))
      .catch((error) => console.log(error));
  };
};
