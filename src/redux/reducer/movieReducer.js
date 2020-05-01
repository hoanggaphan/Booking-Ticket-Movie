import * as ActionTypes from "./../constants/ActionTypes";

const initialState = {
  listMovie: [],
  listMovieShowing: [],
  listMovieComming: [],

  isFechingDetailMovie: true,
  detailMovie: {},
  showtimesInfo: [],
  listCinema: [],

  trailer: {
    movie: {},
    isOpen: false,
  },

  listDiaChi: [
    {
      maCumRap: "bhd-star-cineplex-pham-hung",
      diaChi: "L4-Satra Phạm Hùng, C6/27 Phạm Hùng, Bình Chánh",
    },
    {
      maCumRap: "bhd-star-cineplex-vincom-quang-trung",
      diaChi: "B1-Vincom QT, 190 Quang Trung, Gò Vấp",
    },
    {
      maCumRap: "bhd-star-cineplex-vincom-thao-dien",
      diaChi: "L5-Megamall, 159 XL Hà Nội, Q.2",
    },
    {
      maCumRap: "bhd-star-cineplex-3-2",
      diaChi: "L5-Vincom 3/2, 3C Đường 3/2, Q.10",
    },
    {
      maCumRap: "cgv-aeon-tan-phu",
      diaChi: "30 Bờ Bao Tân Thắng, Sơn Kỳ, Tân Phú",
    },
    {
      maCumRap: "cgv-cgv-saigonres-nguyen-xi",
      diaChi: "Tầng 4-5, Saigonres Plaza, 79/81 Nguyễn Xí, P. 26, Bình Thạnh",
    },
    {
      maCumRap: "cgv-ct-plaza",
      diaChi: "60A Trường Sơn,P. 2, Tân Bình",
    },
    {
      maCumRap: "cgv-golden-plaza",
      diaChi:
        "Tầng 4, Trung tâm thương mại Golden Plaza, 922 Nguyễn Trãi, P. 14, Q. 5",
    },
    {
      maCumRap: "cgv-hung-vuong-plaza",
      diaChi: "Lầu 7, 126 Hùng Vương, Q. 5",
    },
    {
      maCumRap: "cgv-imc-tran-quang-khai",
      diaChi: "T2&3, TTVH Đa Năng, 62 Trần Quang Khải, P.Tân Định, Q.1",
    },
    {
      maCumRap: "cgv-pandora-city",
      diaChi: "Lầu 3, Pandora City, 1/1 Trường Chinh, Tân Phú",
    },
    {
      maCumRap: "cgv-paragon",
      diaChi: "Tầng 5, toà nhà Parkson Paragon, 03 Nguyễn Lương Bằng, Q. 7",
    },
    {
      maCumRap: "cgv-pearl-plaza",
      diaChi: "Lầu 5, Pearl Plaza, 561 Điện Biên Phủ, Bình Thạnh",
    },
    {
      maCumRap: "cgv-satra-cu-chi",
      diaChi:
        "T3, TTTM Satra Củ Chi, Số 1239, Tỉnh Lộ 8, Ấp Thạnh An, Trung An, Củ Chi, TP.HCM",
    },
    {
      maCumRap: "cgv-vincom-dong-khoi",
      diaChi: "Tầng 3, TTTM Vincom Center B, 72 Lê Thánh Tôn, Bến Nghé, Q. 1",
    },
    {
      maCumRap: "cgv-vincom-go-vap",
      diaChi: "Tầng 5 TTTM Vincom Plaza Gò Vấp, 12 Phan Văn Trị, P. 7, Gò Vấp",
    },
    {
      maCumRap: "cgv-vincom-thu-duc",
      diaChi: "Tầng 5 Vincom Thủ Đức, 216 Võ Văn Ngân, Bình Thọ, Thủ Đức",
    },
    {
      maCumRap: "cgv-aeon-binh-tan",
      diaChi:
        "Tầng 3, TTTM Aeon Mall Bình Tân, Số 1 đường số 17A, khu phố 11, Bình Trị Đông B, Bình Tân",
    },
    {
      maCumRap: "cns-quoc-thanh",
      diaChi: "271 Nguyễn Trãi, Q.1",
    },
    {
      maCumRap: "cns-hai-ba-trung",
      diaChi: "135 Hai Bà Trưng, Bến Nghé, Q.1",
    },
    {
      maCumRap: "glx-huynh-tan-phat",
      diaChi: "1362 Huỳnh Tấn Phát, KP1, Phú Mỹ, Q. 7",
    },
    {
      maCumRap: "glx-nguyen-du",
      diaChi: "116 Nguyễn Du, Q.1",
    },
    {
      maCumRap: "glx-nguyen-van-qua",
      diaChi: "119B Nguyễn Văn Quá, Đông Hưng Thuận, Q.12, TPHCM",
    },
    {
      maCumRap: "glx-quang-trung",
      diaChi: "L3-Co.opmart Foodcosa, 304A Quang Trung, Gò Vấp",
    },
    {
      maCumRap: "glx-tan-binh",
      diaChi: "246 Nguyễn Hồng Đào, Tân Bình",
    },
    {
      maCumRap: "lotte-cantavil",
      diaChi: "L7-Cantavil Premier, Xa Lộ Hà Nội, Q.2",
    },
    {
      maCumRap: "lotte-cong-hoa",
      diaChi: "L4-Pico Plaza, 20 Cộng Hòa, Tân Bình",
    },
    {
      maCumRap: "lotte-go-vap",
      diaChi: "L3-Lotte Mart, 242 Nguyễn Văn Lượng, Gò Vấp",
    },
    {
      maCumRap: "lotte-nam-sai-gon",
      diaChi: "L3-Lotte Mart NSG, 469 Nguyễn Hữu Thọ, Q.7",
    },
    {
      maCumRap: "lotte-phu-tho",
      diaChi: "L4-Lotte Mart Phú Thọ, Q.11",
    },
    {
      maCumRap: "lotte-thu-duc",
      diaChi: "L2-Joy Citipoint, KCX Linh Trung, Thủ Đức",
    },
  ],
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

  listSearch: [],
  isSearching: false,
  notFound: false,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_LIST_MOVIE_API:
      // Sắp xếp lại listmovie theo ngày tháng năm tăng dần
      const listMovieSorted = action.payload.sort(
        (movie1, movie2) =>
          new Date(movie1.ngayKhoiChieu).getTime() -
          new Date(movie2.ngayKhoiChieu).getTime()
      );
      state.listMovieShowing = listMovieSorted.filter(
        (movie) => new Date() - new Date(movie.ngayKhoiChieu) >= 0
      );
      state.listMovieComming = listMovieSorted.filter(
        (movie) => new Date() - new Date(movie.ngayKhoiChieu) < 0
      );
      state.listMovie = listMovieSorted;
      return { ...state };

    case ActionTypes.GET_DETAIL_MOVIE_SUCCESS:
      const d = new Date(action.detailMovie.ngayKhoiChieu);
      const date = ("0" + d.getDate()).slice(-2);
      const month = ("0" + (d.getMonth() + 1)).slice(-2);
      const year = d.getFullYear();
      const ngayKhoiChieu = `${date}.${month}.${year}`; // Định dạng ngày lại dd/mm/yyyy
      let lichChieu = action.detailMovie.lichChieu.map((rap) => { // Thêm địa chỉ, hình ảnh rap vào thongTinRap vì API thiếu
        const item1 = state.listDiaChi.find(
          (diaChi) => diaChi.maCumRap === rap.thongTinRap.maCumRap
        );
        const item2 = state.listHinhAnh.find(
          (hinhAnh) => hinhAnh.maHeThongRap === rap.thongTinRap.maHeThongRap
        );
        if (item1) rap.thongTinRap.diaChi = item1.diaChi;
        if (item2) rap.thongTinRap.hinhAnh = item2.hinhAnh;
        const d = new Date(rap.ngayChieuGioChieu);
        const date = ("0" + d.getDate()).slice(-2);
        const month = ("0" + (d.getMonth() + 1)).slice(-2);
        rap.thoiGianChieu = [{
          ngayChieu: date + "/" + month,
          suatChieu: [{
              maLichChieu: rap.maLichChieu,
              gioChieu: new Date(rap.ngayChieuGioChieu).toLocaleTimeString(),
          }],

        }]
        return rap;
      });
      lichChieu = lichChieu.reduce((accumulator, current) => { // Gộp cụm rạp lặp lại thành 1
        const length = accumulator.length;
        if (length < 1) {
          accumulator.push(current);
        } else {
          const index = accumulator.findIndex(item => item.thongTinRap.maCumRap === current.thongTinRap.maCumRap);
          if(index > -1) {
            accumulator[index].thoiGianChieu.push(...current.thoiGianChieu);
          } else {
            accumulator.push(current);
          }
        }
        return accumulator;
      }, []);
      lichChieu = lichChieu.map(item => {
         item.thoiGianChieu = item.thoiGianChieu.reduce((accumulator, current) => { // Gộp ngày chiếu lặp lại thành 1
          const length = accumulator.length;
          if (length < 1) {
            accumulator.push(current);
          } else {
            const index = accumulator.findIndex(thoiGian => thoiGian.ngayChieu === current.ngayChieu);
            if(index > -1) {
              accumulator[index].suatChieu.push(...current.suatChieu);
            } else {
              accumulator.push(current);
            }
          }
          return accumulator;
        }, []);
        return item;
      })
      lichChieu = lichChieu.reduce((accumulator, current) => { //gộp cụm rạp thành 1 hệ thống rạp
        const length = accumulator.length;
        if (length < 1) {
          const heThongRap = {
            maHeThongRap: current.thongTinRap.maHeThongRap, 
            tenHeThongRap: current.thongTinRap.maHeThongRap, 
            lstLichChieu: [current]
          };
          accumulator = [...accumulator, heThongRap]
        } else {
          const index = accumulator.findIndex(item => item.maHeThongRap === current.thongTinRap.maHeThongRap);
          if(index > -1) {
            accumulator[index].lstLichChieu.push(current);
          } else {
            const heThongRap = {
              maHeThongRap: current.thongTinRap.maHeThongRap, 
              tenHeThongRap: current.thongTinRap.maHeThongRap, 
              lstLichChieu: [current]
            };
            accumulator = [...accumulator, heThongRap]
          }
        }
        return accumulator;
      }, []);
      state.detailMovie = { ...action.detailMovie, ngayKhoiChieu, lichChieu };
      return { ...state, isFechingDetailMovie: false };
    case ActionTypes.GET_DETAIL_MOVIE_REQUEST:
      return { ...state, isFechingDetailMovie: true };
    case ActionTypes.GET_DETAIL_MOVIE_FAILURE:
      console.log(action.message)
      return { ...state, isFechingDetailMovie: false };

    case ActionTypes.GET_SHOWTIMES_INFO_API:
      let listCinema = [];
      action.showtimesInfo.heThongRapChieu.forEach((item) =>
        item.cumRapChieu.forEach((item) => listCinema.push(item))
      );
      state.showtimesInfo = action.showtimesInfo;
      state.listCinema = listCinema;
      return { ...state };

    case ActionTypes.SEARCH_MOVIE_REQUEST:
      return { ...state, isSearching: true };
    case ActionTypes.SEARCH_MOVIE_SUCCESS:
      const listSearch = action.payload;
      if(listSearch.length < 1 && action.value) {
        state.notFound = true;
      } else {
        state.notFound = false;
      } 
      state.listSearch = listSearch;
      return { ...state, isSearching: false };
    case ActionTypes.SEARCH_MOVIE_FAILURE:
      console.log(action.message)
      return { ...state, isSearching: false};

    case ActionTypes.VIEW_TRAILER:
      state.trailer = { ...state.trailer, ...action.trailer };
      return { ...state };

    default:
      return { ...state };
  }
};

export default movieReducer;
