import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  gridItem: {
    padding: "0 7px",
    marginBottom: "20px",

    "@media (min-width: 600px)": {
      "&:nth-child(8n + 2)": {
        width: "50%",
      },
    },
  },

  gridItemSmall: {
    padding: "0 7px",

    "&:nth-child(8n + 8)": {
      marginBottom: "20px",
    },
  },

  thumnail__general: {
    width: "100%",
    height: "auto",
    borderRadius: "4px",
    overflow: "hidden",

    paddingTop: "50%",
    marginBottom: "10px",
    position: "relative",
    backgroundColor: theme.palette.img.placeholder,
    cursor: "pointer",

    "& img": {
      width: "100%",
      height: "100%",
      position: "absolute",
      top: "0",
      left: "0",
    },
  },

  thumnail__small: {
    width: "50px",
    minWidth: "50px",
    height: "50px",
    margin: "0 10px 10px 0",

    borderRadius: "4px",
    overflow: "hidden",
    cursor: "pointer",
    backgroundColor: theme.palette.img.placeholder,

    "& img": {
      width: "100%",
      height: "100%",
    },
  },

  title: {
    height: "42px",
    marginBottom: "5px",

    display: "box",
    lineClamp: "2",
    overflow: "hidden",
    boxOrient: "vertical",
    textOverflow: "ellipsis",

    fontSize: "16px",
    lineHeight: "20px",

    color: theme.palette.text.primary,
    transition: "color .2s",
    cursor: "pointer",

    "&:hover": {
      color: theme.palette.text.secondary,
    },
  },

  description: {
    height: "55px",
    marginBottom: "15px",
    paddingRight: "5px",

    textAlign: "justify",
    fontSize: "13px",
    lineHeight: "19px",
    color: theme.palette.text.helper,

    display: "box",
    lineClamp: "3",
    overflow: "hidden",
    boxOrient: "vertical",
    textOverflow: "ellipsis",
  },

  button: {
    padding: "10px 20px",
    display: "inline-block",
    color: theme.palette.text.primary,

    border: "1px solid white",
    borderRadius: "4px",
    cursor: "pointer",
  },

  floatLeft: {
    float: "left",
  },

  clear: {
    clear: "both",
  },
}));

export default useStyles;
