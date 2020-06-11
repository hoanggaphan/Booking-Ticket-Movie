import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  movieList__title: {
    borderBottom: "1px solid rgba(255, 255, 255, .1)",
    margin: "0 5px 20px",

    "& > a": {
      position: "relative",
      color: theme.palette.text.primary,

      fontSize: "22px",
      fontWeight: "500",
      lineHeight: "1",
      textTransform: "uppercase",

      "&:hover": {
        textDecoration: "none",
        color: theme.palette.text.primary,
      },

      "&::after": {
        height: "1px",
        width: "100%",
        background: (props) => theme.palette[props.color].main,
        boxShadow: (props) => `0 0 15px 3px ${theme.palette[props.color].main}`,

        left: "0",
        bottom: "0",
        content: "''",
        position: "absolute",
      },
    },
  },

  movieList__container: {
    display: "flex",
    flexWrap: "wrap",
  },
}));

export default useStyles;
