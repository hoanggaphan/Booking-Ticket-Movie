import * as ActionTypes from "redux/constants/ActionTypes";
const initialState = {
  user: null,
  status: "",
  message: "",
  isFetching: false, // sử dụng cho login, register, getAccount

  account: null,
  thongTinDatVe: [],
  isLogin: false,
  isUpdating: false,

  listComment: null,
};

const userReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case ActionTypes.POST_LOGIN_USER:
      return { ...state, ...action };

    case ActionTypes.POST_REGISTER_USER:
      return { ...state, ...action };

    case ActionTypes.CLEAR_MESSAGE:
      return { ...state, message: "" };

    case ActionTypes.LOAD_USER:
      return { ...state, user: action.user };

    case ActionTypes.GET_ACCOUNT_USER:
      if (action.isFetching) return { ...state, ...action };

      if (action.message) return console.log(action.message);

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
      return { ...state, ...action };

    case ActionTypes.PUT_UPDATE_ACCOUNT:
      if (action.isUpdating) return { ...state,...action };

      if(action.status === "error") return {...state, ...action}

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

      return { ...state, ...action };

    case ActionTypes.GET_LIST_COMMENT:
      let { listComment } = action;
      if (!listComment) return { ...state, listComment };
      return { ...state, listComment };

    case ActionTypes.POST_COMMENT_API:
      state.listComment = [...state.listComment, action.comment];
      return { ...state };

    case ActionTypes.SHOW_LOGIN:
      return { ...state, isLogin: action.status };

    default:
      return { ...state };
  }
};

export default userReducer;
