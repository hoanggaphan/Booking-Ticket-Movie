import { makeStyles } from "@material-ui/core/styles";
import dots from "assets/images/dots.png";

const useStyles = makeStyles((theme) => ({
  "@keyframes move-left-right": {
    "0%": {
      transform: "translateX(-10px)",
    },
    "50%": {
      transform: "translateX(10px)",
    },
    "100%": {
      transform: "translateX(-10px)",
    },
  },

  layout: {
    width: "100%",
    minHeight: "100vh",
    overflow: "hidden",

    display: "flex",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",

    backgroundImage: `url('${dots}')`,
    backgroundSize: "contain",

    "& .squares": {
      position: "absolute",
      overflow: "hidden",
      borderRadius: "20%",
      transition: ".5s",

      "&.square1": {
        animation: `$move-left-right 4s infinite`,
        height: "300px",
        width: "300px",
        opacity: "0.5",
        left: "3%",
        top: "-21%",
      },

      "&.square2": {
        animation: `$move-left-right 6s infinite`,
        height: "400px",
        width: "400px",
        opacity: "0.4",
        right: "-5%",
        top: "-12%",
      },

      "&.square3": {
        animation: `$move-left-right 5s infinite`,
        height: "200px",
        width: "200px",
        opacity: "0.1",
        left: "-5%",
        bottom: "0",
      },

      "&.square4": {
        animation: `$move-left-right 10s infinite`,
        height: "100px",
        width: "100px",
        opacity: "0.9",
        right: "27%",
        top: "70%",
      },

      "&.square5": {
        animation: `$move-left-right 6s infinite`,
        height: "250px",
        width: "250px",
        opacity: "0.1",
        left: "32%",
        bottom: "29%",
      },

      "&.square6": {
        animation: `$move-left-right 9s infinite`,
        height: "80px",
        width: "80px",
        opacity: "0.8",
        left: "10%",
        top: "35%",
      },

      "&.square7": {
        animation: `$move-left-right 3s infinite`,
        height: "300px",
        width: "300px",
        opacity: "0.1",
        right: "-5%",
        bottom: "0%",
      },
    },
  },
}));

export default useStyles;
