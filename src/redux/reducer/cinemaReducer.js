import * as ActionsType from "./../constants/ActionTypes";

const initialState = {
  listCinemaLogo: [],
  listCinemaDetail: [],
  hinhAnh: [
    "https://s3img.vcdn.vn/123phim/2018/09/bhd-star-vincom-3-2-15379527367766.jpg",
    "https://s3img.vcdn.vn/123phim/2019/10/290284596e800086d4f06054e56f26fa.jpg",
    "https://s3img.vcdn.vn/123phim/2018/09/ddc-dong-da-15379624326697.jpg",
    "https://s3img.vcdn.vn/123phim/2020/01/galaxy-linh-trung-15791435324335.jpg",
    "https://s3img.vcdn.vn/123phim/2018/10/lotte-cinema-cantavil-15383866510260.jpg",
    "https://s3img.vcdn.vn/123phim/2018/09/mega-gs-cao-thang-15380164745357.jpg"
  ], 
  isLoading: true
};

const cinemaReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case ActionsType.GET_LIST_CINEMA_API:
      state.listCinemaLogo = actions.listCinema[0];
      state.listCinemaDetail  = actions.listCinema[1].map((cinema, index) => {
        cinema.lstCumRap.map(cumRap => {
          cumRap.hinhAnh = state.hinhAnh[index];
          return cumRap;
        })
        return cinema;
      });
      state.isLoading = false;
      return { ...state };
    default:
      return { ...state };
  }
};

export default cinemaReducer;
