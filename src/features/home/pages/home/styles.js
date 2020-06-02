import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  booking: {
    transform: "translate(-50%, 50%)",
    zIndex: "2",
    position: "absolute",
    maxWidth: "940px",
    width: "100%",
    bottom: "0",
    left: "50%",
  },
}));

export default useStyles;
