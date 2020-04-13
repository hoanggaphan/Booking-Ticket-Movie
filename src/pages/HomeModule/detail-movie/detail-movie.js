import React, { useEffect, useState } from "react";
import { Box, Grid, IconButton } from "@material-ui/core";
import { PlayCircleOutline } from "@material-ui/icons";
import { Tabs, Tab } from "react-bootstrap";
import { connect } from "react-redux";
import { actgetDetailMovieAPI, actViewTrailer } from "./../../../redux/actions/index";
import AgeType from "./../../../component/age-type/age-type";
import { CircularProgressbar } from "react-circular-progressbar";
import StarRating from "../../../component/star-rating/star-rating";
import CommentForm from "../../../component/comment-form/comment-form";
import CommentList from "../../../component/comment-list/comment-list";
import ModalTrailer from "./../../../component/modal-trailer/modalTrailer";
import Showtimes from "../../../component/showtimes/showtimes";
import useStyles from "./style";
import "react-circular-progressbar/dist/styles.css";

function DetailMovie(props) {
  const classes = useStyles();
  const maPhim = props.match.params.maPhim;
  const [trailerM, setTrailerM] = useState("");
  const { detailMovie, getDetailMovieAPI, viewTrailer } = props;

  useEffect(() => {
    getDetailMovieAPI(maPhim);
    // eslint-disable-next-line
  }, [maPhim]);

  const handleViewTrailer = () => {
    const trailer = {
      isOpen: true,
      movie: detailMovie,
    };
    viewTrailer(trailer);
  };

  return (
    <Box className={classes.root}>
      <Box className="detail-top">
        <Box className="top-background-blur">
          <img src={detailMovie.hinhAnh} alt={detailMovie.biDanh} />
          <IconButton
            className="play-btn-visible"
            onClick={() => setTrailerM(detailMovie.trailer)}
          >
            <PlayCircleOutline fontSize="large" />
          </IconButton>
          {trailerM && (
            <iframe
              className="trailer-mobile"
              width="100%"
              height="100%"
              allowFullScreen
              frameBorder="0"
              allow="autoplay"
              title={detailMovie.tenPhim}
              src={`${trailerM}?autoplay=1`}
            />
          )}
        </Box>
        <Box className="top-background-linear"></Box>
        <Grid container alignItems="center" className="top-main-info">
          <Grid
            item
            component={Box}
            display={{ xs: "none!important", sm: "block!important" }}
            sm={3}
            className="main-info-left"
          >
            <Box
              style={{ backgroundImage: `url('${detailMovie.hinhAnh}')` }}
              className="img-info"
            ></Box>
            <IconButton className="play-btn" onClick={handleViewTrailer}>
              <PlayCircleOutline fontSize="large" />
            </IconButton>
          </Grid>
          <Grid
            item
            component={Box}
            display={{ xs: "none!important", sm: "flex!important" }}
            sm={7}
            className="main-info-center"
          >
            <Box>
              <Box>{detailMovie.ngayKhoiChieu}</Box>
              <Box display="flex" alignItems="center">
                <AgeType type="C18" fontSize="16px" />
                <span className="name-info">{detailMovie.tenPhim}</span>
              </Box>
              <Box>120 phút - 7.5 IMDb - 2D/Digital</Box>
            </Box>
          </Grid>
          <Grid
            item
            component={Box}
            display={{ xs: "none!important", sm: "flex!important" }}
            sm={2}
            className="main-info-right"
          >
            <CircularProgressbar
              value={detailMovie.danhGia}
              maxValue={10}
              text={detailMovie.danhGia}
              background
              styles={{
                path: {
                  stroke: `#7ed321`,
                },
                trail: {
                  stroke: "#3a3a3a",
                },
                text: {
                  fill: "white",
                  fontSize: "50px",
                  transform: "translateY(4px)",
                },
                background: {
                  fill: "rgba(0,0,0,.4)",
                },
              }}
            />
            <Box my="10px">
              <StarRating
                xs={{ star1: "20px", star2: "20px" }}
                sm={{ star1: "25px", star2: "25px" }}
                votes={detailMovie.danhGia}
              />
            </Box>
            <p>{detailMovie.danhGia} người đánh giá</p>
          </Grid>
        </Grid>
      </Box>
      <Box display={{ xs: "block", sm: "none" }} className="info-mobile">
        <Box>{detailMovie.ngayKhoiChieu}</Box>
        <span className="name-info">{detailMovie.tenPhim}</span>
        <Box>120 phút - 7.5 IMDb - 2D/Digital</Box>
      </Box>
      <Box className="detail-bottom">
        <Box className="bottom-main-info">
          <Tabs defaultActiveKey="detail" >
            <Tab eventKey="detail" title="Thông Tin">
              <Grid container>
                <Grid item xs={12} sm={6}>
                  <Box display="flex">
                    <Box component="p" className="detail-title">
                      Ngày phát hành
                    </Box>
                    <Box component="p" className="detail-info">
                      {detailMovie.ngayKhoiChieu}
                    </Box>
                  </Box>
                  <Box display="flex">
                    <Box component="p" className="detail-title">
                      Đạo diễn
                    </Box>
                    <Box component="p" className="detail-info">
                      Dave Wilson
                    </Box>
                  </Box>
                  <Box display="flex">
                    <Box component="p" className="detail-title">
                      Diễn viên
                    </Box>
                    <Box component="p" className="detail-info">
                      Toby Kebbell, Eiza González, Vin Diesel
                    </Box>
                  </Box>
                  <Box display="flex">
                    <Box component="p" className="detail-title">
                      Thể Loại
                    </Box>
                    <Box component="p" className="detail-info">
                      hành động
                    </Box>
                  </Box>
                  <Box display="flex">
                    <Box component="p" className="detail-title">
                      Định dạng
                    </Box>
                    <Box component="p" className="detail-info">
                      2D/Digital
                    </Box>
                  </Box>
                  <Box display="flex">
                    <Box component="p" className="detail-title">
                      Quốc Gia SX
                    </Box>
                    <Box component="p" className="detail-info">
                      Mỹ
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box component="p" className="detail-title">
                    Nội dung
                  </Box>
                  <Box component="p" className="detail-content">
                    {detailMovie.moTa}
                  </Box>
                </Grid>
              </Grid>
            </Tab>
            <Tab mountOnEnter eventKey="showtimes" title="Lịch Chiếu">
              <Showtimes/>
            </Tab>
            <Tab mountOnEnter eventKey="comment" title="Đánh Giá">
              <Box display="flex" justifyContent="center">
                <Box width="580px">
                  <CommentForm />
                  <CommentList />
                </Box>
              </Box>
            </Tab>
          </Tabs>
        </Box>
      </Box>
      <ModalTrailer />
    </Box>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDetailMovieAPI: (maPhim) => {
      dispatch(actgetDetailMovieAPI(maPhim));
    },
    viewTrailer: (trailer) => {
      dispatch(actViewTrailer(trailer));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    detailMovie: state.movieReducer.detailMovie,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailMovie);
