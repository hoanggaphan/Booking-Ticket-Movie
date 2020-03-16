import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  movieError: {
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
  }
});

export default useStyles;
