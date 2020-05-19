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
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: "1",
          display: "block",
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
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        background: `linear-gradient(to top, ${theme.palette.background.default}, transparent 100%)`,
      },
      "& .top-main-info": {
        maxWidth: "900px",
        padding: "0 15px",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        height: "100%",
        "& .main-info-left": {
          position: "relative",
          "&:hover .play-btn": {
            opacity: "1",
            visibility: "visible",
          },
          "& .img-info": {
            paddingTop: "150%",
            borderRadius: "4px",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          },
          "& .play-btn": {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            opacity: "0",
            visibility: "hidden",
            transition: "all .2s",
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
          display: "flex",
          alignItems: "center",
          color: theme.palette.text.helper,
          fontWeight: "500",
          "& .name-info": {
            fontSize: "24px",
            marginLeft: "5px",
            color: theme.palette.text.primary,
          },
        },
        "& .main-info-right": {
          color: theme.palette.text.default,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        },
      },
    },
    "& .detail-bottom": {
      transform: "translateY(-70px)",
      padding: "0 15px",
      "@media (max-width: 600px)": {
        transform: "unset",
      },
      "& .detail-title": {
        color: theme.palette.text.primary,
        fontWeight: "500",
        width: "35%",
      },
      "& .detail-info": {
        color: theme.palette.text.helper,
        width: "40%",
        paddingLeft: "20px",
      },
      "& .detail-content": {
        color: theme.palette.text.helper,
      },
      "& .bottom-main-info": {
        maxWidth: "870px",
        margin: "0 auto",
        "& .nav": {
          alignItems: "center",
          marginBottom: "20px",
          justifyContent: "center",
          "& .nav-link": {
            backgroundColor: "unset",
            border: "unset",
            color: theme.palette.text.primary,
            fontSize: "18px",
            fontWeight: "500",
            transition: "all .2s",
            "&.active": {
              fontSize: "20px",
              color: theme.palette.warning.main,
            },
            "&:hover": {
              fontSize: "20px",
            },
            "&:focus": {
              outline: "none",
            },
          },
        },
        "& .nav-tabs": {
          borderBottom: "none",
        },
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
