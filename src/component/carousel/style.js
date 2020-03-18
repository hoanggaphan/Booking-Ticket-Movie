import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles(theme => ({
  carousel: {
    // position: "relative",
    "&:focus": {
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
    "& .slick-dots": {
      bottom: "15%",
      left: "50%",
      transform: "translateX(-50%)",
      width: "unset",
      "& li": {
        width: "unset",
        height: "unset"
      },
      "& li button": {
        backgroundColor: "white",
        opacity: "0.5",
        borderRadius: "50%",
        width: "1vw",
        height: "1vw"
      },
      "& li.slick-active button": {
        opacity: "1"
      },
      "& li button::before": {
        content: "none"
      },
    },
    "& .carousel-next-btn": {
      position: "absolute",
      right: "0",
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: "3",
      opacity: ".7",
      "&:hover": {
        opacity: "1"
      },
      "&:focus": {
        outline: "none"
      }
    },
    "& .carousel-prev-btn": {
      position: "absolute",
      left: "0",
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: "3",
      opacity: ".7",
      "&:hover": {
        opacity: "1"
      },
      "&:focus": {
        outline: "none"
      }
    },
    "& .carousel-icon-btn": {
      fontSize: "8vw"
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
