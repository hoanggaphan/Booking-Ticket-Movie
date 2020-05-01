import * as ActionsType from "./../constants/ActionTypes";

const initialState = {
  listCinemaLogo: [],
  listCinemaDetail: [],
  listHinhAnh: [
    {
      maHeThongRap: "BHDStar",
      hinhAnh:
        "https://s3img.vcdn.vn/123phim/2018/09/bhd-star-vincom-3-2-15379527367766.jpg",
    },
    {
      maHeThongRap: "CGV",
      hinhAnh:
        "https://s3img.vcdn.vn/123phim/2019/10/290284596e800086d4f06054e56f26fa.jpg",
    },
    {
      maHeThongRap: "CineStar",
      hinhAnh:
        "https://s3img.vcdn.vn/123phim/2018/09/ddc-dong-da-15379624326697.jpg",
    },
    {
      maHeThongRap: "Galaxy",
      hinhAnh:
        "https://s3img.vcdn.vn/123phim/2020/01/galaxy-linh-trung-15791435324335.jpg",
    },
    {
      maHeThongRap: "LotteCinima",
      hinhAnh:
        "https://s3img.vcdn.vn/123phim/2018/10/lotte-cinema-cantavil-15383866510260.jpg",
    },
    {
      maHeThongRap: "MegaGS",
      hinhAnh:
        "https://s3img.vcdn.vn/123phim/2018/09/mega-gs-cao-thang-15380164745357.jpg",
    },
  ],
  listTrangChu: [
    {
      maHeThongRap: "BHDStar",
      trangChu: "https://www.bhdstar.vn",
    },
    {
      maHeThongRap: "CGV",
      trangChu: "https://www.cgv.vn",
    },
    {
      maHeThongRap: "CineStar",
      trangChu: "http://cinestar.com.vn",
    },
    {
      maHeThongRap: "Galaxy",
      trangChu: "https://www.galaxycine.vn",
    },
    {
      maHeThongRap: "LotteCinima",
      trangChu: "http://lottecinemavn.com",
    },
    {
      maHeThongRap: "MegaGS",
      trangChu: "https://www.megagscinemas.vn/",
    },
  ],
};

const cinemaReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionsType.GET_LIST_LOGO_CINEMA:
      state.listCinemaLogo = action.listCinemaLogo.map((cinema) => {
        const item = state.listTrangChu.find(
          (item) => item.maHeThongRap === cinema.maHeThongRap
        );
        if (item) {
          cinema.trangChu = item.trangChu;
        }
        return cinema;
      });
      return { ...state };

    case ActionsType.GET_LIST_CINEMA_DETAIL:
      state.listCinemaDetail = action.listCinemaDetail.map((cinema) => {
        const item = state.listHinhAnh.find(
          (item) => item.maHeThongRap === cinema.maHeThongRap
        );
        if (item) {
          cinema.lstCumRap.map((cumRap) => (cumRap.hinhAnh = item.hinhAnh));
        }
        return cinema;
      });
      return { ...state };

    default:
      return { ...state };
  }
};

export default cinemaReducer;
