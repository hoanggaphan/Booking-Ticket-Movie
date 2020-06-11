import Box from "@material-ui/core/Box";
import Movie from "common/Movie";
import MyTabs from "common/MyTab";
import ModalTrailer from "common/TrailerModal";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actgetMovieList } from "redux/actions/movie";
import {
  actGetFilm24hNews,
  actGetReviewNews,
  actGetPromotionNews,
} from "redux/actions/news";
import AppBg from "./components/AppBg";
import Carousel from "./components/Carousel";
import ListSlider from "./components/ListSlider";
import QuickTicketBook from "./components/QuickTicketBook";
import TabGrid from "./components/TabGrid";
import useStyles from "./styles";

function HomePage() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const movieListShowing = useSelector(
    (state) => state.movieReducer.movieListShowing
  );

  const movieListComming = useSelector(
    (state) => state.movieReducer.movieListComming
  );

  const film24h = useSelector((state) => state.newsReducer.film24h);
  const review = useSelector((state) => state.newsReducer.review);
  const promotion = useSelector((state) => state.newsReducer.promotion);

  useEffect(() => {
    dispatch(actgetMovieList());
    dispatch(actGetFilm24hNews());
    dispatch(actGetReviewNews());
    dispatch(actGetPromotionNews());
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <Box position="relative">
        <Carousel />
        <div className={classes.home__booking}>
          <QuickTicketBook />
        </div>
      </Box>

      <div id="movie-list"></div>
      <div className={classes.home__container}>
        <section className={classes.home__slider}>
          <ListSlider
            list={movieListShowing}
            title="Đang Chiếu"
            color="warning"
            rows={2}
            slidesPerRow={4}
            Component={Movie}
          />
        </section>

        <section className={classes.home__slider}>
          <ListSlider
            list={movieListComming}
            title="Sắp Chiếu"
            color="secondary"
            rows={1}
            slidesPerRow={4}
            Component={Movie}
          />
        </section>

        <section className={classes.home__slider}>
          <MyTabs
            titleList={["Điện ảnh 24h", "Review", "Khuyến Mãi"]}
            componentList={[
              <TabGrid list={film24h} />,
              <TabGrid list={review} />,
              <TabGrid list={promotion} />,
            ]}
            color="primary"
          />
        </section>
      </div>

      <AppBg />
      <ModalTrailer />
    </>
  );
}

export default HomePage;
