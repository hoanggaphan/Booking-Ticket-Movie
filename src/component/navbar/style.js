import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles(theme => ({
  header: {
    backgroundColor: "rgb(23,25,64)",
    position: "fixed",
    height: "65px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 1%",
    zIndex: "1000",
    "& button:focus": {
      outline: "none"
    },

    "& .header-navLink": {
      margin: "10px",
      color: theme.palette.text.primary,
      "@media (max-width: 700px)": {
        margin: "4px"
      }
    },

    "& .header-navLink-active": {
      color: "white",
    },
    "& .login-success": {
      position: "relative",
      
    },
    "& .header-login": {
      color: theme.palette.text.primary,
      textDecoration: "none",
      alignItems: "center",
      cursor: "pointer",
      width: "150px",
      justifyContent: "flex-end",
      "@media (max-width: 1080px)": {
        display: "none"
      },
      "& .header-logout": {
        position: "absolute",
        bottom: "0",
        right: "0",
        transform: "translate(-1%, 100%)",
        padding: "8px",
        fontSize: "14px",
        fontWeight: "500",
        borderRadius: "3px",
        backgroundColor: theme.palette.default.main,
        display: 'none',
        "& a": {
          color: theme.palette.text.primary,
          textDecoration: "none",
          display: "block",
          padding: "5px",
          "&:hover": {
            color: theme.palette.warning.main
          }
        },
        "& button": {
          background: "none",
          border: "none",
          display: "block",
          margin: "unset",
          color: theme.palette.text.primary,
          padding: "5px",
          fontWeight: "500",
          "&:hover": {
            color: theme.palette.warning.main
          }
        }
      },
      "& .header-login-txt": {
        marginLeft: "5px",
        display: "flex",
        fontSize: "14px",
        fontWeight: "400",
        alignItems: "center",
        position: "relative",
        width: "90px",
        "&:hover .header-logout": {
          display: "block"
        }
      },
      "& .header-login-btn": {
        marginLeft: "5px",
        fontSize: "16px",
        fontWeight: "500",
      }
    },
    
    "& .user-m": {
      display: "none",
      padding: "0",
      "@media (max-width: 1080px)": {
        display: "block",
      },
      "& .dropdown-toggle": {
        backgroundColor: "transparent",
        border: "none",
        display: "flex",
        alignItems: "center",
        boxShadow: "none!important",
        "&:after": {
          content: "none"
        },
        "&:focus": {
          backgroundColor: "unset",
          boxShadow: "none",
        },
        
      },
      "& .dropdown-menu": {
        backgroundColor: theme.palette.default.main,
        textAlign: "center",
        minWidth: "unset",
        "& .account-m": {
          color: theme.palette.text.primary,
          width: "100%",
          display: "block",
          whiteSpace: "nowrap",
          padding: "5px 10px",
          "&:hover": {
            textDecoration: "none",
            color: theme.palette.text.warning,
          }
        },
        "& .logout-m": {
          background: "none",
          border: "none",
          color: theme.palette.text.primary,
          width: '100%',
          whiteSpace: "nowrap",
          padding: "5px 10px",
          "&:hover": {
            color: theme.palette.text.warning,
          }
        },
      }
    },
    
    "& .header-hamburger-btn": {
      color: theme.palette.warning.main
    }
  }
}));

export default useStyle;
