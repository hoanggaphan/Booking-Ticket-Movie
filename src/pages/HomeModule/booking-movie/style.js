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
        justifyContent: "space-between",
        flexDirection: "column",
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
          marginRight: "5px",
          fontWeight: "500",
          fontSize: "15px",
          minWidth: "60px",
        },
        "& .text": {
          fontWeight: "500",
          color: theme.palette.text.default,
          maxWidth: "320px",
          fontSize: "15px",
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
          backgroundColor: theme.palette.info.main,
          borderTopLeftRadius: "15px",
          borderTopRightRadius: "15px",
        },
        "& .tivi-shadow": {
          width: "100%",
          height: "70px",
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(to bottom, white -400%, transparent)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: theme.palette.text.info,
          "&::after": {
            top: "-27px",
            left: "-27px",
            width: "50px",
            height: "151%",
            content: "''",
            position: "absolute",
            background: "#171940",
            transform: "rotate(15deg)",
          },
          "&::before": {
            top: "-27px",
            right: "-27px",
            width: "50px",
            height: "151%",
            content: "''",
            position: "absolute",
            background: "#171940",
            transform: "rotate(-15deg)",
          },
        },
      },
      "& .chair-list-box": {},
    },
    "& .pay-box": {
      position: "fixed",
      top: "100px",
      right: "15px",
      "&.open": {
        opacity: "1",
        visibility: "visible",
        transform: "scale(1)",
      },
      "@media (max-width: 960px)": {
        opacity: "0",
        visibility: "hidden",
        transform: "scale(.5)",
        transition: "all .2s",
      },
      "@media (max-width: 600px)": {
        right: "0",
        top: "0",
        height: "100%",
        width: "100%",
        position: "absolute"
      },
      "@media (max-width: 360px)": {
        right: "0px",
      }
    },
  },
}));

export default useStyles;
