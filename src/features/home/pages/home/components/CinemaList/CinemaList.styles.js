import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  listCinema: {
    width: "100%",
    maxWidth: "940px",
    borderRadius: "5px",
    
    margin: "0 auto",
    position: "relative",

    "@media (max-width: 600px)": {
      display: "none",
    },

    "& .nav": {
      height: "100%",
      borderRight: "1px solid rgba(255, 255, 255, .1)",
    },

    "& .nav-item": {
      width: "100%",
      textAlign: "center",
      padding: "0 10px",

      "& .nav-link": {
        width: "100%",
        height: "90px",
        borderBottom: "1px solid rgba(255, 255, 255, .1)",
        
        display: "flex",
        padding: "unset",
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
        
        opacity: ".4",
        transition: "all .2s",
        color: theme.palette.text.primary,

        "&:hover": {
          color: "unset",
          opacity: "1",
        },

        "&:focus": {
          outline: "none",
        },

        "& img": {
          width: "50px",
          height: "50px",
          borderRadius: "15%",
        },
        
        "&.active": {
          opacity: "1",
        },
      },
    },
  },


  // LISTCINEMA NAV LOGO
  listCinema__logo: {
    flexWrap: "nowrap",
    flexDirection: "row",

    "@media (min-width: 960px)": {
      flexDirection: "column",
    },
  },
  // END LISTCINEMA NAV LOGO


  // LISTCINEMA GROUP
  listCinema__group: {
    width: "100%",
    display: "flex",
    alignItems: "center",

    "& img": {
      minWidth: "50px",
    },
  },

  listCinema__group__name: {
    width: "100%",
    display: "block",

    fontSize: "14px",
    textAlign: "start",
    fontWeight: "500",
    color: theme.palette.text.primary,

    "& span": {
      color: theme.palette.text.warning,
    },
  },
  
  listCinema__group__location: {
    width: "100%",
    display: "block",
    color: theme.palette.text.secondary,
    
    fontSize: "12px",
    fontWeight: "500",
    textAlign: "start",

    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
  // END LISTCINEMA GROUP


  // LISTCINEMA NAV
  listCinema__nav: {
    maxHeight: "620px",
    display: "block",
    flexWrap: "unset",
    overflowY: "auto",

    "& .tab-pane.active": {
      height: "620px",
    },

    "& .dropdown-item": {
      transition: "all .2s",
      color: "rgba(0, 0, 0, .8)",
      "&:hover": {
        backgroundColor: "#eee",
      },
    },

    "&::-webkit-scrollbar": {
      width: "5px",
    },

    "&::-webkit-scrollbar-track": {
      background: "none",
      borderRadius: "4px",
    },

    "&::-webkit-scrollbar-thumb": {
      background: "none",
      borderRadius: "4px",
    },

    "&:hover": {
      "&::-webkit-scrollbar-track": {
        background: "#E8E3E3",
      },
      "&::-webkit-scrollbar-thumb": {
        background: "#C3BFBF",
      },
    },
  },
  // END LISTCINEMA NAV

  // LISTCINEMA MOVIE
  listCinema__movie: {
    padding: "25px",
    display: "flex",
    position: "relative",

    "&::after": {
      width: "calc(100% - 50px)",
      borderBottom: `1px solid rgba(255, 255, 255, .1)`,
      transform: "translateX(-50%)",

      left: "50%",
      bottom: "0",
      content: "''",
      position: "absolute",
    },
  },

  listCinema__movie__img: {
    width: "90px",
    height: "130px",
    display: "block",
    borderRadius: "3px",
  },

  listCinema__movie__name: {
    display: "block",
    marginBottom: "5px",
    color: theme.palette.text.default,

    fontWeight: "500",
    fontSize: "16px",
  },
  // END LISTCINEMA MOVIE

  // LISTCINEMA DATE
  listCinema__date: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",

    "& .dropdown": {
      marginRight: "6px",
      marginBottom: "8px",

      "& .dropdown-menu": {
        minWidth: "unset",
      },

      "&.show $listCinema__date__day": {
        transform: "translateY(-1px)",
        boxShadow: `1px 1px 8px 1px ${theme.palette.warning.main}`,
      },
    },
  },

  listCinema__date__day: {
    padding: "5px",
    cursor: "pointer",
    borderRadius: "3px",
    background: theme.palette.warning.main,

    fontSize: "16px",
    fontWeight: "500",

    "&::after": {
      content: "none",
    },

    "&:hover": {
      transform: "translateY(-1px)",
    },
  },
  // END LISTCINEMA DATE

  shape: {
    width: "100%",
    height: "100%",
    opacity: "0.02",

    top: "0",
    zIndex: "-1",
    left: "-200px",
    position: "absolute",
  },
}));

export default useStyles;
