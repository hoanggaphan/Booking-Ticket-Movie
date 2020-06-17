import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .timer-text": {
      fontWeight: "500",
      fontSize: "15px",
      marginBottom: "0",
    },
    "& .timer-num": {
      fontWeight: "500",
      fontSize: "30px",
      color: theme.palette.text.warning,
      textAlign: "center",
    },
  },
  skeleton: {
    margin: "auto",
  },
  iconSnack: {
    color: "white",
    outline: "unset",
  },
}));

export default useStyles;
