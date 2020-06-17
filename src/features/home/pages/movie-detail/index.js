import { Box, Grid, IconButton } from "@material-ui/core";
import PlayCircleOutline from "@material-ui/icons/PlayCircleOutline";
import Skeleton from "@material-ui/lab/Skeleton";
import MyTabs from "common/MyTab";
import RatingStar from "common/RatingStar";
import Sticker from "common/Sticker";
import TrailerModal from "common/TrailerModal";
import React, { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { actGetMovieDetail, actViewTrailer } from "redux/actions/movie";
import Detail from "./components/Detail";
import Showtimes from "./components/Showtimes";
import useStyles from "./movie-detail.styles";
import Comment from "./components/Comment";

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
            <Box width="100%" height="calc(100vw * 2/5)" />
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
                  <Box display="flex">
                    {movieDetail.ngayKhoiChieu}{" "}
                    <Box ml="10px">
                      <Sticker text="C18" fontSize="16px" />
                    </Box>
                  </Box>
                  <Box>
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
                    stroke: `#00f2c3`,
                  },
                  trail: {
                    stroke: "#1f2251",
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

            {movieDetail && (
              <>
                <Box my="10px">
                  <RatingStar
                    xs={{ star1: "20px", star2: "20px" }}
                    sm={{ star1: "25px", star2: "25px" }}
                    votes={movieDetail.danhGia}
                  />
                </Box>
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
        {movieDetail ? (
          <MyTabs
            titleList={["Lịch Chiếu", "Thông Tin", "Đánh Giá"]}
            componentList={[
              <Showtimes movieDetail={movieDetail} />,
              <Detail movieDetail={movieDetail} />,
              <Comment />,
            ]}
            color="warning"
          />
        ) : (
          <>
            <Skeleton variant="text" width="100%" />
            <Skeleton variant="text" width="100%" />
            <Skeleton variant="text" width="100%" />
            <Skeleton variant="text" width="70%" />
          </>
        )}
      </Box>

      <TrailerModal />
    </Box>
  );
}

export default MovieDetailPage;
