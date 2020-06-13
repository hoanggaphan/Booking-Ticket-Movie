import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",

    "& .room-box": {
      padding: "15px",

      [theme.breakpoints.up('sm')]: {
        padding: "30px 50px",
      },

      "& .info-box": {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-between",

        [theme.breakpoints.up("sm")]: {
          flexDirection: "row",
        },

        "& .timer-box": {
          margin: "7px",

          [theme.breakpoints.up("sm")]: {
            margin: "unset"
          }
        },

        "& .title": {
          minWidth: "60px",
          fontSize: "15px",
          fontWeight: "500",
          marginRight: "5px",
        },

        "& .text": {
          fontSize: "15px",
          fontWeight: "500",
          maxWidth: "320px",
          color: theme.palette.text.default,

          "& .cinema-name": {
            color: theme.palette.text.warning,
            fontWeight: "600",
          },

        },

        "& .text-location": {
          fontSize: "13px",
        },
      },

      "& .tivi-box": {
        padding: "0",

        [theme.breakpoints.up("sm")]: {
          padding: "15px",
        },

        "& .tivi-component": {
          width: "100%",
          height: "20px",

          borderTopLeftRadius: "15px",
          borderTopRightRadius: "15px",
          backgroundColor: theme.palette.info.main,
        },

        "& .tivi-shadow": {
          width: "100%",
          height: "70px",

          overflow: "hidden",
          color: theme.palette.text.info,
          background: "linear-gradient(to bottom, white -400%, transparent)",
          
          display: "flex",
          position: "relative",
          alignItems: "center",
          justifyContent: "center",

          "&::after": {
            content: "''",
            width: "50px",
            height: "151%",

            top: "-27px",
            left: "-27px",
            position: "absolute",

            background: "#171940",
            transform: "rotate(15deg)",
          },

          "&::before": {
            content: "''",
            width: "50px",
            height: "151%",

            top: "-27px",
            right: "-27px",
            position: "absolute",

            background: "#171940",
            transform: "rotate(-15deg)",
          },
        },
      },
    },
    "& .pay-box": {
      top: "100px",
      right: "15px",
      position: "fixed",

      "&.open": {
        opacity: "1",
        visibility: "visible",
        transform: "scale(1)",
      },

      "@media (max-width: 960px)": {
        opacity: "0",
        visibility: "hidden",
        transition: "all .2s",
        transform: "scale(.5)",
      },

      "@media (max-width: 600px)": {
        width: "100%",
        height: "100%",

        top: "0",
        right: "0",
        position: "absolute"
      },
      
      "@media (max-width: 360px)": {
        right: "0px",
      }
    },
  },
}));

export default useStyles;
