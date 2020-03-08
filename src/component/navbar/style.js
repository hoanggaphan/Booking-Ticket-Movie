import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles(theme => ({
  header: {
    backgroundColor: "rgb(23,25,64)",
    boxShadow: "0 0 15px 10px rgb(23,25,64)",
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
      color: "rgba(255, 255, 255, .7)",
      "&:hover": {
        color: "rgba(255, 255, 255)"
      },
      "@media (max-width: 700px)": {
        margin: "5px"
      }
    },

    "& .header-navLink-active": {
      color: "rgba(255, 255, 255)"
    },

    "& .header-login": {
      color: "rgba(255, 255, 255, .7)",
      "&:hover": {
        color: "rgba(255, 255, 255)"
      }
    }
  }
}));

export default useStyle;
