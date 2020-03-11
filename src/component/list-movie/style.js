import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  listMovie: {
    maxWidth: "940px",
    margin: "0 auto",
    paddingTop: "30px",
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
      justifyContent: "space-between",
      borderBottom: "1px solid rgba(255, 255, 255, .1)",
      "& .list-movie-nav-items": {
        display: "flex",
        alignItems: "center",
        width: "100%",
        justifyContent: "center",
        order: "2",
        [theme.breakpoints.up("sm")]: {
          width: "65%",
          justifyContent: "flex-start",
          order: "1"
        }
      },
      "& .nav-link": {
        fontSize: "18px",
        border: "none",
        color: theme.palette.text.secondary,
        padding: "8px 0px 5px 0px",
        marginRight: "20px",
        position: "relative",
        textTransform: "uppercase",
        fontWeight: "500",
        [theme.breakpoints.up("sm")]: {
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
            background: "#0089d0",
            boxShadow: "0 0 15px 1px #0089d0"
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
      [theme.breakpoints.up("sm")]: {
        display: "block"
      },
      "& .list-movie-sliders-item": {
        outline: "none",
        "& div": {
          outline: "none"
        }
      }
    },
    "& .list-movie-more-btn": {
      margin: "0 auto",
      outline: "none",
      fontSize: "20px",
      color: theme.palette.primary.main,
      borderColor: theme.palette.primary.main
    }
  },

  nextArrow: {
    position: "absolute",
    top: "47%",
    transform: "translateY(-50%)",
    right: "-60px",
    display: "none",
    "&:focus": {
      outline: "none"
    },
    [theme.breakpoints.up("md")]: {
      display: "block"
    },
    [theme.breakpoints.up("lg")]: {
      right: "-100px"
    }
  },
  prevArrow: {
    position: "absolute",
    top: "47%",
    left: "-60px",
    display: "none",
    transform: "translateY(-50%)",
    "&:focus": {
      outline: "none"
    },
    [theme.breakpoints.up("md")]: {
      display: "block"
    },
    [theme.breakpoints.up("lg")]: {
      left: "-100px"
    }
  },
  iconArrow: {
    fontSize: "50px",
    [theme.breakpoints.up("lg")]: {
      fontSize: "90px"
    }
  }
}));

export default useStyles;
