import { IconButton, Box } from "@material-ui/core";
import { NavigateBefore, NavigateNext } from "@material-ui/icons";
import React, { memo, useMemo, useRef } from "react";
import Slider from "react-slick";
import useStyle from "./HeaderSlider.styles";
import PropTypes from "prop-types";
import PlayCircleOutline from "@material-ui/icons/PlayCircleOutline";
import { useDispatch } from "react-redux";
import { actViewTrailer } from "redux/actions/movie";

HeaderSlider.propTypes = {
  list: PropTypes.array,
};

HeaderSlider.defaultProps = {
  list: [],
};

function HeaderSlider({ list }) {
  const classes = useStyle();
  const sliderRef = useRef({});
  const dispatch = useDispatch();

  const settings = useMemo(
    () => ({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      pauseOnDotsHover: true,
    }),
    []
  );

  const handlePrevious = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handleViewTrailer = (item) => {
    const newTrailer = {
      movie: {
        trailer: item.trailer,
        title: item.tenPhim,
      },
      isOpen: true,
    };
    dispatch(actViewTrailer(newTrailer));
  };

  return (
    <section className={classes.headerSlider}>
      <IconButton className="slider-prev" onClick={handlePrevious}>
        <NavigateBefore />
      </IconButton>

      <Slider ref={sliderRef} {...settings}>
        {list.map((item, index) => (
          <div
            onClick={() => handleViewTrailer(item)}
            className="slide-item"
            key={index}
          >
            <img
              src={item.hinhAnh}
              alt={item.tenPhim}
              className={classes.headerSlider__img}
              width="100%"
              height="650px"
            />
            <div className={classes.headerSlider__backgroundLinear} />
            <IconButton className={classes.playButton}>
              <PlayCircleOutline />
            </IconButton>
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
