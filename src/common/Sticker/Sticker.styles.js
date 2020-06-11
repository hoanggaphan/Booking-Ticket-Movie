import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  return {
    sticker: {
      padding: "0 5px",
      borderRadius: "5px",
      display: "inline-block",

      lineHeight: "22px",
      fontWeight: "500",
      textAlign: "center",
      fontSize: "12px",

      color: theme.palette.text.primary,
      backgroundColor: (props) => theme.palette[props.color].main,

      "@media (min-width: 600px)": {
        fontSize: (props) => props.fontSize,
      }
    },
  };
});

export default useStyles;
