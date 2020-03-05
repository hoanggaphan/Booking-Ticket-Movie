import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

export const MainButton = withStyles(theme => ({
    root: {
      // color: theme.palette.secondary.contrastText,
      backgroundColor: theme.palette.secondary.main,
      padding: "8px 40px",
      '&:hover': {
        backgroundColor: theme.palette.secondary.dark,
      },
    },
  }))(Button);