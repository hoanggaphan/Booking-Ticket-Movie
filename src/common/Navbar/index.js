import { Box, Button, Container, Drawer, Grid, IconButton } from "@material-ui/core";
import { ArrowDropDown, Close, Menu } from "@material-ui/icons";
import logo from "assets/images/logo.png";
import MyAvatar from "common/Avatar";
import MovieSearch from "common/MovieSearch";
import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { actLoadUser } from "redux/actions/user";
import useStyle from "./Navbar.styles";

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);

  const classes = useStyle();
  const [show, setShow] = useState(false);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (!user && localStorage.getItem("user")) {
      // kiểm tra nếu có user trên store thì k cần setState
      const user = JSON.parse(localStorage.getItem("user"));
      dispatch(actLoadUser(user));
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

  const handleClickLogin = () => {
    history.push({
      pathname: "/user/login",
      state: { from: location },
    });
  };

  const handleClickLogout = () => {
    dispatch(actLoadUser(null));
    localStorage.removeItem("user");
  };

  const handleClickLogoutPhone = () => {
    dispatch(actLoadUser(null));
    localStorage.removeItem("user");
    setShow(false);
  };

  return (
    <header className={`${classes.header} mui-fixed`}>
      <div className={classes.wrapper}>

      {/* BUTTON HAMBURGER MOBILE*/}
      <Box display={{ sm: "none" }}>
        <IconButton onClick={toggleDrawer(true)}>
          <Menu fontSize="large" className="header-hamburger-btn" />
        </IconButton>
        <Drawer anchor="left" open={state} onClose={toggleDrawer(false)}>
          <Container>
            <Grid container className={classes.mobileGrid}>
              <Link to="/home">
                <img src={logo} width="150px" height="50px" alt="logo" />
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
                <MovieSearch />
              </Grid>
            </Grid>
            <Grid container className={classes.webGrid}>
              <Grid item xs={12}>
                <Button
                  className={classes.headerNavLink}
                  component={Link}
                  onClick={toggleDrawer(false)}
                  to="/home/#movie-list"
                  scroll={(el) =>
                    el.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                  color="inherit"
                >
                  Phim
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button
                  className={classes.headerNavLink}
                  component={Link}
                  onClick={toggleDrawer(false)}
                  to="/home/cinema"
                  scroll={(el) =>
                    el.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                  color="inherit"
                >
                  Cụm Rạp
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Drawer>
      </Box>

      {/* LOGO */}
      <Link to="/home">
        <img src={logo} width="150px" height="50px" alt="logo" />
      </Link>

      {/* NAV LINK */}
      <Box component="nav" display={{ xs: "none", sm: "block" }}>
        <Link
          className={classes.headerNavLink}
          to="/home/#movie-list"
          scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "start" })
          }
          color="inherit"
        >
          Phim
        </Link>

        <Link
          className={classes.headerNavLink}
          scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "start" })
          }
          to="/home/cinema"
          color="inherit"
        >
          Cụm Rạp
        </Link>
      </Box>

      {/* SEARCH MOVIE */}
      <Box display={{ xs: "none", md: "block" }}>
        <MovieSearch />
      </Box>

      {/* USER LOGIN */}
      {user ? (
        <>
          <Box
            className="header-login login-success"
            display={{ xs: "none", sm: "flex" }}
          >
            <Link to="/home/account">
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
                <Link to="/home/account">Tài Khoản</Link>
                <button onClick={handleClickLogout}>Đăng xuất</button>
              </Box>
            </Box>
          </Box>
          <Dropdown className="user-m">
            <Dropdown.Toggle>
              <MyAvatar user={user} />
              <ArrowDropDown />
            </Dropdown.Toggle>

            <Dropdown.Menu show={show}>
              <Link className="account-m" to="/home/account">
                Tài Khoản
              </Link>
              <button className="logout-m" onClick={handleClickLogoutPhone}>
                Đăng xuất
              </button>
            </Dropdown.Menu>
          </Dropdown>
        </>
      ) : (
        <>
          <Box
            onClick={handleClickLogin}
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
            <Box onClick={handleClickLogin} className={classes.linkLoginM}>
              <MyAvatar />
            </Box>
          </Box>
        </>
      )}
      </div>
    </header>
  );
};

export default Navbar;
