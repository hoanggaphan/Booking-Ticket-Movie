import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  // MOVIE LIST HEAD
  ListSlider__head: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    position: "relative",
    margin: "0 5px",
    marginBottom: "10px",

    borderBottom: "1px solid rgba(255, 255, 255, .1)",

    "@media (min-width: 360px)": {
      marginBottom: "20px",
    },
  },

  ListSlider__title: {
    position: "relative",
    color: theme.palette.text.primary,
    paddingBottom: "5px",

    fontSize: "18px",
    fontWeight: "500",
    textTransform: "capitalize",

    "@media (min-width: 360px)": {
      fontSize: "22px",
    },

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
