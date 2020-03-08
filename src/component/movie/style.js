import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  movie: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflow: "hidden",
    padding: "0 10px",
    "&:hover": {
      cursor: "pointer",
      "& .movie-overplay": {
        visibility: "visible"
      },
      "& .movie-book-btn": {
        visibility: "visible"
      },
      "& .movie-img": {
        transform: "scale(1.1)"
      }
    },

    "& .movie-img": {
      width: "100%",
      height: "300px",
      borderRadius: "10px",
      transition: "all 0.3s",
      "&:focus": {
        outline: "none"
      },
      [theme.breakpoints.up("md")]: {
        height: "350px"
      }
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
        lineHeight: "1",
        textAlign: "center",
        fontSize: "18px",
        marginTop: "10px"
      }
    },

    "& .movie-overplay": {
      borderRadius: "10px",
      visibility: "hidden",
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      display: "flex",
      flexFlow: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(to top,#000,transparent 100%)",
      cursor: "pointer",
      "& button": {
        outline: "none"
      },
      "& .movie-book-btn": {
        visibility: "hidden",
        marginTop: "50px",
        color: theme.palette.info.contrastText,
        backgroundColor: theme.palette.info.main,
        "&:hover": {
          backgroundColor: theme.palette.info.light,
          color: theme.palette.info.contrastText
        }
      },
      "& .movie-play-icon": {
        fontSize: "75px"
      }
    },
    
    "& .movie-name": {
      margin: "5px 0 20px 0",
      textAlign: "center",
      "& h4": {
        width: "100%",
        maxHeight: "44px",
        fontSize: "20px",
        textAlign: "center",
        fontWeight: "400"
      },
      "& span": {
        color: theme.palette.text.secondary
      }
    }
  }
}));

export default useStyles;
