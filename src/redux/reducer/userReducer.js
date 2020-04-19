import * as ActionTypes from "./../constants/ActionTypes";
const initialState = {
  user: null,
  account: null,
  thongTinDatVe: [],
  listComment: [],
  isLogin: false,
  isFetching: false, // sử dụng cho login, register, getAccount
  isUpdating: false,
  message: "",
  status: "",
  isGettingComment: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.POST_LOGIN_USER_REQUEST:
      return { ...state, isFetching: true, message: "" };
    case ActionTypes.POST_LOGIN_USER_SUCCESS:
      return { ...state, isFetching: false, user: action.user, message: action.message, status: action.status };
    case ActionTypes.POST_LOGIN_USER_FAILURE:
      return { ...state, isFetching: false, message: action.message, status: action.status };
    case ActionTypes.POST_REGISTER_USER_REQUEST:
      return { ...state, isFetching: true, message: "" };
    case ActionTypes.POST_REGISTER_USER_SUCCESS:
      return { ...state, isFetching: false, message: action.message, status: action.status };
    case ActionTypes.POST_REGISTER_USER_FAILURE:
      return { ...state, isFetching: false, message: action.message, status: action.status };
    case ActionTypes.CLEAR_MESSAGE:
        return { ...state, message: "" };
    case ActionTypes.LOAD_USER:
      return { ...state, user: action.user };
    case ActionTypes.GET_ACCOUNT_USER_REQUEST:
      return { ...state, isFetching: true};
    case ActionTypes.GET_ACCOUNT_USER_SUCCESS:
      state.thongTinDatVe = action.account.thongTinDatVe.map(item => {
        item.danhSachGhe = item.danhSachGhe.reduce((array, itemCurrent) => {
          const index = array.findIndex(subItem => subItem.tenHeThongRap === itemCurrent.tenHeThongRap);
          const length = array.length;
          itemCurrent.danhSachGheRefact = [itemCurrent.tenGhe];
          if(length < 1 || index === -1) {
            array.push(itemCurrent);
          } else {
            array[index].danhSachGheRefact.push(itemCurrent.tenGhe);
          }
          return array;
        }, []);
        return item;
      })
      return { ...state, isFetching: false, account: action.account };
    case ActionTypes.GET_ACCOUNT_USER_FAILURE:
      console.log(action.message)
      return { ...state, isFetching: false};
    case ActionTypes.PUT_UPDATE_ACCOUNT_REQUEST:
      return { ...state, isUpdating: true};
    case ActionTypes.PUT_UPDATE_ACCOUNT_SUCCESS:
      const user = {...state.user};
      for(const propUser in user) {
        for(const propAccount in action.account) {
          if(propUser === propAccount) {
            user[propUser] = action.account[propAccount];
          }
        }
      }
      localStorage.setItem("user", JSON.stringify(user));
      state.user = user;
      state.account = action.account;
      return { ...state, isUpdating: false, message: action.message, status: "success"};
    case ActionTypes.PUT_UPDATE_ACCOUNT_FAILURE:
      return { ...state, isUpdating: false, message: action.message, status: "error"};

    case ActionTypes.GET_LIST_COMMENT_REQUEST:
      return { ...state, isGettingComment: true };
    case ActionTypes.GET_LIST_COMMENT_SUCCESS:
      return { ...state, listComment: action.listComment, isGettingComment: false };
    case ActionTypes.GET_LIST_COMMENT_FAILURE:
      console.log(action.message)
      return { ...state, isGettingComment: false };
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
