import React from 'react';
import { Box } from '@material-ui/core';
import MyCarousel from '../../../component/carousel/carousel';
import ListMovie from '../../../component/list-movie/list-movie';
import QuickTicketBook from '../../../component/quick-ticket-book/quick-ticket-book';
import ListCinema from '../../../component/list-cinema/list-cinema';
import BgApp from '../../../component/bg-app/bg-app';

export default function home() {
  return (
    <>
      <Box position="relative">
        <MyCarousel/>
        <Box display={{xs: "none", md: "block"}} position="absolute" maxWidth="940px" width="100%" bottom="0" left="50%" zIndex="2" style={{transform: "translate(-50%, 50%)"}}>
          <QuickTicketBook/>
        </Box>
      </Box>
      <ListMovie />
      <ListCinema/>
      <BgApp/>
    </>
  )
}
