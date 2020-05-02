import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  search: {
    width: "100%",
    "& .form-control": {
      border: `1px solid rgba(255, 255, 255, .2)`,
      borderLeft: "none",
      backgroundColor: "#1F2251",
      color: theme.palette.text.default,
      transition: "all .2s",
      "&:focus": {
        outline: "none",
        borderLeft: "none",
        border: `1px solid rgba(255, 255, 255, .8)`,
        backgroundColor: "#1F2251",
        boxShadow: "none", 
      },
      "&::placeholder": {
        color: theme.palette.text.secondary
      }
    },
    "& .input-group-prepend": {
      marginRight: "0px",
      border: `1px solid rgba(255, 255, 255, .2)`,
      borderRight: "none",
      borderRadius: "4px 0 0 4px",
      transition: "all .2s",
      "&.focus": {
        borderRight: "none",
        border: `1px solid rgba(255, 255, 255, .8)`,
      }
    },
    "& .input-group-text": {
      border: "none",
      backgroundColor: "#1F2251",
      color: theme.palette.text.default,
    },
  },
  result: {
    width: "100%",
    maxHeight: "400px",
    minHeight: "80px",
    position: "absolute",
    zIndex: "1000",
    backgroundColor: "rgb(255, 255, 255)",
    color: "#080808",
    overflowY: "auto",
    borderRadius: "5px!important",
    boxShadow: "0 0px 5px #333",
    marginTop: "5px",
    visibility: "hidden",
    opacity: "0",
    transition: "all .2s",
    "&::-webkit-scrollbar": {
      width: "7px",
    },
    "&::-webkit-scrollbar-track": {
      background: "#E8E3E3",
      borderRadius: "4px"
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#C3BFBF", 
      borderRadius: "4px"
    },
    "& .result-item": {
      width: "100%",
      display: "flex",
      padding: "10px",
      cursor: "pointer",
      textDecoration: "none",
      "&:hover": {
        backgroundColor: "#eee"
      },
      "& img": {
        minWidth: "90px",
        width: "90px",
        height: "90px",
        boxShadow: "0 4px 10px rgba(8, 8, 8, .3)",
        marginRight: "10px",
        borderRadius: "5px"
      },
      "& span": {
        color: "#080808"
      }
    },
  },
  show: {
    visibility: "visible",
    opacity: "1",
  },
  loading: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    minHeight: "80px",
    "& .spinner-border": {
      width: "48px",
      height: "48px",
      color: theme.palette.warning.main
    }
  }
}));

export default useStyles;
