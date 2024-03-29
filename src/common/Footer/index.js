import { Box, Grid, Typography } from '@material-ui/core';
import { Android, Apple, Facebook } from '@material-ui/icons';
import zionLogo from 'assets/images/zion-logo.jpg';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { actGetCinemaLogo } from 'redux/actions/cinema';
import useStyles from './Footer.styles';

function Footer() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const listCinemaLogo = useSelector(
    (state) => state.cinemaReducer.listCinemaLogo
  );

  useEffect(() => {
    dispatch(actGetCinemaLogo());
    // eslint-disable-next-line
  }, []);

  const renderLogo = () => {
    return listCinemaLogo.map((item, index) => {
      return (
        <a
          title={item.maHeThongRap}
          key={index}
          href={item.trangChu}
          className='footer-logo'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img alt={item.maHeThongRap} src={item.logo} />
        </a>
      );
    });
  };

  return (
    <footer className={classes.footer}>
      <Box className='footer-container'>
        <Grid
          component={Box}
          justifyContent='space-around'
          borderBottom='1px solid rgba(255,255,255,.2)'
          container
        >
          <Grid component={Box} px='15px' item xs={12} sm={4}>
            <Box
              component='h6'
              paddingLeft='0!important'
              fontSize='1.25rem'
              className='footer-title'
            >
              PHIMHUB
            </Box>
            <Box display='flex' justifyContent='space-between'>
              <Box width='100%' display={{ xs: 'none', md: 'block' }}>
                <Link className='footer-link' to='/home'>
                  FAQ
                </Link>
                <Link className='footer-link' to='/home'>
                  Brand Guidelines
                </Link>
              </Box>
              <Box
                width='100%'
                justifyContent='center'
                flexWrap='wrap'
                display={{ xs: 'flex', sm: 'block' }}
              >
                <Link className='footer-link' to='/home'>
                  Thỏa thuận sử dụng
                </Link>
                <Link className='footer-link' to='/home'>
                  Chính sách bảo mật
                </Link>
              </Box>
            </Box>
          </Grid>

          <Grid
            component={Box}
            px='20px'
            display={{ xs: 'none', md: 'block' }}
            item
            xs={4}
          >
            <Typography variant='h6' className='footer-title'>
              ĐỐI TÁC
            </Typography>
            <Box display='flex' justifyContent='space-between' px='15px'>
              {renderLogo()}
            </Box>
          </Grid>

          <Grid component={Box} px='15px' item xs={6} sm={4}>
            <Box display='flex' justifyContent='space-around'>
              <Box width='50%' display={{ xs: 'none', md: 'block' }}>
                <Typography
                  variant='h6'
                  align='center'
                  className='footer-title'
                >
                  MOBILE APP
                </Typography>
                <Box display='flex' justifyContent='space-around'>
                  <a
                    href='https://apps.apple.com/vn/app/tix-%C4%91%E1%BA%B7t-v%C3%A9-nhanh-nh%E1%BA%A5t/id615186197'
                    target='_blank'
                    rel='noopener noreferrer'
                    title='apple app'
                  >
                    <Apple fontSize='large' className={classes.icon} />
                  </a>
                  <a
                    href='https://play.google.com/store/apps/details?id=vn.com.vng.phim123'
                    target='_blank'
                    rel='noopener noreferrer'
                    title='android app'
                  >
                    <Android fontSize='large' className={classes.icon} />
                  </a>
                </Box>
              </Box>
              <Box width='50%'>
                <Typography
                  variant='h6'
                  align='center'
                  className='footer-title'
                >
                  SOCIAL
                </Typography>
                <Box display='flex' justifyContent='space-around' mb='16px'>
                  <a
                    href='https://www.facebook.com/tix.vn/'
                    target='_blank'
                    rel='noopener noreferrer'
                    title='facebook'
                  >
                    <Facebook fontSize='large' className={classes.icon} />
                  </a>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Grid component={Box} container pt='16px' className='footer-bottom'>
          <Grid component={Box} item sm={2} md={1} xs={12}>
            <Box
              component='img'
              width='80px'
              borderRadius='8px'
              mb='10px'
              src={zionLogo}
            />
          </Grid>

          <Grid item sm={7} md={9} xs={12} className='footer-location'>
            <h6>PHIMHUB – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN XXX</h6>
            <p>
              Địa chỉ: 32, Phường Tân Thuận Tây, Quận 7, Tp. Hồ Chí Minh, Việt
              Nam.
            </p>
            <p>Giấy chứng nhận đăng ký kinh doanh số: xxxxxxx,</p>
            <p>
              đăng ký thay đổi lần thứ n, ngày xx tháng xx năm xxxx do Sở kế
              hoạch và đầu tư Thành phố Hồ Chí Minh cấp.
            </p>
            <p>Số Điện Thoại (Hotline): 0909 999 333</p>
            <p>Email: dev.phansihoang@gmail.com</p>
          </Grid>

          <Grid item sm={3} md={2} xs={12} component={Box}>
            <a
              href='http://online.gov.vn/Home/WebDetails/62782?AspxAutoDetectCookieSupport=1'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Box
                component='img'
                mb='10px'
                width='130px'
                alt='Bộ Công Thương'
                src='https://s3img.vcdn.vn/123phim/2020/03/d1e6bd560daa9e20131ea8a0f62e87f8.png'
              />
            </a>
          </Grid>
        </Grid>
      </Box>
    </footer>
  );
}

export default Footer;
