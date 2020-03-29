import React from "react";
import { AppBar, Box, IconButton, Button } from "@material-ui/core";
import { AccountCircle, Menu } from "@material-ui/icons";
import SearchMovie from './../search-movie/search-movie';
import { HashLink as Link } from 'react-router-hash-link';
import useStyle from "./style";

const Navbar = () => {
  const classes = useStyle();

  return (
    <Box className={classes.header} component={AppBar}>
      {/* LOGO */}
      <Link to="/" exact>
        <img
          src={process.env.PUBLIC_URL + "/logo.png"}
          width="150px"
          height="50px"
          alt="logo"
        />
      </Link>

      {/* NAV LINK */}
      <Box component="nav" display={{ xs: "none", sm: "block" }}>
        <Button
          activeClassName="header-navLink-active"
          className="header-navLink"
          component={Link}
          exact
          to="/"
          color="inherit"
        >
          Trang Chủ
        </Button>
        <Button
          activeClassName="header-navLink-active"
          className="header-navLink"
          component={Link}
          to="/#showtimes"
          scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
          color="inherit"
        >
          Lịch Chiếu
        </Button>
        <Button
          activeClassName="header-navLink-active"
          className="header-navLink"
          component={Link}
          scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
          to="/#list-cinema"
          color="inherit"
        >
          Cụm Rạp
        </Button>
        <Button
          activeClassName="header-navLink-active"
          className="header-navLink"
          component={Link}
          to="/news"
          color="inherit"
        >
          Tin Tức
        </Button>
      </Box>

      {/* SEARCH MOVIE */}
      <SearchMovie />

      {/* USER LOGIN */}
      <Box component={Link} to="/login" className="header-login" display={{ xs: "none", sm: "block" }}>
        <IconButton color="inherit" size="small">
          <AccountCircle fontSize="large" />
        </IconButton>
        <Box component={Button} className="header-login-txt" color="inherit">
          Đăng Nhập
        </Box>
      </Box>

      {/* BUTTON HAMBURGER MOBILE*/}
      <Box display={{ sm: "none" }}>
        <Menu fontSize="large" className="header-hamburger-btn" />
      </Box>
    </Box>
  );
};

export default Navbar;
