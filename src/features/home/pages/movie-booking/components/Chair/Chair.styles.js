import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  normal: {
    borderRadius: "50%",
    width: "calc(100%/16 - 1%)", // 16 ghế 1 hàng
    backgroundColor: "rgba(255,255,255,.8)",

    margin: ".7% .5%",
    paddingTop: "calc(100%/16 - 1%)",

    cursor: "pointer",
    position: "relative",
  },

  vip: {
    width: "calc(100%/16 - 1%)", // 16 ghế 1 hàng
    borderRadius: "50%",
    backgroundColor: theme.palette.warning.main,

    margin: ".7% .5%",
    paddingTop: "calc(100%/16 - 1%)",
    
    cursor: "pointer",
    position: "relative",
  },

  selecting: {
    width: "calc(100%/16 - 1%)", // 16 ghế 1 hàng
    borderRadius: "50%",

    margin: ".7% .5%",
    position: "relative",
    paddingTop: "calc(100%/16 - 1%)",

    cursor: "pointer",
    backgroundColor: theme.palette.success.main,
  },

  selected: {
    opacity: ".5",
    cursor: "unset",
  },

  icon: {
    width: "100%",
    height: "100%",

    left: "50%",
    top: "50%",
    position: "absolute",
    transform: "translate(-50%, -50%)",
  },

  skeleton: {
    margin: ".7% .5%",
    paddingTop: "calc(100%/14 - 1%)",
  },
}));

export default useStyles;
