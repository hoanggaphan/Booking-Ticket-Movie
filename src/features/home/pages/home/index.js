import Box from "@material-ui/core/Box";
import Movie from "common/Movie";
import MyTabs from "common/MyTab";
import TrailerModal from "common/TrailerModal";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actgetMovieList, actGetCarouselList } from "redux/actions/movie";
import { actGetFilm24hList, actGetPromotionList, actGetReviewList } from "redux/actions/news";
import AppBg from "./components/AppBg";
import HeaderSlider from "./components/HeaderSlider";
import ListSlider from "./components/ListSlider";
import News from "./components/News";
import QuickTicketBook from "./components/QuickTicketBook";
import useStyles from "./home.styles";

function HomePage() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const movieListShowing = useSelector((state) => state.movieReducer.movieListShowing);
  const movieListComming = useSelector((state) => state.movieReducer.movieListComming);
  const carouselList = useSelector(state => state.movieReducer.carouselList);
  const film24hList = useSelector((state) => state.newsReducer.film24hList);
  const reviewList = useSelector((state) => state.newsReducer.reviewList);
  const promotionList = useSelector((state) => state.newsReducer.promotionList);

  useEffect(() => {
    dispatch(actgetMovieList());
    dispatch(actGetFilm24hList());
    dispatch(actGetReviewList());
    dispatch(actGetPromotionList());
    dispatch(actGetCarouselList());
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <Box position="relative">
        <HeaderSlider list={carouselList} />
        <div className={classes.home__booking}>
          <QuickTicketBook />
        </div>
      </Box>

      <div className={classes.home__container}>
        <section id="movie-list" className={classes.home__slider}>
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

        <section id="news" className={classes.home__slider}>
          <MyTabs
            titleList={["Điện ảnh 24h", "Review", "Khuyến Mãi"]}
            componentList={[
              <News list={film24hList} uri="film24h" />,
              <News list={reviewList} uri="review" />,
              <News list={promotionList} uri="promotion" />,
            ]}
            color="primary"
          />
        </section>
      </div>

      <AppBg />
      <TrailerModal />
    </>
  );
}

export default HomePage;
