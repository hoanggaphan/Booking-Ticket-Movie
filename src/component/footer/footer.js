import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import useStyles from "./style";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import AppleIcon from '@material-ui/icons/Apple';
import AndroidIcon from '@material-ui/icons/Android';
import FacebookIcon from '@material-ui/icons/Facebook';

function Footer(props) {
  const classes = useStyles();
  
  const renderLogo = () => {
    return props.listCinemaLogo.map((item, index) => {
      return (
        <a
          title={item.maHeThongRap}
          key={index}
          href={item.trangChu}
          className="footer-logo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img alt={item.maHeThongRap} src={item.logo} />
        </a>
      );
    });
  };

  return (
    <footer className={classes.footer}>
      <Box className="footer-container">
        <Grid component={Box} justifyContent="space-around" borderBottom="1px solid rgba(255,255,255,.2)" container>
          <Grid component={Box}  px="15px" item xs={12} sm={4}>
            <Typography variant="h6" className="footer-title">
              PHIMHUB
            </Typography>
            <Box display="flex" justifyContent="space-between">
              <Box width="100%" display={{xs: "none", md: "block"}}>
                <Link className="footer-link" to="/">
                  FAQ
                </Link>
                <Link className="footer-link" to="/">
                  Brand Guidelines
                </Link>
              </Box>
              <Box  width="100%" justifyContent="center" flexWrap="wrap" display={{xs: "flex", sm: "block"}}>
                <Link className="footer-link" to="/">
                  Thỏa thuận sử dụng
                </Link>
                <Link className="footer-link" to="/">
                  Chính sách bảo mật
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid component={Box} px="20px" display={{xs: "none", md: "block"}} item xs={4}>
            <Typography style={{paddingLeft: "15px"}} variant="h6" className="footer-title">
              ĐỐI TÁC
            </Typography>
            <Box display="flex" justifyContent="space-between" px="15px">
              {renderLogo()}
            </Box>
          </Grid>
          <Grid component={Box} px="15px" item xs={6} sm={4}>
            <Box display="flex" justifyContent="space-around" >
              <Box width="50%" display={{xs: "none", md: "block"}} >
                <Typography variant="h6" align="center" className="footer-title">
                  MOBILE APP
                </Typography>
                <Box display="flex" justifyContent="space-around">
                  <a
                    href="https://apps.apple.com/vn/app/tix-%C4%91%E1%BA%B7t-v%C3%A9-nhanh-nh%E1%BA%A5t/id615186197"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="apple app"
                  >
                    <AppleIcon fontSize="large" style={{color: "white"}} />
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="android app"
                  >
                    <AndroidIcon fontSize="large" style={{color: "white"}} />
                  </a>
                </Box>
              </Box>
              <Box width="50%">
                <Typography variant="h6" align="center" className="footer-title">
                  SOCIAL
                </Typography>
                <Box display="flex" justifyContent="space-around" mb="16px">
                  <a
                    href="https://www.facebook.com/tix.vn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="facebook"
                  >
                    <FacebookIcon fontSize="large" style={{color: "white"}} />
                  </a>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid component={Box} container  pt="16px" className="footer-bottom">
          <Grid component={Box} item sm={2} md={1} xs={12}>
            <Box component="img" width="80px" borderRadius="8px"mb="10px" src={process.env.PUBLIC_URL + "/zion-logo.jpg"} />
          </Grid>
          <Grid item sm={7} md={9} xs={12} className="footer-location">
            <h6>
              PHIMHUB – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN XXX
            </h6>
            <p>Địa chỉ: 6 Đường số 2, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh, Việt Nam.</p>
            <p>Giấy chứng nhận đăng ký kinh doanh số: xxxxxxx,</p>
            <p>đăng ký thay đổi lần thứ n, ngày xx tháng xx năm xxxx do Sở kế hoạch và đầu tư Thành phố Hồ Chí Minh cấp.</p>
            <p>Số Điện Thoại (Hotline): 0906 799 313</p>
            <p>Email: phansihoang1998@gmail.com</p>
          </Grid>
          <Grid item sm={3} md={2} xs={12} component={Box}>
            <a
              href="http://online.gov.vn/Home/WebDetails/62782?AspxAutoDetectCookieSupport=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Box component="img"  mb="10px"  width="130px" alt="Bộ Công Thương" src={process.env.PUBLIC_URL + "https://s3img.vcdn.vn/123phim/2020/03/d1e6bd560daa9e20131ea8a0f62e87f8.png"} />
            </a>
          </Grid>
        </Grid>
      </Box>
    </footer>
  );
}

const mapStateToProps = state => {
  return {
    listCinemaLogo: state.cinemaReducer.listCinemaLogo
  };
};
export default connect(mapStateToProps, null)(Footer);
