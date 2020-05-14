import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Grid,
  Drawer,
  IconButton,
  Container,
} from "@material-ui/core";
import { Menu, ArrowDropDown, Close } from "@material-ui/icons";
import Dropdown from "react-bootstrap/Dropdown";
import { HashLink as Link } from "react-router-hash-link";
import { connect } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

import useStyle from "./style";
import SearchMovie from "./../search-movie/search-movie";
import { actLoadUser } from "./../../redux/actions/index";
import MyAvatar from "../avatar/avatar";
import logo from './../../assets/images/logo.png';

const Navbar = (props) => {
  const classes = useStyle();
  const { user, loadUser } = props;
  const [show, setShow] = useState(false);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (!user && localStorage.getItem("user")) {
      // kiểm tra nếu có user trên store thì k cần setState
      const user = JSON.parse(localStorage.getItem("user"));
      loadUser(user);
    }
    // eslint-disable-next-line
  }, []);

  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  return (
    <header className={`${classes.header} mui-fixed`}>
      {/* BUTTON HAMBURGER MOBILE*/}
      <>
        <Box display={{ sm: "none" }}>
          <IconButton onClick={toggleDrawer(true)}>
            <Menu fontSize="large" className="header-hamburger-btn" />
          </IconButton>
          <Drawer anchor="left" open={state} onClose={toggleDrawer(false)}>
            <Container>
              <Grid container className={classes.mobileGrid}>
                <Link to="/" exact>
                  <img
                    src={logo}
                    width="150px"
                    height="50px"
                    alt="logo"
                  />
                </Link>
                <IconButton
                  onClick={toggleDrawer(false)}
                  className={classes.icon}
                >
                  <Close />
                </IconButton>
              </Grid>
              <Grid container className={classes.webGrid}>
                <Grid item xs={12}>
                  <SearchMovie />
                </Grid>
              </Grid>
              <Grid container className={classes.webGrid}>
                <Grid item xs={12}>
                  <Button
                    className={classes.headerNavLink}
                    component={Link}
                    exact
                    to="/"
                    color="inherit"
                  >
                    Trang Chủ
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    className={classes.headerNavLink}
                    component={Link}
                    onClick={toggleDrawer(false)}
                    to="/#showtimes"
                    scroll={(el) =>
                      el.scrollIntoView({ behavior: "smooth", block: "start" })
                    }
                    color="inherit"
                  >
                    Lịch Chiếu
                  </Button>
                </Grid>
              </Grid>
            </Container>
          </Drawer>
        </Box>
      </>

      {/* LOGO */}
      <Link to="/" exact>
        <img
          src={logo}
          width="150px"
          height="50px"
          alt="logo"
        />
      </Link>

      {/* NAV LINK */}
      <Box component="nav" display={{ xs: "none", sm: "block" }}>
        <Button
          className={classes.headerNavLink}
          component={Link}
          exact
          to="/"
          color="inherit"
        >
          Trang Chủ
        </Button>
        <Button
          className={classes.headerNavLink}
          component={Link}
          to="/#showtimes"
          scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "start" })
          }
          color="inherit"
        >
          Lịch Chiếu
        </Button>
        <Button
          className={classes.headerNavLink}
          component={Link}
          scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "start" })
          }
          to="/#list-cinema"
          color="inherit"
        >
          Cụm Rạp
        </Button>
      </Box>

      {/* SEARCH MOVIE */}
      <Box display={{ xs: "none", md: "block" }}>
        <SearchMovie />
      </Box>

      {/* USER LOGIN */}
      {user ? (
        <>
          <Box
            className="header-login login-success"
            display={{ xs: "none", sm: "flex" }}
          >
            <Link to="/account">
              <MyAvatar user={user} />
            </Link>
            <Box className="header-login-txt" color="inherit">
              <Box
                textOverflow="ellipsis"
                overflow="hidden"
                whiteSpace="nowrap"
              >
                {user.hoTen}
              </Box>
              <ArrowDropDown />
              <Box className="header-logout">
                <Link to="/account">Tài Khoản</Link>
                <button
                  onClick={() => {
                    loadUser(null);
                    localStorage.removeItem("user");
                  }}
                >
                  Đăng xuất
                </button>
              </Box>
            </Box>
          </Box>
          <Dropdown className="user-m">
            <Dropdown.Toggle>
              <MyAvatar user={user} />
              <ArrowDropDown />
            </Dropdown.Toggle>

            <Dropdown.Menu show={show}>
              <Link className="account-m" to="/account">
                Tài Khoản
              </Link>
              <button
                className="logout-m"
                onClick={() => {
                  loadUser(null);
                  localStorage.removeItem("user");
                  setShow(false);
                }}
              >
                Đăng xuất
              </button>
            </Dropdown.Menu>
          </Dropdown>
        </>
      ) : (
        <>
          <Box
            onClick={() =>
              history.push({
                pathname: "/user/login",
                state: { from: location },
              })
            }
            className="header-login"
            display={{ xs: "none", sm: "flex" }}
          >
            <Box className={classes.linkLogin}>
              <MyAvatar />
            </Box>
            <Box className="header-login-btn" color="inherit">
              Đăng Nhập
            </Box>
          </Box>
          <Box className="user-m">
            <Box
              onClick={() =>
                history.push({
                  pathname: "/user/login",
                  state: { from: location },
                })
              }
              className={classes.linkLoginM}
            >
              <MyAvatar />
            </Box>
          </Box>
        </>
      )}
    </header>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadUser: (user) => {
      dispatch(actLoadUser(user));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
