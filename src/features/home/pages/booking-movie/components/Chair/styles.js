import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  normal: {
    width: "calc(100%/16 - 1%)", // 16 ghế 1 hàng
    paddingTop: "calc(100%/16 - 1%)",
    margin: ".7% .5%",
    backgroundColor: "rgba(255,255,255,.8)",
    borderRadius: "50%",
    cursor: "pointer",
    position: "relative",
  },
  vip: {
    width: "calc(100%/16 - 1%)", // 16 ghế 1 hàng
    paddingTop: "calc(100%/16 - 1%)",
    margin: ".7% .5%",
    backgroundColor: theme.palette.warning.main,
    borderRadius: "50%",
    cursor: "pointer",
    position: "relative",
  },
  selecting: {
    width: "calc(100%/16 - 1%)", // 16 ghế 1 hàng
    paddingTop: "calc(100%/16 - 1%)",
    margin: ".7% .5%",
    backgroundColor: theme.palette.success.main,
    borderRadius: "50%",
    cursor: "pointer",
    position: "relative",
  },
  selected: {
    opacity: ".5",
    cursor: "unset",
  },
  icon: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    height: "100%",
  },
  skeleton: {
    paddingTop: "calc(100%/14 - 1%)",
    margin: ".7% .5%",
  },
}));

export default useStyles;
