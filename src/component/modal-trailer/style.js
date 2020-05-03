import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  modalTrailer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    "& .modal-trailer-wrap": {
      position: "relative",
      outline: "none",
      backgroundColor: "black",
      display: "none",
      "@media (min-width: 600px)": {
        display: "block",
        width: "600px",
        height: "calc(600px * 9/16)",
      },
      "@media (min-width: 960px)": {
        display: "block",
        width: "900px",
        height: "calc(900px * 9/16)",
      }
    },
    "& .modal-trailer-close-icon": {
      position: "absolute",
      right: "-30px",
      top: "-30px",
      "&:focus": {
        outline: "none"
      }
    }
  },
  trailerNull: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "100%",
    bgcolor: "rgba(0 ,0 ,0 , .9)",
    position: "relative",
    "& .movie-error-link": {
      textDecoration: "underline",
      "&:hover": {
        color: "unset"
      }
    },
  },
  iconError: {
    fontSize: "100px"
  },
  iconYoutube: {
    fontSize: "60px"
  },
  Highlight: {
    fontSize: "40px"
  },
}));

export default useStyles;
