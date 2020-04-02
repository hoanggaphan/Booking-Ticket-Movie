import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  "@keyframes move-left-right": {
    "0%": {
      transform: "translateX(-10px)",
    },
    "50%": {
      transform: "translateX(10px)"
    },
    "100%": {
      transform: "translateX(-10px)"
    } 
  },
  login: {
    width: "100%",
    minHeight: "100vh",
    overflow: "hidden",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& .squares": {
      position: "absolute",
      overflow: "hidden",
      borderRadius: "20%",
      background: theme.palette.squares.primary,
      transition: "0.5s ease-out",
      "&.square1": {
        animation: `$move-left-right 4s infinite`,
        height: "300px",
        width: "300px",
        opacity: "0.5",
        left: "3%",
        top: "-21%"
      },
      "&.square2": {
        animation: `$move-left-right 6s infinite`,
        height: "400px",
        width: "400px",
        opacity: "0.4",
        right: "-5%",
        top: "-12%"
      },
      "&.square3": {
        animation: `$move-left-right 5s infinite`,
        height: "200px",
        width: "200px",
        opacity: "0.1",
        left: "-5%",
        bottom: "0"
      },
      "&.square4": {
        animation: `$move-left-right 10s infinite`,
        height: "100px",
        width: "100px",
        opacity: "0.9",
        right: "27%",
        top: "70%"
      },
      "&.square5": {
        animation: `$move-left-right 6s infinite`,
        height: "250px",
        width: "250px",
        opacity: "0.1",
        left: "32%",
        bottom: "29%"
      },
      "&.square6": {
        animation: `$move-left-right 9s infinite`,
        height: "80px",
        width: "80px",
        opacity: "0.8",
        left: "10%",
        top: "35%"
      },
      "&.square7": {
        animation: `$move-left-right 3s infinite`,
        height: "300px",
        width: "300px",
        opacity: "0.1",
        right: "-5%",
        bottom: "0%"
      },
    },
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
        "& .card-link": {
          fontWeight: "light",
          color: "#ba54f5",
          textDecoration: "underline",
          marginLeft: "3px",
          "&:hover": {
            color: theme.palette.primary.main
          }
        },
        "& .card-back": {
          color: "white",
          fontSize: "30px",
        },
      },
      "& .card-link": {
        fontWeight: "light",
        color: "#ba54f5",
        textDecoration: "underline",
        "&:hover": {
          color: theme.palette.primary.main
        }
      }
    }
  },
  
}));

export default useStyles;