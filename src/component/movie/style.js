import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  movie: props => ( {
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
      width: "25%",
      padding: "0 10px",
    },
    "&:hover": {
      cursor: "pointer",
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
      borderRadius: "5px",
      marginBottom: "10px",
      position: "relative",
      [theme.breakpoints.up("sm")]: {
        marginBottom: "0px"
      },
      "& .movie-age": {
        position: "absolute",
        top: "10px",
        left: "10px",
      },
      "& .movie-background": {
        width: "100%",
        height: "auto",
        paddingTop: "150%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundImage: props.hinhAnh ? `url(${props.hinhAnh})` : ""
      },
      "& .movie-background-err": {
        backgroundImage: 'url("images/load-error.jpg")'
      },
      "& .movie-starpoint": {
        position: "absolute",
        top: "10px",
        right: "10px", 
        backgroundColor: "rgba(12,27,54,.8)",
        border: "1px solid #1f2e46",
        borderRadius: "4px",
        width: "54px",
        padding: "2px",
        "& p": {
          lineHeight: "1",
          fontSize: "16px",
          color: theme.palette.text.primary,
          textAlign: "center",
          margin: "0"
        },
        "@media (max-width: 600px)": {
          bottom: "10px",
          top: "unset"
        }
      },
      "& .movie-date": {
        lineHeight: "1.6",
        color: theme.palette.text.primary,
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
        transition: "all .2s",
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
        transition: "all .2s",
        display: "none",
        "& svg": {
          fontSize: "60px"
        },
        [theme.breakpoints.up("sm")]: {
          display: "block"
        }
      },
      
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
        color: theme.palette.text.default,
        width: "100%",
        maxHeight: "44px",
        fontSize: "20px",
        textAlign: "center",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        overflow: "hidden",
        fontWeight: "500"
      },
      "& > span": {
        color: theme.palette.text.muted,
        fontWeight: "400"
      },

      "& .movie-book-btn": {
        visibility: "hidden",
        opacity: "0",
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        color: "white",
        background: theme.palette.button.warning,
        backgroundPosition: "100% 0",
        backgroundSize: "210% 210%"
      }
    }
  })
}));

export default useStyles;
