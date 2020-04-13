import React, { useMemo } from "react";
import { Box, Grid, Button } from "@material-ui/core";
import Slider from "react-slick";
import useStyles from "./style";

export default function BgApp() {
  const classes = useStyles();

  const memorizedSettings = useMemo(() => {
    return {
      dots: false,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2500,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      pauseOnHover: false,
    };
  }, [])

  return (
    <Box
      className={classes.backApp}
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/backapp.jpg)` }}
    >
      <Grid container component={Box} className="back-app-container">
        <Grid xs={12} md={6} className="back-app-left">
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
        <Grid xs={12} md={6} className="back-app-right">
          <img
            alt="mobile"
            src={process.env.PUBLIC_URL + "/mobile.png"}
            className="right-img-mobile"
          />
          <Slider {...memorizedSettings}>
            {["slide2.jpg","slide3.jpg","slide4.jpg",
            "slide5.jpg","slide6.jpg","slide7.jpg","slide8.jpg",
            "slide9.jpg","slide10.jpg","slide11.jpg","slide12.jpg",
            "slide13.jpg","slide14.jpg","slide15.jpg","slide16.jpg"].map(item => (
              <div>
                  <img
                  src={process.env.PUBLIC_URL + "/" + item}
                  className="right-img-slide"
                  alt={item}
                  />
              </div>
            ))}
          </Slider>
        </Grid>
      </Grid>
    </Box>
  );
}
