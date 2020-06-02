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
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import useStyles from "./AppBg.styles";

const slides = [
  slide2,
  slide3,
  slide4,
  slide5,
  slide6,
  slide7,
  slide8,
  slide9,
];

function AppBg() {
  const classes = useStyles();

  return (
    <Box className={classes.backApp}>
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
          <Carousel
            controls={false}
            indicators={false}
            interval={2000}
          >
            {slides.map((item, index) => (
              <Carousel.Item key={index}>
                <img className="right-img-slide" src={item} alt={item} />
              </Carousel.Item>
            ))}
          </Carousel>
        </Grid>

      </Grid>
    </Box>
  );
}

export default AppBg;