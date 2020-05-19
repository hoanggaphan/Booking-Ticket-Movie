import * as ActionTypes from "redux/constants/ActionTypes";
import { callAPI } from "redux/utils/callAPI";

export const actLoginUserAPI = (data, history, from) => {
  return (dispatch) => {
    dispatch({ type: ActionTypes.POST_LOGIN_USER_REQUEST });
    callAPI("POST", "QuanLyNguoiDung/DangNhap", data, null)
      .then((response) => {
        if (response.data.maLoaiNguoiDung === "KhachHang") {
          localStorage.setItem("user", JSON.stringify(response.data));
          dispatch({
            type: ActionTypes.POST_LOGIN_USER_SUCCESS,
            user: response.data,
            message: "Đăng nhập thành công",
            status: "success",
          });
          history.replace(from);
        } else {
          dispatch({
            type: ActionTypes.POST_LOGIN_USER_SUCCESS,
            user: response.data,
            message: "Không có quyền truy cập",
            status: "error",
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: ActionTypes.POST_LOGIN_USER_FAILURE,
          message: error.response.data,
          status: "error",
        });
      });
  };
};

export const actRegisterUserAPI = (data, history) => {
  return (dispatch) => {
    dispatch({ type: ActionTypes.POST_REGISTER_USER_REQUEST });
    callAPI("POST", "QuanLyNguoiDung/DangKy", data, null)
      .then(() => {
        dispatch({
          type: ActionTypes.POST_REGISTER_USER_SUCCESS,
          message: "Đăng ký thành công",
          status: "success",
        });
        history.push("/user/login");
      })
      .catch((error) =>
        dispatch({
          type: ActionTypes.POST_REGISTER_USER_SUCCESS,
          message: error.response.data,
          status: "error",
        })
      );
  };
};

export const actGetAccountUser = (taiKhoan) => {
  return (dispatch) => {
    dispatch({ type: ActionTypes.GET_ACCOUNT_USER_REQUEST });
    callAPI("POST", "QuanLyNguoiDung/ThongTinTaiKhoan", taiKhoan, null)
      .then((response) =>
        dispatch({
          type: ActionTypes.GET_ACCOUNT_USER_SUCCESS,
          account: response.data,
        })
      )
      .catch((error) =>
        dispatch({
          type: ActionTypes.GET_ACCOUNT_USER_FAILURE,
          message: error.response.data,
        })
      );
  };
};

export const actPutUpdateAccount = (account, token) => {
  return (dispatch) => {
    dispatch({ type: ActionTypes.PUT_UPDATE_ACCOUNT_REQUEST });
    callAPI("PUT", "QuanLyNguoiDung/CapNhatThongTinNguoiDung", account, token)
      .then((response) =>
        dispatch({
          type: ActionTypes.PUT_UPDATE_ACCOUNT_SUCCESS,
          account: response.data,
          message: "Cập nhật thành công",
        })
      )
      .catch((error) =>
        dispatch({
          type: ActionTypes.PUT_UPDATE_ACCOUNT_FAILURE,
          message: error.response.data,
        })
      );
  };
};

export const actClearMessage = () => {
  return { type: ActionTypes.CLEAR_MESSAGE };
};

export const actLoadUser = (user) => {
  return {
    type: ActionTypes.LOAD_USER,
    user,
  };
};

export const actShowLogin = (status) => {
  return {
    type: ActionTypes.SHOW_LOGIN,
    status,
  };
};
