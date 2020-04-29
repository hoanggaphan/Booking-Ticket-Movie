import * as ActionTypes from "./../constants/ActionTypes";
import { callAPI } from "./../utils/callAPI";
import Axios from "axios";

//----------------------- API MOVIE ----------------------------------//
export const actgetListMovie = () => (dispatch) => {
  dispatch({ type: ActionTypes.GET_LIST_MOVIE_REQUEST });
  callAPI("GET", "QuanLyPhim/LayDanhSachPhim?maNhom=GP10", null, null)
    .then((response) =>
      dispatch({
        type: ActionTypes.GET_LIST_MOVIE_SUCCESS,
        payload: response.data,
      })
    )
    .catch((error) =>
      dispatch({ type: ActionTypes.GET_LIST_MOVIE_FAILURE, message: error })
    );
};

export const actgetDetailMovieAPI = (maPhim) => {
  return (dispatch) => {
    dispatch({type: ActionTypes.GET_DETAIL_MOVIE_REQUEST})
    callAPI("GET", `QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`)
      .then((result) =>
        dispatch({
          type: ActionTypes.GET_DETAIL_MOVIE_SUCCESS,
          detailMovie: result.data,
        })
      )
      .catch((error) => dispatch({type: ActionTypes.GET_DETAIL_MOVIE_FAILURE, message: error}));
  };
};

export const actViewTrailer = (trailer) => {
  return {
    type: ActionTypes.VIEW_TRAILER,
    trailer,
  };
};

export const actSearchMovie = (value) => (dispatch) => {
  if (value) {
    return callAPI(
      "GET",
      `QuanLyPhim/LayDanhSachPhim?maNhom=GP10&tenPhim=${value}`
    )
      .then((response) =>
        dispatch({
          type: ActionTypes.SEARCH_MOVIE_SUCCESS,
          payload: response.data,
          value,
        })
      )
      .catch((error) =>
        dispatch({ type: ActionTypes.SEARCH_MOVIE_FAILURE, message: error })
      );
  } else {
    dispatch({ type: ActionTypes.SEARCH_MOVIE_SUCCESS, payload: [] });
  }
};

export const actSearching = () => {
  return { type: ActionTypes.SEARCH_MOVIE_REQUEST };
};
//----------------------- END MOVIE ----------------------------------//

//----------------------- API CINEMA ----------------------------------//
export const actGetShowtimesInfoAPI = (maPhim) => {
  return (dispatch) => {
    callAPI(
      "GET",
      `QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
      null,
      null
    )
      .then((result) =>
        dispatch({
          type: ActionTypes.GET_SHOWTIMES_INFO_API,
          showtimesInfo: result.data,
        })
      )
      .catch((err) => console.log(err));
  };
};

export const actGetListCinemaAPI = () => {
  return (dispatch) => {
    const listCinemaLogo = callAPI(
      "GET",
      "QuanLyRap/LayThongTinHeThongRap",
      null,
      null
    );
    const listCinemaDetail = callAPI(
      "GET",
      "QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP10",
      null,
      null
    );
    Promise.all([listCinemaLogo, listCinemaDetail])
      .then(([listCinemaLogo, listCinemaDetail]) =>
        dispatch({
          type: ActionTypes.GET_LIST_CINEMA_API,
          listCinema: [listCinemaLogo.data, listCinemaDetail.data],
        })
      )
      .catch((err) => console.log(err));
  };
};
//----------------------- END CINEMA ----------------------------------//

//----------------------- API COMMENT ----------------------------------//
export const actGetListCommentAPI = () => {
  return (dispatch) => {
    dispatch({type: ActionTypes.GET_LIST_COMMENT_REQUEST})
    Axios({
      method: "GET",
      url: "https://5e8d7b0622d8cd0016a794f9.mockapi.io/listcomment",
    })
      .then((result) =>
        dispatch({
          type: ActionTypes.GET_LIST_COMMENT_SUCCESS,
          listComment: result.data,
        })
      )
      .catch((error) => dispatch({type: ActionTypes.GET_LIST_COMMENT_FAILURE, message: error}));
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
      .then((result) =>
        dispatch({ type: ActionTypes.PUT_COMMENT_API, comment: result.data })
      )
      .catch((error) => console.log(error));
  };
};
//----------------------- END COMMENT ----------------------------------//

//----------------------- API USER ----------------------------------//
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
//----------------------- END USER ----------------------------------//

//----------------------- API ROOM ----------------------------------//
export const actGetRoomInfo = (maLichChieu) => (dispatch) => {
  dispatch({ type: ActionTypes.GET_ROOM_INFO_REQUEST });
  return callAPI(
    "GET",
    `QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
    null,
    null
  )
    .then((response) =>
      dispatch({
        type: ActionTypes.GET_ROOM_INFO_SUCCESS,
        payload: response.data,
      })
    )
    .catch((error) =>
      dispatch({
        type: ActionTypes.GET_ROOM_INFO_FAILURE,
        message: error.response.data,
      })
    );
};
export const actPostBookingChair = (info, token, history) => (dispatch) => {
  dispatch({ type: ActionTypes.POST_BOOKING_CHAIR_REQUEST });
  return callAPI("POST", "QuanLyDatVe/DatVe", info, token)
    .then((response) => {
      dispatch({
        type: ActionTypes.POST_BOOKING_CHAIR_SUCCESS,
        payload: response.config.data,
        message: "Đặt ghế thành công",
        status: "success",
      });
      history.replace("/account");
    })
    .catch((error) =>
      dispatch({
        type: ActionTypes.POST_BOOKING_CHAIR_FAILURE,
        message: error.response.data,
        status: "error",
      })
    );
};

export const actOpenPaymentBox = (status) => {
  return { type: ActionTypes.OPEN_PAYMENT_BOX, status };
};

export const actAddChairBooking = (chairInfo) => ({
  type: ActionTypes.ADD_CHAIR_BOOKING,
  chairInfo,
});
export const actRemoveChairBooking = (index) => ({
  type: ActionTypes.REMOVE_CHAIR_BOOKING,
  index,
});
export const actClearListBooking = () => ({
  type: ActionTypes.CLEAR_LIST_BOOKING,
});
//----------------------- END ROOM ----------------------------------//
