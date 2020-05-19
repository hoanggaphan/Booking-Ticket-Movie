import { Box, IconButton } from "@material-ui/core";
import { NavigateBefore, NavigateNext } from "@material-ui/icons";
import carousel1 from "assets/images/carousel-1.jpg";
import carousel2 from "assets/images/carousel-2.jpg";
import carousel3 from "assets/images/carousel-3.jpg";
import carousel4 from "assets/images/carousel-4.jpg";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import useStyle from "./styles";

function MyCarousel() {
  const classes = useStyle();

  return (
    <Box>
      <Carousel
        touch
        className={classes.root}
        nextIcon={
          <IconButton>
            <NavigateNext />
          </IconButton>
        }
        prevIcon={
          <IconButton>
            <NavigateBefore />
          </IconButton>
        }
      >
        <Carousel.Item>
          <img
            src={carousel1}
            alt="carousel-1"
            className="carousel-img"
            width="100%"
            height="650px"
          />
          <Box className="carousel-background-linear" />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={carousel2}
            alt="carousel-2"
            className="carousel-img"
            width="100%"
            height="650px"
          />
          <Box className="carousel-background-linear" />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={carousel3}
            alt="carousel-1"
            className="carousel-img"
            width="100%"
            height="650px"
          />
          <Box className="carousel-background-linear" />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={carousel4}
            alt="carousel-1"
            className="carousel-img"
            width="100%"
            height="650px"
          />
          <Box className="carousel-background-linear" />
        </Carousel.Item>
      </Carousel>
    </Box>
  );
}

export default MyCarousel;