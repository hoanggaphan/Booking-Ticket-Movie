import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    default: { // dark 
      main: "#344670",
    },
    primary: { // violet
      main: "#e14eca",
    },
    info: { // blue
      main: "#1d8cf8",
    },
    success: { // green
      main: "#00f2c3",
    },
    warning: { // orange
      main: "#ff8d72",
    },
    danger: { // red
      main: "#fd5d93",
    },
    button: {
      default: "linear-gradient(to bottom left,#344675,#263148,#344675)",
      primary: "linear-gradient(to bottom left,#e14eca,#ba54f5,#e14eca)",
      info: 'linear-gradient(to bottom left,#1d8cf8,#3358f4,#1d8cf8)',
      success: "linear-gradient(to bottom left,#00f2c3,#0098f0,#00f2c3)!important",
      warning: 'linear-gradient(to bottom left,#ff8d72,#ff6491,#ff8d72)',
      danger: "linear-gradient(to bottom left,#fd5d93,#ec250d,#fd5d93)!important",
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
      default: "#171940", // dark black
      paper: "#1f2251", // light black
      footer: "radial-gradient(ellipse at bottom,#292d61 30%,#171941 80%)",
    },
    text: {
      default: "hsla(0,0%,100%,.8)",
      primary: "rgba(255, 255, 255)",
      secondary: "rgba(255, 255, 255, .5)",
      muted: "#6c757d",
      info: '#1d8cf8',
      success: "#00f2c3",
      warning: '#ff8d72',
      danger: "#fd5d93",
    }
  }
});

export default theme;
