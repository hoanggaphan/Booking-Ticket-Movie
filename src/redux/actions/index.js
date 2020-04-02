import * as ActionTypes from "./../constants/ActionTypes";
import { callAPI } from "./../utils/callAPI";

export const actGetListMovieAPI = () => {
  return dispatch => {
    callAPI("GET", "QuanLyPhim/LayDanhSachPhim?maNhom=GP10", null, null)
      .then(result =>
        dispatch({
          type: ActionTypes.GET_LIST_MOVIE_API,
          listMovie: result.data
        })
      )
      .catch(err => console.log(err));
  };
};

export const actGetShowtimesInfoAPI = maPhim => {
  return dispatch => {
    callAPI("GET", `QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`, null, null)
      .then(result => dispatch({
        type: ActionTypes.GET_SHOWTIMES_INFO_API,
        showtimesInfo: result.data
      }))
      .catch(err => console.log(err));
  };
};

export const actGetListCinemaAPI = () => {
  return dispatch => {
    const listCinemaLogo = callAPI("GET", "QuanLyRap/LayThongTinHeThongRap", null, null);
    const listCinemaDetail = callAPI("GET", "QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP10", null, null);
    Promise.all([listCinemaLogo, listCinemaDetail])
      .then(([listCinemaLogo, listCinemaDetail]) => dispatch({
        type: ActionTypes.GET_LIST_CINEMA_API,
        listCinema: [listCinemaLogo.data, listCinemaDetail.data]
      }))
      .catch(err => console.log(err));

  }
}

export const actLoginUserAPI = (data, history) => {
  return () => {
    callAPI("POST", "QuanLyNguoiDung/DangNhap", data, null)
      .then(result => {
        localStorage.setItem("user", JSON.stringify(result.data));
        alert("Đăng nhập thành công")
        history.push('/');
      })
      .catch(err => console.log(err.response.data))
  }
}

export const actRegisterUserAPI = (data, history) => {
  return () => {
    callAPI("POST", "QuanLyNguoiDung/DangKy", data, null)
      .then(result => {
        alert("Đăng ký thành công")
        history.push('/login');
      })
      .catch(err => console.log(err.response.data))
  }
}

export const actViewTrailer = trailer => {
  return {
    type: ActionTypes.VIEW_TRAILER,
    trailer
  };
};