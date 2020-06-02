import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  carousel: {
    "& div:focus": {
      outline: "none",
    },

    "& .carousel-indicators": {
      bottom: "10%",

      "& li": {
        width: "15px",
        height: "15px",
        margin: "0 7px",
        borderRadius: "50%",

        "@media (max-width: 600px)": {
          width: "10px",
          height: "10px",
        },
      },
    },

    "& .carousel-control-next, .carousel-control-prev": {
      "& svg": {
        fontSize: "50px",

        "@media (min-width: 1280px)": {
          fontSize: "90px",
        },
      },

      "& button": {
        outline: "none",
      },
    },
  },
  
  // aspect ratio
  carousel__img: {
    maxWidth: "100%",
    maxHeight: "650px",
    height: "calc(100vw * (9/16))",
    display: "block!important",

    "&:focus": {
      outline: "none",
    },
  },

  carousel__backgroundLinear: {
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
