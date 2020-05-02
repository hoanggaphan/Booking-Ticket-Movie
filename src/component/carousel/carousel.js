import React from "react";
import { Box, IconButton } from "@material-ui/core";
import { NavigateNext, NavigateBefore } from "@material-ui/icons";
import Carousel from "react-bootstrap/Carousel";
import useStyle from "./style";

export default function MyCarousel() {
  const classes = useStyle();

  return (
    <Box>
      <Carousel
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
            src={`${process.env.PUBLIC_URL}/images/carousel-1.jpg`}
            alt="carousel-1"
            className="carousel-img"
            width="100%"
            height="650px"
          />
          <Box className="carousel-background-linear" />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={`${process.env.PUBLIC_URL}/images/carousel-2.jpg`}
            alt="carousel-2"
            className="carousel-img"
            width="100%"
            height="650px"
          />
          <Box className="carousel-background-linear" />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={`${process.env.PUBLIC_URL}/images/carousel-3.jpg`}
            alt="carousel-1"
            className="carousel-img"
            width="100%"
            height="650px"
          />
          <Box className="carousel-background-linear" />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={`${process.env.PUBLIC_URL}/images/carousel-4.jpg`}
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
