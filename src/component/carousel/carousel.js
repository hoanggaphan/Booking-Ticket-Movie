import React from "react";
import Carousel from "nuka-carousel";
import { IconButton, Box } from "@material-ui/core";
import { NavigateBefore, NavigateNext } from "@material-ui/icons";
import useStyle from './style';


export default function CarouselHome() {
  const classes = useStyle();

  return (
    <Box
      display={{xs: 'none', md: 'block'}}
    >
      <Carousel
        autoplay={true}
        autoplayInterval={3500}
        transitionMode="fade"
        speed={1000}
        wrapAround={true} // infinity loop
        pauseOnHover={false}
        heightMode={700}
        initialSlideHeight={700}
        defaultControlsConfig={{
          pagingDotsContainerClassName: `${classes.dots}`,
          pagingDotsClassName: `${classes.dotItem}`
        }}
        renderCenterLeftControls={({ previousSlide }) => (
          <IconButton color="secondary"  className={classes.btnArrow} onClick={previousSlide}>
            <NavigateBefore className={classes.arrows} />
          </IconButton>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <IconButton color="secondary" className={classes.btnArrow} onClick={nextSlide}>
            <NavigateNext className={classes.arrows} />
          </IconButton>
        )}
      >
        <img src="carousel-1.jpg" className={classes.imgs} />
        <img src="carousel-2.jpg" className={classes.imgs} />
        <img src="carousel-3.jpg" className={classes.imgs} />
        <img src="carousel-4.jpg" className={classes.imgs} />
      </Carousel>
    </Box>
  );
}
