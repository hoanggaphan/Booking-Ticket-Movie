import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles(theme => ({
  root: {
    "& div:focus": {
      outline: "none"
    },
    // aspect ratio
    "& .carousel-img": {
      maxWidth: "100%",
      height: "calc(100vw * (9/16))",
      maxHeight: "650px",
      display: "block!important",
      "&:focus": {
        outline: "none"
      }
    },
    "& .carousel-indicators": {
      bottom: "10%",
      "& li": {
        borderRadius: "50%",
        width: "15px",
        height: "15px",
        margin: "0 7px",
        '@media (max-width: 600px)': {
          width: "10px",
          height: "10px",
        }
      },
    },
    "& .carousel-control-prev": {
      "& svg": {
        fontSize: "50px",
        [theme.breakpoints.up("lg")]: {
          fontSize: "90px"
        },
      },
      "& button": {
        outline: "none"
      },
    },
    "& .carousel-control-next": {
      "& svg": {
        fontSize: "50px",
        transition: "none",
        [theme.breakpoints.up("lg")]: {
          fontSize: "90px"
        },
      },
      "& button": {
        outline: "none",
        transition: "none"
      },
    },
    "& .carousel-background-linear": {
      width: "100%",
      height: "100%",
      position: "absolute",
      background: "linear-gradient(20deg, rgba(0, 0, 0, .5), transparent 40%),linear-gradient(-20deg, rgba(0, 0, 0, .5), transparent 40%)",
      right: "0",
      left: "0",
      top: "0",
      bottom: "0"
    }
  }
}));

export default useStyle;
