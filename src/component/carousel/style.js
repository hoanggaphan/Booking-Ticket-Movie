import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles(theme => ({
  carousel: {
    // aspect ratio
    "& .carousel-img": {
      maxWidth: "100%",
      height: "calc(100vw * (9/16))",
      maxHeight: "650px",
      display: "block!important"
    },
    "& .slick-dots": {
      bottom: "15%",
      left: "0",
      "& li button": {
        backgroundColor: "#d8d8d8",
        borderRadius: "50%",
        width: "12px",
        height: "12px"
      },
      "& li.slick-active button": {
        backgroundColor: theme.palette.info.main
      },
      "& li button::before": {
        content: "none"
      },
    }
  }
}));

export default useStyle;
