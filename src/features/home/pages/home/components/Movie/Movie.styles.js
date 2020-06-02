import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  // ROOT
  card: {
    width: "50%",
    padding: "0 5px",
    overflow: "hidden",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    "& button": {
      outline: "none",
    },

    "&:hover": {
      cursor: "pointer",
      "& $body__overplay, $body__playButton, $footer__bookButton": {
        opacity: "1",
        visibility: "visible",
      },
    },

    "@media (min-width: 400px)": {
      width: "calc(100% / 3)",
    },

    "@media (min-width: 600px)": {
      width: "25%",
    },

    "@media (min-width: 1080px)": {
      width: "25%",
      padding: "0 10px",
    },
  },
  // END ROOT

  // BODY
  body: {
    width: "100%",
    height: "100%",
    borderRadius: "5px",

    position: "relative",
    marginBottom: "10px",
    overflow: "hidden",

    "@media (min-width: 600px)": {
      marginBottom: "0px",
    },
  },

  body__background: {
    width: "100%",
    height: "auto",
    paddingTop: "150%",

    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundImage: ({ hinhAnh }) => (hinhAnh ? `url(${hinhAnh})` : ""),
  },

  body__age: {
    position: "absolute",
    top: "10px",
    left: "10px",
  },

  body__starPoint: {
    width: "54px",
    borderRadius: "4px",
    border: "1px solid #1f2e46",

    top: "10px",
    right: "10px",
    padding: "2px",
    position: "absolute",

    backgroundColor: "rgba(12,27,54,.8)",

    "& p": {
      margin: "0",
      color: theme.palette.text.primary,

      lineHeight: "1",
      fontSize: "16px",
      textAlign: "center",
    },

    "@media (max-width: 600px)": {
      top: "unset",
      bottom: "10px",
    },
  },

  body__date: {
    padding: "5px 10px",
    borderRadius: "4px",
    border: "1px solid #1f2e46",

    right: "5px",
    bottom: "5px",
    position: "absolute",

    lineHeight: "1.6",
    textAlign: "center",

    color: theme.palette.text.primary,
    backgroundColor: "rgba(12,27,54,.8)",

    "& span": {
      fontSize: "16px",
    },

    "@media (min-width: 600px)": {
      top: "5px",
      bottom: "unset",

      "& span": {
        fontSize: "18px",
      },
    },
  },

  body__overplay: {
    width: "100%",
    height: "100%",

    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    position: "absolute",

    opacity: "0",
    display: "none",
    cursor: "pointer",
    visibility: "hidden",
    transition: "all .2s",

    background: "linear-gradient(to top,#000,transparent 100%)",

    "@media (min-width: 600px)": {
      display: "block",
    },
  },

  body__playButton: {
    top: "50%",
    left: "50%",
    zIndex: "3",
    position: "absolute",

    opacity: "0",
    display: "none",
    visibility: "hidden",
    transition: "all .2s",
    transform: "translate(-50%, -50%)",

    "& svg": {
      fontSize: "60px",
    },

    "@media (min-width: 600px)": {
      display: "block",
    },
  },
  // END BODY

  // CARD FOOTER
  footer: {
    width: "100%",
    textAlign: "center",
    position: "relative",
    margin: "10px 0 30px 0",

    "& > h4": {
      width: "100%",
      maxHeight: "44px",

      fontSize: "20px",
      fontWeight: "500",
      textAlign: "center",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",

      overflow: "hidden",
      color: theme.palette.text.default,
    },

    "& > span": {
      color: theme.palette.text.muted,
      fontWeight: "400",
    },
  },

  footer__bookButton: {
    width: "100%",
    height: "100%",
    top: "0",
    left: "0",

    opacity: "0",
    visibility: "hidden",
    position: "absolute",

    color: "white",
    backgroundSize: "210% 210%",
    backgroundPosition: "100% 0",
    background: theme.palette.button.warning,
  },
}));

export default useStyles;
