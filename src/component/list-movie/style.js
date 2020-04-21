import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  listMovie: {
    maxWidth: "940px",
    margin: "0 auto",
    marginTop: "10px",
    position: "relative",
    [theme.breakpoints.up("md")]: {
      marginTop: "70px"
    },
    "& div:focus": {
      outline: "none"
    },
    "& .tab-pane": {
      display: "block",
      height: "0",
      overflow: "hidden",
      "&.active": {
        height: "auto",
        overflow: "visible"
      }
    },
    "& .fade": {
      transition: "opacity .2s ease-in"
    },
    "& .list-movie-nav": {
      maxWidth: "100%",
      margin: "0 10px 25px 10px",
      alignItems: "center",
      justifyContent: "center",
      borderBottom: "1px solid rgba(255, 255, 255, .1)",

      "& .list-movie-nav-items": {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        flexWrap: "wrap",
        width: "100%",
        [theme.breakpoints.up("sm")]: {
          width: "unset"
        }
      },
      "& .nav-link": {
        fontSize: "18px",
        border: "none",
        color: theme.palette.text.secondary,
        padding: "8px 0px 5px 0px",
        position: "relative",
        textTransform: "uppercase",
        fontWeight: "bold",
        [theme.breakpoints.up("sm")]: {
          marginRight: "20px",
          fontSize: "24px"
        },
        "&.active": {
          backgroundColor: "unset",
          border: "none",
          color: theme.palette.text.primary,
          "&::after": {
            content: "''",
            position: "absolute",
            bottom: "0",
            left: "0",
            width: "100%",
            height: "1px",
            background: theme.palette.warning.main,
            boxShadow: `0 0 15px 3px ${theme.palette.warning.main}`
          }
        },
        "&:hover": {
          border: "none"
        },
        "&:focus": {
          outline: "none"
        }
      }
    },
    "& .list-movie-sliders": {
      display: "none",
      "@media (min-width: 1080px)": {
        display: "block"
      },
      "& .list-movie-sliders-item": {
        outline: "none",
        "& div": {
          outline: "none"
        }
      }
    },
    "& .list-movie-alert": {
      backgroundColor: "#1f2251",
      color: "rgba(255,255,255,.5)",
      margin: "0 10px",
      alignItems: "center",
      fontSize: "14px",
      [theme.breakpoints.up("sm")]: {
        fontSize: "16px"
      }
    },
    "& .list-movie-mobile": {
      display: "block",
      "@media (min-width: 1080px)": {
        display: "none"
      },
      "& .list-movie-mobile-btn-more": {
        display: "block",
        margin: "0 auto",
        borderColor: theme.palette.warning.main,
        color: theme.palette.warning.main,
        "&:focus": {
          outline: "none"
        }
      }
    },
    "& .next-arrow": {
      position: "absolute",
      top: "47%",
      transform: "translateY(-50%)",
      right: "-60px",
      display: "none",
      opacity: ".7",
      "&:hover": {
        opacity: "1"
      },
      "&:focus": {
        outline: "none"
      },
      "@media (min-width: 1080px)": {
        display: "block"
      },
      [theme.breakpoints.up("lg")]: {
        right: "-100px"
      }
    },
    "& .prev-arrow": {
      position: "absolute",
      top: "47%",
      left: "-60px",
      display: "none",
      transform: "translateY(-50%)",
      opacity: ".7",
      "&:hover": {
        opacity: "1"
      },
      "&:focus": {
        outline: "none"
      },
      "@media (min-width: 1080px)": {
        display: "block"
      },
      [theme.breakpoints.up("lg")]: {
        left: "-100px"
      }
    },
    "& .icon-arrow": {
      fontSize: "50px",
      [theme.breakpoints.up("lg")]: {
        fontSize: "90px"
      }
    }
  },
  shape: {
    position: "absolute",
    opacity: ".02",
    top: "0px",
    right: "0px",
    width: "100%",
    height: "100%",
    zIndex: "-1"
  }
}));

export default useStyles;
