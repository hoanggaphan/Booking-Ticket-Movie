import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  movie: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflow: "hidden",
    padding: "0 10px",
    width: "50%",
    [theme.breakpoints.up("sm")]: {
      width: "100%"
    },
    "& button": {
      outline: "none"
    },
    "&:hover": {
      cursor: "pointer",

      "& .movie-overplay": {
        visibility: "visible",
        opacity: "1",
      },

      "& .movie-play-btn": {
        visibility: "visible",
        opacity: "1",
      },
      "& .movie-name .movie-book-btn": {
        visibility: "visible",
        opacity: "1",
      }
    },

    "& .movie-background": {
      width: "100%",
      height: "auto",
      position: "relative",
      paddingTop: "150%",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      borderRadius: "10px",
      overflow: "hidden",
      marginBottom: "20px",
      [theme.breakpoints.up("sm")]: {
        marginBottom: "0px",
      },
      "& .movie-starpoint": {
        position: "absolute",
        top: "5px",
        right: "5px",
        display: "flex",
        flexDirection: "column",
        width: "75px",
        backgroundColor: "rgba(12,27,54,.8)",
        border: "1px solid #1f2e46",
        borderRadius: "4px",
        textAlign: "center",
        "& span": {
          color: "white",
          lineHeight: "1",
          textAlign: "center",
          fontSize: "18px",
          marginTop: "10px"
        },
        [theme.breakpoints.up("sm")]: {
            width: "60px",
          "& span": {
            fontSize: "16px",
            marginTop: "5px"
          },
          "& .widget-svg": {
            width: "10px!important",
            height: "10px!important"
          }
        },
        [theme.breakpoints.up("md")]: {
          width: "75px",
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

      "& .movie-overplay": {
        visibility: "hidden",
        opacity: "0",
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        background: "linear-gradient(to top,#000,transparent 100%)",
        cursor: "pointer",
        transition: "all .3s",
        display: "none",
        [theme.breakpoints.up('sm')]: {
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
        [theme.breakpoints.up('sm')]: {
          display: "block"
        }
      },
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
        backgroundColor: theme.palette.info.main,
        transition: "all .3s",
        "&:hover": {
          backgroundColor: theme.palette.info.light,
          color: theme.palette.info.contrastText
        }
      }
    }
  }
}));

export default useStyles;
