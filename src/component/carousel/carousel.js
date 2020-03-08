import React from "react";
import Carousel from "nuka-carousel";
import { IconButton, Box } from "@material-ui/core";
import { NavigateBefore, NavigateNext } from "@material-ui/icons";
import useStyle from "./style";

const CarouselHome = () => {
  const classes = useStyle();

  return (
    <Box display={{ xs: "none", md: "block" }}>
      <Carousel
        autoplay={true}
        autoplayInterval={3500}
        transitionMode="fade"
        speed={1000}
        wrapAround={true} // infinity loop
        pauseOnHover={false}
        heightMode={700}
        initialSlideHeight={700}
        className={classes.carousel}
        defaultControlsConfig={{
          pagingDotsContainerClassName: 'carousel-dots',
          pagingDotsClassName: 'carousel-dots-item'
        }}
        renderCenterLeftControls={({ previousSlide }) => (
          <IconButton className="carousel-arrows" onClick={previousSlide}>
            <NavigateBefore />
          </IconButton>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <IconButton className="carousel-arrows" onClick={nextSlide}>
            <NavigateNext />
          </IconButton>
        )}
      >
        <img src="carousel-1.jpg" className="caousel-imgs" alt="carousel-1" />
        <img src="carousel-2.jpg" className="caousel-imgs" alt="carousel-2" />
        <img src="carousel-3.jpg" className="caousel-imgs" alt="carousel-3" />
        <img src="carousel-4.jpg" className="caousel-imgs" alt="carousel-4" />
      </Carousel>
    </Box>
  );
};

export default CarouselHome;
