import { makeStyles } from "@material-ui/styles";
import backApp from "assets/images/backapp.jpg";

const useStyles = makeStyles((theme) => ({
  // ROOT
  backApp: {
    width: "100%",
    padding: "80px 0",
    marginTop: "35px",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${backApp})`,

    "& div:focus": {
      outline: "none",
    },
  },
  // END ROOT

  wrapper: {
    maxWidth: "940px",
  },

  // LEFT
  backApp__left: {
    display: "flex",
    padding: "0 15px",
    textAlign: "center",
    alignItems: "center",

    "& .left-text": {
      fontSize: "25px",
      fontWeight: "bold",
      "@media (min-width: 960px)": {
        fontSize: "35px",
      },
    },

    "& .left-text-small": {
      fontSize: "16px",
    },

    "& .left-text-under": {
      marginTop: "10px",
      "& a": {
        textDecoration: "underline",
        color: theme.palette.text.primary,
      },
    },

    "& .left-btn": {
      fontWeight: "600",
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.warning.main,
    },

    "@media (min-width: 960px)": {
      textAlign: "start",
    },
  },
  // END LEFT

  // RIGHT
  backApp__right: {
    position: "relative",

    "& .right-img-mobile": {
      width: "100%",
      height: "100%",
      padding: "0 28%",
    },

    "& .right-img-slide": {
      width: "100%",
      height: "100%",
    },

    "& .slick-slider": {
      width: "100%",
      height: "100%",
      padding: "1.5% 29.2% 1.5% 29.2%",

      top: "0",
      left: "0",
      overflow: "hidden",
      position: "absolute",

      "& .slick-list": {
        borderRadius: "20px",
        overflow: "hidden",
        cursor: "pointer",

        "@media (min-width: 600px)": {
          borderRadius: "40px",
        },

        "@media (min-width: 960px)": {
          borderRadius: "20px",
        },
      },

      "& div": {
        width: "100%",
        height: "100%",
      },
    },
  },
  // END RIGHT
}));

export default useStyles;
