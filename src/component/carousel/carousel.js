import React from "react";
import { Box } from "@material-ui/core";
import Slider from "react-slick";
import useStyle from "./style";

export default function Carousel() {
  const classes = useStyle();

  const settings = {
    pauseOnDotsHover: true,
    autoplaySpeed: 4000,
    fade: true,
    pauseOnHover: false,
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false,
    className: `${classes.carousel}`
  };

  return (
    <Box>
      <Slider {...settings}>
        <img src="carousel-1.jpg" alt="carousel-1" className="carousel-img" width="100%" height="650px" />
        <img src="carousel-2.jpg" alt="carousel-2" className="carousel-img" width="100%" height="650px" />
        <img src="carousel-3.jpg" alt="carousel-3" className="carousel-img" width="100%" height="650px" />
        <img src="carousel-4.jpg" alt="carousel-4" className="carousel-img" width="100%" height="650px" />
      </Slider>
    </Box>
  );
}
