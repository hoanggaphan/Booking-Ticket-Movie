import * as ActionTypes from "redux/constants/ActionTypes";
import { callAPI } from "redux/utils/callAPI";

export const actLoginUserAPI = (data, history, from) => {
  return async (dispatch) => {
    dispatch({
      type: ActionTypes.POST_LOGIN_USER,
      user: null,
      status: "",
      message: "",
      isFetching: true,
    });

    try {
      const response = await callAPI(
        "POST",
        "QuanLyNguoiDung/DangNhap",
        data,
        null
      );
      if (response.data.maLoaiNguoiDung === "KhachHang") {
        dispatch({
          type: ActionTypes.POST_LOGIN_USER,
          user: response.data,
          status: "success",
          message: "Đăng nhập thành công",
          isFetching: false,
        });

        localStorage.setItem("user", JSON.stringify(response.data));
        history.replace(from);
      } else {
        dispatch({
          type: ActionTypes.POST_LOGIN_USER,
          user: null,
          status: "error",
          message: "Không có quyền truy cập",
          isFetching: false,
        });
      }
    } catch (error) {
      dispatch({
        type: ActionTypes.POST_LOGIN_USER,
        user: null,
        message: error.response.data,
        status: "error",
        isFetching: false,
      });
    }
  };
};

export const actRegisterUserAPI = (data, history) => {
  return async (dispatch) => {
    dispatch({
      type: ActionTypes.POST_REGISTER_USER,
      status: "",
      message: "",
      isFetching: true,
    });

    try {
      // eslint-disable-next-line
      const response = await callAPI(
        "POST",
        "QuanLyNguoiDung/DangKy",
        data,
        null
      );
      dispatch({
        type: ActionTypes.POST_REGISTER_USER,
        message: "Đăng ký thành công",
        status: "success",
        isFetching: false,
      });

      history.push("/user/login");
    } catch (error) {
      dispatch({
        type: ActionTypes.POST_REGISTER_USER,
        message: error.response.data,
        status: "error",
        isFetching: false,
      });
    }
  };
};

export const actGetAccountUser = (taiKhoan) => {
  return async (dispatch) => {
    dispatch({
      type: ActionTypes.GET_ACCOUNT_USER,
      account: null,
      isFetching: true,
    });

    try {
      const response = await callAPI(
        "POST",
        "QuanLyNguoiDung/ThongTinTaiKhoan",
        taiKhoan,
        null
      );

      dispatch({
        type: ActionTypes.GET_ACCOUNT_USER,
        account: response.data,
        isFetching: false,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.GET_ACCOUNT_USER,
        message: error.response.data,
        isFetching: false,
      });
    }
  };
};

export const actPutUpdateAccount = (account, token) => {
  return async (dispatch) => {
    dispatch({
      type: ActionTypes.PUT_UPDATE_ACCOUNT,
      account: null,
      status: "",
      message: "",
      isUpdating: true,
    });

    try {
      const response = await callAPI(
        "PUT",
        "QuanLyNguoiDung/CapNhatThongTinNguoiDung",
        account,
        token
      );

      dispatch({
        type: ActionTypes.PUT_UPDATE_ACCOUNT,
        account: response.data,
        status: "success",
        message: "Cập nhật thành công",
        isUpdating: false,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.PUT_UPDATE_ACCOUNT,
        status: "error",
        message: error.response.data,
        isUpdating: false,
      });
    }
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
