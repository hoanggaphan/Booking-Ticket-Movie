import { Box, Button, Grid } from "@material-ui/core";
import mobile from "assets/images/mobile.png";
import slide2 from "assets/images/slide2.jpg";
import slide3 from "assets/images/slide3.jpg";
import slide4 from "assets/images/slide4.jpg";
import slide5 from "assets/images/slide5.jpg";
import slide6 from "assets/images/slide6.jpg";
import slide7 from "assets/images/slide7.jpg";
import slide8 from "assets/images/slide8.jpg";
import slide9 from "assets/images/slide9.jpg";
import React, { memo } from "react";
import Slider from "react-slick";
import useStyles from "./AppBg.styles";

const slides = [slide2, slide3, slide4, slide5, slide6, slide7, slide8, slide9];

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: false
};

function AppBg() {
  const classes = useStyles();

  return (
    <section id="app" className={classes.backApp}>
      <Grid container component={Box} className={classes.wrapper}>
        <Grid item xs={12} md={6} className={classes.backApp__left}>
          <Box width="100%">
            <p className="left-text">
              Ứng dụng tiện lợi dành cho người yêu điện ảnh
            </p>
            <p className="left-text-small">
              Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và
              đổi quà hấp dẫn.
            </p>
            <Button
              component="a"
              target="_blank"
              href="https://itunes.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197?mt=8"
              className="left-btn"
            >
              App miễn phí - Tải về ngay!
            </Button>
            <p className="left-text-under">
              PHIMHUB có hai phiên bản{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://apps.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197"
              >
                iOS
              </a>{" "}
              &{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123"
              >
                Android
              </a>
            </p>
          </Box>
        </Grid>

        <Grid item xs={12} md={6} className={classes.backApp__right}>
          <img alt="mobile" src={mobile} className="right-img-mobile" />
          <Slider {...settings}>
            {slides.map((item, index) => (
              <div key={index}>
                <img className="right-img-slide" src={item} alt={item} />
              </div>
            ))}
          </Slider>
        </Grid>
      </Grid>
    </section>
  );
}

export default memo(AppBg);
