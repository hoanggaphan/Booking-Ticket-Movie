import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  search: {
    width: "unset",
    "& .form-control": {
      border: "1px solid rgba(255, 255, 255, .1)",
      backgroundColor: "#1F2251",
      borderRight: "none",
      color: "white",
      transition: "all .3s",
      "&:focus": {
        outline: "none",
        borderRight: "none",
        border: "1px solid #0089d0",
        backgroundColor: "#1F2251",
        boxShadow: "none",
        "& + .input-group-append .input-group-text": {
          border: "1px solid #0089d0",
          borderLeft: "none"
        }
      }
    },
    "& .input-group-append": {
      marginLeft: "0px"
    },
    "& .input-group-text": {
      borderLeft: "none",
      border: "1px solid rgba(255, 255, 255, .05)",
      backgroundColor: "#1F2251",
      color: "white",
      transition: "all .3s",
    },
  }
}));

export default useStyles;
