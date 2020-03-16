import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  listMovie: {
    maxWidth: "940px",
    margin: "0 auto",
    marginTop: "20px",
    [theme.breakpoints.up("md")]: {
      marginTop: "70px",
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
      justifyContent: "space-between",
      borderBottom: "1px solid rgba(255, 255, 255, .1)",
      
      "& .list-movie-nav-items": {
        display: "flex",
        alignItems: "center",
        width: "100%",
        justifyContent: "space-around",
        order: "2",
        [theme.breakpoints.up("sm")]: {
          width: "65%",
          justifyContent: "flex-start",
          order: "1"
        },
        "@media (max-width: 310px)": {
          flexDirection: "column"
        },
      },
      "& .nav-link": {
        fontSize: "18px",
        border: "none",
        color: theme.palette.text.secondary,
        padding: "8px 0px 5px 0px",
        position: "relative",
        textTransform: "uppercase",
        fontWeight: "500",
        "@media (min-width: 600px)": {
          marginRight: "20px",
        },
        [theme.breakpoints.up("md")]: {
          fontSize: "24px",
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
            boxShadow: "0 0 15px 3px #0089d0"
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
      '@media (min-width: 1080px)': {
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
      fontSize: "16px",
      alignItems: "center"
    },
    "& .list-movie-mobile": {
      display: "block",
      '@media (min-width: 1080px)': {
        display: "none"
      },
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
    '@media (min-width: 1080px)': {
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
    '@media (min-width: 1080px)': {
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
