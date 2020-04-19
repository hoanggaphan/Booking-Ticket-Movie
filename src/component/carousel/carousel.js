import React from "react";
import { Box, IconButton } from "@material-ui/core";
import { NavigateNext, NavigateBefore } from "@material-ui/icons";
import Slider from "react-slick";
import useStyle from "./style";

function NextArrow(props) {
  const { onClick } = props;
  return (
    <IconButton size="small" onClick={onClick} className="carousel-next-btn">
      <NavigateNext className="carousel-icon-btn" />
    </IconButton>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <IconButton size="small" onClick={onClick} className="carousel-prev-btn">
      <NavigateBefore className="carousel-icon-btn" />
    </IconButton>
  );
}

export default function Carousel() {
  const classes = useStyle();

  const settings = {
    pauseOnDotsHover: true,
    pauseOnHover: false,
    pauseOnFocus: true,
    arrows: true,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
    dots: true,
    infinite: true,
    speed: 550,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    className: `${classes.carousel}`
  };
  
  return (
    <Box>
      <Slider {...settings}>
        <Box position="relative">
          <img src="carousel-1.jpg" alt="carousel-1" className="carousel-img" width="100%" height="650px" loading="eager" onLoad={() => console.log(1)} />
          <Box className="carousel-background-linear"></Box>
        </Box>
        <Box position="relative">
          <img src="carousel-2.jpg" alt="carousel-2" className="carousel-img" width="100%" height="650px" loading="lazy" />
          <Box className="carousel-background-linear"></Box>
        </Box>
        <Box position="relative">
          <img src="carousel-3.jpg" alt="carousel-3" className="carousel-img" width="100%" height="650px" loading="lazy" />
          <Box className="carousel-background-linear"></Box>
        </Box>
        <Box position="relative">
          <img src="carousel-4.jpg" alt="carousel-4" className="carousel-img" width="100%" height="650px" loading="lazy" />
          <Box className="carousel-background-linear"></Box>
        </Box>
      </Slider>
    </Box>
  );
}
