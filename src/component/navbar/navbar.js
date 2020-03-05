import React from "react";
import { AppBar, Box, IconButton, Button } from "@material-ui/core";
import { AccountCircle, Menu } from '@material-ui/icons'
import { Link, NavLink } from "react-router-dom";
import useStyle from './style';

export default function Navbar() {
  const classes = useStyle();

  return (
    <Box
      className={classes.header}
      component={AppBar} 
      position="fixed"
      height={65}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      flexDirection="unset"
      px="1%"
    >
      {/* Logo */}
      <Link to="/" exact>
        <img src="https://tix.vn/app/assets/img/icons/web-logo.png" width="50px" height="50px"/>
      </Link>

      {/* Nav Link */}
      <Box component="nav" display={{ xs: "none", sm: "block" }}>
        <Button activeClassName={classes.active} className={classes.navLink} component={NavLink} exact to="/" color="inherit">Trang Chủ</Button>
        <Button activeClassName={classes.active} className={classes.navLink} component={NavLink} to="/show-times" color="inherit">Lịch Chiếu</Button>
        <Button activeClassName={classes.active} className={classes.navLink} component={NavLink} to="/list-cenima" color="inherit">Cụm Rạp</Button>
        <Button activeClassName={classes.active} className={classes.navLink} component={NavLink} to="/news" color="inherit">Tin Tức</Button>
      </Box>

      {/* User Login */}
      <Box display={{ xs: "none", sm: "block" }}>
        <Link to="/" className={classes.login} >
          <IconButton color="inherit" size="small"  >
            <AccountCircle fontSize="large" />
          </IconButton>
        </Link>
        <Button className={classes.login} component={Link} to="/" color='inherit'>Đăng Nhập</Button>
      </Box>

      {/* Button Menu */}
      <Box display={{ sm: "none" }}>
        <IconButton color="inherit" size="medium">
          <Menu fontSize="large" />
        </IconButton>
      </Box>
    </Box>
  );
}
