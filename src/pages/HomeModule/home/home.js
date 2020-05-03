import React from "react";
import Box from "@material-ui/core/Box";

import useStyles from './style'
import MyCarousel from "../../../component/carousel/carousel";
import ListMovie from "../../../component/list-movie/list-movie";
import QuickTicketBook from "../../../component/quick-ticket-book/quick-ticket-book";
import ListCinema from "../../../component/list-cinema/list-cinema";
import BgApp from "../../../component/bg-app/bg-app";

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
