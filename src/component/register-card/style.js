import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  registerCard: {
    "& .card": {
      backgroundColor: theme.palette.background.paper,
      borderRadius: "7px",
      overflow: "hidden",
      border: "none",
      "& .card-header": {
        border: "none",
        backgroundColor: "unset",
        padding: "unset",
        position: "relative",
        paddingBottom: "25px",
        "& .card-img": {
          width: "100%",
          borderRadius: "20%",
          position: "absolute",
          bottom: "-30px",
          left: "0",
          opacity: ".5"
        },
        "& .card-title": {
          textAlign: "center",
          fontSize: "60px",
          fontWeight: "bold",
          color: "white",
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
        "& label.Mui-focused": {
          color: theme.palette.warning.main
        },
        "& .form-input": {
          color: "white",
          "& fieldset": {
            borderColor: "rgba(255, 255, 255, 0.23)"
          },
          "&:hover fieldset": {
            borderColor: "rgba(255, 255, 255, 0.23)"
          },
          "& button": {
            "& svg": {
              color: "rgba(255, 255, 255, 0.23)",
              transition: "all .1s"
            }
          },
          "&.Mui-focused": {
            "& fieldset": {
              borderColor: theme.palette.warning.main
            },
            "& button svg": {
              color: "white"
            }
          },

          "& input:-webkit-autofill": {
            boxShadow: `0 0 0 20px ${theme.palette.background.paper} inset`
          }
        },
        "& .form-text-error": {
          paddingTop: "3px",
          visibility: "hidden",
          margin: "0 0 10px 0",
          minHeight: "20px",
          display: "flex",
          alignItems: "center",
          "& div": {
            fontSize: "12px"
          }
        },
        "& .error": {
          "& label.Mui-focused": {
            color: `${theme.palette.secondary.main}!important`
          },
          "& .Mui-error": {
            color: theme.palette.secondary.main
          },
          "& .form-input": {
            "&.Mui-focused": {
              "& fieldset": {
                borderColor: `${theme.palette.secondary.main}!important`
              }
            }
          },
          "& .form-text-error": {
            visibility: "visible!important"
          }
        },

        "& .register-btn": {
          backgroundImage: theme.palette.button.warning,
          backgroundSize: "210% 210%",
          backgroundPosition: "100% 0",
          width: "100%",
          borderRadius: "30px",
          padding: "15px",
          marginTop: "10px",
          outline: "none",
          "&:hover": {
            transform: "translateY(-1px)",
            boxShadow: "2px 2px 6px rgba(0, 0, 0, 0.4)"
          },
          "&:active": {
            transform: "translateY(1px)"
          }
        }
      },
      "& .card-footer": {
        border: "none",
        backgroundColor: "unset",
        paddingTop: "0",
        display: "flex",
        justifyContent: "space-between",
        "& .card-link": {
          fontWeight: "light",
          color: "#ba54f5",
          textDecoration: "underline",
          "&:hover": {
            color: theme.palette.primary.main
          }
        },
        "& .card-back": {
          color: "white",
          fontSize: "30px",
          outline: "unset"
        }
      }
    }
  },
  
}));

export default useStyles;
