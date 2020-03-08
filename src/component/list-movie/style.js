import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  listMovie: {
      maxWidth: "940px",
      margin: "0 auto",
      ["@media (max-width: 1080px)"]: {
        maxWidth: "705px",
      }
  },
  slider: {
    ["@media (max-width: 740px)"]: {
      display: "none",
    }
  },
  slideItem: {
    outline: "none",
    "& div": {
      outline: 'none'
    }
  },
  myNav: {
    maxWidth: "100%",
    margin: "0 10px 25px 10px",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "1px solid rgba(255, 255, 255, .1)",
    "& .nav-link": {
      fontSize: "24px",
      border: "none",
      color: theme.palette.text.primary,
      padding: '8px 0px 5px 0px',
      marginRight: "20px",
      position: "relative",
      textTransform: "uppercase",
      fontWeight: "500",
      "&.active": {
        backgroundColor: "unset",
        border: "none",
        color: theme.palette.text.primary,
        "&::after": {
          content: "''",
          position: "absolute",
          bottom: "0",
          left: '0',
          width: "100%",
          height: "1px",
          background: "#0089d0",
          boxShadow: "0 0 15px 1px #0089d0"
        },
      },
      "&:hover": {
        border: "none",
      },
      "&:focus": {
        outline: "none"
      }
    },
    ["@media (max-width: 1080px)"]: {
      maxWidth: "690px"
    }
  },
  nextArrow: {
    position: "absolute",
    top: "47%",
    right: '-100px',
    transform: "translateY(-50%)",
    "&:focus": {
      outline: "none"
    },
    [theme.breakpoints.down('lg')]: {
      right: '-60px',
    },
    ["@media (max-width: 840px)"]: {
      display: "none"
    }
   },
  prevArrow: {
    position: "absolute",
    top: "47%",
    left: '-100px',
    transform: "translateY(-50%)",
    "&:focus": {
      outline: "none"
    },
    [theme.breakpoints.down('lg')]: {
      left: '-60px',
    },
    ["@media (max-width: 840px)"]: {
      display: "none"
    }
  },
  iconArrow: {
    fontSize: "90px",
    [theme.breakpoints.down('lg')]: {
      fontSize: "50px",
    }
  },
  
}));

export default useStyles;
