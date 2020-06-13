import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  types: {
    borderRadius: "5px",
    border: '1px solid rgba(255,255,255,.2)',

    display: "flex",
    flexWrap: "wrap",
    marginTop: "20px",
    justifyContent: "space-around",
    
    fontSize: "14px",

    "& .type-box": {
      width: "120px",

      margin: "5px",
      display: "flex",
      flexDirection: " column",
      alignItems: "center",

      fontSize: "13px",
      textAlign: "center",
      color: theme.palette.text.default,

      [theme.breakpoints.up("sm")]: {
        margin: "10px",
        width: "140px",
      },

      "& .type": {
        width: "25px",
        height: "25px",
        borderRadius: "50%",
      },

      "& .normal": {
        backgroundColor: "rgba(255,255,255, .8)",
      },

      "& .normal-selected": {
        backgroundColor: "rgba(255,255,255, .8)",
        opacity: ".5"
      },

      "& .selecting": {
        backgroundColor: theme.palette.success.main,
      },

      "& .vip": {
        backgroundColor: theme.palette.warning.main,
      },

      "& .vip-selected": {
        backgroundColor: theme.palette.warning.main,
        opacity: ".5"
      },

      "& .selecting-other": {
        backgroundColor: theme.palette.secondary.main
      },

    }
  },

  nextBtn: {
    outline: "none!important",
    backgroundColor: theme.palette.default.main,
    color: "white",

    "&:hover": {
      transform: "translateY(-1px)",
      backgroundColor: theme.palette.default.main,
    },
    
    "&:active": {
      transform: "translateY(1px)"
    }
  },
}));

export default useStyles;
