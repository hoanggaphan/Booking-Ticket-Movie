import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  search: {
    width: "100%",
    transition: "width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    order: '1',
    margin: "15px 0",
    [theme.breakpoints.up('sm')]: {
      width: "25%",
      order: '2',
      margin: "unset",
    },
    "& .form-control": {
      border: "1px solid rgba(255, 255, 255, .1)",
      backgroundColor: "#1F2251",
      borderLeft: "none",
      color: theme.palette.text.default,
      transition: "all .3s",
      "&:focus": {
        outline: "none",
        borderLeft: "none",
        // border: `1px solid ${theme.palette.warning.main}`,
        backgroundColor: "#1F2251",
        boxShadow: "none", 
      },
      "&::placeholder": {
        color: theme.palette.text.secondary
      }
    },
    "& .input-group-prepend": {
      marginRight: "0px"
    },
    "& .input-group-text": {
      borderRight: "none",
      border: "1px solid rgba(255, 255, 255, .05)",
      backgroundColor: "#1F2251",
      color: theme.palette.text.default,
      transition: "all .3s",
    },
  },
  searchFocus: {
    width: "100%",
    "& .input-group-prepend .input-group-text": {
      // border: `1px solid ${theme.palette.warning.main}`,
      borderRight: "none"
    },
    [theme.breakpoints.up('sm')]: {
      width: "35%",
    }
  },
}));

export default useStyles;
