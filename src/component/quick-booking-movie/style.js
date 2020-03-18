import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  quickBook: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    height: "80px",
    justifyContent: "space-around",
    boxShadow: "0 0 10px rgba(54, 28, 28, 0.3)",
    "& .quick-book-btn": {
      width: "calc(100%/5)",
      textAlign: "center",
      "& a": {
        transition: "none",
        background: theme.palette.warning.main,
        boxShadow: `1px 1px 8px 1px ${theme.palette.warning.main}`,
        "&:hover": {
          color: "white",
          transform: "translateY(-1px)",
        },
        "&:active": {
          transform: "none"
        },
        "&.Mui-disabled": {
          background: theme.palette.warning.main,
          boxShadow: "none",
        }
      },
    },
    "& .dropdown": {
      width: "calc(100%/5)",
      padding: "0 15px",
      "&::after": {
        content: "''",
        height: "88%",
        position: "absolute",
        right: "0",
        top: "50%",
        transform: "translateY(-50%)",
        borderRight: "1px solid rgba(233, 233, 233, .2)",
      },
      "& .dropdown-toggle": {
        paddingRight: "20px",
        overflow: "hidden",
        padding: "10px 0",
        cursor: "pointer",
        color: "white",
        position: "relative",
        "& span": {
          display: "block",
          textOverflow: "ellipsis",
          overflow: "hidden"
        },
        "&::after": {
          top: "50%",
          right: "0",
          transform: "translateY(-50%)",
          position: "absolute"
        }
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
          borderRadius: "4px"
        },
        "&::-webkit-scrollbar-thumb": {
          background: "#C3BFBF", 
          borderRadius: "4px"
        },
        "& .dropdown-item": {
          transition: "all .1s",
          color: "rgba(0, 0, 0, .8)",
          "&:hover": {
            backgroundColor: "#eee",
          }
        }
      }
    }
  }
}));

export default useStyles;
