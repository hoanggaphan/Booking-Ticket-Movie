import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => {
  return {
    root: (props) => ({
      display: "inline-block",
      fontSize: props.fontSize ? props.fontSize : "14px",
      fontWeight: "500",
      minWidth: "30px",
      padding: "0 5px",
      borderRadius: "5px",
      backgroundColor: props.color ? theme.palette[props.color].main : theme.palette.warning.main,
      textAlign: "center",
      color: theme.palette.text.primary
    })
  };
});

export default useStyles;
