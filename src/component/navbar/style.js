import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles(theme => ({
  header: {
    backgroundColor: "rgb(23,25,64)",
    position: "fixed",
    height: "65px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "unset",
    padding: "0 1%",

    "& button:focus": {
      outline: "none"
    },

    "& .header-navLink": {
      margin: "10px",
      color: theme.palette.text.primary,
      "@media (max-width: 700px)": {
        margin: "4px"
      }
    },

    "& .header-navLink-active": {
      color: "white",
    },

    "& .header-login": {
      color: theme.palette.text.default,
    },
    "& .header-hamburger-btn": {
      
    }
  }
}));

export default useStyle;
