import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  quickBook: {
    height: "80px",
    borderRadius: "5px",

    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",

    boxShadow: "0 0 10px rgba(54, 28, 28, 0.3)",
    backgroundColor: theme.palette.background.paper,

    "& .dropdown": {
      padding: "0 15px",
      width: "calc(100%/5)",

      "&::after": {
        height: "88%",
        transform: "translateY(-50%)",
        borderRight: "1px solid rgba(233, 233, 233, .2)",

        content: "''",
        top: "50%",
        right: "0",
        position: "absolute",
      },

      "& .dropdown-toggle": {
        padding: "10px 0",
        paddingRight: "20px",

        cursor: "pointer",
        overflow: "hidden",
        position: "relative",
        color: theme.palette.text.default,

        "& span": {
          display: "block",
          textOverflow: "ellipsis",
          overflow: "hidden",
        },

        "&::after": {
          top: "50%",
          right: "0",
          position: "absolute",
          transform: "translateY(-50%)",
        },
      },

      "& .dropdown-menu": {
        background: "white",
        maxHeight: "300px",
        overflowY: "auto",

        "&::-webkit-scrollbar": {
          width: "7px",
        },

        "&::-webkit-scrollbar-track": {
          background: "#E8E3E3",
          borderRadius: "4px",
        },

        "&::-webkit-scrollbar-thumb": {
          background: "#C3BFBF",
          borderRadius: "4px",
        },

        "& .dropdown-item": {
          transition: "all .1s",
          color: theme.palette.text.muted,

          "&:hover": {
            backgroundColor: "#eee",
          },
        },
      },
    },
  },

  quickBook__button: {
    width: "calc(100%/5)",
    textAlign: "center",

    "& a": {
      transition: "none",
      backgroundColor: theme.palette.warning.main,
      boxShadow: `1px 1px 8px 1px ${theme.palette.warning.main}`,

      "&:hover": {
        color: "white",
        transform: "translateY(-1px)",
        backgroundColor: theme.palette.warning.main,
        boxShadow: `1px 1px 8px 1px ${theme.palette.warning.main}`,
      },

      "&:active": {
        transform: "translateY(1px)",
      },

      "&.Mui-disabled": {
        backgroundColor: theme.palette.warning.main,
        boxShadow: "none",
      },
    },
  },
}));

export default useStyles;
