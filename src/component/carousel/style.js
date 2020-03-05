import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles(theme => ({
  dots: {
    top: "-50px!important",
    "& .paging-item": {
      margin: "0 5px"
    },
    "& .paging-item.active button svg": {
      fill: `${theme.palette.secondary.main}`
    }
  },
  dotItem: {
    opacity: "1!important",
    "&:focus": {
      outline: "none"
    },
    "& svg": {
      fill: "rgba(255, 255, 255, 0.7)",
      width: "18px",
      height: "18px",
      "& circle": {
        cx: "9",
        cy: "9",
        r: "9"
      }
    }
  },
  arrows: {
    fontSize: "100px",
    color: "white",
    opacity: "0.7",
    "&:hover": {
      opacity: "1"
    }
  },
  imgs: {
    width: "100%",
    height: "100%"
  }
}));

export default useStyle;
