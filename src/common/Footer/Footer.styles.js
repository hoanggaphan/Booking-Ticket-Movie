import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    borderTop: `2px solid ${theme.palette.warning.main}`,
    background: theme.palette.background.footer,
    paddingTop: "20px",
    fontSize: "12px",
    "& .footer-container": {
      maxWidth: "940px",
      margin: "0 auto",
      padding: "unset",
      [theme.breakpoints.up("sm")]: {
        padding: "0 15px",
      },
      "& .footer-title": {
        color: theme.palette.text.warning,
        paddingLeft: "15px",
        marginBottom: "16px",
        display: "none",
        [theme.breakpoints.up("sm")]: {
          display: "block",
        },
      },
      "& .footer-link": {
        display: "block",
        color: theme.palette.text.secondary,
        fontWeight: "500",
        textDecoration: "none",
        marginBottom: "16px",
        marginRight: "10px",
        "&:hover": {
          color: theme.palette.text.primary,
        },
      },
      "& .footer-logo": {
        "&:hover": {
          opacity: ".5",
          transition: "all .1s",
        },
        "& img": {
          width: "30px",
          height: "30px",
          backgroundColor: "white",
          borderRadius: "50%",
        },
      },
      "& .footer-bottom": {
        textAlign: "center",
        [theme.breakpoints.up("md")]: {
          textAlign: "start",
        },
        "& .footer-location": {
          padding: "0 15px",
          "& p": {
            marginBottom: "5px",
            color: theme.palette.text.default,
          },
          "& h6": {
            fontSize: "12px",
            [theme.breakpoints.up("sm")]: {
              fontSize: "14px",
            },
          },
        },
      },
    },
  },
  icon: {
    color: "white",
  },
}));

export default useStyles;
