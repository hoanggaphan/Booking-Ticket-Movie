import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  detailTitle: {
    width: "35%",
    fontWeight: "500",
    color: theme.palette.text.primary,
  },

  detailInfo: {
    width: "40%",
    paddingLeft: "20px",
    color: theme.palette.text.helper,
  },

  detailContent: {
    color: theme.palette.text.helper,
  },
}));

export default useStyles;
