import { IconButton } from "@material-ui/core";
import { NavigateBefore, NavigateNext } from "@material-ui/icons";
import carousel1 from "assets/images/carousel-1.jpg";
import carousel2 from "assets/images/carousel-2.jpg";
import carousel3 from "assets/images/carousel-3.jpg";
import carousel4 from "assets/images/carousel-4.jpg";
import React, { memo, useRef } from "react";
import Slider from "react-slick";
import useStyle from "./HeaderSlider.styles";
import { useMemo } from "react";

const slides = [carousel1, carousel2, carousel3, carousel4];

function HeaderSlider() {
  const classes = useStyle();
  const sliderRef = useRef({});

  const settings = useMemo(() => ({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    pauseOnDotsHover: true
  }), []);

  const handlePrevious = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <section className={classes.headerSlider}>
      <IconButton className="slider-prev" onClick={handlePrevious}>
        <NavigateBefore />
      </IconButton>

      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, index) => (
          <div className="slide-item" key={index}>
            <img
              src={slide}
              alt={`carousel ${index}`}
              className={classes.headerSlider__img}
              width="100%"
              height="650px"
            />
            <div className={classes.headerSlider__backgroundLinear} />
          </div>
        ))}
      </Slider>

      <IconButton className="slider-next" onClick={handleNext}>
        <NavigateNext />
      </IconButton>
    </section>
  );
}

export default memo(HeaderSlider);
