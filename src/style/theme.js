import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: { // color violet
      main: "#e14eca",
    },
    default: { // dark light
      main: "#344670",
    },
    info: { // color blue
      main: "#1d8cf8",
    },
    success: { // color green
      main: "#00f2c3",
    },
    warning: { // color orange
      main: "#ff8d72",
    },
    danger: { // color red
      main: "#fd5d93",
    },
    button: {
      default: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      blue: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    },
    typography: {
      h1: {
        fontSize: '2.0625rem'
      },
      h2: {
        fontSize: '1.6875rem'
      },
      h3: {
        fontSize: '1.4375rem'
      },
      h4: {
        fontSize: '1.0625rem'
      },
      h5: {
        fontSize: '.8125rem'
      },
      h6: {
        fontSize: '.75rem'
      }
    },
    background: {
      default: "#171940", // color blue black
      paper: "#1f2251"
    },
    text: {
      primary: "rgba(255, 255, 255, 1)",
      secondary: "rgba(255, 255, 255, .5)",
    }
  }
});

export default theme;
