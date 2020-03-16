import React from 'react';
import { Box } from '@material-ui/core';
import CarouselHome from './../../component/carousel/carousel';
import ListMovie from './../../component/list-movie/list-movie';
import QuickBook from '../../component/quick-booking-movie/quickBook';

export default function home() {
  return (
    <>
      <Box position="relative">
        <CarouselHome/>
        <Box display={{xs: "none", md: "block"}} position="absolute" width="940px" bottom="0" left="50%" zIndex="2" style={{transform: "translate(-50%, 50%)"}}>
          <QuickBook/>
        </Box>
      </Box>
      <ListMovie/>
    </>
  )
}
