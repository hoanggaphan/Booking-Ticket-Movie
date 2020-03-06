import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  iconClose: {
    "&:focus": {
      outline: "none"
    }
  }
}));

export default useStyles;