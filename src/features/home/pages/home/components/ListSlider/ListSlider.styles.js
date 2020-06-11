import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  // MOVIE LIST HEAD
  ListSlider__head: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    position: "relative",
    margin: "0 5px 20px",

    "&::before": {
      height: "1px",
      width: "100%",
      background: "rgba(255, 255, 255, .1)",

      left: "0",
      bottom: "-1px",
      content: "''",
      position: "absolute",
      //   },
    },
  },

  ListSlider__title: {
    position: "relative",
    color: theme.palette.text.primary,

    fontSize: "22px",
    fontWeight: "500",

    "&::before": {
      height: "1px",
      width: "100%",
      background: (props) => theme.palette[props.color].main,
      boxShadow: (props) => `0 0 15px 3px ${theme.palette[props.color].main}`,

      left: "0",
      bottom: "-1px",
      content: "''",
      position: "absolute",
    },
  },

  ListSlider__controls: {
    "& button": {
      padding: "0",
      marginLeft: "10px",

      "&:focus": {
        outline: "none",
      },
    },

    "& svg": {
      fontSize: "30px",
    },
  },
  //   END MOVIE LIST HEAD
}));

export default useStyles;
