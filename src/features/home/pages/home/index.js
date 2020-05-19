import Box from "@material-ui/core/Box";
import CinemaList from "features/home/pages/home/components/CinemaList";
import AppBG from "features/home/pages/home/components/AppBG";
import Carousel from "features/home/pages/home/components/Carousel";
import MovieList from "features/home/pages/home/components/MovieList";
import QuickTicketBook from "features/home/pages/home/components/QuickTicketBook";
import React from "react";
import useStyles from "./styles";

export default function HomePage() {
  const classes = useStyles();

  return (
    <>
      <Box position="relative">
        <Carousel />
        <Box display={{ xs: "none", md: "block" }} className={classes.root}>
          <QuickTicketBook />
        </Box>
      </Box>
      <MovieList />
      <CinemaList />
      <AppBG />
    </>
  );
}
