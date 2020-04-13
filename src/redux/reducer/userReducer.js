import * as ActionTypes from "./../constants/ActionTypes";

const initialState = {
  user: null,
  listComment: [],
  isLogin: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOAD_USER:
      return { ...state, user: action.user };
    case ActionTypes.GET_LIST_COMMENT_API:
      return { ...state, listComment: action.listComment };
    case ActionTypes.POST_COMMENT_API:
      state.listComment = [...state.listComment, action.comment];
      return { ...state };
    case ActionTypes.PUT_COMMENT_API:
      const viTri = state.listComment.findIndex((item) => item.id === action.comment.id);
      const listComment = [...state.listComment];
      listComment[viTri] = action.comment;
      state.listComment = listComment;
      return { ...state };
    case ActionTypes.SHOW_LOGIN:
      return { ...state, isLogin: action.status };
    default:
      return { ...state };
  }
};

export default userReducer;
