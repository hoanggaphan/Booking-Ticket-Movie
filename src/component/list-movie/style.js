import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  tabs: {
    justifyContent: "center",
    borderBottom: "unset",
    alignItems: "center",
    "& .nav-link": {
      fontSize: "16px",
      border: "none",
      color: theme.palette.text.secondary,
      transition: "all .2s",
      "&.active": {
        backgroundColor: "unset",
        border: "none",
        color: theme.palette.text.primary,
        fontSize: "20px",
      },
      "&:hover": {
        border: "none",
        fontSize: "20px",
      },
      "&:focus": {
        outline: "none"
      }
    }
  }
}));

export default useStyles;
