import React, { useEffect, useState } from "react";
import { Box, Button } from "@material-ui/core";
import { Menu, ArrowDropDown } from "@material-ui/icons";
import SearchMovie from "./../search-movie/search-movie";
import { HashLink as Link } from "react-router-hash-link";
import { actLoadUser } from "./../../redux/actions/index";
import MyAvatar from "../avatar/avatar";
import { connect } from "react-redux";
import Dropdown from 'react-bootstrap/Dropdown';
import { useHistory, useLocation } from 'react-router-dom';
import useStyle from "./style";

const Navbar = (props) => {
  const classes = useStyle();
  const { user, loadUser } = props;
  const [show, setShow] = useState(false);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if(!user && localStorage.getItem("user")) { // kiểm tra nếu có user trên store thì k cần setState
      const user = JSON.parse(localStorage.getItem("user"));
      loadUser(user);
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
            <Link to="/account" style={{ textDecoration: "none" }}>
              <MyAvatar user={user} />
            </Link>
            <Box className="header-login-txt" color="inherit">
              <Box textOverflow="ellipsis" overflow="hidden" whiteSpace="nowrap">
                {user.hoTen}
              </Box>
              <ArrowDropDown />
              <Box className="header-logout" >
                <Link to="/account">Tài Khoản</Link>
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
              <Link className="account-m" to="/account">Tài Khoản</Link>
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
            onClick={() => history.push({pathname: "/user/login", state: {from: location}})}
            className="header-login"
            display={{ xs: "none", sm: "flex" }}
          >
            <Box style={{ textDecoration: "none" }}>
              <MyAvatar />
            </Box>
            <Box className="header-login-btn" color="inherit">
              Đăng Nhập
            </Box>
          </Box>
          <Box className="user-m">
            <Box 
              onClick={() => history.push({pathname: "/user/login", state: {from: location}})}
              style={{ textDecoration: "none", cursor: "pointer" }}>
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

const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Navbar);
