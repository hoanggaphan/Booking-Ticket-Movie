import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles((theme) => ({
  header: {
    width: "100%",
    zIndex: "1000",
    position: "fixed",

    backgroundColor: "rgb(23,25,64)",
    boxShadow: "0 0 30px 6px rgba(0,0,0,.3)",

    "& button:focus": {
      outline: "none",
    },

    "& .login-success": {
      position: "relative",
    },

    "& .header-login": {
      width: "150px",
      cursor: "pointer",
      justifyContent: "flex-end",

      alignItems: "center",
      textDecoration: "none",
      color: theme.palette.text.primary,

      "@media (max-width: 1080px)": {
        display: "none",
      },

      "& .header-logout": {
        right: "0",
        bottom: "0",
        padding: "8px",
        position: "absolute",

        display: "none",
        borderRadius: "3px",
        transform: "translate(-1%, 100%)",

        fontSize: "14px",
        fontWeight: "500",
        backgroundColor: theme.palette.default.main,

        "& a": {
          padding: "5px",
          display: "block",
          textDecoration: "none",
          color: theme.palette.text.primary,

          "&:hover": {
            color: theme.palette.warning.main,
          },
        },

        "& button": {
          border: "none",
          display: "block",

          margin: "unset",
          padding: "5px",
          
          fontWeight: "500",
          background: "none",
          color: theme.palette.text.primary,

          "&:hover": {
            color: theme.palette.warning.main,
          },
        },
      },

      "& .header-login-txt": {
        width: "90px",
        marginLeft: "5px",
        
        display: "flex",
        alignItems: "center",
        position: "relative",
        
        fontSize: "14px",
        fontWeight: "400",

        "&:hover .header-logout": {
          display: "block",
        },
      },

      "& .header-login-btn": {
        fontSize: "16px",
        marginLeft: "5px",
        fontWeight: "500",
      },
    },

    "& .user-m": {
      display: "none",
      padding: "0",
      paddingRight: "12px",
      
      "@media (max-width: 1080px)": {
        display: "block",
      },

      "& .dropdown-toggle": {
        display: "flex",
        border: "none",
        alignItems: "center",
        boxShadow: "none!important",
        backgroundColor: "transparent",

        "&:after": {
          content: "none",
        },

        "&:focus": {
          backgroundColor: "unset",
          boxShadow: "none",
        },
      },

      "& .dropdown-menu": {
        minWidth: "unset",
        textAlign: "center",
        left: "-8px!important",
        backgroundColor: theme.palette.default.main,

        "& .account-m": {
          width: "100%",
          display: "block",
          padding: "5px 10px",

          whiteSpace: "nowrap",
          color: theme.palette.text.primary,

          "&:hover": {
            textDecoration: "none",
            color: theme.palette.text.warning,
          },
        },

        "& .logout-m": {
          width: "100%",
          border: "none",
          padding: "5px 10px",
          whiteSpace: "nowrap",
          
          background: "none",
          color: theme.palette.text.primary,

          "&:hover": {
            color: theme.palette.text.warning,
          },
        },
      },
    },

    "& .header-hamburger-btn": {
      color: theme.palette.warning.main,
    },
  },

  wrapper: {
    maxWidth: "940px",
    height: "65px",
    margin: "0 auto",

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  mobileGrid: {
    margin: "10px 0",
    justifyContent: "space-between",
  },

  webGrid: {
    marginBottom: "10px",
  },

  headerNavLink: {
    margin: "10px",
    color: `${theme.palette.text.primary}!important`,
    "@media (max-width: 700px)": {
      margin: "4px",
    },
  },

  icon: {
    outline: "none",
  },

  linkLogin: {
    textDecoration: "none",
  },

  linkLoginM: {
    textDecoration: "none",
    cursor: "pointer",
  },
}));

export default useStyle;
