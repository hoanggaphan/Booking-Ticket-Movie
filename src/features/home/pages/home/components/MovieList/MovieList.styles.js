import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  // LISTMOVIE
  listMovie: {
    maxWidth: "940px",
    margin: "0 auto",
    marginTop: "10px",
    position: "relative",

    "@media (min-width: 960px)": {
      marginTop: "70px",
    },

    "& div:focus": {
      outline: "none",
    },

    "& .tab-pane": {
      height: "0",
      display: "block",
      overflow: "hidden",

      "&.active": {
        height: "auto",
        overflow: "visible",
      },
    },

    "& .fade": {
      transition: "opacity .2s ease-in",
    },

    "& .carousel": {
      display: "none",

      "@media (min-width: 1080px)": {
        display: "block",
      },

      "& .carousel-control-prev": {
        bottom: "0",
        width: "35px",
        height: "35px",
        top: "47%",
        transform: "translate(-110%, -47%)",
      },

      "& .carousel-control-next": {
        top: "47%",
        bottom: "0",
        width: "35px",
        height: "35px",
        transform: "translate(100%, -50%)",
      },
    },
  },
  // END LISTMOVIE

  // NAV
  listMovie__nav: {
    maxWidth: "100%",
    borderBottom: "1px solid rgba(255, 255, 255, .1)",

    alignItems: "center",
    justifyContent: "center",
    margin: "0 10px 25px 10px",

    "& .nav-link": {
      border: "none",
      position: "relative",
      padding: "8px 0px 5px 0px",
      color: theme.palette.text.secondary,

      fontSize: "18px",
      fontWeight: "bold",
      textTransform: "uppercase",

      "@media (min-width: 600px)": {
        marginRight: "20px",
        fontSize: "24px",
      },

      "&.active": {
        border: "none",
        backgroundColor: "unset",
        color: theme.palette.text.primary,

        "&::after": {
          height: "1px",
          width: "100%",
          background: theme.palette.warning.main,
          boxShadow: `0 0 15px 3px ${theme.palette.warning.main}`,

          left: "0",
          bottom: "0",
          content: "''",
          position: "absolute",
        },
      },

      "&:hover": {
        border: "none",
      },

      "&:focus": {
        outline: "none",
      },
    },
  },

  listMovie__navItems: {
    width: "100%",

    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-around",

    "@media (min-width: 600px)": {
      width: "unset",
    },
  },
  // END NAV

  // LISTMOVIE PHONE
  listMovie__phone: {
    display: "block",

    "@media (min-width: 1080px)": {
      display: "none",
    },
  },
  
  listMovie__moreButton: {
    display: "block",
    margin: "0 auto",
    color: theme.palette.warning.main,
    borderColor: theme.palette.warning.main,

    "&:focus": {
      outline: "none",
    },
  },

  // END LISTMOVIE PHONE

  shape: {
    width: "100%",
    height: "100%",
    opacity: ".02",

    top: "0px",
    right: "0px",
    zIndex: "-1",
    position: "absolute",
  },
}));

export default useStyles;
