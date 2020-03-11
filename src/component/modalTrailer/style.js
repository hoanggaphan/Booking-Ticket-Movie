import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  modalTrailer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& .modal-trailer-wrap": {
      position: "relative",
      width: "60%",
      height: "60%",
      outline: "none",
      backgroundColor: "black"
    },
    "& .modal-trailer-close-icon": {
      position: "absolute",
      right: "-30px",
      top: "-30px",
      "&:focus": {
        outline: "none"
      }
    }
  }
}));

export default useStyles;
