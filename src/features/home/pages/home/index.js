import Box from "@material-ui/core/Box";
import AppBg from "features/home/pages/home/components/AppBg";
import Carousel from "features/home/pages/home/components/Carousel";
import MovieList from "features/home/pages/home/components/MovieList";
import QuickTicketBook from "features/home/pages/home/components/QuickTicketBook";
import React from "react";
import useStyles from "./styles";

function HomePage() {
  const classes = useStyles();
  
  return (
    <>
      <Box position="relative">
        <Carousel />
        <Box display={{ xs: "none", md: "block" }} className={classes.booking}>
          <QuickTicketBook />
        </Box>
      </Box>
      <MovieList />
      <AppBg />
    </>
  );
}

export default HomePage;