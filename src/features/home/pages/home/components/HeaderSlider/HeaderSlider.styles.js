import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  headerSlider: {
    position: "relative",

    "& .slick-slider": {
      overflow: "hidden",
    },

    "& .slick-track": {
      height: "100%",

      "& div": {
        height: "100%",
      },
    },

    "& .slick-list": {
      maxWidth: "100%",
      height: "calc(100vw * (9/16))",
      maxHeight: "650px",
    },

    "& .slider-prev, .slider-next": {
      position: "absolute",
      top: "45%",
      transform: "translateY(-50%)",
      zIndex: "1",

      "& svg": {
        fontSize: "40px",

        "@media (min-width: 600px)": {
          fontSize: "70px",
        },
      },
    },

    "& .slider-prev": {
      left: "0",

      "@media (min-width: 600px)": {
        left: "20px",
      },
    },

    "& .slider-next": {
      right: "0",

      "@media (min-width: 600px)": {
        right: "20px",
      },
    },

    "& .slide-item": {
      position: "relative",
      backgroundColor: theme.palette.background.paper,

      "&:hover": {
        cursor: "pointer",

        "& $playButton": {
          opacity: "1",
          visibility: "visible",
        },
      },
    },
  },

  // aspect ratio
  headerSlider__img: {
    width: "100%",
    height: "100%",
    display: "block!important",
  },

  headerSlider__backgroundLinear: {
    width: "100%",
    height: "100%",
    background: "linear-gradient(0deg, rgba(0, 0, 0, .7), transparent 55%)",

    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    position: "absolute",
  },

  playButton: {
    position: "absolute",
    left: "50%",
    top: "45%",
    transform: "translate(-50%, -45%)",

    opacity: "0",
    visibility: "hidden",
    transition: "all .2s",

    "@media (max-width: 360px)": {
      opacity: "1",
      visibility: "visible",
    },

    "& .MuiSvgIcon-root": {
      fontSize: "50px",

      "@media (max-width: 360px)": {
        fontSize: "40px",
      },
    },
  },
}));

export default useStyle;
