import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  movie: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflow: "hidden",
    padding: "0 5px",
    width: "50%",
    "@media (min-width: 400px)": {
      width: "calc(100% / 3)",
    },
    "@media (min-width: 600px)": {
      width: "25%",
    },
    "@media (min-width: 1080px)": {
      width: "100%",
      padding: "0 10px",
    },
    "&:hover": {
      cursor: "pointer",
      "& .movie-wrapper .movie-background": {
        transform: "scale(1.1)",
      },
      "& .movie-wrapper .movie-overplay": {
        visibility: "visible",
        opacity: "1"
      },

      "& .movie-wrapper .movie-play-btn": {
        visibility: "visible",
        opacity: "1"
      },
      "& .movie-name .movie-book-btn": {
        visibility: "visible",
        opacity: "1"
      }
    },
    "& .movie-wrapper": {
      width: "100%",
      height: "100%",
      overflow: "hidden",
      borderRadius: "10px",
      marginBottom: "10px",
      position: "relative",
      [theme.breakpoints.up("sm")]: {
        marginBottom: "0px"
      },
      "& .movie-background": {
        width: "100%",
        height: "auto",
        paddingTop: "150%",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        transition: "all .3s",
      },
      "& .movie-starpoint": {
        position: "absolute",
        bottom: "5px",
        right: "5px", 
        display: "flex",
        flexDirection: "column",
        backgroundColor: "rgba(12,27,54,.8)",
        border: "1px solid #1f2e46",
        borderRadius: "4px",
        textAlign: "center",
        width: "60px",
        "& span": {
          lineHeight: "1",
          fontSize: "16px",
          marginTop: "5px"
        },
        "& .widget-svg": {
          width: "10px!important",
          height: "10px!important"
        },
        [theme.breakpoints.up("md")]: {
          width: "75px",
          top: "5px",
          bottom: "unset",
          "& span": {
            fontSize: "18px",
            marginTop: "10px"
          },
          "& .widget-svg": {
            width: "12px!important",
            height: "12px!important"
          }
        }
      },
      "& .movie-date": {
        position: "absolute",
        bottom: "5px",
        right: "5px",
        backgroundColor: "rgba(12,27,54,.8)",
        border: "1px solid #1f2e46",
        borderRadius: "4px",
        textAlign: "center",
        padding: "5px 10px",
        "& span": {
          fontSize: "16px",
        },
        [theme.breakpoints.up("md")]: {
          top: "5px",
          bottom: "unset",
          "& span": {
            fontSize: "18px",
          },
        }
      },
      "& .movie-overplay": {
        visibility: "hidden",
        opacity: "0",
        position: "absolute",
        top: "0",
        left: "0",
        bottom: "0",
        right: "0",
        width: "100%",
        height: "100%",
        background: "linear-gradient(to top,#000,transparent 100%)",
        cursor: "pointer",
        transition: "all .3s",
        display: "none",
        [theme.breakpoints.up("sm")]: {
          display: "block"
        }
      },

      "& .movie-play-btn": {
        visibility: "hidden",
        opacity: "0",
        position: "absolute",
        zIndex: "3",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        transition: "all .3s",
        display: "none",
        "& svg": {
          fontSize: "75px"
        },
        [theme.breakpoints.up("sm")]: {
          display: "block"
        }
      }
    },
    "& button": {
      outline: "none"
    },

    "& .movie-name": {
      width: "100%",
      position: "relative",
      margin: "10px 0 30px 0",
      textAlign: "center",
      "& > h4": {
        width: "100%",
        maxHeight: "44px",
        fontSize: "20px",
        textAlign: "center",
        fontWeight: "400",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        overflow: "hidden"
      },
      "& > span": {
        color: theme.palette.text.secondary
      },

      "& .movie-book-btn": {
        visibility: "hidden",
        opacity: "0",
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        color: theme.palette.info.contrastText,
        background: theme.palette.info.main,
        "&:hover": {
          background: theme.palette.info.dark
        }
      }
    }
  }
}));

export default useStyles;
