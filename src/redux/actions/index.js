import * as ActionTypes from "./../constants/ActionTypes";
import { callAPI } from "./../utils/callAPI";
import Axios from "axios";

//----------------------- API MOVIE ----------------------------------//
export const actGetListMovieAPI = () => {
  return (dispatch) => {
    callAPI("GET", "QuanLyPhim/LayDanhSachPhim?maNhom=GP10", null, null)
      .then((result) =>
        dispatch({
          type: ActionTypes.GET_LIST_MOVIE_API,
          listMovie: result.data,
        })
      )
      .catch((err) => console.log(err));
  };
};

export const actgetDetailMovieAPI = (maPhim) => {
  return (dispatch) => {
    callAPI("GET", `QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`)
      .then((result) =>
        dispatch({
          type: ActionTypes.GET_DETAIL_MOVIE,
          detailMovie: result.data,
        })
      )
      .catch((err) => console.log(err));
  };
};

export const actViewTrailer = (trailer) => {
  return {
    type: ActionTypes.VIEW_TRAILER,
    trailer,
  };
};
//----------------------- END ----------------------------------//


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
//----------------------- END ----------------------------------//

//----------------------- API COMMENT ----------------------------------//
export const actGetListCommentAPI = () => {
  return dispatch => {
    Axios({
      method: "GET",
      url: "https://5e8d7b0622d8cd0016a794f9.mockapi.io/listcomment"
    })
      .then(result => dispatch({type: ActionTypes.GET_LIST_COMMENT_API, listComment: result.data}))
      .catch(error => console.log(error))
  }
}

export const actPostCommentAPI = comment => {
  return dispatch => {
    Axios({
      method: "POST",
      url: "https://5e8d7b0622d8cd0016a794f9.mockapi.io/listcomment",
      data: comment
    })
      .then(result => dispatch({type: ActionTypes.POST_COMMENT_API, comment: result.data}))
      .catch(error => console.log(error))
  }
}

export const actPutCommentAPI = (id, comment) => {
  return dispatch => {
    Axios({
        url: `https://5e8d7b0622d8cd0016a794f9.mockapi.io/listcomment/${id}`,
        method: "PUT",
        data: comment
    })
      .then(result => dispatch({type: ActionTypes.PUT_COMMENT_API, comment: result.data}))
      .catch(error => console.log(error))
  }
}
//----------------------- END ----------------------------------//

//----------------------- API USER ----------------------------------//
export const actLoginUserAPI = (data, history) => {
  return (dispatch) => {
    callAPI("POST", "QuanLyNguoiDung/DangNhap", data, null)
      .then((result) => {
        if (result.data.maLoaiNguoiDung === "KhachHang") {
          dispatch({type: ActionTypes.LOAD_USER, user: result.data})
          localStorage.setItem("user", JSON.stringify(result.data));
          alert("Đăng nhập thành công");
          history.push("/");
        } else {
          alert("Không có quyền truy cập");
        }
      })
      .catch((err) => alert(err.response.data));
  };
};

export const actRegisterUserAPI = (data, history) => {
  return () => {
    callAPI("POST", "QuanLyNguoiDung/DangKy", data, null)
      .then((result) => {
        alert("Đăng ký thành công");
        history.push("/user/login");
      })
      .catch((err) => alert(err.response.data));
  };
};

export const actLoadUser = user => {
  return {
    type: ActionTypes.LOAD_USER,
    user
  }
}

export const actShowLogin = status => {
  return {
    type: ActionTypes.SHOW_LOGIN,
    status
  }
}
//----------------------- END ----------------------------------//
