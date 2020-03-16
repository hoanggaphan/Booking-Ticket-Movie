import React from "react";
import { AppBar, Box, IconButton, Button } from "@material-ui/core";
import { AccountCircle, Menu } from "@material-ui/icons";
import { Link, NavLink } from "react-router-dom";
import useStyle from "./style";

const Navbar = () => {
  const classes = useStyle();

  return (
    <Box className={classes.header} component={AppBar}>
      {/* LOGO */}
      <Link to="/" exact>
        <img
          src="https://tix.vn/app/assets/img/icons/web-logo.png"
          width="50px"
          height="50px"
          alt="logo"
        />
      </Link>

      {/* NAV LINK */}
      <Box component="nav" display={{ xs: "none", sm: "block" }}>
        <Button
          activeClassName="header-navLink-active"
          className="header-navLink"
          component={NavLink}
          exact
          to="/"
          color="inherit"
        >
          Trang Chủ
        </Button>
        <Button
          activeClassName="header-navLink-active"
          className="header-navLink"
          component={NavLink}
          to="/show-times"
          color="inherit"
        >
          Lịch Chiếu
        </Button>
        <Button
          activeClassName="header-navLink-active"
          className="header-navLink"
          component={NavLink}
          to="/list-cenima"
          color="inherit"
        >
          Cụm Rạp
        </Button>
        <Button
          activeClassName="header-navLink-active"
          className="header-navLink"
          component={NavLink}
          to="/news"
          color="inherit"
        >
          Tin Tức
        </Button>
      </Box>

      {/* USER LOGIN */}
      <Box display={{ xs: "none", sm: "block" }}>
        <Link to="/" className="header-login">
          <IconButton color="inherit" size="small">
            <AccountCircle fontSize="large" />
          </IconButton>
        </Link>
        <Button className="header-login" component={Link} to="/" color="inherit">
          Đăng Nhập
        </Button>
      </Box>

      {/* BUTTON HAMBURGER MOBILE*/}
      <Box display={{ sm: "none" }}>
        <Menu fontSize="large" className="header-hamburger-btn" />
      </Box>
    </Box>
  );
};

export default Navbar;
