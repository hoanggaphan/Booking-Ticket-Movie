import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  listCinema: {
    maxWidth: "940px",
    width: "100%",
    margin: "0 auto",
    borderRadius: "5px",
    position: "relative",
    "@media (max-width: 940px)": {
      display: "none"
    },
    "& .nav": {
      height: "100%",
      borderRight: "1px solid rgba(255, 255, 255, .1)"
    },
    "& .nav-item": {
      width: "100%",
      textAlign: "center",
      padding: "0 10px",
      "& .nav-link": {
        width: "100%",
        height: "90px",
        padding: "unset",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        borderBottom: "1px solid rgba(255, 255, 255, .1)",
        color: theme.palette.text.primary,
        opacity: ".4",
        transition: "all .1s",
        "&:hover": {
          color: "unset",
          opacity: "1"
        },
        "&:focus": {
        outline: "none"
        },
        "& img": {
        width: "50px",
        height: "50px",
        },
        "&.active": {
          opacity: "1"
        }
      },
    },

    // Cụm Rạp
    "& .list-cinema-group": {
      width: "100%",
      display: "flex",
      alignItems: "center",
      "& .list-cinema-group-name": {
        fontSize: "16px",
        textAlign: "start",
        display: "block",
        color: theme.palette.text.default,
        width: "100%"
      },
      "& .list-cinema-group-location": {
        display: "block",
        fontSize: "14px",
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        textAlign: "start",
        width: "100%",
        color: theme.palette.text.muted
      }
    },
    "& .list-cinema-nav": {
        maxHeight: "620px",
        overflowY: "auto",
        display: "block",
        flexWrap: "unset",
        "& .tab-pane.active": {
          height: "620px"
        },
        "&:hover": {
          "&::-webkit-scrollbar-track": {
            background: "#E8E3E3",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#C3BFBF",
          },
        },
        "&::-webkit-scrollbar": {
          width: "5px",
        },
        "&::-webkit-scrollbar-track": {
          background: "none",
          borderRadius: "4px"
        },
        "&::-webkit-scrollbar-thumb": {
          background: "none", 
          borderRadius: "4px"
        },
        "& .dropdown-item": {
          transition: "all .1s",
          color: "rgba(0, 0, 0, .8)",
          "&:hover": {
            backgroundColor: "#eee",
          }
        }
    },
    "& .list-cinema-nav-movie": {
      maxHeight: "unset",
      height: "100%",
      position: "relative",
      
    },
    "& .list-cinema-movie": {
      padding: "25px",
      display: "flex",
      position: "relative",
      "&::after": {
        content: "''",
        position: "absolute",
        bottom: "0",
        left: "50%",
        transform: "translateX(-50%)",
        width: "calc(100% - 50px)",
        borderBottom: `1px solid rgba(255, 255, 255, .1)`
      },
      "& .list-cinema-movie-img": {
        width: "90px",
        height: "100px",
        display: "block",
      },
      "& .list-cinema-movie-name": {
        display: "block",
        fontSize: "16px",
        color: theme.palette.text.default,
        textAlign: "center",
      },
      "& .list-cinema-movie-date": {
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        "& .dropdown": {
          marginRight: "6px",
          marginBottom: "10px",
          "&.show .list-cinema-movie-date-day": {
            transform: "translateY(-1px)",
            boxShadow: `1px 1px 8px 1px ${theme.palette.warning.main}`
          },
          "& .list-cinema-movie-date-day": {
            cursor: "pointer",
            padding: "5px",
            fontSize: "16px",
            background: theme.palette.warning.main,
            borderRadius: "3px",
            "&::after": {
              content: "none"
            },
            "&:hover": {
              transform: "translateY(-1px)"
            }
          },
          "& .dropdown-menu": {
            minWidth: "unset"
          }
        },
      }
    }
  },
  shape: {
    position: "absolute",
    zIndex: "-1",
    opacity: "0.02",
    top: "0",
    left: "-200px",
    width: "100%",
    height: "100%"
  }
}));

export default useStyles;