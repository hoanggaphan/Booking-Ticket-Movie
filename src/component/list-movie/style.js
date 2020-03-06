import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  slideItem: {
    outline: "none",
    "& div": {
      outline: 'none'
    }
  },
  tabs: {
    justifyContent: "center",
    borderBottom: "unset",
    alignItems: "center",
    "& .nav-link": {
      fontSize: "20px",
      border: "none",
      color: theme.palette.text.secondary,
      transition: "all .2s",
      "&.active": {
        backgroundColor: "unset",
        border: "none",
        color: theme.palette.text.primary,
        fontSize: "24px",
      },
      "&:hover": {
        border: "none",
        fontSize: "24px",
      },
      "&:focus": {
        outline: "none"
      }
    }
  },
  nextArrow: {
    position: "absolute",
    top: "47%",
    right: '-100px',
    transform: "translateY(-50%)",
    "&:focus": {
      outline: "none"
    }
   },
  prevArrow: {
    position: "absolute",
    top: "47%",
    left: '-100px',
    transform: "translateY(-50%)",
    "&:focus": {
      outline: "none"
    }
  },
  iconArrow: {
    fontSize: "90px"
  }
}));

export default useStyles;
