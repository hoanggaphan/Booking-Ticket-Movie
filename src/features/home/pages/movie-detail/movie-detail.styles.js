import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,

    "& .detail-top": {
      position: "relative",
      overflow: "hidden",

      "& .top-background-blur": {
        position: "relative",

        "& img": {
          width: "100%",
          height: "calc(100vw * 2/5)",

          [theme.breakpoints.up("sm")]: {
            filter: "blur(15px)",
          },
        },

        "& .play-btn-visible": {
          display: "block",

          top: "50%",
          left: "50%",
          zIndex: "1",
          position: "absolute",
          transform: "translate(-50%, -50%)",

          [theme.breakpoints.up("sm")]: {
            display: "none",
          },

          "& svg": {
            fontSize: "10vw",
          },

          "&:focus": {
            outline: "none",
          },
        },

        "& .trailer-mobile": {
          position: "absolute",
          top: "0",
          left: "0",
          zIndex: "2",
        },
      },

      "& .top-background-linear": {
        width: "100%",
        height: "100%",
        background: `linear-gradient(to top, ${theme.palette.background.default}, transparent 100%)`,

        top: "0",
        left: "0",
        position: "absolute",
      },

      "& .top-main-info": {
        height: "100%",
        maxWidth: "900px",
        padding: "0 15px",

        top: "50%",
        left: "50%",
        position: "absolute",
        transform: "translate(-50%, -50%)",

        "& .main-info-left": {
          position: "relative",

          "& .img-info": {
            paddingTop: "150%",
            borderRadius: "4px",

            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          },

          "& .play-btn": {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",

            "& svg": {
              fontSize: "60px",
            },

            "&:focus": {
              outline: "none",
            },
          },
        },

        "& .main-info-center": {
          padding: "15px",
          fontWeight: "500",
          color: theme.palette.text.helper,

          display: "flex",
          alignItems: "center",

          "& .name-info": {
            fontSize: "24px",
            marginLeft: "5px",
            color: theme.palette.text.primary,
          },
        },

        "& .main-info-right": {
          color: theme.palette.text.default,

          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        },
      },
    },

    "& .detail-bottom": {
      transform: "translateY(-70px)",
      padding: "0 15px",
      margin: "0 auto",
      maxWidth: "870px",
      
      "@media (max-width: 600px)": {
        transform: "unset",
      },
    },

    "& .info-mobile": {
      color: theme.palette.text.helper,
      fontWeight: "500",
      padding: "0 15px 40px",

      "& .name-info": {
        fontSize: "24px",
        color: theme.palette.text.primary,
      },
    },
  },
}));

export default useStyles;
