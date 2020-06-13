import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",

    padding: "0px 20px 20px",
    backgroundColor: theme.palette.background.paper,
    boxShadow: "0 0 20px 0 rgba(0,0,0,.3)",

    [theme.breakpoints.up("md")]: {
      paddingTop: "20px",
    },

    "& .movie-name": {
      fontSize: "24px",
      fontWeight: "600",
    },

    "& .cinema-name": {
      fontSize: "15px",
      fontWeight: "500",
      marginBottom: "1px",
      color: theme.palette.text.default,

      "& .name-color": {
        color: theme.palette.text.warning,
        fontWeight: "600",
      },

    },

    "& .cinema-location": {
      fontSize: "13px",
      fontWeight: "500",
      marginBottom: "3px",
      color: theme.palette.text.default,
    },

    "& .date-time": {
      fontSize: "15px",
      color: theme.palette.text.default,
      fontWeight: "500",
    },

    "& .price-box": {
      margin: "30px 0",
      padding: "10px 0",
      borderTop: "1px solid rgba(255,255,255,.2)",
      borderBottom: "1px solid rgba(255,255,255,.2)",

      "& .chair-box": {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",

        "& .chair-amount": {
          fontSize: "20px",
          fontWeight: "500",
          color: theme.palette.text.warning,
        },

        "& .price": {
          fontSize: "20px",
          fontWeight: "500",
          color: theme.palette.text.success,
        },

      },
    },

    "& .payments-box": {
      textAlign: "center",

      "& h5": {
        marginBottom: "12px",
      },

      "& .payment-form": {
        width: "100%",

        "& .payment-group": {
          alignItems: "center",

          "& .payment-control": {
            width: "100%",

            marginBottom: "5px",
            display: "flex",
            alignItems: "center",

            "& label": {
              margin: "0",
              marginRight: "5px",
            },

            "& .payment-icon": {
              width: "33px",
              height: "33px",
              borderRadius: "5px",

              fontSize: "33px",
              marginRight: "12px",
            },

          },
        },

        "& .pay-btn": {
          width: "100%",
          outline: "none",

          margin: "auto",
          padding: "15px",
          marginTop: "20px",

          color: "white",
          backgroundSize: "210% 210%",
          backgroundPosition: "100% 0",
          backgroundImage: theme.palette.button.success,

          "&:hover": {
            transform: "translateY(-1px)",
          },

          "&:active": {
            transform: "translateY(1px)",
          },

        },
      },
    },
    
    "& .icon": {
      marginRight: "-20px",
      outline: "unset",
    },
  },
}));

export default useStyles;
