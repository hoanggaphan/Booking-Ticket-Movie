import { Box, Grid, IconButton } from "@material-ui/core";
import PlayCircleOutline from "@material-ui/icons/PlayCircleOutline";
import Skeleton from "@material-ui/lab/Skeleton";
import RatingStar from "common/RatingStar";
import Sticker from "common/Sticker";
import TrailerModal from "common/TrailerModal";
import React, { useEffect, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { actGetMovieDetail, actViewTrailer } from "redux/actions/movie";
import CommentForm from "./components/CommentForm";
import CommentList from "./components/CommentList";
import Showtimes from "./components/Showtimes";
import useStyles from "./movie-detail.styles";

function MovieDetailPage() {
  const dispatch = useDispatch();
  const movieDetail = useSelector((state) => state.movieReducer.movieDetail);

  const classes = useStyles();
  const { maPhim } = useParams();
  const [trailerM, setTrailerM] = useState("");

  useEffect(() => {
    dispatch(actGetMovieDetail(maPhim));
    // eslint-disable-next-line
  }, [maPhim]);

  const handleViewTrailer = () => {
    const trailer = {
      isOpen: true,
      movie: movieDetail,
    };
    dispatch(actViewTrailer(trailer));
  };

  return (
    <Box className={classes.root}>
      <Box className="detail-top">
        <Box className="top-background-blur">
          {movieDetail ? (
            <>
              <img src={movieDetail.hinhAnh} alt={movieDetail.biDanh} />
              <IconButton
                className="play-btn-visible"
                onClick={() => setTrailerM(movieDetail.trailer)}
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
                  title={movieDetail.tenPhim}
                  src={`${trailerM}?autoplay=1`}
                />
              )}
            </>
          ) : (
            <Box width="100%" height="calc(100vw * 2/5)"></Box>
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
            {movieDetail ? (
              <>
                <Box
                  style={{ backgroundImage: `url('${movieDetail.hinhAnh}')` }}
                  className="img-info"
                ></Box>
                <IconButton className="play-btn" onClick={handleViewTrailer}>
                  <PlayCircleOutline fontSize="large" />
                </IconButton>
              </>
            ) : (
              <Skeleton
                variant="rect"
                width="100%"
                style={{ borderRadius: "5px", paddingTop: "150%" }}
              />
            )}
          </Grid>
          <Grid
            item
            component={Box}
            display={{ xs: "none!important", sm: "flex!important" }}
            sm={7}
            className="main-info-center"
          >
            <Box width="100%">
              {movieDetail ? (
                <>
                  <Box>{movieDetail.ngayKhoiChieu}</Box>
                  <Box display="flex" alignItems="center">
                    <Sticker text="C18" fontSize="16px" />
                    <span className="name-info">{movieDetail.tenPhim}</span>
                  </Box>
                  <Box>120 phút - 7.5 IMDb - 2D/Digital</Box>
                </>
              ) : (
                <>
                  <Skeleton variant="text" width="50%" />
                  <Skeleton variant="text" width="50%" />
                  <Skeleton variant="text" width="30%" />
                </>
              )}
            </Box>
          </Grid>
          <Grid
            item
            component={Box}
            display={{ xs: "none!important", sm: "flex!important" }}
            sm={2}
            className="main-info-right"
          >
            {movieDetail ? (
              <CircularProgressbar
                value={movieDetail.danhGia}
                maxValue={10}
                text={movieDetail.danhGia}
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
            ) : (
              <Skeleton
                variant="circle"
                width="100%"
                style={{ paddingTop: "100%" }}
              />
            )}

            {movieDetail ? (
              <>
                <Box my="10px">
                  <RatingStar
                    xs={{ star1: "20px", star2: "20px" }}
                    sm={{ star1: "25px", star2: "25px" }}
                    votes={movieDetail.danhGia}
                  />
                </Box>
              </>
            ) : (
              <>
                <Skeleton variant="text" width="100%" />
                <Skeleton variant="text" width="50%" />
              </>
            )}
          </Grid>
        </Grid>
      </Box>

      <Box display={{ xs: "block", sm: "none" }} className="info-mobile">
        {movieDetail ? (
          <>
            <Box>{movieDetail.ngayKhoiChieu}</Box>
            <span className="name-info">{movieDetail.tenPhim}</span>
            <Box>120 phút - 7.5 IMDb - 2D/Digital</Box>
          </>
        ) : (
          <>
            <Skeleton variant="text" width="100%" />
            <Skeleton variant="text" width="50%" />
          </>
        )}
      </Box>

      <Box className="detail-bottom">
        <Box className="bottom-main-info">

          <Tabs defaultActiveKey="detail">

            <Tab eventKey="detail" title="Thông Tin">
              <Grid container>
                {movieDetail ? (
                  <>
                    <Grid item xs={12} sm={6}>
                      <Box display="flex">
                        <Box component="p" className="detail-title">
                          Ngày phát hành
                        </Box>
                        <Box component="p" className="detail-info">
                          <>{movieDetail.ngayKhoiChieu}</>
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
                        {movieDetail.moTa}
                      </Box>
                    </Grid>
                  </>
                ) : (
                  <>
                    <Skeleton variant="text" width="100%" />
                    <Skeleton variant="text" width="100%" />
                    <Skeleton variant="text" width="100%" />
                    <Skeleton variant="text" width="100%" />
                    <Skeleton variant="text" width="50%" />
                  </>
                )}
              </Grid>
            </Tab>

            <Tab eventKey="showtimes" title="Lịch Chiếu">
              <Showtimes />
            </Tab>

            <Tab eventKey="comment" title="Đánh Giá">
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
      
      <TrailerModal />
    </Box>
  );
}

export default MovieDetailPage;
