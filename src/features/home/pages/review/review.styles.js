import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  content: {
    color: theme.palette.text.default,
    fontSize: "16px",
    maxWidth: "860px",

    "& img": {
      maxWidth: "100%"
    },

    "& a": {
      color: theme.palette.info.main,

      "&:hover": {
        color: theme.palette.info.main,
        textDecoration: "none",
      },
    },

    "& p": {
      margin: "20px auto 0",
      maxWidth: "720px",
    },
  },

  title: {
    maxWidth: "800px",
    margin: "50px auto",
    color: theme.palette.text.primary,

    textAlign: "center",
    fontSize: "48px",
    fontWeight: "400",
  },
}));

export default useStyles;
