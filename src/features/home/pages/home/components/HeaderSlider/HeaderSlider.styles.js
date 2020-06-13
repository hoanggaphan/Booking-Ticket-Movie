import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  headerSlider: {
    position: "relative",
    
    "& .slider-prev, .slider-next": {
      position: "absolute",
      top: "45%",
      zIndex: "1",

      "& svg": {
        fontSize: "40px",

        "@media (min-width: 1280px)": {
          fontSize: "70px",
        },
      },
    },

    "& .slider-prev": {
      left: "0",

      "@media (min-width: 600px)": {
        left: "20px"    
      },
    },

    "& .slider-next": {
      right: "0",

      "@media (min-width: 600px)": {
        right: "20px"    
      },
    },

    "& .slide-item": {
      position: "relative",
      backgroundColor: theme.palette.background.paper,
    },
  },
  
  // aspect ratio
  headerSlider__img: {
    maxWidth: "100%",
    maxHeight: "650px",
    height: "calc(100vw * (9/16))",
    display: "block!important",
  },

  headerSlider__backgroundLinear: {
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(20deg, rgba(0, 0, 0, .5), transparent 40%),linear-gradient(-20deg, rgba(0, 0, 0, .5), transparent 40%)",

    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    position: "absolute",
  },
}));

export default useStyle;
