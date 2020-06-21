import { createMuiTheme } from "@material-ui/core/styles";
import { viVN } from '@material-ui/core/locale';

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        a: {
          "&:hover": {
            color: "inherit",
            userDrag: "none",
          },
          "&:focus": {
            outline: "none",
          },
        },

        "div:focus, button:focus": {
          outline: "none",
        },

        img: {
          userDrag: "none",
        },
      },
    },
  },

  palette: {
    type: "dark",
    default: {
      // dark
      main: "#344670",
    },
    primary: {
      // violet
      main: "#e14eca",
    },
    info: {
      // blue
      main: "#1d8cf8",
    },
    success: {
      // green
      main: "#00f2c3",
    },
    warning: {
      // orange
      main: "#ff8d72",
    },
    danger: {
      // red
      main: "#fd5d93",
    },

    button: {
      default: "linear-gradient(to bottom left,#344675,#263148,#344675)",
      primary: "linear-gradient(to bottom left,#e14eca,#ba54f5,#e14eca)",
      info: "linear-gradient(to bottom left,#1d8cf8,#3358f4,#1d8cf8)",
      success:
        "linear-gradient(to bottom left,#00f2c3,#0098f0,#00f2c3)!important",
      warning: "linear-gradient(to bottom left,#ff8d72,#ff6491,#ff8d72)",
      danger:
        "linear-gradient(to bottom left,#fd5d93,#ec250d,#fd5d93)!important",
    },

    squares: {
      primary: "linear-gradient(0deg,#ba54f5,#e14eca)",
      warning: "linear-gradient(0deg,#ff6491,#ff8d72)",
      info: "linear-gradient(0deg,#3358f4,#1d8cf8)",
    },

    background: {
      default: "#171940", // dark black
      paper: "#1f2251", // light black
      footer: "radial-gradient(ellipse at bottom,#292d61 30%,#171941 80%)",
    },

    text: {
      default: "hsla(0,0%,100%,.8)",
      muted: "#6c757d",
      primary: "rgba(255, 255, 255)",
      secondary: "rgba(255, 255, 255, .5)",
      helper: "rgba(255, 255, 255, .7)",
      info: "#1d8cf8",
      success: "#00f2c3",
      warning: "#ff8d72",
      danger: "#fd5d93",
    },
  },
}, viVN);

export default theme;
