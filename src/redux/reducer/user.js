import * as ActionTypes from "redux/constants/ActionTypes";
const initialState = {
  user: null,
  isFetching: false, // sử dụng cho login, register, getAccount

  account: null,
  thongTinDatVe: [],
  isUpdating: false,

  listComment: null,
  isLogin: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN_USER_REQUEST:
      state.isFetching = action.isFetching;
      return { ...state };

    case ActionTypes.LOGIN_USER_FAILED:
      state.isFetching = action.isFetching;
      return { ...state };

    case ActionTypes.LOGIN_USER_SUCCESS:
      state.user = action.user;
      state.isFetching = action.isFetching;
      return { ...state };

    case ActionTypes.REGISTER_USER_REQUEST:
      state.isFetching = action.isFetching;
      return { ...state };

    case ActionTypes.REGISTER_USER_FAILED:
      state.isFetching = action.isFetching;
      return { ...state };

    case ActionTypes.REGISTER_USER_SUCCESS:
      state.isFetching = action.isFetching;
      return { ...state };

    case ActionTypes.GET_ACCOUNT_REQUEST:
      state.isFetching = action.isFetching;
      return { ...state };

    case ActionTypes.GET_ACCOUNT_FAILED:
      state.isFetching = action.isFetching;
      return { ...state };

    case ActionTypes.GET_ACCOUNT_SUCCESS:
      state.thongTinDatVe = action.account.thongTinDatVe.map((item) => {
        item.danhSachGhe = item.danhSachGhe.reduce((array, itemCurrent) => {
          const index = array.findIndex(
            (subItem) => subItem.tenHeThongRap === itemCurrent.tenHeThongRap
          );

          const length = array.length;
          itemCurrent.danhSachGheRefact = [itemCurrent.tenGhe];

          if (length < 1 || index === -1) {
            array.push(itemCurrent);
          } else {
            array[index].danhSachGheRefact.push(itemCurrent.tenGhe);
          }
          return array;
        }, []);
        return item;
      });
      state.account = action.account;
      state.isFetching = false;
      return { ...state };

    case ActionTypes.UPDATE_ACCOUNT_REQUEST:
      state.isUpdating = action.isUpdating;
      return { ...state };

    case ActionTypes.UPDATE_ACCOUNT_FAILED:
      state.isUpdating = action.isUpdating;
      return { ...state };

    case ActionTypes.UPDATE_ACCOUNT_SUCCESS:
      const user = { ...state.user };

      for (const propUser in user) {
        for (const propAccount in action.account) {
          if (propUser === propAccount) {
            user[propUser] = action.account[propAccount];
          }
        }
      }

      localStorage.setItem("user", JSON.stringify(user));

      state.user = user;
      state.account = action.account;
      state.isUpdating = action.isUpdating;

      return { ...state };

    case ActionTypes.GET_COMMENT_LIST:
      state.listComment = action.listComment
      return { ...state };

    case ActionTypes.ADD_COMMENT:
      state.listComment = [...state.listComment, action.comment];
      return { ...state };

    case ActionTypes.UPDATE_COMMENT:
      console.log(action.comment);
      return { ...state };

    case ActionTypes.SHOW_LOGIN:
      return { ...state, isLogin: action.status };

    case ActionTypes.LOAD_USER:
      return { ...state, user: action.user };

    default:
      return { ...state };
  }
};

export default userReducer;
