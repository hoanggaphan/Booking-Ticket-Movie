import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  header: {
    width: "100%",
    zIndex: "1000",
    position: "fixed",

    backgroundColor: "rgb(23,25,64)",
    boxShadow: "0 0 30px 6px rgba(0,0,0,.3)",

    "& .MuiButton-root": {
      textTransform: "unset",
      fontWeight: "400"
    },

    "& a": {
      "&:hover": {
        textDecoration: "none",
      },
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
    },

    "& .user-m": {
      display: "none",
      padding: "0",

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

    "& a": {
      "&:hover": {
        textDecoration: "none",
      },
    },
  },

  icon: {
    outline: "none",
  },
}));

export default useStyle;
