import { IconButton } from "@material-ui/core";
import { NavigateBefore, NavigateNext } from "@material-ui/icons";
import PropTypes from "prop-types";
import React, { memo, useEffect, useMemo, useRef, useState } from "react";
import Slider from "react-slick";
import useStyles from "./ListSlider.styles";

ListSlider.propTypes = {
  list: PropTypes.array.isRequired,

  title: PropTypes.string,
  color: PropTypes.string,
  rows: PropTypes.number,
  slidesPerRow: PropTypes.number,
  responsive: PropTypes.array,
};

ListSlider.defaultProps = {
  title: "",
  color: "warning",
  rows: 1,
  slidesPerRow: 4,
  responsive: [
    {
      breakpoint: 720,
      settings: {
        slidesPerRow: 3,
      },
    },
    {
      breakpoint: 360,
      settings: {
        slidesPerRow: 2,
      },
    },
  ],
};

function ListSlider({
  title,
  color,
  list,
  rows,
  slidesPerRow,
  responsive,
  Component,
}) {
  const classes = useStyles({ color });
  const sliderRef = useRef({});

  const [active, setActive] = useState(0);
  const [slidesPerRowState, setSlidesPerRowState] = useState(slidesPerRow);

  const settings = useMemo(
    () => ({
      speed: 500,
      arrows: false,
      infinite: false,
      slidesToShow: 1,
      beforeChange: (current, next) => setActive(next),
      rows,
      slidesPerRow,
      responsive,
    }),
    //eslint-disable-next-line
    []
  );

  useEffect(() => {
    if (!list.length) return;

    const currentBreak = responsive.find(
      (res) => res.breakpoint === sliderRef.current.state.breakpoint
    );

    if (currentBreak) {
      setSlidesPerRowState(currentBreak.settings.slidesPerRow);
    }
    //eslint-disable-next-line
  }, [list]);

  const handlePrevious = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const disabledPrevArrow = () => {
    if (active === 0) return true;
    return false;
  };

  const disabledNextArrow = () => {
    const slides = Math.ceil(list.length / (slidesPerRowState * rows)) - 1;
    if (active === slides) return true;
    return false;
  };

  const renderList = () => {
    return (list.length ? list : [...Array(4)]).map((item, index) => (
      <div key={index}>
        <Component item={item} color={color} />
      </div>
    ));
  };

  return (
    <div className={classes.ListSlider}>
      <div className={classes.ListSlider__head}>
        <div className={classes.ListSlider__title}>{title}</div>

        <div className={classes.ListSlider__controls}>
          <IconButton disabled={disabledPrevArrow()} onClick={handlePrevious}>
            <NavigateBefore />
          </IconButton>
          <IconButton disabled={disabledNextArrow()} onClick={handleNext}>
            <NavigateNext />
          </IconButton>
        </div>
      </div>

      <div>
        <Slider ref={sliderRef} {...settings}>
          {renderList()}
        </Slider>
      </div>
    </div>
  );
}

export default memo(ListSlider);
