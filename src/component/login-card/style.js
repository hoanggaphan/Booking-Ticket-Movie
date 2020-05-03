import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  loginCard: {
    "& .card": {
      backgroundColor: theme.palette.background.paper,
      borderRadius: "7px",
      overflow: "hidden",
      "& .card-header": {
        border: "none",
        backgroundColor: "unset",
        padding: "unset",
        position: "relative",
        paddingBottom: "12px",
        "& .card-img": {
          width: "100%",
          borderRadius: "1%",
          position: "absolute",
          bottom: "0",
          left: "0"
        },
        "& .card-title": {
          textAlign: "center",
          fontSize: "60px",
          fontWeight: "bold",
          color: "#222a42",
          position: "relative",
          zIndex: "1",
          margin: "unset",
          marginLeft: "-6px",
          "@media (max-width: 360px)": {
            fontSize: "50px"
          }
        }
      },
      "& .card-body": {
        marginTop: "10px",
        "& .form-input": {
          marginBottom: "15px",
          '& fieldset': {
            borderColor: 'rgba(255, 255, 255, 0.23)',
          },
          '&:hover fieldset': {
            borderColor: 'rgba(255, 255, 255, 0.23)',
          },
          "& button": {
            "& svg": {
              color: "rgba(255, 255, 255, 0.23)",
              transition: "all .1s"
            }
          },
          '&.Mui-focused': {
            "& fieldset": {
              borderColor: '#e14eca',
            },
            "& button svg": {
              color: "white"
            }
          },
          "& input:-webkit-autofill": {
            boxShadow: `0 0 0 20px ${theme.palette.background.paper} inset`
          }
        },
        "& .login-btn": {
          backgroundImage: theme.palette.button.primary,
          backgroundSize: "210% 210%",
          backgroundPosition: "100% 0",
          width: "100%",
          borderRadius: "30px",
          padding: "15px",
          marginTop: "30px",
          outline: "none",
          "&:hover": {
            transform: "translateY(-1px)",
            boxShadow: "2px 2px 6px rgba(0, 0, 0, 0.4)"
          },
          "&:active": {
            transform: "translateY(1px)",
          }
        }
      },
      "& .card-footer": {
        border: "none",
        backgroundColor: "unset",
        paddingTop: "0",
        display: "flex",
        justifyContent: "space-between",
        "& a": {
        },
        "& .card-back": {
          color: "white",
          fontSize: "30px",
          outline: "unset"
        },
      },
      "& .card-link": {
        fontWeight: "light",
        color: "#ba54f5",
        marginLeft: "3px",
        textDecoration: "underline",
        "&:hover": {
          color: theme.palette.primary.main
        }
      }
    }
  },
  buttonProgress: {
    width: "33px!important",
    height: "33px!important",
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: "-18px",
    marginLeft: "-18px",
    color: theme.palette.default.main
  },
  icon: {
    color: "white", outline: "unset"
  }
}));

export default useStyles;
