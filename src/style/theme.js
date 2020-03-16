import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: { // color violet
      light: "#e771d4",
      main: "#e14eca",
      dark: "#9d368d",
      contrastText: "#fff"
    },
    secondary: { // dark light
      main: "#1F2251",
    },
    info: { // color blue
      light: "#4aa3f9",
      main: "#1d8cf8",
      dark: "#1462ad",
      contrastText: "#fff"
    },
    success: { // color green
      light: "#4aa3f9",
      main: "#00bf9a",
      dark: "#1462ad",
      contrastText: "#fff"
    },
    warning: { // color orange
      light: "#ffa38e",
      main: "#ff8d72",
      dark: "#b2624f",
      contrastText: "#fff"
    },
    danger: { // color red
      light: "#fd7da8",
      main: "#fd5d93",
      dark: "#b14166",
      contrastText: "#fff"
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
      paper: ""
    },
    text: {
      primary: "rgba(255, 255, 255, 1)",
      secondary: "rgba(255, 255, 255, .5)",
    }
  }
});

export default theme;
