import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: "0px 20px 20px",
    backgroundColor: theme.palette.background.paper,
    boxShadow: "0 0 20px 0 rgba(0,0,0,.3)",
    height: "100%",
    [theme.breakpoints.up("md")]: {
      paddingTop: "20px",
    },
    "& .movie-name": {
      fontSize: "24px",
      fontWeight: "600",
    },
    "& .cinema-name": {
      fontSize: "15px",
      color: theme.palette.text.default,
      fontWeight: "500",
      marginBottom: "1px",
      "& .name-color": {
        color: theme.palette.text.warning,
        fontWeight: "600",
      },
    },
    "& .cinema-location": {
      fontSize: "13px",
      color: theme.palette.text.default,
      fontWeight: "500",
      marginBottom: "3px",
    },
    "& .date-time": {
      fontSize: "15px",
      color: theme.palette.text.default,
      fontWeight: "500",
    },
    "& .price-box": {
      padding: "10px 0",
      margin: "30px 0",
      borderBottom: "1px solid rgba(255,255,255,.2)",
      borderTop: "1px solid rgba(255,255,255,.2)",
      "& .chair-box": {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        "& .chair-amount": {
          fontSize: "20px",
          color: theme.palette.text.warning,
          fontWeight: "500",
        },
        "& .price": {
          fontSize: "20px",
          color: theme.palette.text.success,
          fontWeight: "500",
        },
      },
    },
    "& .payments-box": {
      textAlign: "center",
      "& h5": {
        marginBottom: "12px",
      },
      "& .payment-form": {
        "& .payment-group": {
          alignItems: "center",
          "& .payment-control": {
            display: "flex",
            alignItems: "center",
            width: "100%",
            marginBottom: "5px",
            "& label": {
              margin: "0",
              marginRight: "5px",
            },
            "& .payment-icon": {
              width: "33px",
              height: "33px",
              fontSize: "33px",
              borderRadius: "5px",
              marginRight: "12px",
            },
          },
        },
        "& .pay-btn": {
          width: "100%",
          padding: "15px",
          outline: "none",
          margin: "auto",
          marginTop: "20px",
          backgroundImage: theme.palette.button.success,
          color: "white",
          backgroundPosition: "100% 0",
          backgroundSize: "210% 210%",
          "&:hover": {
            transform: "translateY(-1px)",
          },
          "&:active": {
            transform: "translateY(1px)"
          }
        },
      }
    },
  },
}));

export default useStyles;
