import Box from "@material-ui/core/Box";
import BgApp from "component/bg-app/bg-app";
import MyCarousel from "component/carousel/carousel";
import ListCinema from "component/list-cinema/list-cinema";
import ListMovie from "component/list-movie/list-movie";
import QuickTicketBook from "component/quick-ticket-book/quick-ticket-book";
import React from "react";
import useStyles from "./style";

export default function Home() {
  const classes = useStyles();

  return (
    <>
      <Box position="relative">
        <MyCarousel />
        <Box display={{ xs: "none", md: "block" }} className={classes.root}>
          <QuickTicketBook />
        </Box>
      </Box>
      <ListMovie />
      <ListCinema />
      <BgApp />
    </>
  );
}
