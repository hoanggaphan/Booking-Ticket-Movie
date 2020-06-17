import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  // MOVIE
  movie: {
    width: "100%",
    height: "100%",
    padding: "0 5px",

    position: "relative",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",

    "& a": {
      width: "100%",
      height: "100%",
      textDecoration: "none",
    },

    "@media (min-width: 720px)": {
      padding: "0 10px"
    }
  },
  // END MOVIE

  // MOVIE BACKGROUND
  movie__thumbnail: {
    width: "100%",
    paddingTop: "150%",
    height: "auto",

    borderRadius: "4px",
    overflow: "hidden",
    position: "relative",
    backgroundColor: theme.palette.background.paper,

    "&:hover $movie__overplay": {
      opacity: "1",
    },
  },

  movie__img: {
    width: "100%",
    height: "100%",
    
    position: "absolute",
    top: "0",
    left: "0"
  },

  movie__date: {
    position: "absolute",
    top: "10px",
    left: "10px",
  },

  movie__overplay: {
    width: "100%",
    height: "100%",

    display: "none",
    alignItems: "center",
    justifyContent: "center",

    top: "0",
    left: "0",
    position: "absolute",

    opacity: "0",
    transition: "opacity .3s",
    backgroundColor: "rgba(0, 0, 0, .7)",

    "@media (min-width: 360px)": {
      display: "flex",
    },

    "& .MuiButton-outlined": {
      borderColor: "rgba(255, 255, 255, .7)"
    }
  },
  // END MOVIE BACKGROUND

  // MOVIE TITLE
  movie__title: {
    width: "100%",
    maxHeight: "40px",
    minHeight: "40px",
    margin: "5px 0",

    fontSize: "16px",
    fontWeight: "400",
    textAlign: "center",
    textTransform: 'capitalize',

    display: "box",
    lineClamp: "2",
    boxOrient: "vertical",  
    overflow: "hidden",

    color: theme.palette.text.default,

    "@media (min-width: 600px)": {
      margin: "10px 0",
    },
  },
  // END FOOTER
}));

export default useStyles;
