import React, { useEffect, useState } from "react";
import { Box, Button } from "@material-ui/core";
import { Menu, ArrowDropDown } from "@material-ui/icons";
import SearchMovie from "./../search-movie/search-movie";
import { HashLink as Link } from "react-router-hash-link";
import { actLoadUser, actGetListCinemaAPI } from "./../../redux/actions/index";
import MyAvatar from "../avatar/avatar";
import { connect } from "react-redux";
import Dropdown from 'react-bootstrap/Dropdown'
import useStyle from "./style";

const Navbar = (props) => {
  const classes = useStyle();
  const { user, loadUser, getListCinemaAPI, listCinemaLogo, listCinemaDetail } = props;
  const [show, setShow] = useState(false);

  useEffect(() => {
    if(!user && localStorage.getItem("user")) { // kiểm tra nếu có user trên store thì k cần setState
      const user = JSON.parse(localStorage.getItem("user"));
      loadUser(user);
    }
    // eslint-disable-next-line 
  }, []);

  useEffect(() => {
    if(listCinemaLogo.length < 1 && listCinemaDetail.length < 1) { // kiểm tra nếu có state store thì ko cần setstate
      getListCinemaAPI();
    }
    // eslint-disable-next-line 
  }, []);

  return (
    <header className={classes.header}>
      {/* BUTTON HAMBURGER MOBILE*/}
      <Box display={{ sm: "none" }}>
        <Menu fontSize="large" className="header-hamburger-btn" />
      </Box>

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
          scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "start" })
          }
          color="inherit"
        >
          Lịch Chiếu
        </Button>
        <Button
          activeClassName="header-navLink-active"
          className="header-navLink"
          component={Link}
          scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "start" })
          }
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
      <Box display={{xs: "none", md: "block"}}>
        <SearchMovie />
      </Box>

      {/* USER LOGIN */}
      {user ? (
        <>
          <Box
            className="header-login login-success"
            display={{ xs: "none", sm: "flex" }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <MyAvatar user={user} />
            </Link>
            <Box className="header-login-txt" color="inherit">
              <Box textOverflow="ellipsis" overflow="hidden" whiteSpace="nowrap">
                {user.hoTen}
              </Box>
              <ArrowDropDown />
              <Box className="header-logout" >
                <Link to="/">Tài Khoản</Link>
                <button
                  onClick={() => {
                    loadUser(null)
                    localStorage.removeItem("user");
                  }}
                >
                  Đăng xuất
                </button>
              </Box>
            </Box>
          </Box>
          <Dropdown className="user-m" >
            <Dropdown.Toggle>
              <MyAvatar user={user} />
              <ArrowDropDown />
            </Dropdown.Toggle>

            <Dropdown.Menu show={show} >
              <Link className="account-m" to="/">Tài Khoản</Link>
              <button
                className="logout-m"
                onClick={() => {
                  loadUser(null)
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
            component={Link}
            to="/user/login"
            className="header-login"
            display={{ xs: "none", sm: "flex" }}
          >
            <Link to="/user/login" style={{ textDecoration: "none" }}>
              <MyAvatar />
            </Link>
            <Box className="header-login-btn" color="inherit">
              Đăng Nhập
            </Box>
          </Box>
          <Box className="user-m">
            <Link to="/user/login" style={{ textDecoration: "none" }}>
              <MyAvatar />
            </Link>
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
    getListCinemaAPI: () => {
      dispatch(actGetListCinemaAPI());
    }
  };
};

const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
    listCinemaLogo: state.cinemaReducer.listCinemaLogo,
    listCinemaDetail: state.cinemaReducer.listCinemaDetail,
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Navbar);
