import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "1140px",
    margin: "auto",
    "& .form-submit": {
      display: "flex",
      flexWrap: "wrap",
      color: theme.palette.text.secondary,
      "& .form-group": {
        width: "100%",
        marginBottom: "unset",
        padding: "0 10px",
        [theme.breakpoints.up("sm")]: {
          width: "50%",
        },
        "& .form-control": {
          color: theme.palette.text.default,
          backgroundColor: `${theme.palette.background.default}!important`,
          borderColor: "rgba(255,255,255,.2)",
          boxShadow: "none",
          transition: "border-color .2s",
          "&:focus": {
            borderColor: theme.palette.info.main,
          }
        },
        "& .form-disabled": {
          opacity: ".5", 
          cursor: "not-allowed",
          "&:focus": {
            borderColor: "none!important",
          }
        },
        "& .text-muted": {
          color: `${theme.palette.text.danger}!important`,
          height: "16px",
          paddingLeft: "10px"
        }
      },
      "& .form-btn": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        [theme.breakpoints.up("sm")]: {
          justifyContent: "unset"
        },
        "& button": {
          outline: "none",
          backgroundImage: theme.palette.button.info,
          color: "white",
          backgroundPosition: "100% 0",
          backgroundSize: "210% 210%",
          "&:hover": {
            transform: "translateY(-1px)",
          },
          "&:active": {
            transform: "translateY(1px)",
          },
        },
      },
    },
  },
}));

export default useStyles;
