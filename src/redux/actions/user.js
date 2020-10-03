import * as ActionTypes from "redux/constants/ActionTypes";
import { callAPI } from "helpers/callAPI";
import Axios from "axios";

/////////////////////////////////////////////////////////////////////////////////
export const actLoginUser = (data, history, from, enqueueSnackbar) => (
  dispatch
) => {
  dispatch({
    type: ActionTypes.LOGIN_USER_REQUEST,
    isFetching: true,
  });

  callAPI("POST", "QuanLyNguoiDung/DangNhap", data, null)
    .then((response) => {
      if (response.data.maLoaiNguoiDung === "KhachHang") {
        dispatch({
          type: ActionTypes.LOGIN_USER_SUCCESS,
          user: response.data,
          isFetching: false,
        });
        enqueueSnackbar("Đăng nhập thành công", { variant: "success" });
        localStorage.setItem("user", JSON.stringify(response.data));
        history.replace(from);
      } else {
        dispatch({
          type: ActionTypes.LOGIN_USER_FAILED,
          isFetching: false,
        });
        enqueueSnackbar("Không có quyền truy cập", { variant: "error" });
      }
    })
    .catch((error) => {
      dispatch({
        type: ActionTypes.LOGIN_USER_FAILED,
        isFetching: false,
      });
      enqueueSnackbar(error.response.data, { variant: "error" });
    });
};

/////////////////////////////////////////////////////////////////////////////////
export const actRegisterUser = (data, history, enqueueSnackbar) => (
  dispatch
) => {
  dispatch({
    type: ActionTypes.REGISTER_USER_REQUEST,
    isFetching: true,
  });

  callAPI("POST", "QuanLyNguoiDung/DangKy", data, null)
    .then((response) => {
      dispatch({
        type: ActionTypes.REGISTER_USER_SUCCESS,
        isFetching: false,
      });

      history.push("/user/login");
      enqueueSnackbar("Đăng ký thành công", { variant: "success" });
    })
    .catch((error) => {
      dispatch({
        type: ActionTypes.REGISTER_USER_FAILED,
        isFetching: false,
      });
      enqueueSnackbar(error.response.data, { variant: "error" });
    });
};

/////////////////////////////////////////////////////////////////////////////////
export const actGetAccountUser = (taiKhoan) => (dispatch) => {
  dispatch({
    type: ActionTypes.GET_ACCOUNT_REQUEST,
    isFetching: true,
  });

  callAPI("POST", "QuanLyNguoiDung/ThongTinTaiKhoan", taiKhoan, null)
    .then((response) =>
      dispatch({
        type: ActionTypes.GET_ACCOUNT_SUCCESS,
        account: response.data,
        isFetching: false,
      })
    )
    .catch((error) => {
      dispatch({
        type: ActionTypes.GET_ACCOUNT_FAILED,
        isFetching: false,
      });
      console.error(error.response);
    });
};

//////////////////////////////////////////////////////////////////////////////
export const actUpdateAccount = (account, token, enqueueSnackbar) => (
  dispatch
) => {
  dispatch({
    type: ActionTypes.UPDATE_ACCOUNT_REQUEST,
    isUpdating: true,
  });

  callAPI("PUT", "QuanLyNguoiDung/CapNhatThongTinNguoiDung", account, token)
    .then((response) => {
      dispatch({
        type: ActionTypes.UPDATE_ACCOUNT_SUCCESS,
        account: response.data,
        isUpdating: false,
        enqueueSnackbar,
      });
      enqueueSnackbar("Cập nhật thành công", { variant: "success" });
    })
    .catch((error) => {
      dispatch({
        type: ActionTypes.UPDATE_ACCOUNT_FAILED,
        isUpdating: false,
      });
      enqueueSnackbar(error.response.data, { variant: "error" });
    });
};

//////////////////////////////////////////////////////////////////////////////
export const actGetCommentList = () => (dispatch) => {
  Axios({
    method: "GET",
    url: "https://5e8d7b0622d8cd0016a794f9.mockapi.io/listcomment",
  })
    .then((response) =>
      dispatch({
        type: ActionTypes.GET_COMMENT_LIST,
        listComment: response.data,
      })
    )
    .catch((error) => console.error(error));
};

export const actAddComment = (comment) => (dispatch) => {
  Axios({
    method: "POST",
    url: "https://5e8d7b0622d8cd0016a794f9.mockapi.io/listcomment",
    data: comment,
  })
    .then((response) =>
      dispatch({ type: ActionTypes.ADD_COMMENT, comment: response.data })
    )
    .catch((error) => console.error(error));
};

export const actUpdateComment = (id, comment) => (dispatch) => {
  Axios({
    url: `https://5e8d7b0622d8cd0016a794f9.mockapi.io/listcomment/${id}`,
    method: "PUT",
    data: comment,
  })
    .then((response) =>
      dispatch({ type: ActionTypes.UPDATE_COMMENT, comment: response.data })
    )
    .catch((error) => console.error(error));
};

//////////////////////////////////////////////////////////////////////////////
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
