import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  home__booking: {
    width: "100%",
    maxWidth: "940px",
    display: "none",

    zIndex: "2",
    bottom: "0",
    left: "50%",
    position: "absolute",
    transform: "translate(-50%, 50%)",

    "@media (min-width: 960px)": {
      display: "block",
    },
  },

  home__container: {
    maxWidth: "940px",
    margin: "0 auto",
    marginTop: "20px",

    "@media (min-width: 960px)": {
      marginTop: "70px",
    },
  },

  home__slider: {
    marginBottom: "20px"
  }
}));

export default useStyles;
